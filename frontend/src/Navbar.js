import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">E-com</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="add">Add Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="update">Update Product</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <Link class="nav-link" to="logOut">Logout</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="profile">Profile</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar;