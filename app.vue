<template>
  <div>
    <NuxtLoadingIndicator />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<style>

/* Page transition effects */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
