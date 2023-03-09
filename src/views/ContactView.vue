<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <div class="contact">
    <ul className="list-unstyled">
      <br />
      <li>
        <a href="mailto:hello@halmaimcrae.co.nz">
          <font-awesome-icon
            icon="fa-solid fa-envelope"
          />
          hello@halmaimcrae.co.nz</a
        >
      </li>
      <li>
        <a
          href="https://github.com/halmai-mcrae"
          target="_blank"
        >
          <font-awesome-icon
            icon="fa-brands fa-github"
          />
          halmai-mcrae</a
        >
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/halmai-mcrae/"
          target="_blank"
        >
          <font-awesome-icon
            icon="fa-brands fa-linkedin-in"
          />
          halmai-mcrae</a
        >
      </li>
    </ul>
    <br />
    <ContactForm />
  </div>
</template>

<style scoped>
.list-unstyled {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
