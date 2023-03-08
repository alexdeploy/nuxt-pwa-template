<template>
    <header class="fixed w-full top-0 z-10 backdrop-blur-md">
      <nav class="max-w-7xl mx-auto flex p-5 justify-between">
        <div class="flex">
          <NuxtLink to="/">
            <img src="/logo.png" alt="" class="w-10 h-10">
          </NuxtLink>
          
          <ul class="hidden lg:flex space-x-5 items-center pl-5 ">
            <li><NuxtLink class="hover:text-white" to="/about">About this app</NuxtLink></li>
  <!--           <li><NuxtLink to="/blog">Blog</NuxtLink></li> -->
          </ul>
        </div>
        <Switch class="hidden lg:flex"/>
        <!-- Burger icon -->
        <NuxtLink @click="toggleMobileMenu()" class="flex lg:hidden hover:cursor-pointer">
          <Icon name="mingcute:menu-line" class="text-gray-200 w-6 h-6 m-2" />
        </NuxtLink>

      </nav>

      <MobileMenu class="hidden mobile-menu" />

    </header>
  </template>

<script>

  export default {

    methods: {
      toggleMobileMenu(){
        // Toggle mobile menu
        document.querySelector('.mobile-menu').classList.toggle('hidden')
      }
    }
  }

</script>
  
<style>

</style>