// admin panelindeki add product componenti
import React, { useState } from 'react'
import styles from "./AddProduct.module.scss"


const categories = [
  {id:1, name:"Laptop"},
  {id:2, name:"Electronics"},
  {id:3, name:"Fashion"},
  {id:4, name:"Phone"}
]

// 
const AddProduct = () => {

  const [product, setProduct] = useState({
    name :"",
    imageURL :"",
    price :"",
    category :"",
    brand :"",
    desc :""
  })

   // Formun içindeki Dosyaları anlık olarak alıp UseState içindeki değerlere kaydededen
   //  Bu state alıp veri tabanına kaydedeceğiz
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {

  }

  return (
    <div className={styles.product}>
      <h2>Add New Product</h2>
      <Card cardClass={styles.card}>
        <form>
          <label>Product Name:</label>
          <input 
            type='text'
            placeholder='Product Name'
            required
            name='name'
            value={product.name}
            onChange={(e)=>handleInputChange(e)}            
          />          
          <label>Product Image:</label>
          <Card></Card>
        </form>

      </Card>
    </div>
  )
}

export default AddProduct