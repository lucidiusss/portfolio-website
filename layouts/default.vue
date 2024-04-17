<template>
  <header
    class="sticky top-0 mx-auto flex items-center p-4 backdrop-blur transition-all text-black dark:text-white"
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
      <div class="flex">
        <div
          v-if="colorMode.preference === 'dark'"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          :delay="200"
          class="transition"
        >
          <button
            @click="changeColor()"
            class="transition py-2 px-2 rounded-md dark:bg-[#fbd38d] dark:hover:bg-[#f7bf5f] dark:active:bg-[#f9b94a]"
          >
            <Icon
              size="24"
              color="black"
              name="material-symbols-light:sunny-outline-rounded"
            />
          </button>
        </div>

        <div
          v-if="colorMode.preference === 'light'"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          :delay="200"
          class="transition"
        >
          <button
            @click="changeColor()"
            class="transition py-2 px-2 rounded-md bg-[#805ad5] hover:bg-[#6b46c1] active:bg-[#553c9a]"
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
