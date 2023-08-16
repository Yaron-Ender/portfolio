import github from '../assets/github.png'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
const ShowApps = () => {
const [smallScreen,setSmallScreen]=useState(false)
const navigate = useNavigate();
useEffect(()=>{
if(window.innerWidth<580){
setSmallScreen(true)
}
},[])
    return (
<div className="showApps" style={{'--margin':window.innerWidth+'px'}}>
<header>
<h1> APPs</h1>
<button className='btn btn-black' onClick={()=>{
navigate('/')
}}
>Go back to home page <ArrowUturnLeftIcon width={20} /></button>
</header>
<div className="showApps__container">
<div className="showApps__container-project 
   showApps__container-project-one">
<div className="content">
<h3>Market APP </h3>
<p>
MARKET APP connect between sellers who want to offer their goods and customers who look for purchases opportunity.The App has few feather like Seller’s statistic, order tracking and more
 The APP is fully responsive
</p>
<div className="action-box">
  <a className='social-icon' href="https://github.com/Yaron-Ender/market-api" target="_blank"><img src={github}  alt='Github'/>
  </a>
<a target='_blank' href="https://ender-market.netlify.app/" className="btn"> View Project</a>
</div>
    </div>
<div className="background">
</div>
</div>
<div className="showApps__container-project showApps__container-project-two">
<div className="content">
<h3>Labarotory Tasks Managment </h3>
{!smallScreen&&
<p>
Lab Tasks Managmant is a Web App for pharma analytical
laboratories. the App gives to the manager ability to create
substances database with their tests and then to create work plan
to the employees based on the created database{" "}
</p>
}
{smallScreen&&
<p>Web App for pharma analytical laboratories. <br />
<span>The App is without responsive design ( the access to the App is available via desktop only )</span>
</p>
}
<div className="action-box">
  <a className='social-icon' href="https://github.com/Yaron-Ender/market-api" target="_blank"><img src={github}  alt='Github'/>
  </a>
{/* show the btn just if the screenSmall is false */}
{!smallScreen&&
<a href="https://ender-market.netlify.app/" className="btn"> View Project</a>
}
</div>
</div>
<div className="background">
</div>
</div>

</div>
</div>
    );
};

export default ShowApps;