<template>
    <div>
        <h6 class="py-2 text-center text"> <strong>Lab1 Calculated</strong></h6>
        <hr class="my-2">
        <div>
       <!-- Total Price : 
       <span>{{totalprice}}</span>     -->
         <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
        ราคาสุทธิ
      </label>
      <input v-model="totalprice" class="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"  type="text" placeholder=""> 
       <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
        รับเงิน
      </label>
      <input v-model="txtRecive" class="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"  type="text" placeholder="">
       <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
        เงินทอน
      </label>
      <input v-model="calTotal" class="px-3 py-2 leading-tight text-gray-700 bg-green-400 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"  type="text" placeholder="">
        </div>
        <hr class="my-2">
          <h6 class="py-2 text-center text"> <strong>Lab2 Hightlight Color</strong></h6>
        <hr class="my-2">
        <!-- Grid -->
      
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                 <th scope="col" class="px-6 py-3">
                    ID.
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty.
                </th>
                <th scope="col" class="px-6 py-3">
                    Balance
                </th>
                    <th scope="col" class="px-6 py-3">
                    Cal
                </th>
   
 
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(item, index) in Product" :key="index" :class="chkStock(item.txtQty,item.balance,)">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     {{item.id}}
                </th>
                <td class="px-6 py-4">
                  {{item.name}}
                </td>
                <td class="px-6 py-4" >
                 {{item.price}}
                </td>
                <td class="px-6 py-4">
                <input v-model="item.txtQty" class="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"  type="text" placeholder="">
                </td>
                  <td class="px-6 py-4">
                 {{item.balance}}
                </td>
                <td class="px-6 py-4" >
                  
                    <!-- <p v-if="this.txtQty > item.balance">OverStock</p> -->
                </td>
            
            </tr>
        </tbody>
    </table>
</div>

        <!-- End -->

          <hr class="my-2">
          <h6 class="py-2 text-center text"> <strong>Lab3 Hightlight Color Select Role</strong></h6>
        <hr class="my-2">

         <!-- Grid -->
      
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                 <th scope="col" class="px-6 py-3">
                    ID.
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty.
                </th>
                <th scope="col" class="px-6 py-3">
                    Balance
                </th>
                    <th scope="col" class="px-6 py-3">
                    Action
                </th>
   
 
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(item, index) in Product" :key="index" @click="chkUser(item.id,item.name)" :class="{'bg_color': (item.id == selectedID)}">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     {{item.id}}
                </th>
                <td class="px-6 py-4">
                  {{item.name}}
                </td>
                <td class="px-6 py-4" >
                 {{item.price}}
                </td>
                <td class="px-6 py-4">
                <input v-model="item.txtQty" class="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"  type="text" placeholder="">
                </td>
                  <td class="px-6 py-4">
                 {{item.balance}}
                </td>
                <td class="px-6 py-4" >
                  <button @click="button_active_state = !button_active_state" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                    Click
                </button>
                </td>
            
            </tr>
        </tbody>
    </table>
</div>
  <span>UserName : {{this.selectedUser}}</span>
        <!-- End -->
          <hr class="my-2">
          <h6 class="py-2 text-center text"> <strong>Lab4 ProgressBar</strong></h6>
        <hr class="my-2">

        <form class="w-full ">
  <div class="flex flex-wrap mb-6 -mx-3">
    <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-first-name">
        First Name
      </label>
      <input class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
      <p class="text-xs italic text-red-500">Please fill out this field.</p>
    </div>
    <div class="w-full px-3 md:w-1/2">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-last-name">
        Last Name
      </label>
      <input class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap mb-6 -mx-3">
    <div class="w-full px-3">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-password">
        Password
      </label>
      <input class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
      <p class="text-xs italic text-gray-600">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap mb-2 -mx-3">
    <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-city">
        City
      </label>
      <input class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
    </div>
    <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
          <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-zip">
        Zip
      </label>
      <input class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
    </div>
  </div>
</form>
<div class="my-3">
      <button  class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
       Click
      </button>
</div>
 
        <!-- End -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            totalprice:100,
            selectedID:null,
            selectedUser:null,
            // Declare v-modle 
            txtRecive:0,
                Product:[
                {id:1,name:'Iphone12 ProMax',price:45000,balance:20},
                {id:2,name:'Iphone11 ProMax',price:40000,balance:25},
                {id:3,name:'Iphone10 ProMax',price:35000,balance:30},
                {id:4,name:'Iphone9 ProMax',price:30000,balance:10},
                    ]
        }
    },
    methods: {
        chkStock(balance,txtQty){
            // console.log(balance,txtQty);
            if(parseInt(balance) > parseInt(txtQty)){
              return 'error_danger'
            //  console.log('OverStock');
            }
        },
          chkUser(id,name){
          this.selectedID = id
          this.selectedUser = name
        },
    },
    computed:{
        calTotal(){
           return this.totalprice - this.txtRecive
        },
        
      
    }
}
</script>
<style scoped>
.error_danger{
    background-color: #f56565;
    color: white;
}
.bg_color{
    background-color: #4fd1c5;
 
}
</style>