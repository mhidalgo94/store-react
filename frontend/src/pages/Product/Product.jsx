import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Product.scss';

function Product() {
  
  const [selectImg, setSelectImg] = useState(0)
  const [quantity, setQuantity] = useState(1)


  const images = [
    'https://s7.orientaltrading.com/is/image/OrientalTrading/toysandgames-novelty-080122-1x1?$1x1main$&$NOWA$',
    'https://s7.orientaltrading.com/is/image/OrientalTrading/Toys-ridingtoys-081822-1x1?$1x1sub$&$NOWA$',
    'https://s7.orientaltrading.com/is/image/OrientalTrading/toylp-bouncehouses-081522-1x1?$1x1main$&$NOWA$',
    'https://s7.orientaltrading.com/is/image/OrientalTrading/toylp-bouncehouses-081522-1x1?$1x1main$&$NOWA$',
    'https://s7.orientaltrading.com/is/image/OrientalTrading/toylp-bouncehouses-081522-1x1?$1x1main$&$NOWA$',
    'https://s7.orientaltrading.com/is/image/OrientalTrading/toylp-bouncehouses-081522-1x1?$1x1main$&$NOWA$',
    'https://s7.orientaltrading.com/is/image/OrientalTrading/toylp-bouncehouses-081522-1x1?$1x1main$&$NOWA$',
    'https://s7.orientaltrading.com/is/image/OrientalTrading/toylp-bouncehouses-081522-1x1?$1x1main$&$NOWA$',
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="qws" onClick={e=>setSelectImg(0)}/>
          <img src={images[1]} alt="qwe" onClick={e=>setSelectImg(1)}/>
          <img src={images[2]} alt="qew" onClick={e=>setSelectImg(2)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectImg]} alt="dasd" />
        </div>
      </div>
      <div className="right">
        <h1>Title Article</h1>
        <div className="prices">
        <span className='price'>$19</span>
        <span className='oldPrice'>$12</span>
        <span className='save'>SAVE 4%</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusantium accusamus quas doloribus quae. Distinctio porro et expedita deserunt culpa illo excepturi voluptatum aliquid maxime non? Quasi sit facilis quisquam?</p>
        <div className="quantity">
          <button disabled={Boolean(quantity <=1) } onClick={e=>setQuantity(prev=> prev===1 ? 1 : prev-1)}>-</button>
          <input type="text" name='quantity' value={quantity} />
          <button onClick={e=>setQuantity(quantity + 1)} >+</button>
        </div>

        <div className="btns">
          <button className="add">
            <AddShoppingCartIcon /> ADD TO CARD
          </button>
          <FavoriteBorderIcon />
        </div>
        <hr />
        <div className="details">
          <span>Description</span>
          <hr/>
          <span>Aditional Information</span>
          <hr />
          <span>Specifications</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product;
