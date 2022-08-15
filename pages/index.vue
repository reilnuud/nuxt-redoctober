<template>
  <div
    id="about"
    class="flex flex-col items-center justify-start flex-grow pt-[22vh]"
  >
    <div class="sticky top-0 z-0">
      <div class="px-6 w-full mx-auto max-w-md relative">
        <IconsLogo />
        <!-- <div
        class="bottom-0 bg-gradient-to-b from-black absolute left-0 right-0 h-6"
      /> -->
      </div>
      <Container>
        <h1 class="hidden">Red October</h1>
        <div
          class="flex flex-col gap-3 items-center justify-center text-center mt-3"
        >
          <h2 class="font-bold flex gap-2">
            <span>Oct</span>
            <span>14</span>
            <span>-</span>
            <span>16</span>
            <span>2022</span>
          </h2>
          <p>
            Red October is a Santa Cruz-based convergence of radical events and
            discussions, art and presentations, joining flourishing movements
            sharing a post-capitalist, socialist horizon.
          </p>
        </div>
      </Container>
    </div>
    <div
      class="w-full overflow-hidden relative flex flex-col mt-20 items-center"
    >
      <!-- big red ball -->
      <div
        class="absolute bg-red rounded-full h-[1000vw] md:h-[200vw] w-[1000vw] md:w-[200vw] z-10"
      />
      <div class="absolute bg-black top-24 left-0 right-0 bottom-0 z-0" />
      <!-- description -->
      <Container
        class="relative z-20 mt-[15vw] lg:mt-[5vw] prose text-sm prose-p:text-white"
      >
        <p>
          Drawing inspiration from past models of theory and practice, Red
          October brings critical and affirmative attention to contemporary ways
          of imagining a world beyond capitalism, including in relation to their
          antiracist, antisexist, and decolonial intersections.
        </p>
        <p>
          Red October is specific to local concerns in Santa Cruz, as well as
          extending beyond them, seeking to connect, amplify, and strengthen
          theoretical and comparative frameworks for local struggles. It
          provides a movement space of red organizing in collaboration with
          labor, ecosocialist, and political formations within and beyond
          electoralism.
        </p>
        <p>
          Red October is motivated to push the conversation toward recognizing
          the necessity of a socialist future, to build networks of alliances
          and solidarity on the Left, and to imagine and realize a
          post-capitalist world in common.
        </p>
      </Container>
      <div id="series" class="relative w-full z-20">
        <svg
          viewbox="0 0 10 10"
          class="fill-black w-[200vw] -translate-x-1/4 absolute top-full scale-y-150 md:scale-y-100 -translate-y-12 md:top-48"
        >
          <path d="M0 5 L0 10 L10 10 L10 5 L5 0 Z" />
        </svg>
        <ul
          class="px-6 max-w-4xl mx-auto mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20 leading-tight"
        >
          <!-- day 1 -->
          <li class="flex flex-col gap-3 items-center">
            <h3 class="font-bold uppercase text-xs tracking-[1px]">Day I</h3>
            <div class="text-black bg-white p-6 w-full">
              <h3 class="font-bold">No Green Capitalism</h3>
              <p class="text-sm my-3">
                An abundance of desublimations concerning Sontagist camp exist.
                Thus, Derrida uses the term ‘posttextual libertarianism’ to
                denote not discourse per se, but neodiscourse.
              </p>
              <p class="text-xs uppercase font-bold text-red">Speakers</p>
              <p class="text-xs mt-1">
                Maxwell Calhoun, Malakai Velez, Ayaan Larson
              </p>
            </div>
          </li>
          <!-- day 2 -->
          <li class="flex flex-col gap-3 items-center">
            <h3 class="font-bold uppercase text-xs tracking-[1px]">Day II</h3>
            <div class="text-black bg-white p-6 w-full">
              <h3 class="font-bold">Building Labor Power</h3>
              <p class="text-sm my-3">
                The subject is contextualised into a cultural narrative that
                includes language as a totality. Therefore, Baudrillard uses the
                term ‘Sontagist camp’ to denote the bridge between art and
                sexual identity.
              </p>
              <p class="text-xs uppercase font-bold text-red">Speakers</p>

              <p class="text-xs mt-1">
                Nelson Holt, Ashleigh Mueller, Bradyn Rice, Elyse Carter, Gauge
                Mendoza
              </p>
            </div>
          </li>
          <!-- day 3 -->
          <li class="flex flex-col gap-3 items-center">
            <h3 class="font-bold uppercase text-xs tracking-[1px]">Day III</h3>
            <div class="text-black bg-white p-6 w-full">
              <h3 class="font-bold">
                Radical Politics Between Movement Organizing and Electoralism
              </h3>
              <p class="text-sm my-3">
                Debord uses the term ‘Sontagist camp’ to denote not narrative,
                but postnarrative. Therefore, if Foucaultist power relations
                holds, we have to choose between Sontagist camp and
                subcapitalist deconstructivism.
              </p>
              <p class="text-xs uppercase font-bold text-red">Speakers</p>
              <p class="text-xs mt-1">Branson Ho, Janiyah Price</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- events -->
      <div
        id="events"
        class="relative items-center text-center flex flex-col gap-12 z-10 mt-12 pb-24 z-30"
      >
        <h2 class="uppercase font-bold text-lg tracking-[1px]">Events</h2>
        <div class="flex flex-col gap-3">
          <h3 class="font-bold text-xs">Oct 14 2022</h3>
          <p class="text-red">Happy Hour</p>
        </div>
        <div class="flex flex-col gap-3">
          <h3 class="font-bold text-xs">Oct 15 2022</h3>
          <p class="text-red">People's Disco</p>
          <p class="text-red">Abolition Ecology Walk</p>
          <p class="text-red">Labor Workshop</p>
        </div>
        <div class="flex flex-col gap-3">
          <h3 class="font-bold text-xs">Oct 16 2022</h3>
          <p class="text-red">Palestinian Solidarity Workshop</p>
          <p class="text-red">Movie</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    content: `
    <h2>Some Words</h2>
    <p>Cosmic fugue Apollonius of Perga light years something incredible is waiting to be known of brilliant syntheses radio telescope. The ash of stellar alchemy colonies permanence of the stars the ash of stellar alchemy Drake Equation not a sunrise but a galaxyrise. </p>
    <p>Corpus callosum extraordinary claims require extraordinary evidence the sky calls to us hundreds of thousands at the edge of forever emerged into consciousness. Inconspicuous motes of rock and gas from which we spring rich in heavy atoms network of wormholes brain is the seed of intelligence intelligent beings and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
    `,
  }),
};
</script>
