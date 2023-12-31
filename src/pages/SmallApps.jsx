import { useRef,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDoubleLeftIcon,ChevronDoubleRightIcon,ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
const SmallApps = () => {
const navigate = useNavigate();
  const carusel = useRef()
  const [smallScreen,setSmallScreen]=useState(false)
  let angel =0
  let rounds=0
  useEffect(()=>{
  const arr = Array.from(carusel.current.children);
  arr[0].classList.add('active-card')
 if(window.innerWidth<390){
 setSmallScreen(true)
 }
  },[smallScreen])
  //remove the style from all the card
  const handleCarusel = (e)=>{
  //determine the translateZ acording to screen width
  const z = (window.innerWidth>892)?window.innerWidth/4.8:250
  const arr = Array.from(carusel.current.children);
arr.forEach((card,index)=>{
  card.style.setProperty("transform",`rotateY(${60*index}deg) translateZ(${z}px) scale(1)`);
card.classList.remove("active-card");
})
//apply style for the central card
if(rounds>0){
  arr[Math.abs(((rounds % 6)===0?0:(rounds % 6)-6))].style.setProperty(
    "transform",
    `rotateY(${Math.abs(((rounds % 6)===0?0:(rounds % 6)-6)) * 60}deg) translateZ(${z}px) scale(1.1)`
  );
  arr[Math.abs(((rounds % 6)===0?0:(rounds % 6)-6))].classList.add("active-card"); 
}
if(rounds<=0){
  arr[(Math.abs(rounds % 6))].style.setProperty(
    "transform",
    `rotateY(${(Math.abs(rounds % 6))*60}deg) translateZ(${z}px) scale(1.1)`
  );
  arr[(Math.abs(rounds % 6))].classList.add('active-card')
}
  }
return (
<div className='small-apps-component'
style={{'--margin':window.innerWidth+'px'}}>
 <header>
<h1 >Small APPs</h1>
<button className='btn btn-black' onClick={()=>{
navigate('/')
}}
>Go back to home page <ArrowUturnLeftIcon width={20} /></button>
</header>
<div className="carusel-container-prespective">
  <ChevronDoubleLeftIcon className="chevron-left"
  onClick={(e)=>{
    angel -=60
    rounds --
  carusel.current.style.setProperty('transform',`rotateY(${angel}deg) `)
  handleCarusel(e)
  }}
  />
<ChevronDoubleRightIcon   className="chevron-right"
  onClick={(e)=>{
 angel += 60;
 rounds ++
  carusel.current.style.setProperty('transform',`rotateY(${angel}deg) `)
    handleCarusel(e);
  }}
/> 
<div className="carusel-container"
ref={carusel}
>
   {/* project one */}
<div className="carusel-project-card project-one">
<div className="content">
<h4>weather app</h4>
{!smallScreen&&
<p>Weather App allow the user to find the current weather around the world. the information comes from AccuWeather API </p>
}
{smallScreen&&
<p>Weather App allow the user to find the current weather around the world. </p>
}

<button>
<span className="shadow"></span>
<a className="btn" href="https://wordlweather-app.netlify.app/"target='_blank'> View Project</a>
</button>
</div>
</div>
  {/* end project one */}
  {/* project two  */}
  <div className="carusel-project-card project-two">
<div className="content">
<h4>Wordle Game</h4>
<p>Find the hidden word in maximum six guesses</p>
<p>inspired by Shaun Pelling </p>
<span>work only on Desktop</span>
{!smallScreen&&
<button>
<span className="shadow"></span>
<a className="btn" href="https://fun-word-game.netlify.app"target='_blank'> View Project</a>
</button>
}
</div>
</div>
{/* end of project two  */}
 {/* project three  */}
  <div className="carusel-project-card project-three">
<div className="content">
<h4>Hang Mam Game</h4>
<p>Find the hidden word in maximum six guesses</p>
<p>inspired by Brad Traversy </p>
<span>work only on Desktop</span>
{!smallScreen&&
<button>
<span className="shadow"></span>
<a className="btn" href="https://hang-man-world-game.netlify.app"target='_blank'> View Project</a>
</button>
}
</div>
</div>
{/* end of project three */}
 {/* project four */}
  <div className="carusel-project-card project-four">
<div className="content">
<h4>HPLC DEVICES</h4>
{!smallScreen&&
<p>HPLC devices management App allows to the team leader to organize and manage the HPLC devices in the laboratory </p>
}
{smallScreen&&
<p>The App let the team leader to organize and manage the HPLC devices in the laboratory </p>
}
<button>
<span className="shadow"></span>
<a className="btn" href="https://hplc-devices-managment.netlify.app"target='_blank'> View Project</a>
</button>
</div>
</div>
{/* end of project four */}
 {/* project five */}
  <div className="carusel-project-card project-five">
<div className="content">
<h4>Budget App</h4>
<p>React App that allow you to create budgets and their expenses and managae them</p>
<button>
<span className="shadow"></span>
<a className="btn" href="https://yaronbudget.netlify.app"target='_blank'> View Project</a>
</button>
</div>
</div>
{/* end of project five */}
 {/* project six  */}
  <div className="carusel-project-card project-six">
<div className="content">
<h4>Exchange App</h4>
<p>Exchange calculator let you find out the rate of different currency,the data come from ExchangeRate-API </p>
<button>
<span className="shadow"></span>
<a className="btn" href="https://exxxchangecalculator.netlify.app"target='_blank'> View Project</a>
</button>
</div>
</div>
{/* end of project six */}
  </div>
</div>
 </div>
    );
};

export default SmallApps;