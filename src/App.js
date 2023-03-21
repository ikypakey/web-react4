import React, { Component } from "react";
import Mahasiswa from "./container/Mahasiswa/Mahasiswa";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mahasiswa />
        <Footer />
      </div >
    );
  }
}
export default App;