// The page we seen all the products
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { db, storage } from '../../../firebase/config'
import Loader from '../../loader/Loader'
import styles from "./ViewProducts.module.scss"
import { Link } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { deleteObject, ref } from 'firebase/storage'
import Notiflix from 'notiflix'
import { useDispatch } from 'react-redux'
import { STORE_PRODUCTS } from '../../../redux/slice/productSlice'
import useFetchCollection from '../../../customHooks/useFetchCollection'


const ViewProducts = () => {

  // const[products, setProducts] = useState([])     //  React.useState([])
  // const[isLoading,setIsLoading] = useState([])      // React.useState([])

  // Alternatives to above two line
  const { data , isLoading } = useFetchCollection("products") 

  // to run reducer
  const dispatch = useDispatch();

  // In order to get data from DB automatically when the page open
  useEffect(()=>{
    getProducts()
  })

  // function get the products from DataBase 
  const getProducts = ()=> {
    setIsLoading(true)
    try{
      // In order to get specific products
      const productsRef = collection(db, "products" )
      // order the products selected
      const q =query(productsRef, orderBy("createdAt", "desc"))
      // Listen in real-time when the data updated (Get realtime updates with Cloud)
      onSnapshot(q, (snapshot)=>{
        // console.log(snapshot)
        // console.log(snapshot.docs[0].data)

        // In order to get all products then release from the products 1.Get Id 
        const allProducts = snapshot.docs.map((doc)=>{
          return({
          id:doc.id,
          ...doc.data()

        })})
        // List all products here
        // console.log(allProducts)
        setIsLoading(false)
        // writes all products to State
        setProducts(allProducts)
        // then writes all products to the Redux
        dispatch(STORE_PRODUCTS({products:allProducts}))
      })


    }
    catch(error){
      setIsLoading(false)
      toast.error(error.message)
    }
  }

  const confirmDelete = (id,imageURL) => {
    Notiflix.Confirm.show(
      'Delete Product!!!',
      'You are about to delete this product?',
      'Delete',
      'Cancel',
      function okCb(){ deleteProduct(id,imageURL) },
      function cancelCb(){ },
      {
        width:"320px",
        borderRadius:"3px",
        titleColor:"orangered",
        okButtonBackground:"orangered",
        cssAnimationStyle: "zoom"
      }
    )
  }

  const deleteProduct = async(id,imageURL) => {
    try {
      await deleteDoc(doc(db,"products",id))

      const storageRef = ref(storage,imageURL)
      await deleteObject(storageRef)
      
      toast.success("Product deleted successfully")
    }
    catch(error){
      toast.error(error.message)
    }
  }

  return (
    <>
      {isLoading && <Loader/>}    
      <div className={styles.table}>
         <h2>All Products</h2>
         {products.length === 0 ? (<p>No product found</p>) : (
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Image</th>
                <th>Name </th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Products listed in order */}
              {products.map((product, index)=>{
                const{id, name, price, imageURL, category} = product
                return(
                  <tr key={id}>
                    <td>{index+1}</td>
                    <td><img src={imageURL} alt={name} style={{width:"100px"}}/></td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td> {`$${price}`}</td>
                    <td>
                      <Link to={`/admin/add-product/${id}`}>
                      <FaEdit size={20} color="green"/>
                      </Link>&nbsp;
                      <FaTrashAlt size={18} color="red" onClick={()=>confirmDelete(id,imageURL)}/>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
         )

         }

      </div>
    </>
  )
}

export default ViewProducts