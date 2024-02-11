// The page we seen all the products
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { db } from '../../../firebase/config'

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
        const allProducts = snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data()

        }))
        // List all products here
        // console.log(allProducts)
        setProducts(allProducts)
      })


    }
    catch(error){
      setIsLoading(false)
      toast.error(error.message)
    }
  }

  return (
    <div>ViewProducts</div>
  )
}

export default ViewProducts