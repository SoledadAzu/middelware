const controller ={
    index:(req,res)=>{
        const nameUserAdmin = req.query.user

        res.render('admin',{nameUserAdmin})
    }
}
module.exports=controller