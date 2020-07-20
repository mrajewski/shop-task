import React from "react";
import ShoppingCart from "./ShoppingCart";

const Header = (props) => {
    return (
        <header className="header" {...props}>
            <div className="header__text">Mój super sklep</div>
            <ShoppingCart/>
        </header>
    )
}

export default Header