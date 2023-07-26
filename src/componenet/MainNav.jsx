
const MainNav = () => {
  const handleClick = (e)=>{
document.querySelectorAll(".main-navbar__content div").forEach((el)=>{
  if(el.classList.contains('transform')){
  el.classList.remove("transform");
  }
})
e.target.parentNode.classList.add('transform')
  }
return (
  <div className="main-navbar">
    <div className="main-navbar__content">
      <div className="main-navbar__content--cyan" onClick={handleClick}>
        <span>
      
        <svg>
          <text>APPs</text>
        </svg>
          </span>
      </div>
      <div className="main-navbar__content--purple" onClick={handleClick}>
        <span></span>
      </div>
      <div className="main-navbar__content--magenta" onClick={handleClick}>
        <span></span>
      </div>
      <div className="main-navbar__content--pink" onClick={handleClick}>
        <span></span>
      </div>
      <div className="tick-container">
        <span className="text">APPs</span>
        <span className="text">Data visulation</span>
        <span className="text">Small APPs</span>
        <span className="text">Contact</span>
      </div>
    </div>
  </div>
);
};

export default MainNav;