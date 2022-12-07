<template>
    <header class="sticky top-0 z-10 backdrop-blur-md">
      <nav class="max-w-7xl mx-auto navigation justify-between">
        <NuxtLink to="/">
          <img src="favicon.ico" alt="" class="w-10 h-10">
        </NuxtLink>
        
        <ul class="hidden lg:flex space-x-5 items-center">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
        <Switch class="hidden lg:flex"/>
        <!-- Burger icon -->
        <NuxtLink class="flex lg:hidden">
          <Icon name="mingcute:menu-line" class="text-gray-200 w-6 h-6 m-2" />
        </NuxtLink>
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