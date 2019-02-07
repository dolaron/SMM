<template>
  <div id="app">
    <section class="section">
      <div class="hero-header">
        <h1 class="hero-title"> Kolega siedzi kase. </h1>
      </div>
      <div class="hero-bar">
        <div class="cd">
          <input @keydown="hideInputTooltip" class="cd-input" required>
          <span class="cd-span"></span>
          <label class="cd-label"> Gdzie jest skurczysyn? </label>
          <div class="cd-tooltip" id="hero-tooltip"> * wpisz min. 3 znaki </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'SearchUser',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    hideInputTooltip (evt) {
      let length = evt.target.value.length,
      tt = document.getElementById('hero-tooltip')
      if (evt.target.value === '' || length === 0) {
        tt.style.left = '0rem'
      }
      if (length > 0 && length <= 2) {
        tt.style.left = (1 * length) + 1 + 'rem'
      } else if (length >= 3) {
        tt.style.left = '0rem'
        tt.style.opacity = 0
      }
    }
  }
}
</script>
