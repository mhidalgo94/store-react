import './Products.scss'
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import {useState} from 'react';

function Products() {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null)
  


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h3>Product Categories</h3>
          <div className="inputItem">
            <input type="checkbox" id="1" value="gift" />
            <label htmlFor='1' >Gift</label>
            <input type="checkbox" id="2" value="party" />
            <label htmlFor='2' >Party</label>
          </div>
        </div>
        <div className="filterItem">
          <div className="inputItem">
          <h3>Filter by Price</h3>
            <span>0</span>
            <input type="range" min={0} value={maxPrice} max={1000} onChange={(e)=> setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h3>Sort by</h3>
          <div className="inputItem">
            <input type="radio" id="asc" name="price" onChange={e=> setSort('asc')}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
          <input type="radio" id="desc" name="price" onChange={e=> setSort('desc')}/>
            <label htmlFor="desc">Price (Highes first)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>

    </div>
  )
}


export default Products;