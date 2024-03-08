import "./Navbar.css";
function Navbar (){
return <div className="nav">
    <div className="logo">
     <h2>GeekFoods</h2>
    </div>
    <div className="nav-menu">
    <ul>
        <li>Home</li>
        <li>Quote</li>
        <li>Resturants</li>
        <li>Foods</li>
        <li>Contact</li>
    </ul>
    </div>
    <div className="nav-btn">
       <button>Get Started</button>
    </div>

</div>

}

export default Navbar;