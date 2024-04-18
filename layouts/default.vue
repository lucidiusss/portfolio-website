<template>
  <header
    class="sticky z-10 top-0 mx-auto flex items-center p-4 backdrop-blur transition-all text-black dark:text-white"
  >
    <nav v-motion-fade-visible-once class="mx-auto flex items-center gap-52">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">
            <div class="flex gap-2 mr-5 items-center">
              <Icon name="💀" />
              <p class="font-bold">Nikita Isaev</p>
            </div>
          </NuxtLink>
        </li>
        <li class="hover:underline"><NuxtLink to="/works">Works</NuxtLink></li>
        <li class="hover:underline"><NuxtLink to="/posts">Posts</NuxtLink></li>
      </ul>
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
          v-if="colorMode.preference === 'dark'"
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
          v-if="colorMode.preference === 'light'"
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
    </nav>
  </header>
  <div>
    <slot />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
console.log(colorMode.value);

const changeColor = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>
