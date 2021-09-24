import React from 'react'
import logo from '../../assets/img/logo.svg'


export default function Navbar(props) {
    return (
        <div>
            <div class="container-fluid bg-light">
                <nav class="navbar navbar-expand-lg navbar-light bg-light container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" style={{height: "30px",marginRight: "5px"}}/>City Weather</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
                        <form class="d-flex">
                        <input class="form-control mr-2" 
                        type="search" 
                        placeholder="Type a city Name" 
                        aria-label="Search"
                      />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}
