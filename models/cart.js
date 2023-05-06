const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

const getCartData = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb( {products: [], totalPrice: 0} );
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Cart {
    static addProduct(id, productPrice) {
        getCartData((data) => {

            // handle prossess of adding product
            const productIndex = data.products.findIndex(prod => prod.id == id) 
            const selectedProd = data.products[productIndex];
            let updatedProd

            // check of product existance 
            if(selectedProd) {
                updatedProd = {...selectedProd} 
                ++updatedProd.qty;
                data.products = [...data.products]
                data.products[productIndex] = updatedProd
            }else {
                updatedProd = {id, qty:1}
                data.products = [...data.products, updatedProd]
            }

            // handle totoal price
            data.totalPrice += +productPrice;

            
            //update the cart file

            fs.writeFile(p, JSON.stringify(data), err => err ? console.log(err) : "" )

        })
    }
}   