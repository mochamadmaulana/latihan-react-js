import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Component1 from "./component/Component1";
import Component2 from "./component/Component2";
// import CreateElements from "./component/CreateElementMethod";

function App() {
  return (
    <div className="App">
      {/* <Component1 /> */}
      {/* <Component2 /> */}
      <Component2 name='Maulana' umur='20'>
        <p>Ini adalah props children</p>
      </Component2>
      <Component2 name='Shanty' umur='21'>
        <button>Klik saya</button>
      </Component2>
      <Component2 name='Indri' umur='21' />
      {/* <CreateElements /> */}
    </div>
  );
}

export default App;
