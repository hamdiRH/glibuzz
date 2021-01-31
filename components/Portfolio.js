import React, { Component } from 'react';
import Link from 'next/link'

class Porfolio extends Component {

    state = {
        onWebDesign: false,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: true,
                onWebDesign: true,
                onPhotography: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                onWebDesign: true,
                onPrintDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const printDesign = event => {
            event.preventDefault();
            this.setState({
                onPrintDesign: true,
                onWebDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: false,
                onWebDesign: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const Photography = event => {
            event.preventDefault();
            this.setState({
                onPhotography: true,
                onWebApp: false,
                onPrintDesign: false,
                onWebDesign: false,
                isOpen: true,
            });
        }



        return (
            <section id="protfolio" className="gallery-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <div className="section-title">
                                    <span>Portfolio</span>
                                    <h2>Work I Have Done</h2>
                                </div>
                                <ul>
                                    <li><button data-filter="*"  className="current" onClick={allElement}>All</button></li>
                                    <li><button data-filter=".Web-Design"  onClick={webDesign}>Web Design</button></li>
                                    <li><button data-filter=".Print-Design"  onClick={printDesign}>Print Design</button></li>
                                    <li><button data-filter=".Web-Application"  onClick={webApp}>Web Application</button></li>               
                                    <li><button data-filter=".Photography"  onClick={Photography}>Photography</button></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                               
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"
                                    }>
                                   <img src='Images/gallery/img-1.jpg' className="img img-responsive" alt="" />
                                    <div className="icon">
                                        <Link href="/" className="view-icon">
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className={this.state.onWebDesign ? "grid active" : "grid" 
                                    && this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src='Images/gallery/img-2.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="/" className="view-icon">
                                          <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/img-6.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="/" className="view-icon">
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src='Images/gallery/img-5.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="/" className="view-icon">
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src='Images/gallery/img-3.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="/" className="view-icon">
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src='Images/gallery/img-4.jpg' alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link href="/" className="view-icon">
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white_svg svg_white">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </section>
        );
    }
}

export default Porfolio;