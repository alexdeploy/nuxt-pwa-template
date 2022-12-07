<!-- 
    * This component is used to show a splash screen while the app is loading
    * It is used in the pages\index.vue file
    TODO: Add some transition effects, for example, fade in and out.
    TODO: Make loadable just the first time the app is loaded, not every time the index page is refreshed.
    TODO: Make animate logo while loading and adjust time.
 -->

<template>
    <div id="full-screen" v-if="loading == true" >
      <img class="center-logo animation w-12 fadeIn" src="favicon.ico" alt="logo"/>
    </div>
</template>

<script>
export default {
    name: 'SplashScreen',
    data() {
        return {
        loading: true
        }
    },
    mounted(){
        setTimeout(() => {
            this.loading = false
        }, 2000)
    }
}
</script>

<style>
#full-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    z-index: 9999;
}

.center-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* 
 * Fade in effect
*/
.fadeIn{
    animation: fadeInEffect 2s ease;
}

@keyframes fadeInEffect{
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>