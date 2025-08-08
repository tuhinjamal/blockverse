<template>
  <div class="px-6 lg:px-20   bg-[#181a20] text-white">
    <section class="max-w-7xl mx-auto px-4 py-12">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div class="text-start">
          <h2 class="text-3xl font-extrabold text-[#F9A825]">
            Most Trending Tokens
          </h2>
          <p class="text-gray-400 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.<br />
            Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div>
          <button
            class="mt-4 px-5 py-2 border border-gray-500 rounded-md hover:bg-gray-700 transition"
          >
            Market Overview →
          </button>
        </div>
      </div>
      <div class="grid md:grid-cols-[1fr_auto] gap-6">
        <!-- Left Card -->
        <div class="bg-[#1E1E1E] rounded-lg p-4">
          <!-- Tabs -->
          <div class="flex gap-6 border-b border-gray-700 mb-4">
            <button class="text-[#F9A825] border-b-2 border-[#F9A825] pb-2">
              Hot Derivatives
            </button>
            <button class="text-gray-400 hover:text-white pb-2">
              Hot Coins
            </button>
          </div>

          <!-- Table -->
          <div class="space-y-4">
            <!-- Row -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img
                   src="../assets/icons/btc-icon.png"
                  class="w-6 h-6"
                  alt="BTC"
                />
                <span class="text-sm">BTCUSDT</span>
              </div>
              <span>103,800.1</span>
              <span class="text-green-500 text-sm">+0.32%</span>
              <span class="text-green-500">📈</span>
              <button class="bg-[#F9A825] text-black px-4 py-1 rounded-md">
                Trade
              </button>
            </div>

            <!-- Repeat for other rows -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img
                   src="../assets/icons/btc-icon.png"
                  class="w-6 h-6"
                  alt="ETH"
                />
                <span class="text-sm">ETHUSDT</span>
              </div>
              <span>2,483</span>
              <span class="text-red-500 text-sm">-0.32%</span>
              <span class="text-red-500">📉</span>
              <button class="bg-[#F9A825] text-black px-4 py-1 rounded-md">
                Trade
              </button>
            </div>
            <!-- Add more rows as needed -->
          </div>
        </div>

        <!-- Right Card -->
         
          <div class="bg-[#1e1f25] text-white rounded-xl p-4 w-80">
            <!-- Top Gainers -->
            <div>
              <h2 class="text-sm text-gray-400 font-medium mb-2">
                Top Gainers
              </h2>
              <div class="space-y-3">
                <!-- Row -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img
                       src="../assets/icons/btc-icon.png"
                      alt="BTC"
                      class="w-5 h-5"
                    />
                    <span class="text-sm font-medium">BTCUSDT</span>
                  </div>
                  <span class="text-sm text-gray-300">103,800.1</span>
                  <span class="text-sm text-red-500">-0.32%</span>
                  <svg
                    class="w-12 h-4 text-red-500"
                    fill="none"
                    viewBox="0 0 48 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M0,6 L8,2 L16,8 L24,4 L32,10 L40,6 L48,8"
                    />
                  </svg>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img
                       src="../assets/icons/btc-icon.png"
                      alt="BTC"
                      class="w-5 h-5"
                    />
                    <span class="text-sm font-medium">BTCUSDT</span>
                  </div>
                  <span class="text-sm text-gray-300">103,800.1</span>
                  <span class="text-sm text-red-500">-0.32%</span>
                  <svg
                    class="w-12 h-4 text-red-500"
                    fill="none"
                    viewBox="0 0 48 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M0,6 L8,2 L16,8 L24,4 L32,10 L40,6 L48,8"
                    />
                  </svg>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img
                       src="../assets/icons/btc-icon.png"
                      alt="BTC"
                      class="w-5 h-5"
                    />
                    <span class="text-sm font-medium">BTCUSDT</span>
                  </div>
                  <span class="text-sm text-gray-300">103,800.1</span>
                  <span class="text-sm text-green-500">+0.32%</span>
                  <svg
                    class="w-12 h-4 text-green-500"
                    fill="none"
                    viewBox="0 0 48 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M0,6 L8,10 L16,4 L24,8 L32,2 L40,6 L48,4"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- New Listings -->
            <div class="mt-6">
              <h2 class="text-sm text-gray-400 font-medium mb-2">
                New Listings
              </h2>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img
                       src="../assets/icons/btc-icon.png"
                      alt="BTC"
                      class="w-5 h-5"
                    />
                    <span class="text-sm font-medium">BTCUSDT</span>
                  </div>
                  <span class="text-sm text-gray-300">103,800.1</span>
                  <span class="text-sm text-green-500">+0.32%</span>
                  <svg
                    class="w-12 h-4 text-green-500"
                    fill="none"
                    viewBox="0 0 48 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M0,6 L8,10 L16,4 L24,8 L32,2 L40,6 L48,4"
                    />
                  </svg>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img
                      src="../assets/icons/btc-icon.png"
                      alt="XMR"
                      class="w-5 h-5"
                    />
                    <span class="text-sm font-medium">BTCUSDT</span>
                  </div>
                  <span class="text-sm text-gray-300">103,800.1</span>
                  <span class="text-sm text-green-500">+0.32%</span>
                  <svg
                    class="w-12 h-4 text-green-500"
                    fill="none"
                    viewBox="0 0 48 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M0,6 L8,10 L16,4 L24,8 L32,2 L40,6 L48,4"
                    />
                  </svg>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img
                       src="../assets/icons/btc-icon.png"
                      alt="BTC"
                      class="w-5 h-5"
                    />
                    <span class="text-sm font-medium">BTCUSDT</span>
                  </div>
                  <span class="text-sm text-gray-300">103,800.1</span>
                  <span class="text-sm text-green-500">+0.32%</span>
                  <svg
                    class="w-12 h-4 text-green-500"
                    fill="none"
                    viewBox="0 0 48 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M0,6 L8,10 L16,4 L24,8 L32,2 L40,6 L48,4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
         
      </div>
       <div class="flex justify-between items-center mt-8">
        <div class="text-start">
          <h2 class="text-3xl font-extrabold text-[#F9A825]">
            Catch the Next Major Market Move
          </h2>
          <p class="text-gray-400 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.<br />
            Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div>
          <button
            class="mt-4 px-5 py-2 border border-gray-500 rounded-md text-black font-semibold  bg-[#F9A825] transition"
          >
            Get Started →
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
