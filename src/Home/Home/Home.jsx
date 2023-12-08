import './Home.css'
import img1 from '../../assets/ramim-01.png'

const Home = () =>{
    return(
      <>
         <div className='full'>
            <div className='text'>
                <h1>I am Hamiduzzaman Ramim . </h1>
            </div>
            <div className='picture'>
                <img src={img1} alt="" />
            </div>
         </div>
      </>
    );
}
export default Home;