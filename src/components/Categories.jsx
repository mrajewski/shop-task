import React from "react";
import { Link } from "react-router-dom"

const Categories = () => {
    return (
        <div className="main__categories categories">
            <div className="categories__title">Kategorie</div>
            <ul className="categories__list">
                <Link to="/list/electric">
                    <li className="categories__element">Gitary elektryczne</li>
                </Link>
                <Link to="/list/bass">
                    <li className="categories__element">Gitary basowe</li>
                </Link>
                <Link to="/list/acoustic">
                    <li className="categories__element">Gitary akustyczne</li>
                </Link>
                <Link to="/list/ukulele">
                    <li className="categories__element">Ukulele</li>
                </Link>
                <Link to="/list/others">
                    <li className="categories__element">Inne</li>
                </Link>
            </ul>
        </div>
    )
}

export default Categories