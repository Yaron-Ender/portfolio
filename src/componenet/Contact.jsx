import { ContactContext } from "../context/ContactContext";
import { useContext, useEffect,useRef,useState} from "react";
import { CheckIcon } from '@heroicons/react/24/solid'
import { ClipboardIcon } from "@heroicons/react/24/solid";
import linkedin from'../assets/linkedin.png'
import github from'../assets/github.png'
const Contact = () => {
const animationPannel = useRef();
const animationPannelListUl = useRef();
const animationPannelListplane = useRef();
const dropdwonList = useRef();
const inputElement = useRef();
const {contact}=useContext(ContactContext);
const [openTextPannel,setOpenTextPannel]=useState(false);
const [screenSize,setScreenSize]=useState('');
//THE FUNCIONALITY OF THE CHANGE FROM COPY TO COPIED IS MADE IN THE CSS WITH SCSS FUNCTION
  useEffect(()=>{
//check screen size 
setScreenSize(window.innerWidth)
console.log(screenSize)
if(contact){
animationPannel.current.style.setProperty("display", "grid");
if(screenSize<775){
//if screen small ommite dropdown pannel
dropdwonList.current.style.setProperty("display", "none");
animationPannel.current.style.setProperty("grid-template-columns", "1fr");
animationPannel.current.style.setProperty("place-items", "center");
}else{
//for bigger screen than 775px - if user resize the browser window from widow less 775 to screen size bigger than 775px the elemeents that have been omitted should be replace back
dropdwonList.current.style.setProperty("display", "grid");
animationPannel.current.style.setProperty("grid-template-columns", "1fr 1fr");
//stop the "fan" when the UL animation end
animationPannelListUl.current.getAnimations()[0].finished.then(()=>{
animationPannelListplane.current.getAnimations()[0].effect.target.children[0].getAnimations()[0].cancel()
})
}
}else{
//the svg THANKS text
setOpenTextPannel(false)
if (animationPannelListplane.current.getAnimations()[0]){
animationPannelListplane.current.getAnimations()[0].finished.then(() => {
  animationPannel.current.style.setProperty("display", "none");
});
}
}
},[contact,screenSize])

return (
<div className={`${contact ? "open-contact-pannel" : ""} section-contact`}>
<div className="section-contact__animation-pannel"
style={{display:'none'}}
ref={animationPannel}
>
<div className="section-contact__animation-pannel__dropdwon-list"
ref={dropdwonList}
>
<ul className="char-list"
ref={animationPannelListUl}
>
 <li>first <CheckIcon className="check-icon" width={35}/></li>
 <li>seconde <CheckIcon className="check-icon" width={35}/></li>
 <li>third <CheckIcon className="check-icon" width={35}/></li>
</ul>
<div className="dropdwon-plane"
ref={animationPannelListplane}
>
<div className="dropdwon-plane-inner"></div>
</div>
</div>
<div className="section-contact__animation-pannel__contact-board">
<ul className="contact-info">
<li>
<input type="text" value={'yaron.ender@gmail.com'}
disabled
ref={inputElement}
/>
<button className="clipboard-btn">
 <ClipboardIcon width={25} 
 className="clipboard-icon"
 onClick={(e)=>{
   inputElement.current.select();
   inputElement.current.setSelectionRange(0, 99999);
   navigator.clipboard.writeText(inputElement.current.value);
   e.target.classList.add('clicked')
   console.log(e.target.className)
  }}
 /> 
</button>
  <span className="copy-message">copied  !</span>
  </li>
<li className="social-icons">
<a className="github-btn"
href="https://github.com/Yaron-Ender" target="_blank"
>
<img src={github} alt="linkedin thumbnail" />
</a>
<a className="linkedin-btn"
href="https://www.linkedin.com/in/yaron-ender-web-developer" target="_blank"
>
<img src={linkedin} alt="linkedin thumbnail" />
</a>
<button type="button" className="nose"
onClick={()=>{
setOpenTextPannel((prev)=>(!prev))
}}
></button>
</li>
<li className={`${openTextPannel?"open-text-box":''} thanks`}>
<svg>
<path
fill="none"
stroke='none'
id="smile"
 d="M 10 40 Q 160 40 300 40"
/>
<text x='50%' >
<textPath href="#smile"alignmentBaseline="above" 
method="stretch"
textLength="180"
>Thanks </textPath>
  </text>
</svg>

</li>
</ul>
</div>
    </div>
  </div>
);
};

export default Contact;