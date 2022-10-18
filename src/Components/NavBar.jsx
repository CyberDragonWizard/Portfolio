import React, { Component } from 'react'
import './NavBar.css';
import HamburgerMenu from 'react-hamburger-menu';
import Pdf from '../Assets/BrianNester-Resume.pdf';
import { Link} from "react-scroll";

class NavBar extends Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState({ open: !this.state.open })
    };

    handleClickOutside = (e) => {
        if (this.container.current && !this.container.current.contains(e.target)) {
            this.setState({
                open: false,
            });
        }
    };

    container = React.createRef();
    state = {
        open: false,
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    compenentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                className='hamburger-icon'
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={35}
                height={25}
                strokeWidth={3}
                rotate={0}
                color='#f2f7ff'
                borderRadius={5}
                animationDuration={0.3}
            />
        )
    }

    render() {
        return (
            <div>
                <nav>
                    <button className='resume-button'>
                    <a href = {Pdf} target = "_blank" className='resume' rel="noopener noreferrer">View Resume</a>
                    </button>
                    <div className='burger' ref={this.container}>
                        {this.displayHamburgerMenu()}
                        {this.state.open && (
                             <ul className='hamburgerDropDown'>
                                <div className='link-div'>

                                <li onClick={() => this.state.open} className='nav-link'>
                                <Link
                                activeClass="active"
                                to="about-me"
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration={500}
                                >
                                    About Me
                                </Link>
                                </li>

                                <li onClick={() => this.state.open} className='nav-link'>
                                <Link
                                activeClass="active"
                                to="languages"
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration={500}
                                >
                                    Languages and Frameworks
                                </Link>
                                </li>

                                <li onClick={() => this.state.open} className='nav-link'>
                                <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                >
                                    Projects
                                </Link>
                                </li>

                                <li onClick={() => this.state.open} className='nav-link-last'>
                                <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                >
                                    Contact
                                    </Link>
                                    </li>
                                </div>
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
