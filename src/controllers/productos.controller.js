const Producto=require('../models/Producto.model');
const productosController={};

productosController.obtenerProductos=async(req,res)=>{
    const productos=await Producto.find();
    res.json(productos);
};
productosController.obtenerProducto=async(req,res)=>{
    const producto=await Producto.findOne({codigobarras:req.params.cb});
    if (producto!=null)
        res.json(producto);
    else
        res.json({status:"Not Found"});    
};
productosController.insertarProducto=async(req,res)=>{
    const productoInsertado=new Producto(req.body);
    await productoInsertado.save();
    if (productoInsertado != null){
        res.json({
        status:"Producto insertado"
    })
    };
};
productosController.actualizarProducto=async(req,res)=>{
    const resp = await Producto.findOneAndUpdate({codigobarras:req.params.cb},req.body);
    if(resp!=null)
        res.json({status:"Producto Actualizado"});
    else
        res.json({status:"Not Found"});
};
productosController.eliminarProducto=async(req,res)=>{
    const resp = await Producto.findOneAndDelete({codigobarras:req.params.cb});
    if(resp!=null)
        res.json({status:"Producto Eliminado"});
    else
        res.json({status:"Not Found"});
};
module.exports=productosController;