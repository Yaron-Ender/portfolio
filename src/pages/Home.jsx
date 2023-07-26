import Footer from '../componenet/Footer';
import { useEffect,useState } from 'react';
import MainNav from '../componenet/MainNav';

const Home = () => {
const [viewboxWidth,setViewboxWidth]=useState('');
useEffect(()=>{
setViewboxWidth(window.innerWidth)
},[setViewboxWidth])
    return (
    <div className='home' style={{"--svg-aspect-ratio":'5'}}>
        <h1>home page</h1> 
        <main>
        <h1>main section - {viewboxWidth}</h1>
        <MainNav />
        </main>
        <Footer />
    </div>
    );
};

export default Home;