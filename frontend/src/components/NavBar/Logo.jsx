import {Link} from 'react-router-dom';
export default function Logo() {
  return (
    <Link to='/shop/products' className='link'>
        <img src='/logo2.png' style={{width:'100px'}} alt='logo'/>
    </Link>
  )
}
