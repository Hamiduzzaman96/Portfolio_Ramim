import '../Project/Project.css'
import pic_01 from '../assets/ema-01.png'
import pic_02 from '../assets/ema-02.png'
import pic_03 from '../assets/ema-03.png'
import pic_04 from '../assets/ema-04.png'
import pic_05 from '../assets/ema-05.png'
import pic_06 from '../assets/ema-06.png'


export default function Project() {
  return (
    <div id='project'>
    
     <h1 className='project'>Project:</h1>
     <div className='empty'>
     <div>
        <a href="https://ema-zohn.vercel.app/">
            <img src={pic_01} alt="" />
            <p>Ema-Zohn</p>
        </a>
     </div>
     <div>
        <a href="https://yummy-yummy-restaurant-yap-vhj6-hamiduzzaman96.vercel.app/">
            <img src={pic_02} alt="" />
            <p>Yummy Restaurant</p>
        </a>
     </div>
     <div>
        <a href="https://github.com/Hamiduzzaman96/T-Shirt-New.git">
            <img src={pic_03} alt="" />
            <p>T-Shirt</p>
        </a>
     </div>
     <div>
        <a href="https://github.com/Hamiduzzaman96/Amazon-Clone-1.git">
            <img src={pic_04} alt="" />
            <p>Amazon-Clone</p>
        </a>
     </div>
     <div>
        <a href="https://github.com/Hamiduzzaman96/Pc-Shop-Management-1.git">
            <img src={pic_05} alt="" />
            <p>PC Shop Management</p>
        </a>
     </div>
     <div>
        <a href="https://github.com/Hamiduzzaman96/Library-Management-System.git">
            <img src={pic_06} alt="" />
            <p>Library Management System</p>
        </a>
     </div>
     </div>
    </div>
  )
}
