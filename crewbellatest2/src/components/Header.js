import React from 'react';
import "./Header.css";

export default function Header() {
  return <div>

<nav class="navbar position-fixed w-100 navbar-expand-lg navbar-light bg-white m-0 p-0 shadow-sm border-bottom">
  <div class="container-fluid">
          <h5 class="navbar-brand head">Crewbella</h5>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav  "> {/* mb-2 mb-lg-0} */}
        <li class="nav-item">
          <p class="nav-link active ps-5 pt-3">ABOUT</p>
        </li>
        <li class="nav-item">
          <p class="nav-link px-3 pt-3" >EVENTS</p>
        </li>
        <li class="nav-item">
          <p class="nav-link pe-5 pt-3">ACCOUNT</p>
        </li>
      </ul>
      <form class="d-flex pe-5 me-5">
        <input class="form-control me-2 rounded-pill" type="search" placeholder="Looking for" aria-label="Search" />
      </form>
    </div>
  </div>
</nav>
  </div>;
}
