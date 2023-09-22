import LeftNavBar from "./LeftNavBar"
import CenterNavBar from "./CenterNavBar"
import RightNavBar from "./RightNavBar"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <LeftNavBar/>
            <CenterNavBar/>
            <RightNavBar/>
        </div>
    )
}

export default NavBar