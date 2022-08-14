<template>
  <div
    class="
      font-sans
      bg-black
      text-white
      min-h-screen min-w-screen
      w-full
      flex flex-col
    "
  >
    <OrganismsHeader />
    <main class="flex-grow flex flex-col">
      <NuxtPage />
    </main>
    <OrganismsFooter />
  </div>
</template>

<script>
export default {
  head: {
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        rel: "stylesheet",
      },
    ],
  },
};
</script>
