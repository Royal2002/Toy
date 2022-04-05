const mongoose = require('mongoose');

let productScheme = new mongoose.Schema({
    title : String,
    newprice : String,
    oldprice : String,
    newsdelivery : String,
    olddelivery : String,
    sku : String,
    company : String,
    url : String,
    
});

module.exports = mongoose.model('Product', productScheme);