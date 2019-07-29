<template>
  <div class="conteiner">
    <button v-on:click="isShow = !isShow" class="btn btn-outline-primary">Toggle</button>
    <transition name="fade">
      <p v-if="isShow">{{ text }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Third",
  data() {
    return {
      text:
        "Шао Кан — вымышленный персонаж, один из первых боссов серии файтинг-игр Mortal Kombat. В новых частях серии он периодически становится доступен в качестве обычного игрового персонажа.",
      isShow: false
    };
  }
};
</script>

<style scoped>
.fade-enter-active {
  animation: fade-in 0.5s;
}
.fade-leave-active {
  animation: fade-in 0.5s reverse;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@keyframes fade-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>


