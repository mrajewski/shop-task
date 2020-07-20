import React from "react";
import {connect} from "react-redux";
import {Icon} from "semantic-ui-react";

const ShoppingCart = ({cart}) => {
    return (
        <div className="header__cart">
            <Icon name="shopping cart"/>
            <div className="header__count">{cart.length}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(ShoppingCart)