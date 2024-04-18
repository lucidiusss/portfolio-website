<template>
  <header
    class="sticky w-2/4 z-10 top-0 mx-auto p-4 flex items-center backdrop-blur transition-all text-black dark:text-white"
  >
    <nav
      v-motion-fade-visible-once
      class="w-full flex justify-between items-center gap-52"
    >
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
      <ColorSwitchBtn />
    </nav>
  </header>
  <div>
    <slot />
  </div>
</template>

<script setup></script>
