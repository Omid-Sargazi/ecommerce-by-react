import React, { useState } from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
const Products = ({item}) => {
  const param = useParams()
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null);
  const [selectedSubCategor, setSelectedSubCategor] = useState([])
const {data, loading, error} = useFetch(`sub-categories?[filters][categories][id][$eq]=${catId}`)
console.log(data,"products")

const handleChange = (e)=>{
  const value = e.target.value;

  const isChecked = e.target.checked


  setSelectedSubCategor(isChecked? [...selectedSubCategor, value] : selectedSubCategor.filter((item)=>item !==value))
}
console.log(selectedSubCategor)

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
        { data?.map(item=>(
          <div className='inputItem' key={item.id}>
          <input type='checkbox' id={item.id} value={item.id} onChange={handleChange}/>
          <label htmlFor='1'>{item.attributes.title}</label>
         </div>
        ))}
         {/* <div className='inputItem'>
          <input id='2' value={2} type='checkbox'/>
          <label htmlFor='2'>T-Shert</label>
         </div>
         <div className='inputItem'>
          <input type='checkbox' id='3' value={3}/>
          <label htmlFor='3'>Coats</label>
         </div> */}
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
         <div className='inputItem'>
          <span>0</span>
          <input type='range' min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
         </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input type='radio' name='price' id='asc' value="asc" onChange={(e)=>setSort("asc")} />
            <label htmlFor='asc'>Price(Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input type='radio' name='price' id='desc' value="desc" onChange={(e)=>setSort("desc")} />
            <label htmlFor='desc'>Price(Highest first )</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img src='/images/5.jpg'/>
      <List catId={catId} maxPrice={maxPrice} sort={sort} subCate={selectedSubCategor}/>
      </div>
    </div>
  )
}

export default Products
