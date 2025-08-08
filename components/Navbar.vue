<template>
<div class="bg-[#0b0f19]/10 backdrop-blur-md sticky top-0 z-50">
  <!-- Navbar -->
  <nav class="flex items-center justify-between px-6 lg:px-20 py-4 bg-transparent">
    <!-- Left: Logo -->
    <div class="flex items-center space-x-2">
      <img src="../assets/icons/Logo.png" alt="Logo" class="w-6 h-6 text-orange-500">
      <span class="text-orange-500 font-semibold text-lg">Zaptrade</span>
    </div>

    <!-- Middle: Menu -->
    <div class="hidden md:flex space-x-6 text-white text-sm">
      <a href="#" class="hover:text-orange-500">Buy Crypto</a>
      <a href="#" class="hover:text-orange-500">Markets</a>
      <div class="relative group">
        <button class="hover:text-orange-500 flex justify-center gap-2 items-center">Trade <img src="../assets/icons/nav-arrow.png" class="h-2" alt=""></button>
        <!-- Dropdown (optional) -->
        <div class="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-md w-40">
          <a href="#" class="block px-4 py-2 hover:bg-gray-100">Spot</a>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100">Margin</a>
        </div>
      </div>
      <a href="#" class="hover:text-orange-500">Futures</a>
      <div class="relative group">
        <button class="hover:text-orange-500 flex justify-center gap-2 items-center">Earn <img src="../assets/icons/nav-arrow.png" class="h-2" alt=""></button>
        <!-- Dropdown (optional) -->
        <div class="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-md w-40">
          <a href="#" class="block px-4 py-2 hover:bg-gray-100">Savings</a>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100">Staking</a>
        </div>
      </div>
    </div>

    <!-- Right: Search & Buttons -->
    <div class="flex items-center space-x-4">
      <!-- Search Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
      </svg>

      <!-- Sign Up -->
      <a href="#" class="bg-yellow-400 text-black px-4 py-1.5 rounded-md font-medium hover:bg-yellow-500 transition">
        Sign Up
      </a>

      <!-- Sign In -->
      <a href="#" class="bg-white text-black px-4 py-1.5 rounded-md font-medium hover:bg-gray-100 transition">
        Sign In
      </a>
    </div>
  </nav>
</div>
</template>