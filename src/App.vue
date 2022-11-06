<template>
  <router-view />
</template>

<script>

  let brand = " | TailWind Vue SPA"

  export default {
    
    name: 'App',

    watch: {
      $route(to){
        document.title = to.meta.title + brand,
        document.description = to.meta.description
      }
    }

  }
</script>