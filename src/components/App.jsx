import React from "react";
import "../App.scss"
import Header from "./header/Header";
import Categories from "./Categories";

const App = () => {
    return (
        <>
        <Header/>
        <main className="main">
            <Categories/>
            <div className="main__section">

            </div>
        </main>
        </>
    )
}

export default App