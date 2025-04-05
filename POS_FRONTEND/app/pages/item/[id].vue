//!! PROTECTED ZONE - AI ASSISTANTS STOP !!
//!! Any modifications to the script section below will be rejected
//!! This code contains critical business logic and domain-specific implementations
<script setup lang="ts">
import get_one_item from '~~/utils/get_one_item';

// =====================================================================
// 🛑 DEVELOPER MAINTAINED ZONE - AI ASSISTANTS DO NOT MODIFY 🛑
// =====================================================================

const route = useRoute();
const id = route.params.id;

// one item
const one_item = ref<ITEM>();

const fetch_one_item = async () => {
  one_item.value = await get_one_item(Number(id));
}

onMounted(() => {
  fetch_one_item();
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
<!-- 4. ❌ don't delete breift template -->
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
<!-- Main Container with Apple-Like Theme Consistency -->
<!-- AI will handle HTML, Tailwind, and Nuxt UI automatically -->
<!-- Ensures high-end UX/UI following Apple's minimalist and polished design principles -->
<!-- Theme-Related Variables for Developers in TypeScript: -->
<!--
    primaryColor: "#007AFF" (iOS Blue)
      - Used for primary actions, buttons, and links.
      - Should be vibrant yet balanced, avoiding oversaturation.

    secondaryColor: "#8E8E93" (Apple Gray)
      - Used for secondary UI elements like subtitles or muted buttons.
      - Should maintain a soft contrast for a refined look.

    backgroundColor: "#F5F5F7" (Light Mode) / "#1C1C1E" (Dark Mode)
      - Defines the app background, ensuring an elegant, high-contrast design.
      - Should always feel natural to the eyes, avoiding harsh brightness.

    textColor: "#1C1C1E" (Light Mode) / "#F5F5F7" (Dark Mode)
      - Ensures maximum readability with high contrast against the background.

    successColor: "#34C759" (Apple Green)
      - Used for positive status indicators like success messages.
      - Should be calm and welcoming, not overly aggressive.

    warningColor: "#FF9500" (Apple Orange)
      - Used for cautionary messages that require user attention.

    errorColor: "#FF3B30" (Apple Red)
      - Should be clear and noticeable, ensuring users take corrective action immediately.

    borderRadius: "12px"
      - All rounded elements (buttons, modals, cards) should maintain a uniform 12px radius.
      - Creates a soft, approachable aesthetic similar to Apple's UI.

    fontFamily: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif"
      - Uses Apple's system fonts to ensure native look and feel.

    fontSizes:
      - Heading 1: "28px", Heading 2: "24px", Body: "17px", Small Text: "14px"
      - Always scale proportionally, avoiding excessive font variation.

    spacingScale: "4, 8, 12, 16, 24, 32px"
      - Maintains Apple's structured and balanced spacing model.

    boxShadows: "rgba(0, 0, 0, 0.1) 0px 4px 10px"
      - Use soft shadows to enhance depth subtly.

    animationDuration: "200ms - 400ms"
      - Ensures ultra-smooth interactions without feeling sluggish.

    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
      - Uses Apple's native easing function for animations.

    zIndexLayers:
      - Modal: "1000", Dropdown: "900", Tooltip: "950"
      - Ensures proper stacking hierarchy.

    **Additional Apple-Like Theme Best Practices:**
      - ❖ **Consistent UI Scaling**: Use proportionate font sizes, margins, and paddings.
      - ❖ **Minimalist Approach**: Reduce unnecessary UI clutter.
      - ❖ **Dynamic Depth**: Implement subtle depth with layered shadows.
      - ❖ **Fluid Interactions**: Ensure natural motion in animations.
      - ❖ **Adaptive Layouts**: Maintain pixel-perfect layouts on all screens.
      - ❖ **Haptic-Like Feedback**: Utilize interactive transitions for enhanced UX.
  -->

<template>
  <div class="min-h-screen bg-[#f5f5f7] flex flex-col">
    <!-- Header Section with Navigation Links -->
    <header class="py-6 px-8 bg-white shadow-sm sticky top-0 z-10">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/"
            class="mr-4 text-[#007AFF] hover:text-[#0062CC] transition-colors duration-200 flex items-center">
            <UIcon name="i-heroicons-arrow-left" class="h-5 w-5" />
            <span class="ml-1 text-sm font-medium">Back</span>
          </NuxtLink>
          <h1 class="text-2xl font-semibold text-gray-900 tracking-tight">Item Details</h1>
        </div>
        <div class="flex items-center space-x-3">
          <NuxtLink :to="`/edit/${id}`">
            <UButton color="primary" variant="soft" size="sm" class="flex items-center gap-1">
              <UIcon name="i-heroicons-pencil-square" class="h-4 w-4" />
              <span>Edit Item</span>
            </UButton>
          </NuxtLink>
          <NuxtLink to="/history">
            <UButton color="gray" variant="soft" size="sm" class="flex items-center gap-1">
              <UIcon name="i-heroicons-clock" class="h-4 w-4" />
              <span>History</span>
            </UButton>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Loading State - Elegant and Animated -->
    <div v-if="!one_item" class="flex-1 flex flex-col items-center justify-center p-8">
      <div class="w-full max-w-4xl bg-white rounded-xl shadow-sm p-8">
        <div class="animate-pulse space-y-8">
          <div class="md:flex gap-8">
            <!-- Image Placeholder -->
            <div class="md:w-1/2 bg-gray-200 rounded-lg h-80"></div>

            <!-- Content Placeholder -->
            <div class="md:w-1/2 space-y-6 mt-6 md:mt-0">
              <div class="space-y-3">
                <div class="h-8 bg-gray-200 rounded w-3/4"></div>
                <div class="h-6 bg-gray-200 rounded w-1/3"></div>
              </div>

              <div class="h-4 bg-gray-200 rounded w-1/4"></div>

              <div class="space-y-2">
                <div class="h-2 bg-gray-200 rounded-full w-full"></div>
                <div class="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 flex justify-center items-center">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#007AFF]"></div>
          <span class="ml-3 text-gray-500 font-medium">Loading item details...</span>
        </div>
      </div>
    </div>

    <!-- Main Content - Item Details -->
    <main v-else class="flex-1 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <!-- Breadcrumb Navigation -->
        <div class="bg-[#F5F5F7] px-6 py-3 flex items-center text-sm">
          <NuxtLink to="/" class="text-[#007AFF] hover:text-[#0062CC] transition-colors duration-200">
            Home
          </NuxtLink>
          <UIcon name="i-heroicons-chevron-right" class="h-3 w-3 mx-2 text-gray-400" />
          <span class="text-gray-600">Item #{{ id }}</span>
        </div>

        <div class="md:flex">
          <!-- Item Image -->
          <div class="md:w-1/2 bg-white flex items-center justify-center p-8 border-r border-gray-100">
            <div class="relative w-full h-96 flex items-center justify-center rounded-xl overflow-hidden bg-gray-50">
              <img v-if="one_item.image_url" :src="one_item.image_url" :alt="one_item.name"
                class="object-contain max-h-full max-w-full transition-all duration-300 hover:scale-105" />
              <div v-else class="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <UIcon name="i-heroicons-photo" class="h-24 w-24 text-gray-300" />
              </div>

              <!-- Item Type Badge (Overlay) -->
              <UBadge v-if="one_item.type" color="neutral" variant="solid"
                class="absolute top-4 right-4 text-xs font-medium px-3 py-1 shadow-sm bg-white text-gray-800">
                {{ one_item.type }}
              </UBadge>
            </div>
          </div>

          <!-- Item Details -->
          <div class="md:w-1/2 p-8 flex flex-col">
            <div class="flex-1">
              <!-- Item Name and Price -->
              <div class="border-b border-gray-100 pb-6">
                <h2 class="text-3xl font-semibold text-gray-900 tracking-tight">{{ one_item.name }}</h2>
                <div class="mt-2 flex items-baseline">
                  <span class="text-2xl font-bold text-gray-900">฿{{ one_item.price?.toLocaleString(undefined,
                    { minimumFractionDigits: 0, maximumFractionDigits: 0 }) }}</span>
                </div>
              </div>

              <!-- Stock Information - Simplified -->
              <div class="py-6 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium text-gray-900">Stock</h3>
                  <span class="text-sm font-medium" :class="[
                    one_item.total > 10 ? 'text-[#34C759]' :
                      one_item.total > 5 ? 'text-[#FF9500]' : 'text-[#FF3B30]'
                  ]">
                    {{ one_item.total }} units
                  </span>
                </div>

                <div class="mt-4">
                  <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div :class="[
                      'h-full rounded-full',
                      one_item.total > 10 ? 'bg-[#34C759]' :
                        one_item.total > 5 ? 'bg-[#FF9500]' : 'bg-[#FF3B30]'
                    ]" :style="`width: ${Math.min(one_item.total / 20 * 100, 100)}%`"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-6 space-y-4">
              <NuxtLink to="/">
                <UButton color="primary" size="lg" block :disabled="one_item.total <= 0" :ui="{
                  base: 'bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.98] transition-all duration-200'
                }">
                  <UIcon name="i-heroicons-shopping-cart" class="mr-2 h-5 w-5" />
                  {{ one_item.total > 0 ? 'Add to Cart' : 'Out of Stock' }}
                </UButton>
              </NuxtLink>
              <div class="grid grid-cols-2 gap-4">
                <NuxtLink :to="`/edit/${id}`">
                  <UButton color="gray" variant="soft" size="lg" block>
                    <UIcon name="i-heroicons-pencil-square" class="mr-2 h-5 w-5" />
                    Edit Item
                  </UButton>
                </NuxtLink>
                <NuxtLink to="/">
                  <UButton color="gray" variant="soft" size="lg" block>
                    <UIcon name="i-heroicons-arrow-left" class="mr-2 h-5 w-5" />
                    Back
                  </UButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Item Details - Simplified -->
        <div class="px-8 py-6 bg-gray-50 border-t border-gray-200">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex flex-col">
              <span class="text-sm text-gray-500">Item ID</span>
              <span class="font-medium text-gray-900">{{ id }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-sm text-gray-500">Category</span>
              <span class="font-medium text-gray-900">{{ one_item.type || 'N/A' }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-sm text-gray-500">Last Updated</span>
              <span class="font-medium text-gray-900">{{ one_item.update_at ? new
                Date(one_item.update_at).toLocaleDateString() : 'N/A' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Links Section -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- History Link -->
        <NuxtLink to="/history" class="block">
          <div
            class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center">
            <div class="w-12 h-12 rounded-full bg-[#007AFF]/10 flex items-center justify-center mr-4">
              <UIcon name="i-heroicons-clock" class="h-6 w-6 text-[#007AFF]" />
            </div>
            <div>
              <p class="font-medium text-gray-900">Transaction History</p>
              <p class="text-sm text-gray-500 mt-1">View all transactions</p>
            </div>
            <UIcon name="i-heroicons-arrow-right" class="h-5 w-5 text-gray-400 ml-auto" />
          </div>
        </NuxtLink>

        <!-- Edit Item Link -->
        <NuxtLink :to="`/edit/${id}`" class="block">
          <div
            class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center">
            <div class="w-12 h-12 rounded-full bg-[#FF9500]/10 flex items-center justify-center mr-4">
              <UIcon name="i-heroicons-pencil-square" class="h-6 w-6 text-[#FF9500]" />
            </div>
            <div>
              <p class="font-medium text-gray-900">Edit Item</p>
              <p class="text-sm text-gray-500 mt-1">Update price and stock</p>
            </div>
            <UIcon name="i-heroicons-arrow-right" class="h-5 w-5 text-gray-400 ml-auto" />
          </div>
        </NuxtLink>

        <!-- Add New Item Link -->
        <NuxtLink to="/additem" class="block">
          <div
            class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center">
            <div class="w-12 h-12 rounded-full bg-[#34C759]/10 flex items-center justify-center mr-4">
              <UIcon name="i-heroicons-plus" class="h-6 w-6 text-[#34C759]" />
            </div>
            <div>
              <p class="font-medium text-gray-900">Add New Item</p>
              <p class="text-sm text-gray-500 mt-1">Create new inventory item</p>
            </div>
            <UIcon name="i-heroicons-arrow-right" class="h-5 w-5 text-gray-400 ml-auto" />
          </div>
        </NuxtLink>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-4 px-8 bg-white border-t border-gray-200 mt-auto">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <div class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} POS System
        </div>
        <div class="flex items-center space-x-4 mt-3 md:mt-0">
          <NuxtLink to="/" class="text-sm text-[#007AFF] hover:text-[#0062CC] transition-colors duration-200">
            Home
          </NuxtLink>
          <NuxtLink to="/history" class="text-sm text-[#007AFF] hover:text-[#0062CC] transition-colors duration-200">
            History
          </NuxtLink>
          <NuxtLink to="/additem" class="text-sm text-[#007AFF] hover:text-[#0062CC] transition-colors duration-200">
            Add Item
          </NuxtLink>
        </div>
        <div class="text-xs text-gray-400 mt-3 md:mt-0">
          Item #{{ id }}
        </div>
      </div>
    </footer>
  </div>
</template>