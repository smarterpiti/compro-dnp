<script setup lang="ts">
import { toRefs } from 'vue';

interface Prop {
  visible: boolean;
}

const props = withDefaults(defineProps<Prop>(), {
  visible: true
})

const { visible } = toRefs(props);

</script>
<template>
  <div v-if="visible"
    class="fixed top-0 bottom-0 left-0 right-0 bg-white z-50 flex flex-col items-center justify-center">
    <img src="/img/logo-blue.svg" width="200" />
    <div class="lds-facebook mt-5">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style>
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: var(--color-hydrate);
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}

.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}

.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}

@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }

  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>