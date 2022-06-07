import React from 'react';
import PropTypes from 'prop-types';

function SmallCard( {title, color, cuantity, icon}) {

  if(icon != null){
     icon = <i className={`fas ${icon} fa-2x text-gray-300`}></i>
  }else{
      icon = "";
  }
  return (
      <div className="col-md-4 mb-4">
          <div className={`card border-left-${color} shadow h-100 py-2`}>
              <div className="card-body">
                  <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                          <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>
                              {title}
            </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {cuantity}
                          </div>
                      </div>
                      <div className="col-auto">
                          {icon}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary","success","warning"]).isRequired,
  cuantity: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]).isRequired,
  icon: PropTypes.string
}
SmallCard.defaultProps = {
  title: "Sin texto",
  color: "primary",
  cuantity: "0",
  icon: null
}

export default SmallCard;