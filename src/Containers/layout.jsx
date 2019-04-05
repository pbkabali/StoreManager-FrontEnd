import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

export default function Layout(props) {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
