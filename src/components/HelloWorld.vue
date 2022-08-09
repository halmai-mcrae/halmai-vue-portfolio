<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h2>Kia ora, my name is</h2>
    <h1 class="green">{{ msg }}.</h1>
    <h1>I build things for the web.</h1>
    <h3>
      I'm a graduate software developer based in Wellington, NZ specialising in
      building exceptional websites, applications, and everything in between.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
