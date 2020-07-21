import React from "react";
import "../App.scss"
import Header from "./header/Header";
import Categories from "./Categories";
import {BrowserRouter as Router, Route} from "react-router-dom";

import List from "./main/List";
import Product from "./main/Product";

const App = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <Router>
                    <Categories/>
                    <div className="main__section">
                            <Route path="/" exact component={List}/>
                            <Route path="/shop-task" exact component={List}/>
                            <Route path="/list/:product" exact component={List}/>
                            <Route path="/:product/:id" exact component={Product}/>
                    </div>
                </Router>
            </main>
        </>
)
}

export default App