<template>
    <header class="sticky top-0 z-10 backdrop-blur-md">
      <nav class="navigation justify-between">
        <img src="favicon.ico" alt="" class="w-10 h-10">
        
        <ul class="hidden space-x-5 items-center lg:flex">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>

        <img src="/img/menu.svg" alt="" class="flex lg:hidden">
      </nav>
    </header>
  </template>
  
<style>
.navigation {
    @apply flex;
    @apply p-5;
    @apply space-x-5;
  }
</style>