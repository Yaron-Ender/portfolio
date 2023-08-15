import { createContext } from "react";
import { useReducer } from "react";
export const ContactContext = createContext();

const contactReducer = (state,action)=>{
switch(action.type){
case 'UPDATE_CNOTACT':
return {...state,contact:action.payload};
case 'STOP_HOME_ANIMATION':
  return{...state,stopHomeAnimation:action.payload}
default:
return state;
}
}
export function ContactProvider({ children }){
 const[state,dispatch]=useReducer(contactReducer,
  {
  contact:false
  ,stopHomeAnimation:false
})
 const updateContact = (contactState)=>{
dispatch({type:"UPDATE_CNOTACT",payload:contactState})
 }
 const updateStopHomeAnimation = (homeAnimation)=>{
 dispatch({type:'STOP_HOME_ANIMATION',payload:homeAnimation}) 
 }
return(
<ContactContext.Provider value={{...state,updateContact,updateStopHomeAnimation}}>
{children}
</ContactContext.Provider>
  )
}
