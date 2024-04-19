<template>
  <div>
    <div
      v-motion
      :initial="{
        y: -30,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 250,
          damping: 10,
          mass: 0.5,
        },
      }"
      v-if="darkMode"
    >
      <button
        @click="changeColor()"
        class="transition-all p-2 rounded-lg dark:bg-[#fbd38d] dark:hover:bg-[#f1aa53] dark:active:bg-[#eb8b34]"
      >
        <Icon
          size="24"
          color="black"
          name="material-symbols-light:sunny-outline-rounded"
        />
      </button>
    </div>
    <div
      v-motion
      :initial="{
        y: -30,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 250,
          damping: 10,
          mass: 0.5,
        },
      }"
      v-if="!darkMode"
    >
      <button
        @click="changeColor()"
        class="transition-all p-2 rounded-lg bg-[#845cd4] hover:bg-[#6c44c4] active:bg-[#543c9c]"
      >
        <Icon
          size="24"
          color="white"
          name="material-symbols-light:dark-mode-rounded"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const darkMode = useDarkMode();

const changeColor = () => {
  if (colorMode.value === "dark") {
    colorMode.preference = "light";
    darkMode.value = false;
  } else {
    colorMode.preference = "dark";
    darkMode.value = true;
  }
};
</script>
