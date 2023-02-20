import React, { useEffect, useState } from 'react'
import { Guid } from 'guid-typescript';
import { deletingContact } from '../services/services';
import { updatingContact } from '../services/services';

function DisplayContacts({ getDetails, contactsList, showFullDetails ,contactID , updatedDetails ,updatedContactId} : { getDetails: Function, contactsList: any, showFullDetails: any ,contactID:any ,updatedDetails :any ,updatedContactId : any}) {

    
    const [contacts , setContacts ] = useState ([
        {
            id : Guid.create(),
            name: "Chandermani Arora",
            email: "ChandermaniArora@gmail.com",
            mobile: "+91 9292929292",
            landline: "99911122",
            website: "www.Chandermani.com",
            address: "hn0-50-3213 , Hyderabad",
        },
        {
            id : Guid.create(),
            name: "Sashi Pagadala",
            email: "SashiPagadala@gmail.com",
            mobile: "+91 9292929292",
            landline: "99345678",
            website: "www.SashiPagadala.com",
            address: "hn0-50-3213 , Hyderabad",
        },
        {
            id : Guid.create(),
            name: "Anusha Kandula",
            email: "Anushakandula@gmail.com",
            mobile: "+91 9292929292",
            landline: "42345678",
            website: "www.AnushaKandula.com",
            address: "hn0-50-3213 , Hyderabad",
        },
        {
            id : Guid.create(),
            name: "Vijay Yalamanchili",
            email: "VijayYalamanchili@gmail.com",
            mobile: "+91 9292929292",
            landline: "99345678",
            website: "www.VijayYalamanchili.com",
            address: "hn0-50-3213 , Hyderabad",
        }

    ]);

    const  deleteContact =(id : any)=>  {
        setContacts(deletingContact(contacts , id));
    }

    useEffect(() => {
        const newContact = [...contacts, contactsList];
        setContacts((state) => {
          return newContact;
        });
     
    }, [contactsList])

    
    useEffect(() => {
        setContacts(contacts.filter((contact) => contact.id !== contactID));
        showFullDetails({})
    }, [contactID])

    useEffect(() => {
        //var res = contacts.map(obj => updatedDetails &&  [updatedDetails].find((o:any) => o.id === obj.id) || obj);
        var res = (updatingContact(contacts , updatedDetails))
        setContacts(res)
    }, [updatedDetails]);
  
    return (
        <div onClick={() => getDetails()}>
            <div className="flex">
                <div className="left">
                    <div className="contacts">
                        <h4 className='contactss'> CONTACTS</h4>
                        {contacts.map(contact =>
                            <div className="contact" onClick={()=>showFullDetails(contact)}>
                            <p className='title'>{contact.name}</p>
                            <p>{contact.email}</p>
                            <p>{contact.mobile}</p>
                        </div>)}


                    </div>
                </div>

            </div>
        </div>

    )

}

export default DisplayContacts
