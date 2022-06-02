
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
        
        const upload = multer({
           storage:storage,
           fileFilter: (req, file, cb) => {
            const whitelist = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']   
            if (whitelist.includes(file.mimetype)){
                cb(null, true);
            } else {
                cb(null, false);
            }
        }

         }).single('imagenProducto');
     

        return upload;

}

module.exports=image;





