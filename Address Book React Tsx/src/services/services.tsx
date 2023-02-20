import React  from "react";
import Icontact from "../components/Interface";

export const deletingContact = (contacts : Icontact[] ,id : number) => {
 return ((contacts.filter((contact) => contact.id !== id)))
};
export const addContact = (name : string , value : string , prevState : Icontact) => {
    return(((prevState : Icontact) => ({ ...prevState, [name]: value })))
}
export const updatingContact = (contacts : Icontact[] ,updatedDetails : any  ) => {
   return (contacts.map(obj => updatedDetails &&  [updatedDetails].find((o:any) => o.id === obj.id) || obj));
}