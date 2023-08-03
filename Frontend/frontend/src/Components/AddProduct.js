import React from 'react'

const AddProduct=()=>{
    const[name,setName]=React.useState('');
    const[price,setPrice]=React.useState('');
    const[category,setCategory]=React.useState('');
    const[company,setCompany]=React.useState('');
    const[error,setError]=React.useState(false);
    const addProduct= async()=>{
        console.warn(name);
        if(!name || ! price || !category || !company){
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type" : "application/json"
            }
        });
        result= await result.json();
        console.warn(result);
       
    }
    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type ="text" className='inputBox' placeholder='Enter product name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            {error &&  !name && <span className='invalid-input'> Enter valid name</span>}
            <input type="text" className='inputBox' placeholder='Enter Product Price' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            {error &&  !price && <span className='invalid-input'> Enter valid price</span>}
            <input type ="text"className='inputBox'  placeholder='Enter product Category' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            {error &&  !category && <span className='invalid-input'> Enter valid category</span>}
            <input type ="text" className='inputBox' placeholder='Enter product Company' value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
            {error &&  !company && <span className='invalid-input'> Enter valid company</span>}
            
            <button type='button' onClick={addProduct } className='signButton' >Add Product</button>
        </div>
    )
}
export default AddProduct