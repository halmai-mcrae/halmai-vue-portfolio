<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="hm script"
      className="logo"
      src="@/assets/hmlogo.png"
      width="180"
      height="220"
    />

    <div className="wrapper">
      <HelloWorld msg="Halmai McRae" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      <a href="src/assets/halmai-mcrae-resume-merged.pdf" target="_blank">
          Resume
      </a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

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
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: #8C8686;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: #e5e6e4;
  }
}

nav {
  width: 100%;
  max-width: none;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #e5e6e4;
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
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
