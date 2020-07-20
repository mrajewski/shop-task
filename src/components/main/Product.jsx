import React from "react";
import {connect} from "react-redux"

const Product = ({product}) => {
    const showProduct = () => {
        const item = product[0]
        return (
            <div className="main__product">
                <p>{item.name}</p>
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
        product: state.products[ownProps.match.params.product].filter(el => el.id == ownProps.match.params.id)
    }

}

export default connect(mapStateToProps)(Product)

