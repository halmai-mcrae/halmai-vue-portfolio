<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
  <a href="https://github.com/halmai-mcrae">
  <font-awesome-icon icon="fa-brands fa-github" size="2x"/>
  </a>
    </template>
    <template #heading>Projects</template>
      Some recent things I've been working on.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
<a  href="https://www.linkedin.com/in/halmai-mcrae/" ><font-awesome-icon icon="fa-brands fa-linkedin-in" size="2x" /></a>
    </template>
    <template #heading>Manu Mana</template>
    <!-- <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js"
      >StackOverflow</a -->
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.

    <br />

    Further information is available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-heart" size="2x"/>
    </template>
    <template #heading>Another project</template>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
    <a href="mailto: halmaimcrae1@gmail.com">
      <font-awesome-icon icon="fa-solid fa-envelope" size="2x"/>
    </a> 
    </template>
    <template #heading>Another project</template>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
            <a href="https://medium.com/@halmaimcrae">
<font-awesome-icon icon="fa-brands fa-medium" size="2x"/>
</a>
    </template>
    <!-- <template #heading>More projects</template>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. -->
  </WelcomeItem>
</template>
