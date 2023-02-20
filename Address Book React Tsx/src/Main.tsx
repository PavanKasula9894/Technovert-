import React, { useState } from 'react'
import DisplayContacts from './components/DisplayContacts'
import DisplayDetails from './components/DisplayDetails'
import Form from './components/Form'


interface dataFormProps {
    getDetails: () => void
}


function Main() {

    const [active, setActive] = useState(false);

    const [showDetails, setShowDetails] = useState(false);

    const [fullDetails, setFullDetails] = useState([]);

    const [contactsList,setContactsList]= useState([]);

    const [updatedDetails,setUpdatedDetails]= useState();
    
    const [contactID, setContactID] = useState(0);

    const [updatedContactId, setUpdatedContactId] = useState();


    const showForm = () => {
        setActive(true);
        setShowDetails(false);
    }

    const getDetails: Function = () => {
        setShowDetails(true);
        setActive(false);
    }

    const getContactsList: Function = (contactlist : any) => {
        setContactsList(contactlist)
    }

    const showFullDetails : Function = (fullDetails : any) => {
        console.log(fullDetails);
        setFullDetails(fullDetails);
        
    }

    const sendingId : Function = (id : any) => {
        setContactID(id)
       
    }
    
    const sendingUpdatedId : Function = (id : any) => {
        setUpdatedContactId(id)
    }


    const getUpdatedDetails =(updatedDetails : any) =>{
        setUpdatedDetails(updatedDetails);
        
    }

    return (
        <div>
            <header>
                <h1 className='heading' > Address Book </h1>
            </header>
            <div className='navbar'>
                <div className='navbarIcons'>
                    <div className='navIcons activePage' id='homeButton'> <div className="path">HOME</div> </div>
                    <div className='navIcons' id='homeButton'>
                    <div className="path" onClick={showForm}>+ADD</div> </div>
                </div>
                <img id='blogIcon' src="blog-icon.png" alt="React Logo" />
            </div>
            <div className='displayFlex'> <DisplayContacts getDetails={getDetails}  contactsList={contactsList} showFullDetails={showFullDetails} contactID={contactID} updatedDetails={updatedDetails} updatedContactId={updatedContactId} />   {active && <Form getContactsList={getContactsList}/>} {showDetails && <DisplayDetails fullDetails={fullDetails} sendingId={sendingId} getUpdatedDetails={getUpdatedDetails} sendingUpdatedId={sendingUpdatedId} />}
            </div>
        </div>
    )
}

export default Main
