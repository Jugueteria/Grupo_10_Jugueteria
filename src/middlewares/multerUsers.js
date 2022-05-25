const multer = require('multer');
const path = require('path');

function image() {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../../public/images/Users'))
        },

        filename: (req, file, cb) => {

            const newFilename = 'perfil-' + Date.now() + path.extname(file.originalname);
            cb(null, newFilename);
        }

    });

    const upload = multer({storage}).single('imagenUsuario');

    return upload;


}

module.exports = image;
