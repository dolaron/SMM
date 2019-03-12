<template>
  <div id="app">
    <section class="section">
      <div class="hero__header">
        <h1 class="hero__title"> Kolega siedzi kase. </h1>
      </div>
      <div class="hero__bar">
        <div class="cd">
          <input class="cd__input" required>
          <span class="cd__span"></span>
          <label class="cd__label"> Gdzie jest skurczysyn? </label>
          <div class="cd__tooltip"> * wpisz min. 3 znaki </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'SearchUser'
}
</script>

<style scoped>

.hero__header {
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
  flex: 1;
  align-items: center;
  height: 50%;
}

.hero__title {
  padding-left: 5rem;
  font-family: 'Permanent Marker';
  margin: 0;
  font-size: 5rem;
}

.hero__bar {
  display: flex;
  height: 50%;
}

@media (min-width: 20rem){
  .hero__title {
    padding-left: 1.35rem;
  }
}

</style>
