
const multer = require('multer');
const path = require('path');

function image(){

    const storage = multer.diskStorage({
        destination: (req, file ,cb) => {
           cb(null, path.join(__dirname, '../../public/images/Products') )
        },
        
        filename:(req, file, cb) => {
        
           const newFilename='product-'+ Date.now() + path.extname(file.originalname) ;
           cb(null, newFilename);
        }
        
        });
        
        const upload = multer({storage}).single('imagenProducto');
     

        return upload;

}

module.exports=image;
