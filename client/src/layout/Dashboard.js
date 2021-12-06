import React from 'react';
import { Link } from 'react-router-dom';

import './css/style_main.css';
import Logo from './images/logosony.png';
import XD from './images/small-logos/logo-xd.svg';
import AT from './images/small-logos/logo-atlassian.svg';
import SL from './images/small-logos/logo-slack.svg';
import SP from './images/small-logos/logo-spotify.svg';
import JI from './images/small-logos/logo-jira.svg';
import IN from './images/small-logos/logo-invision.svg';

export const Dashboard = () => {
    return (
        <div>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <Link className="navbar-brand m-0" to="/" target="_blank"> 
                        <img src={ Logo } className="navbar-brand-img h-100" alt="main_logo"></img>
                        <span className ="ms-1 font-weight-bold text-white">Gestion de proyectos</span>
                    </Link>
                </div>
                <hr className="horizontal light mt-0 mb-2"></hr>
                <div className ="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                    <ul className ="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">receipt_long</i>
                                </div>
                                <span className="nav-link-text ms-1">Inicio</span>
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link className ="nav-link text-white active bg-gradient-primary" to="/dashboard">
                                <div className ="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className ="material-icons opacity-10">dashboard</i>
                                </div>
                                <span className ="nav-link-text ms-1">Dashboard</span>
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link className ="nav-link text-white " to="/projects">
                                <div className ="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className ="material-icons opacity-10">table_view</i>
                                </div>
                                <span className ="nav-link-text ms-1">Proyectos</span>
                            </Link>
                         </li>
                        
                        <li className ="nav-item">
                            <Link className="nav-link text-white " to="/notifications">
                                <div className ="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className ="material-icons opacity-10">notifications</i>
                                </div>
                                <span className ="nav-link-text ms-1">Notificaciones</span>
                            </Link>
                        </li>
                        <li className ="nav-item mt-3">
                            <h6 className ="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Cuentas</h6>
                        </li>
                        <li className ="nav-item">
                            <Link className ="nav-link text-white " to="/count">
                                <div className ="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className ="material-icons opacity-10">person</i>
                                </div>
                                <span className ="nav-link-text ms-1">Perfil de usuario</span>
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link className ="nav-link text-white " to="/login">
                                <div className ="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className ="material-icons opacity-10">login</i>
                                </div>
                                <span className ="nav-link-text ms-1">Iniciar Sesión</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white " to="/register">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">assignment</i>
                                </div>
                                <span class="nav-link-text ms-1">Registrarse</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className ="sidenav-footer position-absolute w-100 bottom-0 ">
                    <div className ="mx-3">
                        <a className="btn bg-gradient-primary mt-4 w-100" href="https://github.com/Viinky-Kevs/ProyectSony" type ="button" target="_blank">
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
                {/* End Navbar */}
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Proyectos actuales</p>
                                        <h4 className="mb-0">530</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0"></hr>
                                <div className ="card-footer p-3">
                                <p className ="mb-0"><span className ="text-success text-sm font-weight-bolder">+15% </span>que la semana pasadak</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Usuarios actuales</p>
                                        <h4 className="mb-0">230</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0"></hr>
                                <div className ="card-footer p-3">
                                <p className ="mb-0"><span className ="text-success text-sm font-weight-bolder">+3% </span>que el mes pasado</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Nuevos clientes</p>
                                        <h4 className="mb-0">3,462</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0"></hr>
                                <div className ="card-footer p-3">
                                    <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">-2%</span> que el mes pasado</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Cleintes satisfechos</p>
                                        <h4 className="mb-0">5000</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0"></hr>
                                <div className ="card-footer p-3">
                                <p className ="mb-0"><span className ="text-success text-sm font-weight-bolder">+5% </span>que ayer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-6 mt-4 mb-4">
                            <div className="card z-index-2 ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                        <div className="chart">
                                            <canvas id="chart-bars" className="chart-canvas" height="170"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 ">Rendimiento proyecto</h6>
                                    <p className="text-sm ">Último proyecto realizado</p>
                                    <hr className="dark horizontal"></hr>
                                    <div className ="d-flex ">
                                    <i className ="material-icons text-sm my-auto me-1">schedule</i>
                                    <p className ="mb-0 text-sm"> Proyecto finalizado hace 2 días </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mb-4">
                            <div className="card z-index-2  ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                                        <div className="chart">
                                            <canvas id="chart-line" className="chart-canvas" height="170"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 "> Usuarios activos </h6>
                                    <p className="text-sm "> (<span className="font-weight-bolder">+15%</span>) incremento de actividades </p>
                                    <hr className="dark horizontal"></hr>
                                    <div className ="d-flex ">
                                    <i className ="material-icons text-sm my-auto me-1">schedule</i>
                                    <p className ="mb-0 text-sm"> actualizado hace 4 min  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mb-3">
                            <div className="card z-index-2 ">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                    <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                        <div className="chart">
                                            <canvas id="chart-line-tasks" className="chart-canvas" height="170"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="mb-0 ">Tareas completadas</h6>
                                    <p className="text-sm ">Último proyecto finalizado</p>
                                    <hr className="dark horizontal"></hr>
                                    <div className ="d-flex ">
                                    <i className ="material-icons text-sm my-auto me-1">schedule</i>
                                    <p className ="mb-0 text-sm">recien actualizado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                            <div className="card">
                                <div className="card-header pb-0">
                                    <div className="row">
                                        <div className="col-lg-6 col-7">
                                            <h6>Proyectos</h6>
                                            <p className="text-sm mb-0">
                                                <i className="fa fa-check text-info" aria-hidden="true"></i>
                                                <span className="font-weight-bold ms-1">30 terminados</span> este mes
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-5 my-auto text-end">
                                            <div className="dropdown float-lg-end pe-4">
                                                <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa fa-ellipsis-v text-secondary"></i>
                                                </a>
                                                <ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                                                    <li><a className="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                                                    <li><a className="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                                                    <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body px-0 pb-2">
                                    <div className="table-responsive">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Proyecto</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Usuarios activos</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Días estimado</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Estado de avance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={ XD } className="avatar avatar-sm me-3" alt="xd"></img>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Material XD Version</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="team1"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="team2"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="team3"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="team4"></img>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> 60 </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">60%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={ AT } className="avatar avatar-sm me-3" alt="atlassian"></img>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Adicionar barra de progreso</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="team5"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="team6"></img>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> 10 </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">10%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-info w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={ SL } className="avatar avatar-sm me-3" alt="team7"></img>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Arreglar errores de plataforma</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="team8"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="team9"></img>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> No fijado </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">100%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={ SP } className="avatar avatar-sm me-3" alt="spotify"></img>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Desplegar aplicación móvil</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="user1"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="user2"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="user3"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="user4"></img>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> 180 </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">100%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={ JI } className="avatar avatar-sm me-3" alt="jira"></img>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Adicionar nuevos precios</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="user5"></img>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> 60 </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">25%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={ IN } className="avatar avatar-sm me-3" alt="invision"></img>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Rediseñar tienda online</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="user6"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                                <img src="https://i1.wp.com/mundowin.com/wp-content/uploads/2020/02/fix-corrupt-user-profile-windows-pc.png?w=832&ssl=1" alt="user7"></img>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="text-xs font-weight-bold"> 96 </span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="progress-wrapper w-75 mx-auto">
                                                            <div className="progress-info">
                                                                <div className="progress-percentage">
                                                                    <span className="text-xs font-weight-bold">40%</span>
                                                                </div>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-info w-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100">
                                <div className="card-header pb-0">
                                    <h6>Revisión de proyectos</h6>
                                    <p className="text-sm">
                                        <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                        <span className="font-weight-bold">24%</span> este mes
                                    </p>
                                </div>
                                <div className="card-body p-3">
                                    <div className="timeline timeline-one-side">
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="material-icons text-success text-gradient">notificaciones</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="material-icons text-danger text-gradient">code</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="material-icons text-info text-gradient">shopping_cart</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="material-icons text-warning text-gradient">credit_card</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="material-icons text-primary text-gradient">key</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block">
                                            <span className="timeline-step">
                                                <i className="material-icons text-dark text-gradient">payments</i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="fixed-plugin">
                <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                    <i className="material-icons py-2">settings</i>
                </a>
                <div className="card shadow-lg">
                    <div className="card-header pb-0 pt-3">
                        <div className="float-start">
                            <h5 className="mt-3 mb-0">Material UI Configurator</h5>
                            <p>See our dashboard options.</p>
                        </div>
                        <div className="float-end mt-4">
                            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                                <i className="material-icons">clear</i>
                            </button>
                        </div>
                        {/*<!-- End Toggle Button -->*/}
                    </div>
                    <hr className="horizontal dark my-1"></hr>
                    <div className ="card-body pt-sm-3 pt-0">
                    {/*<!--Sidebar Backgrounds-->*/}
                    <div>
                    <h6 className ="mb-0">Sidebar Colors</h6>
                    </div>
                    <a href="javascript:void(0)" className ="switch-trigger background-color">
                    <div className ="badge-colors my-2 text-start">
                    <span className ="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
                    <span className ="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
                    <span className ="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
                    <span className ="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
                    <span className ="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
                    <span className ="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
                    </div>
                    </a>
                    {/*<!--Sidenav Type-->*/}
                    <div className ="mt-3">
                    <h6 className ="mb-0">Sidenav Type</h6>
                    <p className ="text-sm">Choose between 2 different sidenav types.</p>
                    </div>
                    <div className ="d-flex">
                    <button className ="btn bg-gradient-dark px-3 mb-2 active" data-className ="bg-gradient-dark" onclick="sidebarType(this)">Dark</button>
                    <button className ="btn bg-gradient-dark px-3 mb-2 ms-2" data-className ="bg-transparent" onclick="sidebarType(this)">Transparent</button>
                    <button className ="btn bg-gradient-dark px-3 mb-2 ms-2" data-className ="bg-white" onclick="sidebarType(this)">White</button>
                    </div>
                    <p className ="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
                    {/*<!--Navbar Fixed-->*/}
                    <div className ="mt-3 d-flex">
                    <h6 className ="mb-0">Navbar Fixed</h6>
                    <div className ="form-check form-switch ps-0 ms-auto my-auto">
                    <input className ="form-check-input mt-1 ms-auto" type ="checkbox" id="navbarFixed" onclick="navbarFixed(this)"></input>
                    </div>
                    </div>
                    <hr className ="horizontal dark my-3"></hr>
                    <div className ="mt-2 d-flex">
                    <h6 className ="mb-0">Light / Dark</h6>
                    <div className ="form-check form-switch ps-0 ms-auto my-auto">
                    <input className ="form-check-input mt-1 ms-auto" type ="checkbox" id="dark-version" onclick="darkMode(this)"></input>
                    </div>
                    </div>
                    </div>
                    <hr className ="horizontal dark my-sm-4"></hr>
                    <a className ="btn btn-outline-dark w-100" href="">View documentation</a>
                    <div className ="w-100 text-center">
                    <a className ="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/material-dashboard on GitHub">Star</a>
                    <h6 className ="mt-3">Thank you for sharing!</h6>
                    <a href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard" className ="btn btn-dark mb-0 me-2" target="_blank">
                    <i className ="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard" className ="btn btn-dark mb-0 me-2" target="_blank">
                    <i className ="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
                    </a>
                    </div>
                    </div>
                    </div>
        </div>
    )
}

// racf para definir la función