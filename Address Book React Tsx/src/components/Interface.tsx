export default interface  Icontact{
    id : any;
    name : string ;
    email : string ;
    mobile : string;
    landline : string ;
    website : string; 
    address : string ;
    
}; 

export  const dummeyList : Icontact[] = [{
    id : 1,
    name : "" ,
    email : "sai@gmail.com" ,
    mobile : "1234567890" ,
    landline : "12345678" ,
    website : "www.sai.com",
    address : "hn0-50-3213 , Hyderabad" ,
}] 