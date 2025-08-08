<template>
  <div
    class="bg-[#0b0f1a] text-white flex justify-center items-center min-h-screen"
  >
    <section class="text-center">
      <!-- Heading -->
      <h2 class="text-2xl font-bold mb-8">Why Zaptrade?</h2>

      <!-- Card Container -->
      <div class="flex flex-col md:flex-row gap-6 justify-center">
        <!-- Security -->
        <div
          class="bg-[#141a26] border border-gray-700 rounded-lg p-6 text-left w-72"
        >
          <div class="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 014 0l4 2.31a4 4 0 012 3.464V13a8 8 0 11-16 0V10.128a4 4 0 012-3.464l4-2.31z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Security</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Your assets are protected with bank-level encryption and two-factor
            authentication for safe and secure trading.
          </p>
        </div>

        <!-- Speed -->
        <div
          class="bg-[#141a26] border border-gray-700 rounded-lg p-6 text-left w-72"
        >
          <div class="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12h2a8 8 0 018-8V2zm0 20a8 8 0 01-8-8H2c0 5.523 4.477 10 10 10v-2zm8-8a8 8 0 01-8 8v2c5.523 0 10-4.477 10-10h-2zm-8-8a8 8 0 018 8h2c0-5.523-4.477-10-10-10v2z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Speed</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Instant trades, fast deposits & withdrawals.
          </p>
        </div>

        <!-- Support -->
        <div
          class="bg-[#141a26] border border-gray-700 rounded-lg p-6 text-left w-72"
        >
          <div class="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 13V6a3 3 0 00-3-3H9a3 3 0 00-3 3v7m12 0a3 3 0 003 3h1a1 1 0 001-1v-1a9 9 0 10-18 0v1a1 1 0 001 1h1a3 3 0 003-3m12 0v6"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Support</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            24/7 expert support to help you anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
