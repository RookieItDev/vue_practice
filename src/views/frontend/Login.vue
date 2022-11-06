<template>
  <div class="flex justify-center px-6 ">
    <div class="px-2 w-full max-w-lg">
      <!---->
      <div class="flex flex-col items-center p-12 w-full bg-white rounded-lg">
        <h3 class="forge-h3">Wood Approval Sign in your account gulf</h3>
        <form class="mt-5 w-full">
          <!----><!----><!---->
          <div class="mt-5">
            <label class="flex flex-col w-full"
              ><span class="text-md">Username</span
              ><input type="text"  class="mt-2 appearance-none text-slate-900 bg-gray-100 rounded-md block w-full px-3 h-10 shadow-sm sm:text-md focus:outline-none 
                placeholder:text-slate-400 focus:ring-2 focus:ring-green-500 ring-1 ring-green-200 hover:bg-green-100" required="" value=""></label>
          </div>
          <div class="relative mt-7">
            <label class="flex flex-col w-full"
              ><span class="text-md">Password</span
              ><input type="password"  class="mt-2 appearance-none text-slate-900 bg-gray-100 rounded-md block w-full px-3 h-10 shadow-sm sm:text-md focus:outline-none 
                placeholder:text-slate-400 focus:ring-2 focus:ring-green-500 ring-1 ring-green-200 hover:bg-green-100" required="" value=""></label>
          </div>
          <div class="mt-7">
            <label class="flex items-center text-md"
              ><input
                type="checkbox"
                name="remember"
                class="mr-2 p-2 text-teal-400 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              /><span>Remember me</span></label
            >
          </div>
          <div class="mt-10">
          <button type="submit" class="h-10 w-20 ring-1 ring-green-500 rounded-lg bg-green-300">Sign in</button>
          </div>
        </form>
      </div>
      <div class="flex flex-col items-center mt-6 w-full text-sm">
        <span>Single sign on to website</span
        >
      </div>
    </div>
  </div>
</template>
