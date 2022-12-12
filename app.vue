<template>
  <div>
    <SplashScreen :src="'/favicon.ico'" :time="1000" width="100px" />
    <NuxtLoadingIndicator />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script>
export default {
  mounted(){

    const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/worker.js", {
          scope: "/",
        });
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };
  registerServiceWorker();

  },
  methods: {
    
  }
}
</script>
