import React from "react";
import {Modal} from 'semantic-ui-react'
import {connect} from "react-redux"

const CartModal = ({open, close, products}) => {
    const showProducts = () => {

        return (
            <div className="cart">
                {products.map((el, i) => {
                    return (
                        <div className="cart__item">
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
                <button onClick={close} className="ui button">Wyczyść</button>
                <button onClick={close} className="ui button">Wyjdź</button>
            </Modal.Actions>
        </Modal>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.cart
    }
}
export default connect(mapStateToProps)(CartModal)