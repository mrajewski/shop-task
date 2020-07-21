import React, {useState} from "react";
import {connect} from "react-redux";
import {Icon} from "semantic-ui-react";
import CartModal from "../CartModal";

const ShoppingCart = ({cart}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };


    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div onClick={openModal} className="header__cart">
                <Icon name="shopping cart"/>
                <div className="header__count">{cart.length}</div>
            </div>
            <CartModal close={closeModal} open={modalIsOpen}/>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(ShoppingCart)