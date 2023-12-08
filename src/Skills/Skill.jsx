import '../Skills/Skill.css'
import img1 from '../assets/js.png'
import img2 from '../assets/react.png'
import img3 from '../assets/html.png'
import img4 from '../assets/css-3.png'
import img5 from '../assets/letter-c.png'
import img6 from '../assets/c++.png'
import img7 from '../assets/java.png'
import img8 from '../assets/laravel.png'
import img9 from '../assets/php.png'
import img10 from '../assets/github-sign.png'
import img11 from '../assets/mysql.png'
import img12 from '../assets/nodejs.png'


export default function Skill() {
    return (
        <>
            <div className='high'>
                <h1 className='h1'>Skill Highlights:</h1>
            </div>
            <div className='skill'>
                <div><img src={img1} alt=""/>
                <p>Javascript</p></div>
                <div><img src={img2} alt=""/>
                <p>ReactJS</p></div>
                <div><img src={img3} alt=""/>
                <p>Html</p></div>
                <div><img src={img4} alt=""/>
                <p>Css</p></div>
                <div><img src={img5} alt=""/>
                <p>C</p></div>
                <div><img src={img6} alt=""/>
                <p>C++</p></div>
                <div><img src={img7} alt=""/>
                <p>Java</p></div>
                <div><img src={img8} alt=""/>
                <p>Laravel</p></div>
                <div><img src={img9} alt=""/>
                <p>Php</p></div>
                <div><img src={img10} alt=""/>
                <p>Github</p></div>
                <div><img src={img11} alt=""/>
                <p>MySQL</p></div>
                <div><img src={img12} alt=""/>
                <p>NodeJS</p></div>
                
                
            </div>

        </>
    )
}
