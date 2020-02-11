import React from "react";

// State Less Component bisa menggunakan Function atau arrow function ES6

// Arrow function ES6 :
const Component2 = props => {
  console.log(props);
  return (
    <div>
      <h1>Hai nama saya {props.name} dan usia saya {props.umur}</h1>
      {props.children}
    </div>
  )
};

// function literal biasa :
// function Component2(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hai nama saya {props.nama} dan usia saya {props.umur}</h1>
//       {props.children}
//     </div>
//   )
// }

// Note!
// keduanya berjalan dengan normal tanpa ada erorr
export default Component2;
