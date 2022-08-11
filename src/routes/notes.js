const { Router } = require('express');

const router = require ('express').Router(); 
router.get('/notes' ,(req,res)=>{
    res.send('Notes from dataBase')
})



module.exports = router