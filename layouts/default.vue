<template>
  <header
    class="2xl:w-1/3 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full fixed top-0 left-1/2 -translate-x-1/2 z-10 p-2 flex items-center backdrop-blur transition-all text-black dark:text-white"
  >
    <div class="w-full">
      <nav
        v-motion-fade-visible-once
        class="w-full flex justify-between items-center"
      >
        <ul class="flex gap-4">
          <NuxtLink class="home-btn p-2 bg-transparent" to="/">
            <li>
              <p class="font-bold text-black dark:text-white max-sm:text-lg">
                Nikita Isaev
              </p>
            </li>
          </NuxtLink>
          <NuxtLink to="/works" class="p-2 bg-transparent max-sm:hidden">
            <li class="hover:underline max-sm:text-sm">Works</li>
          </NuxtLink>
          <NuxtLink to="/posts" class="p-2 bg-transparent max-sm:hidden">
            <li class="hover:underline max-sm:text-sm">Posts</li>
          </NuxtLink>
        </ul>
        <div class="flex flex-row gap-2">
          <ColorSwitchBtn /><HamburgerMenu />
        </div>
      </nav>
    </div>
    <div
      class="absolute top-14 right-2 bg-transparent collapse rounded-xl dark:bg-[#2b2b2e]"
    >
      <nav>
        <ul class="flex flex-col items-center text-center">
          <NuxtLink to="/"
            ><li
              class="text-black dark:text-white px-6 py-3 active:bg-[#363639]"
            >
              About
            </li></NuxtLink
          >
          <NuxtLink to="/works"
            ><li
              class="text-black dark:text-white px-6 py-3 active:bg-[#363639]"
            >
              Works
            </li></NuxtLink
          >
          <NuxtLink to="/posts"
            ><li
              class="text-black dark:text-white px-6 py-3 active:bg-[#363639]"
            >
              Posts
            </li></NuxtLink
          >
        </ul>
      </nav>
    </div>
  </header>
  <div>
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  @apply dark:bg-pink-500 bg-[#3d7aed] max-sm:dark:bg-[#2b2b2e] max-sm:bg-white text-black rounded;
}

.home-btn {
  @apply bg-transparent dark:bg-transparent text-white rounded;
}
</style>
