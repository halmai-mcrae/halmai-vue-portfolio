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
    <template #heading>Manu Mana</template>
    <!-- <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js"
      >StackOverflow</a -->
Manu Mana is more than a web application: the project is about design, protecting taonga, relationships, and learning in a digital age. It is also an exploration of what it means to be an ethical technologist working in bicultural Aotearoa.
<br />
<!-- 
    Further information is available in <code>README.md</code>. -->
  </WelcomeItem>

  <WelcomeItem>
<template #icon>
            <a href="https://medium.com/@halmaimcrae">
<font-awesome-icon icon="fa-brands fa-medium" transform="grow-10 down-2"/>
</a>
    </template>
    <template #heading>FruitMe</template>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
    <a href="mailto: halmaimcrae1@gmail.com">
      <font-awesome-icon icon="fa-solid fa-envelope" transform="grow-11 down-1"/>
    </a> 
    </template>
    <template #heading>Another project</template>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
  </WelcomeItem>

  <WelcomeItem>
        <template #icon>
      <RouterLink to="/interests"><font-awesome-icon icon="fa-solid fa-heart" fixed-width transform="grow-10 down-1"/>
      </RouterLink>
  <RouterView />
    </template>
    <template #heading>More projects</template>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </WelcomeItem>
</template>
