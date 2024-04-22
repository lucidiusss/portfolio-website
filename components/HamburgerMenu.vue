<template>
  <div class="max-sm:block hidden relative">
    <button
      @click="showModal()"
      class="p-2 rounded-lg dark:border-stone-700 border-stone-400 border dark:bg-[#202024] bg-transparent dark:active:bg-[#434347]"
    >
      <Icon size="24" name="quill:hamburger" />
    </button>
  </div>
  <div
    ref="target"
    v-if="modal"
    class="absolute z-20 top-15 right-0 bg-white rounded-xl dark:bg-[#2b2b2e]"
  >
    <nav>
      <ul @click="showModal()" class="flex flex-col items-center text-center">
        <NuxtLink to="/"
          ><li
            class="text-black dark:text-white px-10 py-3 dark:active:bg-[#363639] active:bg-[#898888]"
          >
            About
          </li></NuxtLink
        >
        <NuxtLink to="/works"
          ><li
            class="text-black dark:text-white px-10 py-3 dark:active:bg-[#363639] active:bg-[#898888]"
          >
            Works
          </li></NuxtLink
        >
        <NuxtLink to="/posts"
          ><li
            class="text-black dark:text-white px-10 py-3 dark:active:bg-[#363639] active:bg-[#898888]"
          >
            Posts
          </li></NuxtLink
        >
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const modal = useState("modal", () => "");
const target = ref(null);
const showModal = () => {
  modal.value = !modal.value;
};

onClickOutside(target, () => (modal.value = false), { ignore: [target] });
</script>

<style scoped></style>
