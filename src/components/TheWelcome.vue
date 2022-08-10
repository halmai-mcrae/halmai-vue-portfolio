<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import { RouterLink, RouterView }from "vue-router";
</script>

<template>
  <WelcomeItem>
    <template #icon>
  <a href="https://github.com/halmai-mcrae">
  <font-awesome-icon icon="fa-brands fa-github" transform="grow-14 down-2"/>
  </a>
    </template>
    <!-- <template #heading>Projects</template> -->
      Some recent things I've been working on.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
<a  href="https://www.linkedin.com/in/halmai-mcrae/" ><font-awesome-icon icon="fa-brands fa-linkedin-in" transform="grow-12 down-2" /></a>
    </template>
    <template #heading><a href="https://manu-mana.herokuapp.com/">Manu Mana</a></template>
    <!-- <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js"
      >StackOverflow</a -->
Manu Mana is more than a web application to locate native New Zealand birds: it's about design, protecting Māori taonga, relationships, and learning in a digital age.
<br />
    Further information is available in <a href="https://github.com/halmai-mcrae/Manu-Mana#readme"><code>README.md.</code></a>
  </WelcomeItem>

  <WelcomeItem>
<template #icon>
            <a href="https://medium.com/@halmaimcrae">
<font-awesome-icon icon="fa-brands fa-medium" transform="grow-10 down-2"/>
</a>
    </template>
    <template #heading><a href="/">Frulu Store®</a> <small>is currently in development.</small></template>
    Frulu Store is a e-commerce site made with React for the sale of Frulu products.
    They're bringing fruit back to life with a revolutionary new snack store.
    One vision. One ingredient. One incredible crunch.
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
    <a href="mailto: halmaimcrae1@gmail.com">
      <font-awesome-icon icon="fa-solid fa-envelope" transform="grow-11 down-1"/>
    </a> 
    </template>
    <template #heading><a href="/">The Painter Guy™</a> <small>is currently in development.</small>
    </template>
    A full-stack business application, including an online booking system and merchandise store.
    Choose these dedicated, full-service residential and commercial painters for your next renovation.
    Until the new site is live, follow them on Instagram <a href="https://www.instagram.com/_thepainterguy/">@_thepainterguy</a>.
    
    
  </WelcomeItem>

  <WelcomeItem>
        <template #icon>
      <RouterLink to="/interests"><font-awesome-icon icon="fa-solid fa-heart" fixed-width transform="grow-10 down-1"/>
      </RouterLink>
  <RouterView />
    </template>
    <template #heading><a href="/">More projects</a></template>
    Coming soon. In the meantime, check out my <a href="https://github.com/halmai-mcrae">GitHub</a>, <a href="https://www.linkedin.com/in/halmai-mcrae/">LinkedIn</a> or <a href="https://medium.com/@halmaimcrae">Medium</a>.
  </WelcomeItem>
</template>
