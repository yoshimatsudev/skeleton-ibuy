<script lang="ts">
  import Logo from '../assets/images/logo.png'
  import Hero from '../assets/images/hero.png'
	import { BadgePercent, Clock1, Gift, Smartphone } from 'lucide-svelte';

  // import { onNavigate } from '$app/navigation'

  // onNavigate((navigation) => {
  //   if(!document.startviewTransition) return 
  // })

  // // old snapshot
  // document.startViewTransition(() => {
  //   // dom change
  //   // new snapshot
  // })
</script>

<div class="pb-6">
  <div class="">
    <header class="flex items-center justify-between py-4 bg-primary-900 px-4 lg:px-8">
      <!-- logo - start -->
      <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <img src={Logo} class="w-20 lg:w-36" alt="">
      </a>
      <!-- logo - end -->

      <!-- nav - start -->
 
      <!-- nav - end -->

      <!-- buttons - start -->
      <a href="#" class="btn btn-md lg:btn-lg hover:variant-filled-tertiary variant-filled-primary text-white">Falar no whatsapp</a>
      <!-- buttons - end -->
    </header>

    <section id="hero" class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 md:flex-row bg-tertiary-300 px-4 py-4">
      <!-- content - start -->
      <div class="flex flex-col justify-center text-center lg:py-12 xl:w-5/12 xl:py-24">
        <p class="mb-4 font-semibold text-tertiary-900 md:mb-6 md:text-lg xl:text-xl">Conheca nossa linha completa de produtos!</p>

        <h1 class="mb-8 text-4xl font-bold  text-primary-700  sm:text-5xl md:mb-12 md:text-6xl">Inovacao na palma da sua mao</h1>

        <!-- <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p> -->

        <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#" class="btn btn-md md:btn-xl hover:variant-filled-tertiary variant-filled-primary hover:text-2xl">Saiba mais</a>
        </div>
      </div>
      <!-- content - end -->

      <!-- image - start -->
      <div class="overflow-hidden rounded-lg xl:w-1/2 w-full">
        <img src={Hero} loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
      </div>
      <!-- image - end -->
    </section>
<!-- 
    <section id="newsletter" class="py-5">
      <div class="bg py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex flex-col items-center rounded-lg bg p-4 sm:p-8">
            <div class="mb-4 sm:mb-8">
              <h2 class="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">Get the latest updates</h2>
              <p class="text-center text-white">Sign up for our newsletter</p>
            </div>
      
            <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
              <input placeholder="Email" class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      
              <button class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
            </form>
      
            <p class="text-center text-xs text-white">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Term of Service</a> and <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
    </section> -->

    <section>
      <div class="py-6 sm:py-8 lg:py-12 bg-primary-300">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <!-- text - start -->
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold  text-secondary-900 md:mb-6 lg:text-3xl">Nossos beneficios</h2>
      
            <!-- <p class="mx-auto max-w-screen-md text-center text-white md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p> -->
          </div>
          <!-- text - end -->
      
          <div class="grid gap-8 md:grid-cols-2 md:gap-12 xl:gap-16 place-content-center">
            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6 p-2 rounded-2xl self-center">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <Gift />
              </div>
      
              <div class="self-center">
                <!-- <h3 class="mb-2 text-lg font-semibold md:text-xl">Growth</h3> -->
                <p class="mb-2 text-white text-2xl ">Brindes exclusivos</p>
               
              </div>
            </div>
            <!-- feature - end -->
      
            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6 p-2 rounded-2xl self-center">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <BadgePercent />
              </div>
      
              <div class="self-center">
                <!-- <h3 class="mb-2 text-lg font-semibold md:text-xl">Growth</h3> -->
                <p class="mb-2 text-white text-2xl ">Descontos especiais</p>
               
              </div>
            </div>
            <!-- feature - end -->
      
            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6 p-2 rounded-2xl self-center">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <Clock1 />
              </div>
      
              <div class="self-center">
                <!-- <h3 class="mb-2 text-lg font-semibold md:text-xl">Growth</h3> -->
                <p class="mb-2 text-white text-2xl">Prioridade no atendimento</p>
               
              </div>
            </div>
            <!-- feature - end -->
      
            <!-- feature - start -->
            <div class="flex gap-4 md:gap-6 p-2 rounded-2xl self-center">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <Smartphone />
              </div>
      
              <div class="self-center">
                <!-- <h3 class="mb-2 text-lg font-semibold md:text-xl">Growth</h3> -->
                <p class="mb-2 text-white text-2xl">Pre-venda com descontos</p>
               
              </div>
            </div>
            <!-- feature - end -->
      
            <!-- feature - start -->
           
            <!-- feature - end -->
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .teste {
    color: #9647ef
  }
</style>