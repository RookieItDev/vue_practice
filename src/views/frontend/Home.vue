<template>
   <section>
        <div class="container  mx-auto">
            <div class="flex flex-wrap items-center mb-4">
                <div class="w-full p-4 lg:flex-1">
                    <h6 class="font-medium text-indigo-600">บริการของเรา</h6>
                    <h2 class="mb-2 text-4xl font-semibold leading-tight text-gray-800 capitalize">บริการที่ดีที่สุดสำหรับลูกค้าทุกท่าน</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p>
                </div>
                <div class="w-full p-4 lg:w-auto">
                    <a href="#" @click="toggleModal = !toggleModal" class="inline-block px-6 py-2 text-white bg-green-600 border-2 border-green-600 rounded-xl hover:text-green-600 hover:bg-green-100 ">Modal</a>
                </div>
                <div class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto" v-if="toggleModal">
    <div class="relative w-auto max-w-2xl mx-auto">
        <div class="flex flex-col w-full bg-white rounded shadow-2xl">
            <span class="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odio neque, corporis beatae dolores natus dolorum pariatur aperiam vel quidem cupiditate voluptas hic molestiae veniam placeat facilis. Rem, facilis autem.</span>
     <input type="datetime-local" name="" id="">
     <select name="" id="">
         
     </select>
      inpu
      <div class="flex flex-row ">
        <button @click="toggleModal=false" class="w-3/12 py-2 m-auto mt-1 mb-3 text-white bg-green-500 rounded-xl">Close</button>
        <button type="submit" @click="Update()" class="w-3/12 py-2 m-auto mt-1 mb-3 text-white bg-green-500 rounded-xl">Save change</button>
      </div>
       
        </div>
    </div>
</div>
<div v-if="toggleModal" class="fixed overflow-x-hidden overflow-y-auto">
</div>
<div v-if="toggleModal" class="absolute inset-0 z-40 bg-black opacity-25 "></div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full p-4 xl:w-3/12 sm:w-6/12">
                    <a href="#" class="block px-6 py-16 bg-gray-200 rounded-lg shadow-lg hover:bg-indigo-400 hover:text-white"> <i class="mb-4 text-4xl text-indigo-700 fa-laptop-code fas"></i> <h5 class="mb-1 text-lg font-semibold">
                    Development </h5> <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p> </a>
                </div>
                <div class="w-full p-4 xl:w-3/12 sm:w-6/12">
                    <a href="#" class="block px-6 py-16 bg-gray-200 rounded-lg shadow-lg hover:bg-indigo-400 hover:text-white sm:mt-16 sm:-mb-16"> 
                        <i class="mb-4 text-4xl text-indigo-700 fa-drafting-compass fas"></i> 
                       <i class="fas fa-sign-in-alt"></i>
                        <h5 class="mb-1 text-lg font-semibold">
                    Product Design </h5> <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p> </a>
                </div>
                <div class="w-full p-4 xl:w-3/12 sm:w-6/12" >
                    <a href="#" class="block px-6 py-16 bg-gray-200 rounded-lg shadow-lg hover:bg-indigo-400 hover:text-white"> <i class="mb-4 text-4xl text-indigo-700 fa-swatchbook fas"></i> <h5 class="mb-1 text-lg font-semibold">
                    UI/UX Research </h5> <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p> </a>
                </div>
                <div class="w-full p-4 xl:w-3/12 sm:w-6/12" >
                    <a href="#" class="block px-6 py-16 bg-gray-200 rounded-lg shadow-lg hover:bg-indigo-400 hover:text-white sm:mt-16"> <i class="mb-4 text-4xl text-indigo-700 fa-network-wired fas"></i> <h5 class="mb-1 text-lg font-semibold">
                    Digital Marketing </h5> <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p> </a>
                </div>
            </div>
        </div>
    </section>
</template>
 <script>
 export default {
     name: "modal",
     data(){
            return {
                toggleModal: false
            }
     },
     methods:{
         Update(){

         }
     }


 }
 </script>