const Header = ({isToggled,setIsToggled}) => {

    const handleToggle = () => {
        if (isToggled === false) {
            setIsToggled(true)
            document.getElementById("toggle").classList.toggle("active")
        }
        else {
            setIsToggled(false)
            document.getElementById("toggle").classList.toggle("active")
        }
    }


    return ( 
        <div className = "header">
            <h2>Our Pricing</h2>
            <ul>
                <li>Annually</li>
                <li>
                    <nav className="toggle-plan">
                        <button onClick={handleToggle} id = "toggle"> {""} </button>
                    </nav>
                </li>
                <li>Monthly</li>
            </ul>
        </div>
     );
}
 
export default Header;