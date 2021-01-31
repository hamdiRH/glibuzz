import React, { Component } from 'react';
import Link from 'next/link'
class Header extends Component {

    state = {
        isOpen: false,

    }
    
    render() {

        return(
            <header id="header" className="site-header header-style-1">
                <nav className="navigation navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" href="/">
                                <img src='Images/logo.png' alt="" />
                            </Link>
                        </div>
                        <div id="navbar" className={ this.state.isOpen ? "navbar-collapse navigation-holder active" : "navbar-collapse navigation-holder"}>
                            <button className="close-navbar" onClick={() => this.setState({isOpen: false})}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <button className="close-navbar-2" onClick={() => this.setState({isOpen: false})}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <ul className="nav navbar-nav">
                                <li className="home">
                                    <a href="#home">
                                        <img src='Images/home/img-1.jpg' alt=""/>
                                    </a>
                                </li>
                                <li className="about">
                                    <a href="#about">
                                        <img src='Images/home/img-6.jpg' alt=""/>
                                    </a>
                                </li>
                                <li className="service">
                                    <a href="#service">
                                        <img src='Images/home/img-4.jpg' alt=""/>
                                    </a>
                                </li>
                                <li className="protfolio">
                                    <a href="#protfolio">
                                        <img src='Images/home/img-5.jpg' alt=""/>
                                    </a>
                                </li>
                                <li className="blog">
                                    <a href="#blog">
                                        <img src='Images/home/img-2.jpg' alt=""/>
                                    </a>
                                </li>
                                <li className="contact">
                                    <a href="#contact">
                                        <img src='Images/home/img-3.jpg' alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-open-btn-holder">
                            <button className="menu-open-btn" onClick={() => this.setState({isOpen: true})}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;