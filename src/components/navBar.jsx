import React from "react";
import { Menu, Button } from "semantic-ui-react";

const NavBar = () => {
  const logout = () => {
    localStorage.clear();
  };
  return (
    <Menu inverted size="tiny">
      <Menu.Item href="/">
        <h1>
          <span style={{ color: "red" }}>S</span>M
        </h1>
      </Menu.Item>
      <Menu.Item href="/" header>
        <h2>StoreManager</h2>
      </Menu.Item>
      <Menu.Item position="right">
        <Button inverted href="/" onClick={logout}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
