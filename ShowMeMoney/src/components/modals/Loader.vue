<template>
    <div>
        <div class="overlay"></div>
        <div class="loader">
            <div/>
            <div/>
            <div/>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -2.5rem;
  margin-left: -4rem;
  display: flex;
  justify-content: center;
  z-index: 2000;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: radial-gradient(#b2b2b2 50%, transparent 80% );
}
.loader > div {
  width: 1rem;
  height: 1rem;
  margin: 4rem 0.2rem;
  background: green;
  border-radius: 50%;
  animation: loader 0.6s infinite alternate;
}

.loader > div:nth-child(2) { animation-delay: 0.2s; }
.loader > div:nth-child(3) { animation-delay: 0.4s; }

@keyframes loader {
  from {
      opacity: 1;
      transform: translateY(0);
  }
  to {
      opacity: 0.2;
      transform: translateY(-1rem);
  }
}
</style>