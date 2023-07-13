const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/admin',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/admin.html');
    res.sendFile(filePath)
});

router.get('/admin/register',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminRegister.html');
    res.sendFile(filePath)
});

router.get('/admin/login',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminLogin.html');
    res.sendFile(filePath)
});

router.get('/admin/edit',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminEdit.html');
    res.sendFile(filePath)
});

router.get('/admin/create',(req,res)=>{
    const filePath = path.join(__dirname,'../../public/pages/adminCreate.html');
    res.sendFile(filePath)
});

module.exports = router;
