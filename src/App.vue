<script setup lang="ts">
import {
  RouterLink,
  RouterView,
} from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <img
      alt="hm script"
      class="logo"
      src="@/assets/hmlogo.png"
      width="180"
      height="180"
    />

    <div class="wrapper">
      <HelloWorld msg="Halmai McRae" />

      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact"
          >Contact</RouterLink
        >
        <a
          href="/Halmai_McRae_Resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </nav>
      <nav class="nav-hidden">
        <a
          href="https://github.com/halmai-mcrae"
          target="_blank"
        >
          <font-awesome-icon
            icon="fa-brands fa-github"
            transform="grow-14 down-2"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/halmai-mcrae/"
          target="_blank"
        >
          <font-awesome-icon
            icon="fa-brands fa-linkedin-in"
            transform="grow-12 down-2"
          />
        </a>
        <a
          href="https://medium.com/@halmaimcrae"
          target="_blank"
        >
          <font-awesome-icon
            icon="fa-brands fa-medium"
            transform="grow-10 down-2"
          />
        </a>
        <a
          href="mailto: hello@halmaimcrae.co.nz"
          target="_blank"
        >
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            transform="grow-11 down-1"
          />
        </a>
        <RouterLink to="/interests">
          <font-awesome-icon
            icon="fa-solid fa-heart"
            fixed-width
            transform="grow-10 down-1"
          />
        </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto;
  margin-bottom: 2rem;
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--color-border);
}

.gold {
  color: #b88f48;
}

a {
  text-decoration: none;
  color: #918f8c;
  transition: 0.4s;
}

.nav-hidden {
  display: none;
}

@media (hover: hover) {
  a:hover {
    background-color: transparent;
  }
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  white-space: nowrap;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  color: #eed2a8;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 1rem 0 0;
  }
}
@media (max-width: 1024px) {
  .nav-hidden {
    display: block;
    margin-bottom: 2rem;
    border-top: 1px solid var(--color-border);
    padding-top: 2rem;
  }

  .nav-hidden :hover {
    background-color: transparent;
  }
}

@media (max-width: 768px) {
  .logo {
    width: 120px;
    height: 120px;
  }
}
</style>
