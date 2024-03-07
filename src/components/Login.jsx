import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigation=useNavigate()


  const[number,setnumber]=useState("")
  //errr lava mate//
  const[nbrerror,setnbrerror]=useState()
  
  
  //changing handler
  function numberchangehandler(event){
  
    const numberregex=/^[0-9]*$/  
    if(event.target.value){
    if (numberregex.test(event.target.value)) {
        setnumber(event.target.value)
        setnbrerror("")
    }else{
        setnbrerror("only for numbers allowed")
    }
  }else{
    setnumber("")
    setnbrerror("Please enter number")
  }

    // if(event.target.value.length==10){
    //   setnbrerror("")
    // }else{
    //   setnbrerror("please Enter valid Number")
    // }
  // }
  //submit data//
  // function sbthandler(event){
    //   if(event.target.value.length==10){
    //   setnbrerror("")
    // }else{
    //   setnbrerror("please Enter valid Number")
    // }


//  navigation('/home')
//     if(number){
//       setnbrerror("")

//   }else{
//       setnbrerror("please Enter your Number")
//   }
  
  
  let sbtdata={
  
   Number:number
  }
  console.log(sbtdata);
  
  }
  function clickhandler(event){
    event.preventDefault()
    if(number){
            setnbrerror("")
        }else{
            setnbrerror("please Enter your Number")
        }
    // debugger;
    if(number){
          if(number.length==10){
      setnbrerror(navigation('/home'))
    }else{
      setnbrerror("please Enter valid Number")
    }
  }
    // navigation('/home')
  }
 


  return (
    <>
       <div >
                 
                 <h1 className='hed'>Login page</h1>
                 <form>
                   <div>
                     <label>NUMBER:</label>
                     <input type='text' placeholder='Enter Your Number' value={number} onChange={numberchangehandler} maxLength={10}></input>
                 </div>
                 {nbrerror&&<span style={{color:'red'}}>{nbrerror}</span>}
                 <br/>
                 <div  className='btnsbt'>
                   <button onClick={(e) => clickhandler(e)}>SUBMIT</button>
                 </div>
                 </form>
                    </div> 
    </>
  )
}

export default Login