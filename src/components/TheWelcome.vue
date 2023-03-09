<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import NavHidden from '@/components/NavHidden.vue'
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
          transform="grow-5"
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
          transform="grow-5"
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
          transform="grow-5"
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
    Designed for a commercial maintenance company.
    Built with React, this business application
    includes an online booking system and a modern
    user interface.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a
        href="mailto: hello@halmaimcrae.co.nz"
        target="_blank"
      >
        <font-awesome-icon
          icon="fa-solid fa-envelope"
          transform="grow-5"
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
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <RouterLink to="/interests"
        ><font-awesome-icon
          icon="fa-solid fa-heart"
          fixed-width
          transform="grow-5"
        />
      </RouterLink>
      <RouterView />
    </template>
    <template #heading
      ><RouterLink to="/projects"
        >More projects</RouterLink
      ></template
    >
    Coming soon. In the meantime, check out my
    <a
      href="https://github.com/halmai-mcrae"
      target="_blank"
      >GitHub</a
    >.
  </WelcomeItem>
  <NavHidden />
  <p class="copyright-home">
    © 2022 Halmai McRae
  </p>
</template>
