<template>
  <div
    v-motion
    :initial="{
      y: 100,
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
    <article class="mb-10">
      <h1
        class="text-2xl max-sm:text-lg font-semibold mb-6 decoration-stone-600 decoration-4 underline underline-offset-8"
      >
        About me
      </h1>
      <h2
        class="indent-5 max-sm:text-sm whitespace-normal dark:text-stone-300 text-stone-"
      >
        I am 21 years old. I started learning HTML, CSS, and JavaScript not so
        long ago. Currently learning Nuxt 3 and looking forward to work with it
        in the near future. Hopefully find a job 😇. Also I'm often going live
        on
        <NuxtLink
          class="font-semibold dark:text-pink-500 text-[#3d7aed] hover:underline underline-offset-4 transition-all"
          to="https://twitch.tv/lucidiusss"
        >
          Twitch</NuxtLink
        >
        streaming my favorite game - For Honor.
      </h2>
      <div class="flex justify-center">
        <NuxtLink to="/works">
          <button
            class="shadow-lg max-sm:text-sm mt-5 max-sm:p-2 py-3 px-2 font-semibold dark:bg-pink-500 bg-[#3d7aed] hover:bg-[#3d7aed]/50 active:bg-[#3d7aed]/60 rounded-xl dark:text-[#1A202C] text-white dark:hover:bg-pink-500/50 dark:active:bg-pink-500/60 transition-all"
          >
            My Portfolio
            <Icon
              class="w-6 h-6"
              name="material-symbols:arrow-right-alt-rounded"
            />
          </button>
        </NuxtLink>
      </div>
    </article>
    <article class="mb-10 flex flex-col w-full">
      <h1
        class="text-2xl max-sm:text-lg font-semibold mb-6 decoration-stone-600 decoration-4 underline underline-offset-8"
      >
        Things I ❤️
      </h1>

      <div class="flex flex-row max-sm:text-sm justify-center">
        <NuxtLink
          class="text-[#3d7aed] dark:text-pink-500 hover:underline underline-offset-4 transition-all font-semibold"
          to="https://open.spotify.com/playlist/0pYWAtWUXYpW1Fxeq28uSC?si=eaade9b294994df6"
        >
          Music </NuxtLink
        >,
        <NuxtLink
          class="text-[#3d7aed] dark:text-pink-500 hover:underline underline-offset-4 transition-all font-semibold"
          to="https://twitch.tv/lucidiusss"
        >
          Streaming </NuxtLink
        >,
        <NuxtLink
          class="text-[#3d7aed] dark:text-pink-500 hover:underline underline-offset-4 transition-all font-semibold"
          to="https://github.com/lucidiusss"
        >
          Coding
        </NuxtLink>
      </div>
    </article>
    <article class="mb-10 flex flex-col w-full">
      <h1
        class="text-2xl max-sm:text-lg font-semibold mb-6 decoration-stone-600 decoration-4 underline underline-offset-8"
      >
        On the web
      </h1>
      <div class="flex flex-col items-center text-center">
        <div class="inline-flex">
          <NuxtLink
            class="flex items-center gap-3 dark:text-[#81e6d9] dark:hover:bg-[#81e6d9]/10 dark:active:bg-[#81e6d9]/20 py-2 px-2 rounded-lg transition-all text-[#2c7a7b] hover:bg-[#2c7a7b]/10 active:bg-[#2c7a7b]/20"
            to="https://instagram.com/lucidiusss"
          >
            <Icon size="18" name="mdi:instagram" />
            <p class="text-lg max-sm:text-sm">@lucidiusss</p>
          </NuxtLink>
        </div>
        <div class="inline-flex">
          <NuxtLink
            class="flex items-center gap-3 dark:text-[#81e6d9] dark:hover:bg-[#81e6d9]/10 dark:active:bg-[#81e6d9]/20 py-2 px-2 rounded-lg transition-all text-[#2c7a7b] hover:bg-[#2c7a7b]/10 active:bg-[#2c7a7b]/20"
            to="https://github.com/lucidiusss"
          >
            <Icon size="18" name="mdi:github" />
            <p class="text-lg max-sm:text-sm">@lucidiusss</p>
          </NuxtLink>
        </div>
        <div class="inline-flex">
          <NuxtLink
            class="flex items-center gap-3 dark:text-[#81e6d9] dark:hover:bg-[#81e6d9]/10 dark:active:bg-[#81e6d9]/20 py-2 px-2 rounded-lg transition-all text-[#2c7a7b] hover:bg-[#2c7a7b]/10 active:bg-[#2c7a7b]/20"
            to="https://vk.com/lucidiusss"
          >
            <Icon size="18" name="mdi:vk" />
            <p class="text-lg max-sm:text-sm">@lucidiusss</p>
          </NuxtLink>
        </div>
        <div class="inline-flex">
          <NuxtLink
            class="flex items-center gap-3 dark:text-[#81e6d9] dark:hover:bg-[#81e6d9]/10 dark:active:bg-[#81e6d9]/20 py-2 px-2 rounded-lg transition-all text-[#2c7a7b] hover:bg-[#2c7a7b]/10 active:bg-[#2c7a7b]/20"
            to="https://twitch.tv/lucidiusss"
          >
            <Icon size="18" name="mdi:twitch" />
            <p class="text-lg max-sm:text-sm">@lucidiusss</p>
          </NuxtLink>
        </div>
        <div class="inline-flex">
          <NuxtLink
            class="flex items-center gap-3 dark:text-[#81e6d9] dark:hover:bg-[#81e6d9]/10 dark:active:bg-[#81e6d9]/20 py-2 px-2 rounded-lg transition-all text-[#2c7a7b] hover:bg-[#2c7a7b]/10 active:bg-[#2c7a7b]/20"
            to="https://t.me/lucidiusss"
          >
            <Icon size="18" name="mdi:telegram" />
            <p class="text-lg max-sm:text-sm">@lucidiusss</p>
          </NuxtLink>
        </div>
        <div class="inline-flex">
          <NuxtLink
            class="flex items-center gap-3 dark:text-[#81e6d9] text-[#2c7a7b] py-2 px-2 rounded-lg transition-all"
          >
            <Icon size="18" name="mdi:discord" />
            <p class="text-lg max-sm:text-sm">@lucidiusss</p>
          </NuxtLink>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup></script>
