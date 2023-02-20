import React from "react";
import Icontact from "./Interface";

export class ValidatingForm{
ValidateName(name:string){
    if (name == "") {
        return true;
      } else {
       return false;
      }
}
ValidateEmail(email:string){
    if (email == "") {
        return true;
      } else {
        var emailRezex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/;
        if (emailRezex.test(email)) {
            return false;
        } else {
            return true;
        }
}}
ValidateMobile(mobile:string){
    if (mobile == "" || mobile.length != 10) {
        return true
      } 
    else {
        return false
      }
}
}