import logo from '../assets/ironhack-logo.png'
import menu from '../assets/menu-top.png'


function Nav() {
    return (
        <div className='nav'>
            <img src={logo} alt="" />
            <img src={menu} alt="" />
        </div>
    )
}

export default Nav;