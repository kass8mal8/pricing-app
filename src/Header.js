const Header = ({isToggled,setIsToggled}) => {

    const handleToggle = () => {
        if (isToggled === false) {
            setIsToggled(true)
        }
        else {
            setIsToggled(false)
        }
    }

    const toggle_style = {
        marginLeft:isToggled ? "-30px" : "auto",
        transition : "1s"
    }

    return ( 
        <div className = "header">
            <h2>Our Pricing</h2>
            <ul>
                <li>Annually</li>
                <li>
                    <nav className="toggle-plan">
                        <button onClick={handleToggle} style = {toggle_style}> {""} </button>
                    </nav>
                </li>
                <li>Monthly</li>
            </ul>
        </div>
     );
}
 
export default Header;