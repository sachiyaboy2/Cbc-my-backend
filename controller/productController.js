import Product from "../Models/products.js";
import { isAddmin } from "./userController.js";

export async function createProduct(req,res){
    if(!isAddmin(req)){
        res.status(403).json({
            message: "You are not authorized to create product"
        })
    }
    
    try{
    const productData = req.body;

    const product = new Product(productData)

    await product.save();

    res.json({
        message: "Saved !",
        product: product,
    });

    }catch(err){
        console.error(err);
        res.status(500).json({
            message:"Failed create",
        }); 
    }
    
}

export async function getProducts(req, res){
    try{
        const products = await Product.find()
        res.json(products);
    }catch(err){
         console.error(err);
         res.status(500).json({
            message:"Faided to retrieve products",
         });
    }
}

export async function deletProduct(req, res) {
  if(!isAddmin(req)){
    res.status(403).json({
      message: "You are auth to delet a product"
    });
    return;
  }
  try{

    const productID = req.params.productID

    await Product.deleteOne({
      productID : productID 
    });

    res.json({
      message: "Product deleted Successfully"
    });


  }catch(err){
     console.error(err);
     res.status(500).json({
      message: "Failed deleted products"
     });
  }
  
}

export async function updateProduct(req, res) {
  if(!isAddmin(req)){
    res.status(403).json({
      message: "You are auth to Update a product"
    });
    return;
  }
  try{
    const productID = req.params.productID;
    const updateData = req.body;
    await Product.updateOne(
      {productID: productID},
      updateData
    );
    res.json({
      message: "Product successfully updated"
    });
  }catch(err){
    console.error(err);
    res.status(500).json({
      message: "Failed to Update Product"
    });
  }
}


export async function getProductID(req, res) {
  try{
    const productID = req.params.productID;

    const product = await Product.findOne(
      {
        productID : productID
      }
    )

    if(product == null){
      res.status(404).json({
        message: "Product not Found"
      });
    }else{
      res.json(product);
    }
  }catch(err){}
  
}