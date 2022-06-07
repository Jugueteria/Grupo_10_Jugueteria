import React, {useState, useEffect} from 'react';

function LastMovieInDb(){

    const [product, setProduct] = useState([])

    useEffect(() => {
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
    }, [])
    
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    </div>
                    <img src={product.url} width="400px" height="280px"></img>
                    <p>Nombre : {product.title}</p>
                    <p>Precio : {product.price}</p>
                    <p>Descripción : {product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
