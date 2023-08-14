import { createContext } from "react";
import { useReducer } from "react";
export const ContactContext = createContext();

const contactReducer = (state,action)=>{
switch(action.type){
case 'UPDATE_CNOTACT':
return {...state,contact:action.payload};
default:
return state;
}
}
export function ContactProvider({ children }){
 const[state,dispatch]=useReducer(contactReducer,{contact:false})
 const updateContact = (contactState)=>{
dispatch({type:"UPDATE_CNOTACT",payload:contactState})
 }
return(
<ContactContext.Provider value={{...state,updateContact}}>
{children}
</ContactContext.Provider>
  )
}
