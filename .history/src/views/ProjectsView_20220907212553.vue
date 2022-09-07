<template>
  <div>
    <h3>
      I am passionate about building excellent software that provides
      pixel-perfect, performant experiences. Here are a few technologies I've
      been working with recently.
      <div>
      <ul>
      </ul>
      <ul>

      </ul>
    <div>
      I am currently looking for new opportunies, either remote or here in Wellington. 
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
