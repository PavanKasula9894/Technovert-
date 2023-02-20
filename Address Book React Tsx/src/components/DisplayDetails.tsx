import React, { useState } from 'react'
import Icontact from './Interface'
import EditForm from './Editform'

function DisplayDetails({fullDetails ,sendingId ,getUpdatedDetails,sendingUpdatedId } : {fullDetails : any ,sendingId : Function , getUpdatedDetails : Function ,sendingUpdatedId : Function} ) {

  type Props ={
    list : Icontact[]
  }

  const [showEditForm,setShowEditForm]=useState(false);

  
  
  return (
    
      <div className="right">
        {showEditForm === true?<EditForm fullDetails={fullDetails} getUpdatedDetails={getUpdatedDetails} setShowEditForm={()=>setShowEditForm(false)} />:
        <div> 
                <div className="flex2">
                    <div className="name">
                        <h1>{fullDetails.name}</h1>
                        <div className='spaceBetween'>
                        <p> Email : {fullDetails.email} </p>
                        <p> Mobile : {fullDetails.mobile}</p>
                        <p> Landline : {fullDetails.landline}</p>
                        <p> Website : {fullDetails.website}</p>
                        <p> Address : {fullDetails.address}</p>
                        
                    </div>
                    </div>

                    <div className="EditDelete">
                        <p className='editButton' onClick={()=>{setShowEditForm(true); sendingUpdatedId(fullDetails.id) ; }}> <img src="Edit-icon.png" width={15} alt='editIcon'/>EDIT</p>
                        <p className='deleteButton'  onClick={()=>{sendingId(fullDetails.id)} } >  <img src="delete1.png" width={15} alt='editIcon' />DELETE</p>
                    </div>
                </div>
                </div> }

    </div>
  )
}

export default DisplayDetails
