<template>
<div  class="p-3 pl-0 mt-3 text-sm text-gray-500 rounded-md justify-items-center"  >
    <H2 class="font-bold text-md">Form Create Fuel Price</H2>
</div>
<div class="flex mt-2">
    <div class="pr-3 text-gray-500">
     <a class="p-1.5 text-sm font-bold bg-white border rounded-md shadow cursor-pointer border-gray-50">
       <i class="pr-1 text-base text-red-500 fas fa-save "></i>  <span class="text-xs">Save Draft </span>   
     </a>
    </div>

     <div class="pr-3 text-gray-500">
     <a class="p-1.5 text-sm font-bold bg-white border rounded-md shadow cursor-pointer border-gray-50">
       <i class="pr-1 text-base text-blue-400 fas fa-envelope "></i>  <span class="text-xs">Submit to Approval </span>  
     </a>
    </div>

     <div class="pr-3 text-gray-500">
     <a class="p-1.5 text-sm font-bold bg-white border rounded-md shadow cursor-pointer border-gray-50">
       <i class="pr-1 text-base text-green-400 fas fa-file-export "></i>  <span class="text-xs">Export to Excel </span>    
     </a>
    </div>

     <div class="pr-3 text-gray-500">
     <a class="p-1.5 text-sm font-bold bg-white border rounded-md shadow cursor-pointer border-gray-50">
       <i class="pr-1 text-base text-yellow-300 fas fa-file-upload "></i> <span class="text-xs">Upload file Excel </span>    
     </a>
    </div>
</div>
<!-- content -->
<div  class="container p-3 my-6 text-sm text-gray-500 bg-white rounded-md justify-items-center justify-self-center"  >
    <H2 class="mb-4 font-bold text-md">เพิ่มราคาเชื้อเพลิง</H2>
    <!-- search -->
    <div class="flex ">
        <div class="flex-1">
              <div class="flex my-2 bg-green ">
         <div class="pr-3 text-gray-900 ">
     <a class="p-1.5 text-sm font-bold border rounded-md shadow cursor-pointer ring-gray-400 border-gray-50">
       <i class="pr-1 text-base text-green-500 fas fa-search "></i>  <span class="text-xs">Search vendor</span>    
     </a>
    </div>
    </div>
        </div>
        <div class="pr-2 mt-2 text-gray-900 flex-2">
        Bulk Items : 
        </div>
         <div class="pr-2 flex-2">
       <input type="text"  class="block px-3 rounded-md shadow-sm appearance-none h-7 text-slate-900 bg-gray-50 w-36 sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ring-1 ring-gray-300 hover:bg-white" placeholder="Start Date"  onfocus="(this.type='date')" required="" value="">
        </div>
         <div class="pr-2 flex-2">
       <input type="text"  class="block px-3 rounded-md shadow-sm appearance-none h-7 text-slate-900 bg-gray-50 w-36 sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ring-1 ring-gray-300 hover:bg-white" placeholder="Effective Date"  onfocus="(this.type='date')" required="" value="">
        </div>
         <div class="pr-2 flex-2">
       <input type="text"  class="block w-24 px-3 rounded-md shadow-sm appearance-none h-7 text-slate-900 bg-gray-50 sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ring-1 ring-gray-300 hover:bg-white" placeholder="Old Price" required="" value="">
        </div>
         <div class="pr-2 flex-2">
       <input type="text"  class="block w-24 px-3 rounded-md shadow-sm appearance-none h-7 text-slate-900 bg-gray-50 sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ring-1 ring-gray-300 hover:bg-white" placeholder="New Price" required="" value="">
        </div>
         <div class="pr-2 flex-2">
        <select  class="w-full text-gray-400 border border-gray-300 rounded-md h-87 7text-sm bg-gray-50 dark:bg-gray-700 ">
            <option selected class="text-center text">- Fuel Type -</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            </select>
        </div>
        <div class="text-gray-900 flex-2">
              <a class="p-1.5 font-bold bg-white rounded-md shadow cursor-pointer ring-gray-500">
       <i class="pr-1 text-base text-green-500 fas fa-save "></i> <span class="text-xs">Save Bulk</span>  
     </a>
        </div>
    </div>
  
    <!-- end -->
    <!-- table -->
    
