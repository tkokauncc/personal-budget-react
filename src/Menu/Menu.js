import React from 'react';
import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav
    role="navigation"
    aria-label="Main menu"
    itemScope
    itemType='"http://www.schema.org/SiteNavigationElement"'
    >
        <ul>
            <li><Link itemProp="url" to="/">Home</Link></li>
            <li><Link itemProp="url" to="/about">About</Link></li>
            <li><Link itemProp="url" to="/login">Login</Link></li>
            <li><Link itemProp="url" to="https://google.com">Google</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;