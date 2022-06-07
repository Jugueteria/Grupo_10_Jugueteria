import React from 'react';
import PropTypes from "prop-types";


function ChartRow({product_id,title, description, price}) {
  return (
    <tbody>
            <tr>
                <td>{product_id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{price}</td>
               
            </tr>
        </tbody>
  )
}

ChartRow.propTypes ={
  id:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

}

ChartRow.defaultProps = {
  id:"Sin Id",
  title: "Sin nombre",
  description: "Sin descripción",
  price: "",
  
}


export default ChartRow;