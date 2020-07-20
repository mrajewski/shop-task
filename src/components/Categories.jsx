import React from "react";

const Categories = () => {
    return (
        <div className="main__categories categories">
            <div className="categories__title">Kategorie</div>
            <ul className="categories__list">
                <li className="categories__element">Gitary elektryczne</li>
                <li className="categories__element">Gitary basowe</li>
                <li className="categories__element">Gitary akustyczne</li>
                <li className="categories__element">Ukulele</li>
                <li className="categories__element">Inne</li>
            </ul>
        </div>
    )
}

export default Categories