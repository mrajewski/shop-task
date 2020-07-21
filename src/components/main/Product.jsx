import React, {useState} from "react";
import {connect} from "react-redux"
import {cartUpdate} from "../../actions";

import Rating from "./Rating"

const Product = ({product, cartUpdate}) => {

    const showProduct = () => {
        const item = product[0]
        return (
            <div className="main__product">
                <div className="main__header">
                    <div className="main__photo">
                        <img src={item.photo} alt="product photo"/>
                    </div>
                    <div className="main__details">
                        <h2 className="main__model">{item.name}</h2>
                        <Rating rating={item.rate}/>
                        <ul className="main__traits">
                            Cechy
                            {item.info.map((el,i) => <li key={i} className="main__trait">{el}</li>)}
                        </ul>
                        <div onClick={() => cartUpdate(item)} className="main__button">Dodaj do koszyka!</div>
                    </div>
                </div>
                <div className="main__description">
                    {item.text}
                    <br/>
                    <br/>
                    {item.textSec}
                </div>
            </div>
        )
    }
    if (!product) {
        return null
    } else {
        return (
            <>
                {showProduct()}
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps.match.params.product)
    if (!ownProps.match.params.product || ownProps.match.params.product === "list") {
        return {}
    }
    return {
        product: state.products[ownProps.match.params.product].filter(el => el.id == ownProps.match.params.id),
    }

}

export default connect(mapStateToProps, {cartUpdate})(Product)

