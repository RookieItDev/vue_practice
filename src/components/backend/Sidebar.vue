<template>
    <!-- Desktop sidebar -->
      <aside class="h-auto p-0.5 bg-white z-20 flex-shrink-0 hidden  overflow-y-auto  md:block">
        <div class="py-5 text-gray-500 dark:text-gray-400">
          <a>
           <img class="mt-0 w-auto h-7 pl-12 filter "  src="@/assets/img/New_GULF-LOGO-FINAL.png" />
        </a>
        </div>
      </aside>
      <!-- End -->
           <aside class="z-20 flex-shrink-0 hidden w-60 overflow-y-auto  bg-gray-100 dark:bg-gray-800 md:block">
        <div class="py-5 text-gray-500 dark:text-gray-400">
            
        <ul class="mt-0 ">
            <li class="relative px-6 py-3">
              <router-link to="/backend/home"
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
                <i class="fas fa-angle-left  pl-6 "></i> 
                <span class="ml-4 ">Back To Home</span>
              </router-link>
            </li>
          </ul>
            <ul class="pl-12">
            <li class="relative px-6 py-3 bg-white rounded-lg p-2 text-green-500 text-sm font-bold">
              <router-link to="/backend/create"
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-500 ">
                <i class="fas fa-plus-circle pr-2"></i>Create Fuel price
              </router-link>
            </li>
          </ul>
             <ul class="pl-12 mt-2">
            <li class="rounded-lg py-3 text-sm font-bold pl-6 hover:bg-white hover:text-green-500">
              <router-link to="/backend"
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-500 hover:bg-white ">
                  <i class="fas fa-edit pr-4"></i>Edit Job
              </router-link>
            </li>
          </ul>
            <ul class="pl-12 mt-2">
            <li class="rounded-lg py-3 text-sm font-bold pl-6 hover:bg-white hover:text-green-500">
              <router-link to="/backend"
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-500 hover:bg-white ">
                   <i class="fas fa-binoculars pr-2"></i>Tracking Approval
              </router-link>
            </li>
          </ul>
            <ul class="pl-12 mt-2">
            <li class="rounded-lg py-3 text-sm font-bold pl-6 hover:bg-white hover:text-green-500">
              <router-link to="/backend"
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-500 hover:bg-white ">
                  <i class="fas fa-undo pr-2"></i>Rejected
              </router-link>
            </li>
          </ul>
           <ul class="pl-12 mt-2">
            <li class="rounded-lg py-3 text-sm font-bold pl-6 hover:bg-white hover:text-green-500">
              <router-link to="/backend"
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-500 hover:bg-white ">
                   <i class="fas fa-clipboard-list pr-2"></i>Acknowledge
              </router-link>
            </li>
          </ul>

           

        

        </div>
      </aside>
      

    
</template>

<script>
import Nav from '../frontend/Nav.vue'
export default {
  components: { Nav },
  methods: {
    onclickLogout(){
      localStorage.removeItem('user')
      // กลับไปหน้า login
      this.$router.push({ name:'Login'})
      // window.location.href = "/login"
    }
  }
}
</script>