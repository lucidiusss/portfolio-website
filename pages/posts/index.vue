<template>
  <main
    class="2xl:w-1/3 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full max-sm:w-full w-1/3 mx-auto mt-20 p-2 text-black dark:text-white transition-all"
  >
    <h1
      v-motion
      :initial="{
        y: 50,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 25,
          mass: 1,
        },
      }"
      class="indent-5 text-black dark:text-white text-xl"
    >
      Posts
    </h1>
    <div
      v-motion
      :initial="{
        y: 50,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 25,
          mass: 1,
        },
      }"
      class="mt-10"
    >
      <h1 class="text-4xl max-sm:text-md font-bold text-center">
        there are no posts yet.
      </h1>
    </div>
  </main>
</template>

<script setup></script>
