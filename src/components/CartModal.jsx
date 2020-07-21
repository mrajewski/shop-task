import React from "react";
import {Modal} from 'semantic-ui-react'
import {connect} from "react-redux"

const CartModal = ({open, close, products}) => {
    const showProducts = () => {
        // let items = products.filter((el, i) => el.id === el[i-1].id)
        // console.log(items)
        return (
            <>
                {products.map((el, i) => {
                    return (
                        <div className="cart">
                            <p className="cart__price">{el.price} PLN</p>
                            <img key={i} src={el.photo} alt="product thumb"/>
                            <p className="cart__product">{el.name}</p>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <Modal open={open} onClose={close}>
            <Modal.Header>Twój Koszyk</Modal.Header>
            <Modal.Content>
                {showProducts()}
            </Modal.Content>
            <Modal.Actions>
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