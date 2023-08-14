import Footer from '../componenet/Footer';
import { useEffect,useState } from 'react';
import MainNav from '../componenet/MainNav';
import Contact from '../componenet/Contact';
const Home = () => {
const [viewboxWidth,setViewboxWidth]=useState('');
const [openConatct,setOpenContact] = useState(false)
useEffect(()=>{
setViewboxWidth(window.innerWidth)
},[setViewboxWidth])
    return (
    <div className='home'>
    <header>
        <h1>Welcome to my portfolio</h1> 
 <h2>Hai, my name is Yaron Ender i'm Junior web developer. i use Javascript,React,Css(Scss),git and Firebase</h2>
    </header>
        <main>
        <h1>main section - {viewboxWidth}</h1>
        <MainNav />
        <Contact  />
        </main>
        <Footer />
    </div>
    );
};

export default Home;