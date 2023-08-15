import { useState,useEffect,useContext } from "react";
import { useNavigate} from "react-router-dom";
import { ContactContext } from '../context/ContactContext'
const MainNav = ({ insertNavbar, cancelHomeAnimation }) => {
  const { contact, updateContact,updateStopHomeAnimation} = useContext(ContactContext);
  const navigate = useNavigate();
  const initObj = {
    app: false,
    contact: false,
    "small-Apps": false,
  };
  const [clickObj, setClickObj] = useState(initObj);
  //control the opening contact pannel
  useEffect(() => {
    updateContact(clickObj["contact"]);
  }, [clickObj]);
  //handleClilck function
  const handleClick = (e) => {
    const content = e.target.dataset.action;
    setClickObj((prev) => {
      for (const property in prev) {
        if (property === content) {
          continue;
        }
        prev[property] = false;
      }
      return prev;
    });
    setClickObj((prev) => {
      switch (content) {
        case "app":
          prev = { ...prev, app: !prev["app"] };
          window.setTimeout(() => {
         updateStopHomeAnimation(true)
            navigate("/showApps");
          }, 1000);
          return prev;
        case "contact":
          prev = { ...prev, contact: !prev["contact"] };
          return prev;
        case "small-Apps":
          prev = { ...prev, ["small-Apps"]: !prev["small-Apps"] };
          window.setTimeout(() => {
            navigate("/smallApps");
          }, 1000);
          return prev;
        default:
          return prev;
      }
    });
  };
  return (
    <div className={`${insertNavbar ? "insert-navbar" : ""}
    ${cancelHomeAnimation?"cancel-home-animation":''}
    main-navbar`}>
{/* app */}
<div className="main-navbar__plate">
  <div
    className={`${clickObj["app"] ? "clicked" : ""} square-shape app`}
    onClick={handleClick}
  >
    <span className="span-background">
      <p data-action="app">Apps</p>
    </span>
  </div>
      </div>
      {/* contact */}
      <div className="main-navbar__plate">
        <div
          className={`${
            clickObj["contact"] ? "clicked" : ""
          } circle-shape contact`}
          onClick={handleClick}
        >
          <span className="span-background">
            {!contact && <p data-action="contact">Contact</p>}
            {contact && <p data-action="contact">Close Contact</p>}
          </span>
        </div>
      </div>
      {/* small apps */}
      <div className="main-navbar__plate">
        <div
          className={`${
            clickObj["small-Apps"] ? "clicked" : ""
          } small-apps-shape small-apps`}
          onClick={handleClick}
        >
          <span className="span-background">
            <p data-action="small-Apps">Small Apps</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default MainNav;
