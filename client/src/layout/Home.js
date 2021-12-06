import React from 'react'
import { Link } from 'react-router-dom';

import './css/style_main.css';
import Logo from './images/logosony.png';

export const Home = () => {
    return (
        <div>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <Link className="navbar-brand m-0" to="/" target="_blank">
                        <img src={Logo} className="navbar-brand-img h-100" alt="main_logo"></img>
                        <span className="ms-1 font-weight-bold text-white">Gestion de proyectos</span>
                    </Link>
                </div>
                <hr className="horizontal light mt-0 mb-2"></hr>
                <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white active bg-gradient-primary" to="/">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">receipt_long</i>
                                </div>
                                <span className="nav-link-text ms-1">Inicio</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/dashboard">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">dashboard</i>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/projects">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">table_view</i>
                                </div>
                                <span className="nav-link-text ms-1">Proyectos</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/notifications">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">notifications</i>
                                </div>
                                <span className="nav-link-text ms-1">Notificaciones</span>
                            </Link>
                        </li>
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Cuentas</h6>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/count">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">person</i>
                                </div>
                                <span className="nav-link-text ms-1">Perfil de usuario</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/login">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">login</i>
                                </div>
                                <span className="nav-link-text ms-1">Iniciar Sesión</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidenav-footer position-absolute w-100 bottom-0 ">
                    <div className="mx-3">
                        <a className="btn bg-gradient-primary mt-4 w-100" href="https://github.com/Viinky-Kevs/ProyectSony" type="button" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </aside>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                {/* Navbar */}
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                    <div className="container-fluid py-1 px-3">
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div className="input-group input-group-outline">
                                    <label className="form-label">Buscando...</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <Link to="/login" className="nav-link text-body font-weight-bold px-0">
                                        <i className="fa fa-user me-sm-1"></i>
                                        <span className="d-sm-inline d-none">Iniciar sesión</span>
                                    </Link>
                                </li>
                                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                    <Link to="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item px-3 d-flex align-items-center">
                                    <Link to="javascript:;" className="nav-link text-body p-0">
                                        <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                    <Link to="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-bell cursor-pointer"></i>
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                        <li className="mb-2">
                                            <Link className="dropdown-item border-radius-md" to="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="./assets/img/team-2.jpg" className="avatar avatar-sm  me-3 "></img>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New message</span> from Laur
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            13 minutes ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="./assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark  me-3 "></img>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New album</span> by Travis Scott
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                                                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <title>credit-card</title>
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                                    <g transform="translate(1716.000000, 291.000000)">
                                                                        <g transform="translate(453.000000, 454.000000)">
                                                                            <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                            <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            Payment successfully completed
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            2 days
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br></br>
                <img src={ Logo } style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '8%' }}></img>
                <h1 style={{ textAlign: 'center', color: 'black'}}>
                    Plataforma de gestión de proyectos Sony
                </h1>
                <br></br>
                <div >
                    <div style={{ float: 'left', width: '50%', height: '500px',padding: '10px' }}>
                        <h4 style={{ textAlign: 'justify' , color: 'black'}}>
                            Sony es una plataforma dedicada a gestionar y facilitar el anvance de trabajo en los equipos.
                            Colaborar, gestionar proyectos, y alcanzar nuevos picos de productividad deseada.
                            Desde diversos lugares del globo hasta el trabajo en casa, Sony genera nuevas formas en que tu equipo
                            pueda trabajar en colaboración y de forma única.
                        </h4>
                    </div>
                    <div style={{ float: 'left', width: '50%', height: '500px', padding: '10px' }}>
                        <img src="http://www.ricardosalinas.com/blog/images/fotoblogene2709.png" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '500px', borderRadius: '15px' }}></img>
                    </div>
                </div>
                <br></br>
                
                <h3 style={{ textAlign: 'center', color: 'black'}}>
                    Es más que trabajo. Es una forma de trabajar juntos
                </h3>
                <h5 style={{ textAlign: 'center', color: 'black'}}>
                    Gestión de proyectos, organizador de tareas, y constructor de espiritu de trabajo <strong>en un solo lugar</strong>.
                </h5>
            </main>
        </div>
    )
}
