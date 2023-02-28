<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h2>Kia ora, my name is</h2>
    <h1 class="gold">{{ msg }}.</h1>
    <h1 class="sub">
      I build things for the web.
    </h1>
    <br />
    <h4>
      Full Stack Developer, specialising in
      websites, applications and everything in
      between.
    </h4>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.5rem;
}

h4 {
  font-weight: 500;
  text-align: center;
}

.sub {
  color: #eed2a8;
  font-size: 1.8rem;
  text-align: center;
}
</style>
