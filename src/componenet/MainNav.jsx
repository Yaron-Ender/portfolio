import { useState } from "react";
import { redirect,useNavigate} from "react-router-dom";
const MainNav = () => {
const navigate = useNavigate()
const initObj={
app:false,
contact:false,
'small-Apps':false
}
const [clickObj,setClickObj]=useState(initObj);
const handleClick = (e)=>{
const content = e.target.dataset.action;
setClickObj((prev)=>{
for(const property in prev){
if(property=== content){
continue;
}
prev[property]=false;
}
return prev
})
setClickObj((prev)=>{
switch(content){
case 'app':
prev={...prev,'app':!prev['app']}
window.setTimeout(()=>{
navigate("/showApps");
},1000)
return prev;
case 'contact':
prev = { ...prev,'contact': !prev["contact"] };
return prev;
case 'small-Apps':
prev = { ...prev,['small-Apps']: !prev["small-Apps"] };
window.setTimeout(()=>{
navigate("/smallApps");
},1000)
return prev;
default:
return prev
}
})
}
return (
<div className="main-navbar">
{/* app */}
<div className="main-navbar__plate">
<div 
className={`${clickObj["app"] ? "clicked" : ""} square-shape app`}
onClick={handleClick}
>
<span className="span-background">
<p data-action='app' >Apps</p>
</span>
</div>
</div>
{/* contact */}
<div className="main-navbar__plate">
<div className={`${clickObj["contact"] ? "clicked" : ""} circle-shape contact`}
onClick={handleClick}
>
<span className="span-background">
<p data-action='contact'>Contact</p>
</span>   
</div>
</div>
{/* small apps */}
<div className="main-navbar__plate">
<div className={`${clickObj["small-Apps"] ? "clicked" : ""} small-apps-shape small-apps`}
onClick={handleClick}
>
<span className="span-background">
<p data-action='small-Apps'>Small Apps</p>
</span>   
</div>
</div>

</div>
);
};

export default MainNav;

{/* <div className="main-navbar__content--cyan" onClick={handleClick}>
  <span>
    <svg attr="cyan">
      <g transform="rotate(-48 49 85)">
        <text
          x="25%"
          y="50%"
          textLength="60"
          lengthAdjust="spacingAndGlyphs"
          attr="cyan"
        >
          Apps
        </text>
      </g>
    </svg>
  </span>
</div>; */}