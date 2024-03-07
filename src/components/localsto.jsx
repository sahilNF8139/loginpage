// import React, { useState, useEffect } from 'react';

// function Local() {
//   // Define state variables to store data
//   const [data, setData] = useState('');

//   useEffect(() => {
//     // Load data from local storage when the component mounts
//     const savedData = localStorage.getItem('myData');
//     if (savedData) {
//       setData(savedData);
//     }
//   }, []);
//   // const hei=localStorage.removeItem('myData')
//   // console.log(hei);

//   const handleChange = (event) => {
//     // Update state and local storage when input changes
//     const newData = event.target.value;
//     setData(newData);
//     localStorage.setItem('myData', newData);
//     // const sahil= localStorage.getItem('myData')
    
//   };

//   return (
//     <div>
//       <h1>Local Storage Example</h1>
//       <input 
//         type="text" 
//         value={data} 
//         onChange={handleChange} 
//         placeholder="Type something..." 
//       />
//       <p>Data stored in local storage: {data}</p>
//     </div>
//   );
// }

// export default Local;