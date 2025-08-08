<template>
  <div class="bg-[#0b0f19] text-white">

  <!-- Section -->
  <section class="px-6 lg:px-20 py-16 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
    
    <!-- Left Content -->
    <div class="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
      
      <!-- Heading -->
      <h2 class="text-2xl lg:text-3xl font-bold leading-snug">
        Stay connected. Trade wherever<br> you are.
      </h2>

      <!-- QR Code + Download -->
      <div class="flex items-center space-x-4">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=example.com" 
             alt="QR Code" 
             class="border border-gray-600 p-2 rounded-md bg-[#0b0f19]">
        
        <div class="text-left">
          <p class="text-gray-400 text-sm">Scan to Download App</p>
          <p class="font-semibold">
            <a href="#" class="underline hover:text-gray-300">iOS</a> & 
            <a href="#" class="underline hover:text-gray-300">Android</a>
          </p>
        </div>
      </div>

      <!-- OS Icons -->
      <div class="flex items-center space-x-10 pt-4">
        <div class="flex flex-col items-center">
          <svg class="w-8 h-8 mb-1" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M318.7 268.6c-.2-36.7 16.4-64.4 50-84.3-18.8-26.9-47.3-41.8-86.5-44.7-36.4-2.8-76.2 21.4-90.2 21.4s-47.2-20.8-77.7-20.2C65.1 141.6 17 178.1 17 257.9c0 24.1 8.6 49.3 25.8 75.7 20.4 30.6 47.4 67.1 85.8 65.9 34.5-1.1 47.3-22.5 88.9-22.5 41.4 0 53.1 22.5 88.1 21.8 38.7-.7 63.1-31.3 82.9-62.1-48.3-19.5-70.8-47.1-70.8-87.1zM255.1 120.5c27.1-32.1 24.5-61.3 23.6-71.5-23 .9-50.1 15.3-65.8 33.9-14.4 17-27.2 44.5-23.7 70.4 25 .7 50.6-14.4 65.9-32.8z"/>
          </svg>
          <span class="text-sm">MacOS</span>
        </div>

        <div class="flex flex-col items-center">
          <svg class="w-8 h-8 mb-1" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 93.7L183.6 45v178.4H0V93.7zm0 324.6l183.6 48.7V288.6H0v129.7zM203.6 482.3l244.4-64.8V288.6H203.6v193.7zm0-408.3v149.4h244.4V45.5L203.6 74z"/>
          </svg>
          <span class="text-sm">Windows</span>
        </div>
      </div>
    </div>

    <!-- Right: Trading Image -->
    <div>
      <img src="../assets/icons/trading-screen.png" alt="Trading Screen" class="rounded-md w-[600px]">
    </div>
  </section>

</div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>