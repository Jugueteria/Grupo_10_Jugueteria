import React, {useState, useEffect} from "react";
import ChartRow from './ChartRow';

let datos = [
  {
    id:'Sin datos',
    title: 'Sin datos',
    description: 'Sin datos',
    price: 'Sin datos',
    
  }
]


function Chart() {
  let [products, setProducts] = useState(datos);

    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(data =>{
            let array = data.products
            setProducts(array)
        })
        .catch(err=>console.log(err));
        
    },[])
  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                 <th>Id</th>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Id</th>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Precio</th>
              </tr>
            </tfoot>
              {products.map((row, i) => 
                 <ChartRow key={i}
                  product_id= {row.product_id}
                  title= {row.title}
                  description= {row.description}
                  price={row.price}

                  />
                )}

           
          </table>
        </div>
      </div>
    </div>

  )
}

export default Chart;