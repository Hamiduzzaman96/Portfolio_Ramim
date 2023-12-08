import './Home.css'
import img1 from '../../assets/ramim-01.png'
import Skill from '../../Skills/Skill';
import Experience from '../../Experience/Experience';


const Home = () => {
    return (
        <>
            <div className='full'>
                <div className='text'>
                    <h1 className='h'>I am Hamiduzzaman Ramim<br />A Web Developer</h1>
                    <p>To build a career with an organization where my merit , and sincerity
                        will contribute the best to gain its desired goals and want to be a
                        result-orientated personality who likes a pursue corporate success
                        through a team-based management approach.</p>
                       <a href="https://drive.google.com/file/d/1_QlvdZXlbwCuKQzsNA2ZZrpvsHSDkYtA/view?usp=sharing"><button className="btn btn-outline btn-primary mt-6">Download CV</button></a> 
                </div>
                <div className='picture'>
                    <img src={img1} alt="" />
                </div>
                
            </div>
            <div><Skill></Skill></div>
            <div><Experience></Experience></div>
           
           
           
        </>
    );
}
export default Home;