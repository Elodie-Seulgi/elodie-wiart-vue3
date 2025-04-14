<script setup></script>

<template>
   <div id="page-wrapper">
    <div id="header-wrapper">
      <div class="container">
        <header id="header">
          <div class="inner">
            <h1><router-link to="/" id="logo">Magic Duck 🦆</router-link></h1>

            <nav id="nav">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/list">Ma Collection</router-link></li>
              </ul>
            </nav>
          </div>
        </header>

    <router-view />

    <div id="footer-wrapper">
      <footer id="footer" class="container">
        <div class="col-12">
          <div id="copyright">
            <ul class="menu">
              <li>&copy; Canard. All rights reserved</li>
              <li>Design: Elodie WIART</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
  </div>
  </div>
</template>