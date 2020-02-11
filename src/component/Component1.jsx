import React, { Component } from "react";

// Component State Full
class Component1 extends Component {
  render() {
    return (
      // jika atribut component lebih dari satu harus diberi pembungkus <div></div>,
      // karena react hanya dapat merender satu atribut
      <div>
        <h1>Ini State Full Component</h1>
        <hr />
      </div>
    );
  }
}

// export disini adalah untuk menjadikan class State Full Component ini global
// dan dapat digunakan di dalam Component-component lain
export default Component1;
