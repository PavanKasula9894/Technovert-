import React, { useState } from 'react'
import Icontact, { dummeyList } from './Interface';
import { addContact } from '../services/services';
import { ValidatingForm } from './validations';


function Form({ getContactsList }: { getContactsList: Function }) {

  const [input, setInput] = useState("")
  const [contactList, setContactlist] = useState(dummeyList as Icontact[]);

   const [details, setDetails] = useState({

    id: 0,
    name: "",
    email: "",
    mobile: "",
    landline: "",
    website: "",
    address: "",

  });

  const hanlderInputChange = (e: any ) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({ ...prevState, [name]: value }))
   
  }

 
  const submitForm = (e:any) => {
    e.preventDefault()
  if (details.name === "" || details.email==="" || details.mobile===""||details.landline==="" || details.website===""|| details.address===""){
    alert("Enter Full Details")
    return(false)

    }
    else{
        return(getContactsList(details))
      }   // getContactsList(details)
  }

  return (
    <div className='formHead'>
      <div className='formDiv'>
        <form className='form'>
          <div className='formInputs'>Name   </div>
          <div>
            <input className='nameImput' type="text" id='nameInput' name='name' onChange={hanlderInputChange} />    </div>
          <div className='formInputs'>   Email   </div>
          <div>
            <input className='emailInput' type="email" id='emailInput' name='email' onChange={hanlderInputChange} />  </div>
          <div className='MobileLandlineDiv'>
            <div className='mobile' id='landline'>Mobile  <br />
              <input className='mobileInput' type="text" id='mobileInput' name='mobile' onChange={hanlderInputChange} /> </div>
            <div className='landline' id='landline'>  Landline <br />
              <input className='landlineInput' type="text" id='landlineInput' name='landline' onChange={hanlderInputChange} /> </div></div>
          <div className='formInputs'>Website  </div>
          <div>
            <input className='websiteInput' type="text" id='websiteInput' name='website' onChange={hanlderInputChange} />  </div>
          <div className='formInputs' >  Address   </div>
          <div>
            <textarea className='addressInput' id='addressInput' name='address' onChange={hanlderInputChange} />  </div>
          <div className='addBtns'>  <button  className='addbtn' onClick={submitForm}>Add </button> </div>
        </form>
      </div>
    </div>
  )
}

export default Form
