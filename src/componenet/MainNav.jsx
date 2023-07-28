import { useState } from "react";
const MainNav = () => {
const initObj={
app:false,
contact:false,
smallApp:false
}
const [clickObj,setClickObj]=useState(initObj);

return (
  <div className="main-navbar">
    <div className="main-navbar__plate">
<div
className={`${clickObj["app"] ? "clicked" : ""} app`}
onClick={()=>{
setClickObj((prev)=>{
prev={...prev,'app':!prev['app']}
return prev
})
}}
>
<span>App</span>
</div>
</div>
<div className="main-navbar__plate">
<div className={`${clickObj["contact"] ? "clicked" : ""} contact`}
onClick={()=>{
setClickObj((prev)=>{
prev={...prev,'contact':!prev['contact']}
return prev
})
}}
>
        <span>Contant</span>
      </div>
    </div>
    <div className="main-navbar__plate "></div>
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