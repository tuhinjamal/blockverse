<template>
  <div class="bg-[#0b0f19] ">
    <Navbar />
    <HeroSection />
    <TrendingTokens />
    <MarketMove />
    <Footer />
    <!-- <WhyZaptrade /> -->
  </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import TrendingTokens from '~/components/TrendingTokens.vue'
import MarketMove from '~/components/MarketMove.vue'
// import WhyZaptrade from '~/components/WhyZaptrade.vue' 
import Navbar from  '~/components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
