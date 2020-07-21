import React from "react";
import {Modal} from 'semantic-ui-react'
import {connect} from "react-redux"
import {cartClear} from "../actions";

const CartModal = ({open, close, products, cartClear}) => {
    const showProducts = () => {

        return (
            <div className="cart">
                {products.map((el, i) => {
                    return (
                        <div key={i} className="cart__item">
                            <span>{i + 1}.</span>
                            <p className="cart__product">{el.name}</p>
                            <p className="cart__price">{el.price} PLN</p>
                            <img key={i} src={el.photo} alt="product thumb"/>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <Modal open={open} onClose={close}>
            <Modal.Header>Twój Koszyk</Modal.Header>
            <Modal.Content>
                {showProducts()}
            </Modal.Content>
            <Modal.Actions>
                <button onClick={cartClear} className="ui button blue">Wyczyść</button>
                <button onClick={close} className="ui button red">Wyjdź</button>
            </Modal.Actions>
        </Modal>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.cart
    }
}
export default connect(mapStateToProps, {cartClear})(CartModal)