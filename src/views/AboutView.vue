<script setup lang="ts">
import NavHidden from '@/components/NavHidden.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about">
    <p>
      Technologies I've been working with
      recently.
    </p>
    <br />
    <div class="grid-container">
      <ul>
        <li>HTML & (S)CSS</li>
        <li>JavaScript(ES6+)</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
        <li>REST APIs</li>
      </ul>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>C#</li>
        <li>.NET</li>
        <li>Redux</li>
        <li>Flutter</li>
        <li>Google Cloud</li>
      </ul>
    </div>
    <br />
    <p>
      I am always curious about new opportunies,
      either remote or here in Wellington. If
      you'd like to chat, or have something in
      mind you think I'd be a good fit for, then
      please
      <RouterLink to="/contact"
        >get in touch with me.</RouterLink
      >
    </p>
  </div>
  <NavHidden />
</template>

<style>
@media (min-width: 1024px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

@media (max-width: 1024px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .about {
    margin-top: 2rem;
  }
}
</style>
