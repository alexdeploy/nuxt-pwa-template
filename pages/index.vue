<template>
  <div>
    
    <section class="flex max-w-7xl mx-auto p-5 justify-center">

      <div>
        <span class="flex text-xl md:text-3xl justify-center">
          Welcome to
        </span>
        <h1 class="text-4xl md:text-7xl font-sfbold">
          {{ $t('title') }}
        </h1>
        <h2 class="flex text-xl md:text-2xl justify-end m-2">
          template
        </h2>

        <libraryButtonNuxt value="About" to='/about' />
      </div>

    </section>
  </div>
</template>

