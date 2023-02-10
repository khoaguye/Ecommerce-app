import React from 'react'
import {useState, useEffect} from 'react'
import { Slider } from 'react-semantic-ui-range'
// import slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
import "./Product.css"; 
// const { createSliderWithTooltip } = slider;
// const Range = createSliderWithTooltip(slider.Range);
function Product() {
    const [product, setProduct] = useState([]);
    const [data, setData] = useState([]);
    const [price, setPrice]= useState(10);
    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProduct(data);
        setData(data);
        setPrice(data);
    }
    
    // function filter for different category of the list
    const filterProduct = (cat) =>{
        const updatedList = data.filter(products => products.category === cat);
        setProduct(updatedList);
    }

    // const updatedRange = (value) =>{
    //     const updatedPrice = data.filter(products => products.price >= value[0] && products.price <= value[1]);
    //     setPrice(updatedPrice);
    // }
  return (
    <div className="container">
    <div className ="row">
        <div className="col-lg-3 col-md-3 mt-3">
        <h3>CATEGORIES</h3>
            <div className="Category mt-5">
                <h6 className= "category-text font-light mt-5" onClick ={()=> filterProduct("electronics")}> Electronics</h6> 
                <h6 className= "category-text font-light mt-4" onClick ={()=> filterProduct("jewelery")}> Jeweleries</h6> 
                <h6 className= "category-text font-light mt-4" onClick ={()=> filterProduct("men's clothing")} > Men's Clothing</h6> 
                <h6 className= "category-text font-light mt-4" onClick ={()=> filterProduct("women's clothing")}> Wommen's Clothing </h6> 
                <h6 className= "category-text font-light mt-4" onClick ={()=> setProduct(data)}> All </h6> 

              </div>
         <h3 className= "Price mt-3"> Prices</h3>
                <Slider
              
                    color= "black"
                    // marks={{
                    //     1: `$1`,
                    //     10: `$160`
                    // }}
                    settings={{
                        start: [10, 100],
                        min: 1,
                        max: 10,
                        step: 1,
                        onChange: (value) => setPrice(value),

                   
                    // values={price}
                 
                   
                }}
                />

                <p className="mt-2">Prices from $0 - $160</p>
        </div>
       
        <div className= " col-lg-9">
            <div className=" row">
               {product.map(item => {
                    return (
                        <div className=" col-lg-4 col-md-4"> 
                        <div className= "card-product" key={item.id}>
                             <img className ="product-img" src={item.image} alt=""/>
                            <h5 > {item.title}</h5>
                             <p>${item.price}</p>
                            <button className="btn btn-primary">Add to cart</button>
                        </div>
                         </div>
                )
            })}
            </div>
         </div>
    
     </div> 
     </div>
  )
}

export default Product