import React, {useState, useEffect} from "react";
import imagenFondo from '../assets/images/mandalorian.jpg';

function LastProductInDb() {
  let [product, setProduct] = useState({

})

useEffect(()=>{
    fetch("http://localhost:3001/api/products/latest")
    .then(res => res.json())
    .then(data => {
        setProduct({    
            description: data.meta.categoryCount[0].description,
            price: data.meta.categoryCount[0].price,
            title: data.meta.categoryCount[0].title,
            image: data.meta.categoryCount[0].image,
            url:"http://localhost:3001/images/products/" + data.meta.categoryCount[0].image
            
            
        })
    })
    
},[])


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Último Producto Creado</h5>
        </div>
        <p ></p>
        <h3 className="titulo">{product.title}</h3>
        <div className="card-body">
          <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={product.url} alt=" Product" />
          </div>
          <h4>Descripción:</h4>
          <p>{product.description}</p>
          <h5>Precio: $ {product.price}</h5>
          <p></p>
          
        </div>
      </div>
    </div>
  )
}

export default LastProductInDb;
