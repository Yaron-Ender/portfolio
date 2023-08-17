import Footer from '../componenet/Footer';
import { useEffect,useState,useRef, useContext } from 'react';
import MainNav from '../componenet/MainNav';
import Contact from '../componenet/Contact';
import { ContactContext } from '../context/ContactContext';
const Home = () => {
const { contact, stopHomeAnimation } =
  useContext(ContactContext);
const [insertNavbar,setInsertNavbar] = useState(false);
const [cancelHomeAnimation,setCancelHomeAnimation]=useState(false);
const home = useRef();
useEffect(()=>{
if(!stopHomeAnimation){
home.current.getAnimations()[0].finished.then(()=>{
setInsertNavbar(true)
})
}
//it become true when user click the apps or smallApps btn in the mainNavbqar component
if(stopHomeAnimation){
  setCancelHomeAnimation(true);
  home.current.style.setProperty(
    "background",
    `no-repeat radial-gradient(circle 200px at 65% 1%,hsl(50,95%,85%),hsla(209,58%,82.1%,0)),linear-gradient(hsl(209, 57%, 64%),hsl(207, 52%, 96%))`
  );
}
},[setInsertNavbar,stopHomeAnimation])

return (
    <div className={`${cancelHomeAnimation?'cancel-animation':''} home`}
    ref={home}
     >
    <header className={`${contact?'move-header-up':''}`} >
<h1>Welcome to my portfolio</h1> 
 <h2>Hi, my name is Yaron Ender I'm a freelancer Junior web developer. I use Javascript, React, Css(Scss), git and Firebase</h2>
    </header>
        <main>
        <MainNav insertNavbar={insertNavbar}
                cancelHomeAnimation={cancelHomeAnimation}
        />
        <Contact  />
        </main>
        <Footer />
    </div>
    );
};

export default Home;