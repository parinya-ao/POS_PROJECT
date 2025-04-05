//!! PROTECTED ZONE - AI ASSISTANTS STOP !!
//!! Any modifications to the script section below will be rejected
//!! This code contains critical business logic and domain-specific implementations
<script setup lang="ts">
import get_items from '~~/utils/get_items';
import get_transactions from '~~/utils/get_transactions';

// =====================================================================
// 🛑 DEVELOPER MAINTAINED ZONE - AI ASSISTANTS DO NOT MODIFY 🛑
// =====================================================================

// fetch item function 
const item = ref<ITEM[]>([]);
const fetch_item = async () => {
    const data = await get_items();
    item.value = data
}

// fetch all transaction 
const transaction = ref<TRANSACTION[]>([]);
const fetch_transaction = async () => {
    const data_transaction = await get_transactions();
    transaction.value = Array.isArray(data_transaction) ? data_transaction : [data_transaction]
}

onMounted(() => {
    fetch_item();
    fetch_transaction();
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
<!-- **Note:** When encountering <script setup lang="ts">, skip and do not modify this section -->
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

<!-- AI WRITE HERE -->
<template>
    <div class="min-h-screen bg-[#f5f5f7]">
        <!-- Header -->
        <header class="py-6 px-8 bg-white shadow-sm sticky top-0 z-10">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <div class="flex items-center">
                    <UIcon name="i-heroicons-chart-bar" class="h-7 w-7 text-[#007AFF] mr-3" />
                    <h1 class="text-3xl font-semibold text-gray-900 tracking-tight">
                        Transaction History
                    </h1>
                </div>
                <div class="flex items-center space-x-3">
                    <NuxtLink to="/">
                        <UButton color="neutral" variant="soft" size="md" class="flex items-center gap-2 px-4 py-2" :ui="{
                            base: 'bg-white border border-gray-200 hover:bg-[#F2F2F7] active:bg-[#E5E5EA] active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md text-[#1D1D1F] font-medium',
                        }">
                            <UIcon name="i-heroicons-arrow-left" class="h-4 w-4 text-[#007AFF]" />
                            <span>Back to POS</span>
                        </UButton>
                    </NuxtLink>
                </div>
            </div>
        </header>

        <main class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <!-- Total Transactions Card -->
                <div
                    class="bg-white rounded-2xl shadow-sm p-6 border border-[#F2F2F7] hover:shadow-md transition-all duration-300">
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-[#007AFF]/10 flex items-center justify-center mr-4">
                            <UIcon name="i-heroicons-document-text" class="h-6 w-6 text-[#007AFF]" />
                        </div>
                        <div>
                            <p class="text-[#8E8E93] text-sm font-medium">Total Transactions</p>
                            <p class="text-3xl font-semibold text-[#1D1D1F] mt-1">{{ transaction.length }}</p>
                        </div>
                    </div>
                </div>

                <!-- Total Items Sold Card -->
                <div
                    class="bg-white rounded-2xl shadow-sm p-6 border border-[#F2F2F7] hover:shadow-md transition-all duration-300">
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-[#34C759]/10 flex items-center justify-center mr-4">
                            <UIcon name="i-heroicons-shopping-cart" class="h-6 w-6 text-[#34C759]" />
                        </div>
                        <div>
                            <p class="text-[#8E8E93] text-sm font-medium">Total Items Sold</p>
                            <p class="text-3xl font-semibold text-[#1D1D1F] mt-1">
                                {{transaction.reduce((sum, t) => sum + t.quantity, 0)}}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Latest Transaction Card -->
                <div
                    class="bg-white rounded-2xl shadow-sm p-6 border border-[#F2F2F7] hover:shadow-md transition-all duration-300">
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-[#FF9500]/10 flex items-center justify-center mr-4">
                            <UIcon name="i-heroicons-clock" class="h-6 w-6 text-[#FF9500]" />
                        </div>
                        <div>
                            <p class="text-[#8E8E93] text-sm font-medium">Latest Transaction</p>
                            <p class="text-lg font-semibold text-[#1D1D1F] mt-1">
                                {{transaction.length > 0
                                    ? new Date(transaction.slice().sort((a, b) => new Date(b!.sold_at).getTime() - new
                                        Date(a!.sold_at).getTime())[0].sold_at).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })
                                    : 'No transactions'
                                }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Transactions Section -->
            <div
                class="bg-white rounded-2xl shadow-sm border border-[#F2F2F7] overflow-hidden mb-8 transition-all duration-300 hover:shadow-md">
                <div class="px-6 py-5 border-b border-[#F2F2F7] flex items-center justify-between">
                    <h2 class="text-xl font-semibold text-[#1D1D1F]">Transaction Details</h2>
                    <!-- Search field could go here in the future -->
                </div>

                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-[#F2F2F7]">
                        <thead class="bg-[#F5F5F7]">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-4 text-left text-xs font-medium text-[#8E8E93] uppercase tracking-wider">
                                    Transaction ID
                                </th>
                                <th scope="col"
                                    class="px-6 py-4 text-left text-xs font-medium text-[#8E8E93] uppercase tracking-wider">
                                    Item
                                </th>
                                <th scope="col"
                                    class="px-6 py-4 text-left text-xs font-medium text-[#8E8E93] uppercase tracking-wider">
                                    Quantity
                                </th>
                                <th scope="col"
                                    class="px-6 py-4 text-left text-xs font-medium text-[#8E8E93] uppercase tracking-wider">
                                    Unit Price
                                </th>
                                <th scope="col"
                                    class="px-6 py-4 text-left text-xs font-medium text-[#8E8E93] uppercase tracking-wider">
                                    Total Price
                                </th>
                                <th scope="col"
                                    class="px-6 py-4 text-left text-xs font-medium text-[#8E8E93] uppercase tracking-wider">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-[#F2F2F7]">
                            <tr v-for="(trans, index) in transaction.slice().sort((a, b) => new Date(b!.sold_at).getTime() - new Date(a!.sold_at).getTime())"
                                :key="trans.id" class="hover:bg-[#F5F5F7] transition-colors duration-200">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1D1D1F]">
                                    <span class="px-2.5 py-1 bg-[#F2F2F7] rounded-md font-mono text-[#007AFF]">
                                        #{{ trans.id }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="h-10 w-10 flex-shrink-0">
                                            <img class="h-10 w-10 rounded-lg object-cover bg-[#F2F2F7] border border-[#F2F2F7]"
                                                :src="item.find(i => i.id === trans.item_id)?.image_url || ''" alt="" />
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-[#1D1D1F]">
                                                {{item.find(i => i.id === trans.item_id)?.name || 'Unknown Item'}}
                                            </div>
                                            <div class="text-xs text-[#8E8E93]">
                                                ID: {{ trans.item_id }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div
                                        class="text-sm font-medium bg-[#007AFF]/10 text-[#007AFF] px-2.5 py-1 rounded-md inline-block">
                                        {{ trans.quantity }}
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-[#1D1D1F]">
                                        ฿{{item.find(i => i.id === trans.item_id)?.price.toFixed(2) || '0.00'}}
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm font-medium text-[#007AFF]">
                                        ฿{{((item.find(i => i.id === trans.item_id)?.price || 0) *
                                            trans.quantity).toFixed(2)}}
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-[#8E8E93]">
                                    <div class="flex items-center gap-3">
                                        <UIcon name="i-heroicons-calendar" class="h-4 w-4" />
                                        <div>
                                            <div class="text-[#1D1D1F]">{{ new
                                                Date(trans.sold_at).toLocaleDateString('en-US', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                }) }}</div>
                                            <div class="text-xs">{{ new Date(trans.sold_at).toLocaleTimeString('en-US',
                                                {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                }) }}</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Empty State -->
                <div v-if="transaction.length === 0" class="text-center py-20">
                    <UIcon name="i-heroicons-receipt" class="mx-auto h-16 w-16 text-gray-400" />
                    <h3 class="mt-4 text-lg font-medium text-gray-900">No transactions found</h3>
                    <p class="mt-1 text-sm text-gray-500">
                        Start selling items to see transaction history
                    </p>
                </div>
            </div>

            <!-- Sales Summary Section -->
            <div
                class="bg-white rounded-2xl shadow-sm border border-[#F2F2F7] overflow-hidden transition-all duration-300 hover:shadow-md">
                <div class="px-6 py-5 border-b border-[#F2F2F7]">
                    <h2 class="text-xl font-semibold text-[#1D1D1F]">Sales by Item</h2>
                </div>

                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-[#F2F2F7]">
                        <thead class="bg-[#F5F5F7]">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-4 text-left text-xs font-medium text-[#8E8E93] uppercase tracking-wider">
                                    Item
                                </th>
                                <th scope="col"
                                    class="px-6 py-4 text-left text-xs font-medium text-[#8E8E93] uppercase tracking-wider">
                                    Total Quantity Sold
                                </th>
                                <th scope="col"
                                    class="px-6 py-4 text-left text-xs font-medium text-[#8E8E93] uppercase tracking-wider">
                                    Total Revenue
                                </th>
                                <th scope="col"
                                    class="px-6 py-4 text-left text-xs font-medium text-[#8E8E93] uppercase tracking-wider">
                                    Current Stock
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-[#F2F2F7]">
                            <tr v-for="itemData in item
                                .filter(i => transaction.some(t => t.item_id === i.id))
                                .sort((a, b) =>
                                    transaction
                                        .filter(t => t.item_id === b.id)
                                        .reduce((sum, t) => sum + t.quantity, 0) -
                                    transaction
                                        .filter(t => t.item_id === a.id)
                                        .reduce((sum, t) => sum + t.quantity, 0)
                                )" :key="itemData.id" class="hover:bg-[#F5F5F7] transition-all duration-200">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="h-10 w-10 flex-shrink-0">
                                            <img class="h-10 w-10 rounded-lg object-cover border border-[#F2F2F7]"
                                                :src="itemData.image_url" alt="" />
                                        </div>
                                        <div class="ml-4">
                                            <NuxtLink :to="`/item/${itemData.id}`"
                                                class="text-sm font-medium text-[#007AFF] hover:underline">
                                                {{ itemData.name }}
                                            </NuxtLink>
                                            <div class="text-xs text-[#8E8E93]">
                                                {{ itemData.type }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-shopping-bag" class="h-4 w-4 text-[#8E8E93]" />
                                        <span
                                            class="text-sm font-medium text-[#1D1D1F] bg-[#F5F5F7] px-2.5 py-1 rounded-md">
                                            {{transaction.filter(t => t.item_id === itemData.id).reduce((sum, t) => sum
                                                +
                                                t.quantity, 0)}}
                                        </span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm font-medium text-[#007AFF]">
                                        ฿{{(itemData.price * transaction.filter(t => t.item_id ===
                                            itemData.id).reduce((sum, t) => sum + t.quantity, 0)).toFixed(2)}}
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="inline-flex items-center px-2.5 py-1 rounded-md text-sm"
                                            :class="itemData.total > 0 ? 'bg-[#34C759]/10 text-[#34C759]' : 'bg-[#FF3B30]/10 text-[#FF3B30]'">
                                            <UIcon
                                                :name="itemData.total > 0 ? 'i-heroicons-check-circle' : 'i-heroicons-x-circle'"
                                                class="h-4 w-4 mr-1" />
                                            {{ itemData.total > 0 ? `${itemData.total} in stock` : 'Out of stock' }}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Empty State for Sales Summary -->
                <div v-if="!item.filter(i => transaction.some(t => t.item_id === i.id)).length"
                    class="text-center py-20">
                    <UIcon name="i-heroicons-chart-bar" class="mx-auto h-16 w-16 text-gray-400" />
                    <h3 class="mt-4 text-lg font-medium text-gray-900">No sales data available</h3>
                    <p class="mt-1 text-sm text-gray-500">
                        Complete transactions to view sales statistics
                    </p>
                </div>
            </div>
        </main>
    </div>
</template>