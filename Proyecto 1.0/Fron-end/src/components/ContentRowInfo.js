import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';


function ContentRowInfo() {

  let [products, setProducts] = useState("No dispone");

  let datos = [
    {
      title: 'Total de productos',
      color: 'primary',
      cuantity: products.totalProductos,
      icon: 'fa-boxes'
    },

    {
      title: ' Total de usuarios',
      color: 'success',
      cuantity:  products.totalUsuarios,
      icon: 'fa-user-check'
    },

    {
      title: 'Total de categorías',
      color: 'warning',
      cuantity: products.totalCategories,
      icon: 'fa-award'
    }
  ]
  useEffect(() => {
    fetch("http://localhost:3001/api/total")
    .then(resultado => resultado.json())
    .then(dataProduct => {
        setProducts(dataProduct.meta)
    })
  }, [])


  return (


    <div className="row">

      {datos.map((dato, i) => 

       <SmallCard key={i}
       title={dato.title} 
       color={dato.color}
       cuantity={dato.cuantity}
       icon={dato.icon}
       
       
       />

      )}

    </div>
  )

}

export default ContentRowInfo;