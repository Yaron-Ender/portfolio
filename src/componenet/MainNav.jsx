
const MainNav = () => {
  const handleClick = (e)=>{
document.querySelectorAll(".main-navbar__content div").forEach((el)=>{
  if(el.classList.contains('transform')){
  el.classList.remove("transform");
  }
})
console.log(e)
console.log(e.target.getAttribute('attr'));
if(e.target.nodeName==='svg'){

}
e.target.parentNode.classList.add('transform')
  }
return (
  <div className="main-navbar">
    <div className="main-navbar__content">
<div className="main-navbar__content--cyan" onClick={handleClick}>
<span>
<svg attr='cyan'>
<g transform="rotate(-48 49 85)">
<text x="25%" y="50%" textLength="60" lengthAdjust="spacingAndGlyphs" attr='cyan' >Apps
</text>
</g>
</svg>
</span>
</div>
<div className="main-navbar__content--purple" onClick={handleClick}>
<span>
<svg>
<g   transform="rotate(-48 60 90)">
<text x="40%" y="40%" style={{'fontSize':'25px','letterSpacing':'0.2rem'}}>Small
</text>
<text x="35%" y="60%" style={{'fontSize':'25px','letterSpacing':'0.2rem'}}> Apps
</text>
</g>
</svg>
</span>
</div>
<div className="main-navbar__content--magenta" onClick={handleClick}>
<span>
<svg>
<g   transform="rotate(-48 60 90)">
<text attr='magenta' x="20%" y="50%" style={{'fontSize':'25px','letterSpacing':'0.2rem'}}>Contact
</text>
</g>
</svg>
</span>
</div>

<div className="main-navbar__content--pink" onClick={handleClick}>
<span>
<svg>
<g   transform="rotate(-48 60 90)">
<text x="40%" y="40%" style={{'fontSize':'25px','letterSpacing':'0.2rem'}}>Data
</text>
<text x="45%" y="60%" style={{'fontSize':'25px','letterSpacing':'0.2rem'}}> Vis.
</text>
</g>
</svg>
</span>
</div>
  
    </div>
  </div>
);
};

export default MainNav;