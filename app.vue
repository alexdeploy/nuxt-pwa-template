<template>
  <div>
    <SplashScreen :src="'favicon.ico'" :time="1000" width="100px" />
    <NuxtLoadingIndicator />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
