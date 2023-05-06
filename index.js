import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://icon2.cleanpng.com/20180331/ezq/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487c5eb658.714031151522485372388.jpg" alt='lOGO here'/>
            </div>
            <h1 className="heading">Food Corner</h1>
            <div className="nav-list">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}
const Card=()=>{
    return(
        <div className="card">
            <div className="image">
                <img className="card-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xqwpuhgnsaf18te7zvtv"/>
            </div>
            <h2 className="title">Meghana Foods</h2>
            <h3 className="cuisines">North indian,south indian,sea food,chinese</h3>
            <div className="block">
            <h4 className="rating">4.3 &#9733;</h4>
            <h5 className="price">Rs 500 for two</h5>
            <h6 className='time'>45 MINS</h6>
            </div>
        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search here</div>
            <div className="container">
                <div className="card-container">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}
const Footer=()=>{
    return(
        <div className="footer">
            <p>Food Corner &#169;</p>
        </div>
    )
}
const App=()=>{
    return(
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
