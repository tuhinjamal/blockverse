<template>
  <section class="relative bg-dark px-16 py-12">
    <!-- Video Background -->
    <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
      <source src="../assets/videos/b-herosections v1.mp4" type="video/mp4" />
    </video>

    <!-- Content -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <!-- Left Text -->
      <div class="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
        <h1 class="text-4xl lg:text-6xl font-bold leading-tight text-[#FFBE38]">
          Build Wealth with <span class="text-primary">Crypto</span>
        </h1>
        <p class="mt-4 text-gray-300">
          Join the growing community on Zaptrade — the trusted destination for effortless crypto investing and trading.
        </p>

        <!-- Input -->
        <div class="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
          <div class="flex bg-gray-800 rounded-md border border-[#A3A3A3]">
            <input
              type="text"
              placeholder="Email/Phone number"
              class="px-4 py-3 rounded-md text-white w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button class="bg-[#FFBE38] px-6 py-2 my-1 mx-1 rounded-md font-semibold text-black">
              Sign Up
            </button>
          </div>
          <p class="text-[#E0E0E066]">or</p>
          <div class="flex items-center gap-2 bg-gray-800 rounded-md border border-[#A3A3A3]">
            <img src="../assets/icons/google-icon.png" alt="Google" class="w-[38px] h-[38px] p-2 cursor-pointer" />
            <img src="../assets/icons/apple-icon.png" alt="Apple" class="w-[38px] h-[38px] p-2 cursor-pointer" />
          </div>
        </div>
      </div>

      <!-- Globe / Cards -->
      <div class="w-full h-[400px] sm:h-[500px] flex items-center justify-center lg:justify-end">
        <div class="relative w-full max-w-[500px] aspect-square mx-auto lg:mx-0 cards-container">
          <div
            v-for="(coin, index) in coins"
            :key="index"
            class="absolute  top-1/2 left-1/2 transform -translate-x-1/16 -translate-y-1/2   card"
            :style="{
              transform: `rotate(${coin.angle}deg) translateX(var(--radius)) rotate(${-coin.angle}deg) scale(${coin.scale})`
            }"
          >
            <div class="flex justify-center items-center gap-1 bg-white/10 backdrop-blur-md rounded-lg p-3 shadow-lg transition-transform duration-300 hover:scale-110">
              <img :src="coin.icon" class="w-8 h-8" />
              <div>
                <p class="font-semibold">{{ coin.name }}</p>
                <p class="text-lg font-bold">{{ coin.price }}</p>
                <p class="text-green-400 text-sm">{{ coin.change }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import btcIcon from "../assets/icons/btc-icon.png";
import ethIcon from "../assets/icons/btc-icon.png";
import ltcIcon from "../assets/icons/btc-icon.png";
import xrpIcon from "../assets/icons/btc-icon.png";

const coins = ref([
  { name: "Bitcoin", price: "$52,291", change: "+0.25%", icon: btcIcon, angle: 180, scale: 1 },
  { name: "Ethereum", price: "$28,291", change: "+0.25%", icon: ethIcon, angle: 120, scale: 0.9 },
  { name: "Litecoin", price: "$8,291", change: "+0.25%", icon: ltcIcon, angle: 60, scale: 0.75 },
  { name: "Litecoin", price: "$8,291", change: "+0.25%", icon: ltcIcon, angle: 0, scale: 0.9 },
  { name: "XRP", price: "$1.02", change: "+0.25%", icon: xrpIcon, angle: 240, scale: 1 }
]);
</script>

<style lang="postcss">
.card {
  transform-origin: center;
  --radius: clamp(80px, 25vw, 200px);
}
</style>
