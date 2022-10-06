<template>
  <div class="about">
    <h3>
      I am passionate about building software and applications that provide
      pixel-perfect, performant experiences. Here are the technologies I've
      been working with recently.
      <div>
      <ul>
        <li>HTML & (S)CSS</li>
        <li>JavaScript(ES6+)</li>
        <li>Python</li>
        <li>TypeScript</li>
        <li>Django</li>
        <li>React</li>
        <li>AWS</li>
        <li>Node.js</li>
        <li>Angular</li>
      </ul>
      <ul>
        <li>Vue</li>
        <li>Redux</li>
        <li>jQuery</li>
        <li>Next.js</li>
        <li>Mongo DB</li>
        <li>Nuxt.js</li>
        <li>Express.js</li>
        <li>.NET</li>
        <li>UI / UX frameworks</li>
      </ul>
    <div class="about">
      I am always curious about new opportunies, either remote or here in Wellington. 
      If you'd like to chat, or have something in mind you think I'd be a good fit for, then please
      </div>
      <a class="mail" href="mailto: hello@halmaimcrae.co.nz">get in touch with me.</a>
      </div>
    </h3>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    margin: 10px;
    margin-bottom: 10px;
  }

  li {
    color: #8C8686;
    display: grid;
    margin: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
  }

  ul { 
    display: inline-block; 
    margin-top: 10px;
  }

  .mail {
    display: flex-end;
    align-items: center;
    margin-left: 10px;
  }  
  }

@media (max-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    text-align: center;
  }

  li {
  text-align: left;
  margin: 10px;
  }
  
  .mail {
    display: flex-end;
    align-items: center;
    margin-left: 10px;
  }  
  }

</style>
