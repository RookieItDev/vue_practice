<template>
  <nav class="flex justify-center w-full h-20 bg-white min-w-screen-xl">
    <div class="grid items-center w-full grid-cols-8 px-5 gap-x-4 max-w-nav">
      <div
        class="flex items-center justify-between w-auto h-10 col-span-2 gap-x-6"
      >
        <a href="/" 
          >
           <img class="w-auto h-8 mt-4 filter "  src="@/assets/img/New_GULF-LOGO-FINAL.png" />
        
        </a>
        <div>
          <div class="relative">
            <div
              class="relative flex items-center text-gray-400 focus-within:text-gray-500"
            >
              <span
                class="absolute inset-0 flex items-center pointer-events-none select-none"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-4 ml-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zM0 6a6 6 0 0 1 2.46-4.845A6 6 0 0 1 7.824.283a6 6 0 0 1 3.867 3.818 6 6 0 0 1-.802 5.375l4.817 4.817a1 1 0 0 1-.012 1.402 1 1 0 0 1-1.402.012l-4.816-4.816a6 6 0 0 1-6.229.442A6 6 0 0 1 0 6z"
                  ></path></svg></span
              >
           
            </div>
            <!---->
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-center w-full col-span-4 col-start-3 col-end-7"
      >
        <a
          class="flex items-center justify-center h-10 px-3 text-sm font-bold text-gray-800 bg-green-100 rounded-lg hover:text-teal-400"
          href="/servers"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="-1 -1 21 21"
            class="h-6 pr-1 text-green-400"
          >
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
        </svg
          ><span>Home</span></a>
          <router-link to="/Lab1">
          <span class="relative z-30 ml-5"
          ><button class="rounded-lg">
            <span
              class="flex items-center justify-center h-10 px-3 text-sm font-bold text-gray-800 rounded-lg cursor-pointer select-none hover:text-teal-400"
              ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
            class="h-5 pr-2 text-gray-500"
          >
            <path
              d="M16 21a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5 5 5 0 0 0 5 5h0zm0 3c-4.922 0-7.887 2.492-9.477 4.502C5.648 29.608 6.525 31 7.935 31h16.13c1.41 0 2.287-1.392 1.412-2.498C23.887 26.492 20.922 24 16 24z"
            ></path>
            <path
              d="M28.02 24.975c1.939-2.59 2.985-5.74 2.98-8.975 0-8.284-6.716-15-15-15S1 7.716 1 16c0 3.419 1.074 6.477 3 9"
              stroke-linecap="round"
            ></path></svg>

            <span>Workshop</span></span>
          </button>
          <div
            class="right-0 origin-top-right forge-dropdown min-w-64"
            style="display: none"
          >
            <div class="flex flex-col items-center justify-center py-8 text-sm">
              <svg
                class="text-teal-400 animate-spin h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                fill="none"
                stroke-width="3"
              >
                <circle
                  cx="14"
                  cy="14"
                  r="12"
                  fill="#fff"
                  stroke="#e5e7eb"
                ></circle>
                <path
                  d="M26 14c0-6.627-5.373-12-12-12"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div></div></span
        >
       </router-link>
        <a
          class="flex items-center justify-center h-10 px-3 ml-5 text-sm font-bold text-gray-800 rounded-lg hover:text-teal-400"
          href="/circles"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="h-5 pr-2 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path></svg
          ><span> <font-awesome-icon icon="fa-solid fa-right-to-bracket" />Audits</span></a
        >
      </div>
      <div
        class="relative z-30 flex items-center justify-end flex-grow w-full h-10 col-span-2 cursor-pointer justify-self-end"
      >
      <router-link  to="/login"><a
          class="flex items-center justify-center h-10 px-3 ml-5 text-sm font-bold text-gray-800 rounded-lg"
       
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="-1 -1 20 20 "
            class="h-6 pr-1 text-gray-500 "
          >
            <path
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
            >
            </path>
            <path  
            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z">
            </path>
            </svg><span>SIGN IN</span></a
        ></router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>


