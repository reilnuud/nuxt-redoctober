<template>
  <header
    class="text-white uppercase text-[.67rem] flex items-center justify-center gap-3 py-3 tracking-[1px]"
  >
    <button
      type="button"
      @click="scrollTo('about')"
      class="hover:text-red transition duration-100"
    >
      About
    </button>
    <button
      type="button"
      @click="scrollTo('series')"
      class="hover:text-red transition duration-100"
    >
      Series &amp; Events
    </button>
    <button
      type="button"
      @click="scrollTo('events')"
      class="hover:text-red transition duration-100"
    >
      Halloween
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    scrollTo(value) {
      const pos =
        document.getElementById(value).offsetTop + 0.5 * window.innerHeight;
      console.log(pos);
      window.scrollTo({
        top: pos,
        behavior: "smooth",
      });
    },
  },
};
</script>
