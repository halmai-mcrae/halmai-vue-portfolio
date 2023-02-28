<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import {
  RouterLink,
  RouterView,
} from 'vue-router'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <a
        href="https://github.com/halmai-mcrae"
        target="_blank"
      >
        <font-awesome-icon
          icon="fa-brands fa-github"
          transform="grow-14 down-2"
        />
      </a>
    </template>
    Recent things I've been working on.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a
        href="https://www.linkedin.com/in/halmai-mcrae/"
        target="_blank"
        ><font-awesome-icon
          icon="fa-brands fa-linkedin-in"
          transform="grow-12 down-2"
      /></a>
    </template>
    <template #heading
      ><a
        href="https://manu-mana.herokuapp.com/"
        target="_blank"
        >Manu Mana</a
      >
    </template>
    Manu Mana is more than a web application to
    locate native birds in Aotearoa: it's about
    design, protecting Māori taonga,
    relationships, and learning in a digital age.
    Further information in
    <a
      href="https://github.com/halmai-mcrae/Manu-Mana#readme"
      target="_blank"
      ><code>README.md.</code></a
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a
        href="https://medium.com/@halmaimcrae"
        target="_blank"
      >
        <font-awesome-icon
          icon="fa-brands fa-medium"
          transform="grow-10 down-2"
        />
      </a>
    </template>

    <template #heading
      ><a
        href="https://cleantechmaintenance.co.nz/"
        target="_blank"
        >Clean Tech</a
      >
    </template>
    A site made with React for a commercial
    maintenance company.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a
        href="mailto: hello@halmaimcrae.co.nz"
        target="_blank"
      >
        <font-awesome-icon
          icon="fa-solid fa-envelope"
          transform="grow-11 down-1"
        />
      </a>
    </template>
    <template #heading
      ><a
        href="https://thepainterguy.co.nz/"
        target="_blank"
        >The Painter Guy®</a
      >
      <small></small>
    </template>
    A full-stack business application, including
    an online booking system and (soon) a
    merchandise store. Follow them on Instagram
    <a
      href="https://www.instagram.com/_thepainterguy/"
      target="_blank"
      >@_thepainterguy</a
    >. Further information in
    <a
      href="https://github.com/halmai-mcrae/v2-the-painter-guy-frontend"
      target="_blank"
      ><code>README.md.</code></a
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <RouterLink to="/interests"
        ><font-awesome-icon
          icon="fa-solid fa-heart"
          fixed-width
          transform="grow-10 down-1"
        />
      </RouterLink>
      <RouterView />
    </template>
    <template #heading
      ><RouterLink to="/projects"
        >More projects</RouterLink
      ></template
    >
    Also, check out my
    <a
      href="https://github.com/halmai-mcrae"
      target="_blank"
      >GitHub</a
    >.
  </WelcomeItem>
</template>
