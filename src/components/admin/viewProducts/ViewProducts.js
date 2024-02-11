// The page we seen all the products
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { db } from '../../../firebase/config'
import Loader from '../../loader/Loader'
import styles from "./ViewProducts.module.scss"


const ViewProducts = () => {

  const[products, setProducts] = useState([])     // React.useState([]) 
  const[isLoading,setIsLoading] = useState([])     // React.useState([]) 

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
        setProducts(allProducts)
      })


    }
    catch(error){
      setIsLoading(false)
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
          </table>
         )

         }

      </div>
    </>
  )
}

export default ViewProducts