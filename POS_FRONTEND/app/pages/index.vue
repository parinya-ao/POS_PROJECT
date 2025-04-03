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

// current order zone
const current_order = ref<order_items[]>([]);
const total_price = computed(() => {
  return current_order.value.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0)
})
// add data to current order
const add_to_order = (data: ITEM) => {
  const exist_item = current_order.value.find(item => {
    item.id === data.id
  })
  if (exist_item) {
    exist_item.quantity++;
  }
  else {
    current_order.value.push({
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: 1,
      image_url: data.image_url
    })
  }
}


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
          <!-- Item Card -->
          <div v-for="(itemData, index) in item" :key="index"
            class="bg-white rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl hover:-translate-y-[3px] group border border-[#F2F2F7]">
            <div class="flex flex-col h-full">
              <!-- Product Image -->
              <NuxtLink :to="`/item/${itemData.id}`" class="block">
                <div class="h-48 w-full overflow-hidden bg-gradient-to-b from-[#F8F8FA] to-[#F2F2F7] relative">
                  <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  </div>
                  <img :src="itemData.image_url" :alt="itemData.name"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </NuxtLink>

              <!-- Product Details -->
              <div class="p-4 flex flex-col flex-grow">
                <NuxtLink :to="`/item/${itemData.id}`" class="block">
                  <h3 class="font-medium text-lg text-[#1D1D1F] mb-1 line-clamp-2 font-sans">{{ itemData.name }}</h3>
                </NuxtLink>
                <p class="text-sm text-[#86868B] mb-3 flex items-center">
                  <span class="inline-block w-2 h-2 rounded-full mr-1.5"
                    :class="itemData.total > 0 ? 'bg-green-500' : 'bg-red-500'"></span>
                  {{ itemData.total > 0 ? `In stock: ${itemData.total}` : 'Out of stock' }}
                </p>

                <div class="mt-auto flex justify-between items-center">
                  <p class="text-xl font-semibold text-[#1D1D1F]">
                    <span class="text-sm font-normal text-[#86868B] mr-1">฿</span>{{ itemData.price.toFixed(2) }}
                  </p>

                  <!-- Add to Cart Button -->
                  <UButton size="md" color="primary" variant="soft" icon="i-heroicons-plus"
                    @click="add_to_order(itemData)" :ui="{
                      base: 'rounded-full transition-all duration-200 bg-[#0071E3] text-white hover:bg-[#0077ED] active:bg-[#0068D1] active:scale-95 shadow-sm hover:shadow-md'
                    }" class="h-10 w-10 flex items-center justify-center" />
                </div>
              </div>
            </div>
          </div>
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
        <h2 class="text-xl font-medium text-[#1D1D1F]">Current Order</h2>
      </div>

      <!-- Cart Items List -->
      <div class="flex-1 overflow-auto px-4 py-2">
        <!-- Order Items -->
        <div v-if="current_order.length > 0" class="space-y-3">
          <div v-for="(orderItem, index) in current_order" :key="index"
            class="p-3 mb-3 bg-white rounded-xl border border-[#F2F2F7] transition-all duration-300 hover:shadow-md group">
            <!-- Order Item Container with Horizontal Layout -->
            <div class="flex items-center">
              <!-- Product Image with Apple-style treatment -->
              <div class="h-16 w-16 rounded-lg overflow-hidden bg-[#F2F2F7] mr-3 flex-shrink-0">
                <img :src="orderItem.image_url" :alt="orderItem.name"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              <!-- Order Item Details -->
              <div class="flex-1 min-w-0">
                <div class="flex justify-between items-start">
                  <!-- Product Name -->
                  <h4 class="font-medium text-[15px] text-[#1D1D1F] tracking-tight leading-tight line-clamp-1">
                    {{ orderItem.name }}
                  </h4>

                  <!-- Remove Button -->
                  <UButton color="neutral" variant="ghost" size="xs" icon="i-heroicons-x-mark"
                    @click="current_order.splice(index, 1)"
                    class="-mr-1.5 -mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity p-0.5" :ui="{
                      base: 'text-[#8E8E93] hover:bg-[#F2F2F7] rounded-full'
                    }" />
                </div>

                <!-- Price per Unit -->
                <p class="text-lg font-semibold text-gray-700 mt-0.5">฿{{ orderItem.price.toFixed(2) }} ต่อหน่วย</p>

                <!-- Quantity Control and Subtotal -->
                <div class="flex justify-between items-center mt-2">
                  <!-- Quantity Controls with Apple styling -->
                  <div class="flex items-center space-x-1 bg-[#F5F5F7] rounded-full p-1 text-black">
                    <UButton color="error" variant="ghost" size="xs" icon="i-heroicons-minus-small"
                      @click="orderItem.quantity > 1 ? orderItem.quantity-- : current_order.splice(index, 1)"
                      class="h-6 w-6" :ui="{
                        base: 'hover:bg-white hover:shadow-sm active:scale-95 transition-all duration-200 rounded-full'
                      }" />
                    <input v-model.number="orderItem.quantity" type="number" min="1"
                      class="text-sm font-medium w-10 text-center bg-transparent focus:outline-none" />
                    <UButton color="primary" variant="ghost" size="xs" icon="i-heroicons-plus-small"
                      @click="orderItem.quantity++" class="h-6 w-6" :ui="{
                        base: 'hover:bg-white hover:shadow-sm active:scale-95 transition-all duration-200 rounded-full'
                      }" />
                  </div>

                  <!-- Subtotal -->
                  <p class="font-medium text-black">฿{{ (orderItem.price * orderItem.quantity).toFixed(2) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty Cart State -->
        <div v-else class="text-center text-gray-500 py-10">
          <UIcon name="i-heroicons-shopping-cart" class="h-12 w-12 mx-auto text-gray-300" />
          <p class="mt-2">No items in cart</p>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="p-6 bg-gray-50 border-t border-gray-200">
        <div class="space-y-3">
          <!-- Subtotal -->
          <div class="flex justify-between items-center text-sm">
            <span class="text-[#86868B]">Subtotal</span>
            <span class="text-[#1D1D1F]">฿{{ total_price.toFixed(2) }}</span>
          </div>

          <!-- Tax (optional, can be removed if not needed) -->
          <div class="flex justify-between items-center text-sm">
            <span class="text-[#86868B]">Tax (7%)</span>
            <span class="text-[#1D1D1F]">฿{{ (total_price * 0.07).toFixed(2) }}</span>
          </div>

          <!-- Divider -->
          <div class="border-t border-gray-200 my-2"></div>

          <!-- Total -->
          <div class="flex justify-between font-medium text-black">
            <span>Total</span>
            <span class="text-[#007AFF]">฿{{ (total_price * 1.07).toFixed(2) }}</span>
          </div>
        </div>

        <!-- Checkout Button -->
        <UButton class="w-full mt-6" color="primary" size="lg" rounded="xl" :disabled="current_order.length === 0" :ui="{
          base: 'bg-[#0071E3] hover:bg-[#0077ED] active:bg-[#0068D1] active:scale-[0.98] transition-all duration-200'
        }">
          Complete Payment
        </UButton>
      </div>
    </div>
  </div>
</template>
