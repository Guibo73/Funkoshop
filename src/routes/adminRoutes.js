const express = require('express');
const router = express.Router();
//const uploadFiles = require('../middlewares/uploadFiles');
const path = require('path');

//const validateInput = require('../middlewares/validator');
//const {body} = require('express-validator');

const adminController = require('../controllers/adminController');


/*const loginValidator = [
    body('email')
    .isEmail()
    .withMessage('Ingresar un correo válido'),
    body('password')
    .isLength({min: 6})
    .isAlphanumeric()
    .withMessage('El password debe contener datos alfanumericos y minimo 6 caracteres.')
];*/

router.get('/admin',adminController.adminView);

/*router.get('/admin/create',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminCreate.html');
    res.sendFile(filePath)
});

router.post('/admin/create',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminCreate.html');
    res.sendFile(filePath)
});

router.get('/admin/edit/:id',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminEdit.html');
    res.sendFile(filePath)
});

router.put('/admin/edit/:id',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminEdit.html');
    res.sendFile(filePath)
});

router.delete('/admin/delete/:id',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminEdit.html');
    res.sendFile(filePath)
});

router.get('/admin/login',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminLogin.html');
    res.sendFile(filePath)
});

router.post('/admin/login',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminLogin.html');
    res.sendFile(filePath)
});

router.get('/admin/register',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminRegister.html');
    res.sendFile(filePath)
});

router.post('/admin/register',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminRegister.html');
    res.sendFile(filePath)
});*/


module.exports = router;
