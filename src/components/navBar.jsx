import React from "react";
import { Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu inverted size="small">
      <Menu.Item>
        <h1>
          <span style={{ color: "red" }}>S</span>M
        </h1>
      </Menu.Item>
      <Menu.Item as="a" header>
        <h2>StoreManager</h2>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
