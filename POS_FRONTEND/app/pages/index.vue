//!! PROTECTED ZONE - AI ASSISTANTS STOP !!
//!! Any modifications to the script section below will be rejected
//!! This code contains critical business logic and domain-specific implementations
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import get_items from '../../utils/get_items';

// =====================================================================
// 🛑 DEVELOPER MAINTAINED ZONE - AI ASSISTANTS DO NOT MODIFY 🛑
// =====================================================================

const item = ref<ITEM[]>([]);
const fetchItem = async () => {
  const data = await get_items();
  item.value = data;
}


onMounted(() => {
  fetchItem();
})


// =====================================================================
// 🛑 END OF PROTECTED ZONE - AI ASSISTANTS DO NOT MODIFY ABOVE 🛑
// =====================================================================
</script>

<!-- ============================================================ -->
<!-- AI ASSISTANT GUIDELINES - READ CAREFULLY - DO NOT DELETE -->
<!-- ============================================================ -->
<!-- 1. ❌ DO NOT MODIFY any TypeScript/JavaScript code in the script section above -->
<!-- 2. ❌ DO NOT ADD additional script tags or modify the existing script structure -->
<!-- 3. ❌ DO NOT SUGGEST changes to the TypeScript/JavaScript section -->
"<!-- 4. ❌ don't delete breift template -->",
<!-- 5. ✅ ONLY USE Nuxt UI 3.0 components and Tailwind CSS for styling -->
<!-- 6. ✅ Follow ONLY formal and professional theme design patterns -->
<!-- 7. ❌ DO NOT CREATE additional files - all code must remain in this file -->
<!-- 8. ✅ Maintain proper component architecture and follow Vue best practices -->
<!-- 9. ✅ Respect the existing state management pattern -->
<!-- 10. ✅ Focus only on the HTML template section when making suggestions -->
<!-- 11. ⚠️ IMPORTANT: Maintain a SINGLE CONSISTENT THEME throughout the entire project -->
<!-- 12. ⚠️ Apple-Like Design: Prioritize clean UI, soft gradients, and high contrast readability -->
<!-- 13. ✅ Use subtle micro-interactions and fluid transitions for a smooth experience -->
<!-- 14. ✅ Accessibility First: Ensure WCAG AA compliance for color contrast and typography -->
<!-- 15. ✅ Optimize for both desktop and mobile with a seamless, responsive design -->
<!-- **Note:** When encountering <script setup lang="ts">, skip and do not modify this section -->

<!-- AI WRITE HERE -->
<template>
  <div class="min-h-screen bg-[#f5f5f7] flex">
    <!-- Left Side - Product Grid -->
    <div class="flex-1 overflow-auto">
      <!-- Header Section -->
      <header class="py-6 px-8 bg-white shadow-sm sticky top-0 z-10">
        <div class="max-w-7xl mx-auto flex items-center">
          <UIcon name="i-heroicons-shopping-bag" class="h-7 w-7 text-[#007AFF] mr-3" />
          <h1 class="text-3xl font-semibold text-gray-900 tracking-tight">Point of Sale</h1>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <!-- Items Grid - 5 Column Layout -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <!-- Using proper PascalCase component name for auto-imports -->
          <NuxtLink v-for="(itemData, index) in item" :key="index" :to="`/item/${itemData.id}`"
            class="transition-all duration-200 hover:scale-[1.02]">
            <!-- Inline card implementation that matches your item_card component design -->
            <div
              class="bg-white rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl hover:-translate-y-[3px] group">
              <div class="flex flex-col h-full">
                <!-- Product Image -->
                <div class="h-48 w-full overflow-hidden bg-[#F2F2F7] relative">
                  <img :src="itemData.image_url" :alt="itemData.name"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>

                <!-- Product Details -->
                <div class="p-4 flex flex-col flex-grow">
                  <h3 class="font-medium text-lg text-gray-900 mb-1 line-clamp-2 font-sans">{{ itemData.name }}</h3>
                  <p class="text-sm text-gray-500 mb-3">In stock: {{ itemData.total }}</p>

                  <div class="mt-auto flex justify-between items-center">
                    <p class="text-xl font-semibold text-[#007AFF]">฿{{ itemData.price.toFixed(2) }}</p>

                    <!-- Add to Cart Button -->
                    <UButton size="sm" color="primary" variant="soft" icon="i-heroicons-plus" :ui="{
                      rounded: 'rounded-full',
                      base: 'transition-all duration-200 hover:bg-[#007AFF] hover:text-white active:scale-95'
                    }" />
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Empty State -->
        <div v-if="item.length === 0" class="text-center py-20">
          <UIcon name="i-heroicons-shopping-bag" class="mx-auto h-16 w-16 text-gray-400" />
          <h3 class="mt-4 text-lg font-medium text-gray-900">No items available</h3>
          <p class="mt-1 text-sm text-gray-500">Please check back later for available products.</p>
        </div>
      </main>
    </div>

    <!-- Right Side - Payment/Checkout Panel -->
    <div class="w-96 bg-white shadow-lg border-l border-gray-200 flex flex-col">
      <!-- Order Summary Header -->
      <div class="p-6 border-b border-gray-200">
        <h2 class="text-xl font-medium text-gray-900">Current Order</h2>
      </div>

      <!-- Cart Items List -->
      <div class="flex-1 overflow-auto p-4">
        <!-- This would be populated with selected items -->
        <div class="text-center text-gray-500 py-10">
          <UIcon name="i-heroicons-shopping-cart" class="h-12 w-12 mx-auto text-gray-300" />
          <p class="mt-2">No items in cart</p>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="p-6 bg-gray-50 border-t border-gray-200">
        <div class="space-y-3">
          <!-- Divider -->
          <div class="border-t border-gray-200 my-2"></div>

          <!-- Total -->
          <div class="flex justify-between font-medium text-lg">
            <span>Total</span>
            <span>฿0.00</span>
          </div>
        </div>

        <!-- Checkout Button -->
        <UButton class="w-full mt-6" color="primary" size="lg" rounded="xl" :ui="{
          base: 'bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.98] transition-all duration-200'
        }">
          Complete Payment
        </UButton>
      </div>
    </div>

  </div>
</template>
