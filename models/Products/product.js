'use strict';


const uuid = require('uuid/v4');
const DataModel = require('../file-data-model.js');

class Products extends DataModel {
  constructor() {
    super();
    console.log()
    this.schema = {
      category_id: {type: String, required: true},
      price: { type: Number, required: true },
      weight: {type: Number},
      quantity_in_stock: {type: Number,required: true}
    };
  }
}


  get(id){ 
    let response = this.schema;
    if (category_id){
      response = response.filter((product)=>product.category_id == category_id);
      
    }
    return response;

  }
  



 

// module.exports = Messages;
module.exports = Products;