<div class="relative my-5 overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                 <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Date
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                    </div>
                </th>
                     <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        ID
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                    </div>
                </th>
                     <th scope="col" class="px-6 py-3 text-center text">
                    <div class="">
                        Name
                    </div>
                </th>
                     <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Distance
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                    </div>
                </th>
                     <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        KM
                    </div>
                </th>
                     <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        FuelType
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        OldPrice
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        NewPrice
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Effecive
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                    </div>
                </th>
                   <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Delete
                    </div>
                </th>
             
            </tr>
        </thead>
        <tbody>
            <tr class="items-center justify-center text-xs text-gray-500 bg-white">
                <td  class="pl-2 text-center text">
                <input type="date"   class="block h-6 px-3 bg-white rounded-md shadow-sm w-28 sm:text-xs focus:outline-none ring-1 ring-gray-300 " v-model="startDate">
                 <!-- <p>{{currentDateTime()}}</p> -->
                </td>
                <td class="text-center text">
                    101002
                </td>
                 <td class="text-center text">
                    บริษัท ยะลาพาราวู้ดเทรดดิ้ง จำกัด
                </td>
                 <td class="text-center text">
                    91 หมู่ที่ 1 ต.พร่อน อ.เมือง ยะลา  95160
                </td>
                 <td class="text-center text ">
                    100
                </td>
                <td class="text-center text ">
                      <select  class="w-full h-6 text-sm text-gray-400 bg-white border border-gray-300 rounded-md dark:bg-gray-700 ">
            <option selected class="text-center text">- Fuel Type -</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            </select>
                </td>
                <td class="pl-5">
                <input type="text"   class="block w-16 h-6 px-3 bg-white rounded-md shadow-sm sm:text-xs focus:outline-none ring-1 ring-gray-300 " v-model="oldPrice">

                </td>
                <td class="pl-5">
                 <input type="text"   class="block w-16 h-6 px-3 bg-white rounded-md shadow-sm sm:text-xs focus:outline-none ring-1 ring-gray-300" v-model="newPrice">

                </td>
                  <td class="px-6 py-4">
                  <input type="date"   class="block h-6 px-3 bg-white rounded-md shadow-sm w-28 sm:text-xs focus:outline-none ring-1 ring-gray-300 " v-model="startDate">

                </td>
                   <td class="px-6 py-4 text-center text">
                    <a href="#" class="text-base text-gray-600 dark:text-blue-500 hover:underline"><i class="fas fa-trash"></i></a>
                </td>
            </tr>
        </tbody>
    </table>
   
</div>

    <!-- end -->

     <!-- paginate -->
    
<nav aria-label="Page navigation example my-5">
  <ul class="inline-flex -space-x-px">
    <li>
      <a href="#" class="px-3 py-1.5 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" class="px-3 py-1.5 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="px-3 py-1.5 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="px-3 py-1.5 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="px-3 py-1.5 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="px-3 py-1.5 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="px-3 py-1.5 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>
<div class="my-2"></div>
    <!-- end -->
<div class="my-7">
  <H2 class="mb-4 font-bold text-md">คู่ค้า</H2>
</div>
</div>
<!-- end -->
</template>

<script>
import moment from 'moment'
export default {
    data(){
    return{
       startDate: moment().format("YYYY-MM-DD"),
       effectDate: moment().format("YYYY-MM-DD"),
    }
    },
    methods: {
      currentDateTime() {
      return moment(this.start_date).format('D/MM/YYYY')
    },
    format(value, event) {
    return moment(value).format('YYYY-MM-DD')
  },
  },

}
</script>