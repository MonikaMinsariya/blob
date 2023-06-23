import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="nav-bar w-nav">
                <div className="container-regular w-container">
                    <div className="nav-bar-wrap">
                        <a href="/" aria-current="page" className="nav-brand w-nav-brand w--current">
                            <img src="https://assets.website-files.com/637484fce1607520c06e4c6d/63a68532d3398db48d8b4fd1_portlight-logo.svg" loading="lazy" alt="" />
                        </a>
                        <div className="nav-popup-flex">
                            <div className="nav-menu-button w-nav-button">
                                <div className="w-icon-nav-menu"></div>
                            </div>
                            <div className="nav-menu-flex">
                                <nav role="navigation" className="nav-menu w-nav-menu">
                                    <div className="nav-link-flex">
                                        <a href="/" aria-current="page" className="nav-link w-nav-link w--current">Home</a>
                                        <a href="/about-us" className="nav-link w-nav-link">About</a>
                                        <a href="/portfolio" className="nav-link w-nav-link">Work</a>
                                        <a href="/News" className="nav-link w-nav-link">News</a>
                                        <a href="/contact-us" className="nav-link w-nav-link">Contact</a>
                                    </div>
                                </nav>
                                <a href="/" className="menu-icon w-inline-block">
                                    <div>
                                        <div className="menu-icon-line menu-right-line"></div>
                                        <div className="menu-icon-line"></div>
                                        <div className="menu-icon-line menu-left-line"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
