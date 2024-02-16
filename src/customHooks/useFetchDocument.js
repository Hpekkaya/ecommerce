// google firebase içerisinde 3 koleksiyon tutulacak: products, orders, reviews. Bu koleksiyonlara ait dökümanların bireysel bilgilerine ihtiyaç duyulduğunda bu hook kullanılacak.
import React, { useEffect, useState } from 'react'

const useFetchDocument = (collectionName, documentID) => {
  const [document, setDocument] = useState(null);

  useEffect(()=>{
    try {
      
    } catch (error) {
      
    }
  }) 
  return (
    <div>useFetchDocument</div>
  )
}

export default useFetchDocument