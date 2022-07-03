import express from "express";
const router = express.Router();
import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/images')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage })

router.post('/', upload.single("file", (req, res) => {
    try{
        return res.status(200).json("File Upload Successfully")
    } catch (error){
        console.log(error);
    }
}))

export default router;