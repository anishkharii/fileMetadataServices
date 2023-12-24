const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use('/public',express.static('public'));
app.use(cors());
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
});

const storage = multer.memoryStorage();
const upload = multer({storage:storage});

app.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{
    const file = req.file;
    res.json({
        name:file.originalname,
        type:file.mimetype,
        size:file.size
    });
})


app.listen(3000,()=>{
    console.log('connected');
})