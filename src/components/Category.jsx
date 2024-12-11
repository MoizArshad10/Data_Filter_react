import React, { useState } from 'react'
import Nav from './Nav'
import AllData from './Data'
function Category() {
    let [data, setData] = useState(AllData)
    let [inputVal ,setInputVal] = useState()
    const selectItem = (e) =>{
        console.log(e.target.value);
        setInputVal(e.target.value);
    }

    if(inputVal == "Product A to Z"){
        data.sort((a,b)=>{
            let nameA = a.name;
            let nameB = b.name;

            if(nameA < nameB){
                console.log(nameA);
                console.log(nameB);
                return -1;
                
            }
        })
    }

    if(inputVal == "Product Z to A"){
        data.sort((a,b)=>{
            let nameA = a.name;
            let nameB = b.name;

            if(nameA > nameB){
                console.log(nameA);
                console.log(nameB);
                return -1;
                
            }
        })
    }

    if(inputVal == "Price High to Low"){
        data.sort((a,b)=>{
            return b.price - a.price
        })
    }
    if(inputVal == "Price Low to High"){
        data.sort((a,b)=>{
            return a.price - b.price
        })
    }
  return (
    <>
        <div className="container">
        <Nav/>
            <div className="category">
                <div>
                <label htmlFor="">Category :</label>
                <select name="" onChange={selectItem}  id="">
                    <option value="Product A to Z">Product A to Z</option>
                    <option value="Product Z to A">Product Z to A</option>
                    <option value="Price High to Low">Price High to Low</option>
                    <option value="Price Low to High">Price Low to High</option>
                </select>
                </div>
            </div>

            <div className="product">
                {
                    data.map((currValue , index)=>{
                        return(
                            <div className="card" key={index}>
                                <img src={currValue.img} alt="" />
                               <div className="text">
                               <p>Name: {currValue.name}</p>
                               <p>Rs: {currValue.price}</p>
                               <p>Description: {currValue.desc}</p>
                               <br />
                               <button >{currValue.button}</button>
                               </div>
                            </div>
                        )
                    })
                }
            </div>
    
        </div>
    </>
  )
}

export default Category