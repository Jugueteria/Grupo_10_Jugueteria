import { useState, useEffect } from "react";

function CategoriesInDb() {

  let [categories, setCategories] = useState([{ name: "Sin Categoria" }]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products/total")
      .then(res => res.json())
      .then(data => {
        setCategories(data.meta.categoryCount)
      })

  }, [])
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Panel de Categorías
          </h5>
        </div>


        <div className="card-body">
          <div className="row">
            <div className="col-lg-12 mb-0">
              <div className="card bg-dark text-white shadow">
              <p className="title3"></p>
                { categories.map((category,i)=>
                <div>
                
                <div className="card-body" key={i}>Categoría : {category.Pcategory_name} || Total de productos: <strong>{category.count}</strong> Productos</div>
                </div>
                )
                 
                }

              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;