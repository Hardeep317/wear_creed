const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:{type:String, required:true},
    slug:{type:String, required:true},
    img:{type:String, required:true},
    desc:{type:String, required:true},
    category:{type:String, required:true},
    size:{type:String, required:true},
    color:{type:String, required:true},
    price:{type:Number, required:true},
    availableQty:{type:Number, required:true}
},{timestamp:true})

mongoose.models = {};
const Products = mongoose.model('Product', productSchema)
export default Products;