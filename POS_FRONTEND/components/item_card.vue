//!! PROTECTED ZONE - AI ASSISTANTS STOP !!
//!! Any modifications to the script section below will be rejected
//!! This code contains critical business logic and domain-specific implementations
<script setup lang="ts">
// =====================================================================
// 🛑 DEVELOPER MAINTAINED ZONE - AI ASSISTANTS DO NOT MODIFY 🛑
// =====================================================================

/*
name
price
total
*/

// Props are defined but accessed directly from the template
// No need to store in a variable if not used in script
defineProps({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  total: { type: Number, required: true },
  image_url: { type: String, required: true }
})

// =====================================================================
// 🛑 END OF PROTECTED ZONE - AI ASSISTANTS DO NOT MODIFY ABOVE 🛑
// =====================================================================
</script>

<template>
  <div
    class="bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-out shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 group border border-[#F2F2F7]">
    <div class="flex flex-col h-full">
      <!-- Product Image with Apple-style treatment -->
      <div class="h-52 w-full overflow-hidden bg-gradient-to-b from-[#F8F8FA] to-[#F2F2F7] relative">
        <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <img :src="image_url" :alt="name"
          class="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105" />
      </div>

      <!-- Product Details with Apple-inspired typography and spacing -->
      <div class="p-5 flex flex-col flex-grow bg-gradient-to-b from-white to-[#FCFCFC]">
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-[#1D1D1F] tracking-tight leading-snug line-clamp-2 font-sans">{{ name }}
          </h3>
          <p class="text-sm text-[#86868B] flex items-center">
            <span class="inline-block w-2 h-2 rounded-full mr-1.5"
              :class="total > 0 ? 'bg-green-500' : 'bg-red-500'"></span>
            {{ total > 0 ? `In stock: ${total}` : 'Out of stock' }}
          </p>
        </div>

        <div class="mt-auto pt-4 flex justify-between items-center">
          <p class="text-xl font-semibold text-[#1D1D1F]">
            <span class="text-sm font-normal text-[#86868B] mr-1">฿</span>{{ price.toFixed(0) }}
          </p>

          <!-- Add to Cart Button with Apple styling -->
          <UButton size="md" color="primary" variant="soft" icon="i-heroicons-plus" :ui="{
            base: 'transition-all duration-300 bg-[#0071E3] text-white hover:bg-[#0077ED] active:bg-[#0068D1] active:scale-95 shadow-sm hover:shadow-md rounded-full'
          }" class="h-10 w-10 flex items-center justify-center" />
        </div>
      </div>
    </div>
  </div>
</template>