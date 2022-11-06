<template >
<div class="fixed inset-0 bg-gray-100"></div>
<div class="relative">
    <Navbar />
    <div class="flex justify-center min-w-screen-xl">
         <main class="mb-32 mt-8 px-12 w-full max-w-screen-xl">
        <router-view  />
    </main>
    </div>
    </div>
     <!-- <Footer /> -->
</template>

<script>
import Navbar from '@/components/frontend/Nav.vue'
import Footer from '@/components/frontend/Foot.vue'

export default {
    name: 'FrontendLayout',
    components: {
        Navbar,
        Footer
    }
}
</script>