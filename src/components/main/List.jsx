import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import Rating from "./Rating";

const List = ({products, name}) => {
    const title = () => {
        let title;
        switch (name) {
            case "electric":
                title = "Gitary Eleketryczne"
                break
            case "bass":
                title = "Gitary Basowe"
                break
            case "acoustic":
                title = "Gitary Akustyczne"
                break
            case "ukulele":
                title = "Ukulele"
                break
            case "others":
                title = "Inne"
                break
            default:
                title = "Gitary Elektryczne"
        }

        return (
            <div className="main__list-title">{title}</div>
        )
    }
    const listElements = () => {
        return (
            <>
                {products.map(el => {
                    return (
                        <Link to={`/${name ? name : "electric"}/${el.id}`} key={el.id} className="main__element">
                                <img src={el.photo} alt="product photo"/>
                                <p className="main__price">{el.price} PLN</p>
                                <p className="main__name">{el.name}</p>
                                <Rating rating={el.rate}/>
                        </Link>
                    )
                })}
            </>
        )
    }
    return (
        <>
            {title()}
            <div className="main__list">
                {listElements()}
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        products: state.products[ownProps.match.params.product ? ownProps.match.params.product: 'electric'],
        name: ownProps.match.params.product
    }
}
export default connect(mapStateToProps)(List)