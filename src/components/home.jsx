
// function Home(){
//     return(
//               <div>
//             <h1 style={{color:'red',background:'yellow'}}>OTP page</h1>
//         </div>
//     );
// }
// export default Home; 


import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import './home.css'
import Timer from './timer';
 
function App() {
  const [otp, setOtp] = useState('');

 

   function Rsethndler(){

   }

  const handleVerify = () => {
    // Send 'otp' to your server for validation
    // If validation is successful, proceed; otherwise, show an error message
    console.log('OTP is ', otp);
  };
 
  return (
    <div className="App">
      {/* <h2>OTP verification screen in React <a href="https://www.cluemediator.com" target="_blank" rel="noopener">Clue Mediator</a></h2> */}
    <h2>OTP verification screen in React</h2>
    
      <OtpInput
        value={otp} onChange={setOtp} numInputs={4}
        renderSeparator={<span> </span>}
        inputType="tel"
        containerStyle={{ display: 'unset' }}
        inputStyle={{ width: "3rem", height: "3.5rem" }}
        renderInput={(props) => <input {...props} className='otp-input' />}
      />
      <div className='btn-container'>
         <div>
         <Timer></Timer>
         {/* <button onClick={Rsethndler}>ResendOTP</button> */}
         </div> 
         <br/>
        <button onClick={handleVerify}>Verify OTP</button>
      </div>
    </div>
  );
  }
export default App;
