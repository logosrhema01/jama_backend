import express from 'express';

const router = express.Router()


import auth from './modules/auth'
import users from './modules/users'

router.use('/auth',auth)

router.use('/users', users)

router.get('/home',(req,res)=>{
    res.render('home');
})

export default router