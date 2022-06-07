import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter() {
  return (
    <div className="row">

      {/*<!-- Last Movie in DB -->*/}
      <LastProductInDb />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Categorie in DB -->*/}
      <CategoriesInDb />

    </div>
  )
}

export default ContentRowCenter;