// 3 collections will be kept in Google Firebase: products, orders, reviews. 
// This hook will be used to pull these collections in bulk.

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase/config'
import { toast } from 'react-toastify'

const useFetchCollection = (collectionName) => {
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(false)

  const getCollection = () => {
    setIsLoading(true)
    try {
      // collectionName will be retrieved from db (Hook)
      const docRef = collection(db, collectionName)
      const q = query(docRef, orderBy("createdAt","desc"))      //from firebase/firestore

      // Where we listen to our rankings(desc) in real time   Attaches a listener for DocumentSnapshot events.
      onSnapshot(q,(snapshot)=>{
        // We hook all data via snapshot. We do the map process via docs. The place we will list and save all the documents
        const allData = snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data()
        }))
        setData(allData)
        setIsLoading(false)
      })
    }
    catch (error) {
      setIsLoading(false)
      toast.error(error.message)      
    }
  }

  return (
    <div>
      
    </div>
  )
}

export default useFetchCollection