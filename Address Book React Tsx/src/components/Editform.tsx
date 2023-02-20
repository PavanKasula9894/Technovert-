import React, { useState , useEffect } from 'react'
function EditForm( {fullDetails ,getUpdatedDetails,setShowEditForm} : { fullDetails :any , getUpdatedDetails : Function ,setShowEditForm : Function}) {

    const[name,setName]=useState("");

    const[email,setEmail]=useState("");

    const[mobile,setMobile]=useState("");

    const[landline,setLandline]=useState("");

    const[website,setWebsite]=useState("");

    const[address,setAddress]=useState("");

    const [details, setDetails] = useState({

        id: fullDetails.id,
        name: fullDetails.name,
        email: fullDetails.email,
        mobile: fullDetails.mobile,
        landline: fullDetails.landline,
        website: fullDetails.website,
        address: fullDetails.address,
    
      });
    
      const hanlderInputChange = (e: any) => {
        const { name, value } = e.target;
        setDetails((prevState) => ({ ...prevState, [name]: value }))
      }

      useEffect(() => {
       setName(fullDetails.name);
       setEmail(fullDetails.email);
       setMobile(fullDetails.mobile);
       setLandline(fullDetails.landline);
       setWebsite(fullDetails.website);
       setAddress(fullDetails.address)

      }, [])
      
      
      const updateDetails = ( e : any) =>{
        e.preventDefault();
        const details={
        id: fullDetails.id,
        name: name,
        email:email,
        mobile: mobile,
        landline: landline,
        website: website,
        address: address,

      }  
      getUpdatedDetails(details)
      }



  return (
    <div className='formHead'>
      <div className='formDiv'>
        <form className='form'>
          <div className='formInputs'>Name   </div>
          <div>
            <input className='nameImput' type="text" id='nameInput' name='name' value={name} onChange={(e)=>setName(e.target.value) }/>    </div>
          <div className='formInputs'>   Email   </div>
          <div>
            <input className='emailInput' type="email" id='emailInput' name='email' value={email}  onChange={(e)=>setEmail(e.target.value) } />  </div>
          <div className='MobileLandlineDiv'>
            <div className='mobile' id='landline'>Mobile  <br />
              <input className='mobileInput' type="text" id='mobileInput' name='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value) }/> </div>
            <div className='landline' id='landline'>  Landline <br />
              <input className='landlineInput' type="text" id='landlineInput' name='landline' value={landline} onChange={(e)=>setLandline(e.target.value) } /> </div></div>
          <div className='formInputs'>Website  </div>
          <div>
            <input className='websiteInput' type="text" id='websiteInput' name='website'value={website} onChange={(e)=>setWebsite(e.target.value) }/>  </div>
          <div className='formInputs' >  Address   </div>
          <div>
            <textarea className='addressInput' id='addressInput' name='address' value={address} onChange={(e)=>setAddress(e.target.value) } />  </div>
          <div className='addBtns'>  <button  className='addbtn' onClick={(e)=>{updateDetails(e) ;setShowEditForm() } }>EDIT </button> </div>
        </form>
      </div>
    </div>
  )
}

export default EditForm
