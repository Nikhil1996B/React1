import React,{Component} from 'react'

export default({data,favourites})=>{
  const namesList= favourites.map(id => {
   const {name, sex}=  data[id]
   return(
    <li key={id} className={sex}>{name}</li>
  ) 
  
})
       return(
           <div className="favourites">
               <p>Type name here to shortlist</p>
               <ul>
                   {namesList}
               </ul>
           </div>
       )
   } 

