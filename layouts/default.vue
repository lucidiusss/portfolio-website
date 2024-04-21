<template>
  <header
    class="fixed sm:w-full lg:w-2/4 z-10 top-0 lg:left-[25%] mx-auto p-2 flex items-center backdrop-blur transition-all text-black dark:text-white container"
  >
    <div class="w-full">
      <nav
        v-motion-fade-visible-once
        class="w-full flex justify-between items-center gap-52"
      >
        <ul class="flex gap-4">
          <NuxtLink class="home-btn p-2 bg-transparent" to="/">
            <li>
              <div class="flex gap-2 mr-5 items-center">
                <Icon name="💀" />
                <p class="font-bold text-black dark:text-white">Nikita Isaev</p>
              </div>
            </li>
          </NuxtLink>
          <NuxtLink to="/works" class="p-2 bg-transparent">
            <li class="hover:underline transition-all">Works</li>
          </NuxtLink>
          <NuxtLink to="/posts" class="p-2 bg-transparent">
            <li class="hover:underline transition-all">Posts</li>
          </NuxtLink>
        </ul>
        <ColorSwitchBtn />
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
  @apply bg-pink-500 text-black rounded;
}

.home-btn {
  @apply bg-transparent text-white rounded;
}
</style>
