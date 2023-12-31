import './Home.css'
import img1 from '../../assets/ramim-01.png'
import Skill from '../../Skills/Skill';
import Experience from '../../Experience/Experience';
import Project from '../../Project/Project';
import { TypeAnimation } from 'react-type-animation';
import Familiar from '../../Familiar/Familiar';


const Home = () => {
    return (
        <>
            <div className='full'>
                <div className='text'>
                    <p className='h4'>I'm Hamiduzzaman</p>
                    <TypeAnimation className='h'
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            ' A Front-End Developer',
                            1000,
                            ' A React Developer',
                            1000,
                            ' A Laravel Developer',
                            1000,
                            ' A UI/UX Designer',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                    <p>To build a career with an organization where my merit , and sincerity
                        will contribute the best to gain its desired goals and want to be a
                        result-orientated personality who likes a pursue corporate success
                        through a team-based management approach.</p>
                    <a href="https://drive.google.com/file/d/1tAXlugi9aOkYYwi_SEdpKj5pdpfqGSwX/view?usp=sharing">
                        <button className="btn btn-outline btn-primary mt-6 text-xl">Download CV</button></a>
                </div>
                <div className='picture'>
                    <img src={img1} alt="" />
                </div>

            </div>
            <div><Skill></Skill></div>
            <div><Familiar></Familiar></div>
            <div><Experience></Experience></div>
            <div><Project></Project></div>



        </>
    );
}
export default Home;