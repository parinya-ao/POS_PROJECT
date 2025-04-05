//!! PROTECTED ZONE - AI ASSISTANTS STOP !!
//!! Any modifications to the script section below will be rejected
//!! This code contains critical business logic and domain-specific implementations
<script setup lang="ts">
import get_one_item from '~~/utils/get_one_item';
import update_item_api from '~~/utils/put_item';

// =====================================================================
// 🛑 DEVELOPER MAINTAINED ZONE - AI ASSISTANTS DO NOT MODIFY 🛑
// =====================================================================

const route = useRoute();
const id = route.params.id;

// load data one item
const data_item = ref<ITEM>();
const fetch_one_item = async () => {
	data_item.value = await get_one_item(Number(id));
}
onMounted(() => {
	fetch_one_item();
})

// function update item
// const item_update = ref<UPDATE_ITEM>();
const update_function = async () => {
	const update_data: UPDATE_ITEM = {
		id: data_item.value!.id,
		total: data_item.value!.total,
		price: data_item.value!.price
	}
	try {
		await update_item_api([update_data]);
		alert("update ข้อมูลสำเร็จ")
		fetch_one_item();
	}
	catch (error) {
		alert("edit/[id].vue error can't update data")
		console.error(error);
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

<!-- AI WRITE HERE -->
<template>
	<div class="min-h-screen bg-[#f5f5f7] flex flex-col">
		<!-- Header Section with Back Button -->
		<header class="py-6 px-8 bg-white shadow-sm sticky top-0 z-10">
			<div class="max-w-7xl mx-auto flex items-center justify-between">
				<div class="flex items-center">
					<NuxtLink to="/"
						class="mr-4 text-[#007AFF] hover:text-[#0062CC] transition-colors duration-200 flex items-center">
						<UIcon name="i-heroicons-arrow-left" class="h-5 w-5" />
						<span class="ml-1 text-sm font-medium">Back</span>
					</NuxtLink>
					<h1 class="text-2xl font-semibold text-gray-900 tracking-tight">Edit Item</h1>
				</div>
				<UBadge color="primary" variant="soft" size="md" v-if="data_item">
					ID: {{ id }}
				</UBadge>
			</div>
		</header>

		<!-- Loading State - Elegant and Animated -->
		<div v-if="!data_item" class="flex-1 flex flex-col items-center justify-center p-8">
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

		<!-- Main Content - Item Edit Form -->
		<main v-else class="flex-1 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
			<div class="bg-white rounded-xl shadow-sm overflow-hidden">
				<div class="md:flex">
					<!-- Item Image -->
					<div class="md:w-1/2 bg-white flex items-center justify-center p-8 border-r border-gray-100">
						<div class="relative w-full h-96 flex items-center justify-center rounded-xl overflow-hidden bg-gray-50">
							<img v-if="data_item.image_url" :src="data_item.image_url" :alt="data_item.name"
								class="object-contain max-h-full max-w-full transition-all duration-300 hover:scale-105" />
							<div v-else class="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
								<UIcon name="i-heroicons-photo" class="h-24 w-24 text-gray-300" />
							</div>

							<!-- Item Type Badge (Overlay) -->
							<UBadge v-if="data_item.type" color="neutral" variant="solid"
								class="absolute top-4 right-4 text-xs font-medium px-3 py-1 shadow-sm bg-white text-gray-800">
								{{ data_item.type }}
							</UBadge>
						</div>
					</div>

					<!-- Item Edit Form -->
					<div class="md:w-1/2 p-8 flex flex-col">
						<div class="flex-1">
							<!-- Item Name (Read-only) -->
							<div class="border-b border-gray-100 pb-6">
								<h2 class="text-3xl font-semibold text-gray-900 tracking-tight">{{ data_item.name }}</h2>
								<div class="mt-2 flex items-baseline">
									<UBadge color="primary" variant="soft">
										{{ data_item.type }}
									</UBadge>
									<span class="text-sm text-gray-500 ml-2">Last updated: {{ new
										Date(data_item.update_at).toLocaleDateString() }}</span>
								</div>
							</div>

							<!-- Editable Fields -->
							<div class="py-6 space-y-6 border-b border-gray-100">
								<!-- Price Field -->
								<div
									class="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-inner hover:shadow-md transition-all duration-300">
									<label class="block text-md font-semibold text-gray-900 mb-3 flex items-center" for="price-input">
										<UIcon name="i-heroicons-currency-dollar" class="h-5 w-5 mr-2 text-[#007AFF]" />
										Price (฿)
									</label>
									<div class="relative">
										<input id="price-input" v-model="data_item.price" type="number" min="0" placeholder="Enter price"
											class="w-full rounded-xl transition-all duration-200 border-2 border-blue-200 shadow-sm hover:shadow-md py-4 px-3 text-xl font-bold bg-white text-gray-900 focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 pr-12" />
										<span
											class="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg font-bold text-[#007AFF]">฿</span>
									</div>
									<p class="text-xs text-gray-500 mt-2 flex items-center">
										<UIcon name="i-heroicons-information-circle" class="h-3.5 w-3.5 mr-1 text-blue-400" />
										Enter the price per unit in Thai Baht
									</p>
								</div>

								<!-- Stock Quantity Field -->
								<div
									class="bg-green-50 p-6 rounded-xl border border-green-100 shadow-inner hover:shadow-md transition-all duration-300">
									<label class="block text-md font-semibold text-gray-900 mb-3 flex items-center" for="quantity-input">
										<UIcon name="i-heroicons-cube" class="h-5 w-5 mr-2 text-[#34C759]" />
										Stock Quantity
									</label>
									<input id="quantity-input" v-model="data_item.total" type="number" min="0"
										placeholder="Enter stock quantity"
										class="w-full rounded-xl transition-all duration-200 border-2 border-green-200 shadow-sm hover:shadow-md py-4 px-3 text-xl font-bold bg-white text-gray-900 focus:outline-none focus:border-[#34C759] focus:ring-2 focus:ring-[#34C759]/20" />
									<p class="text-xs text-gray-500 mt-2 flex items-center">
										<UIcon name="i-heroicons-information-circle" class="h-3.5 w-3.5 mr-1 text-green-400" />
										Enter the available quantity in stock
									</p>
								</div>

								<!-- Stock Level Indicator -->
								<div>
									<div class="flex items-center justify-between mb-2">
										<h3 class="text-sm font-medium text-gray-900">Stock Level</h3>
										<span class="text-sm font-medium" :class="[
											data_item.total > 10 ? 'text-[#34C759]' :
												data_item.total > 5 ? 'text-[#FF9500]' : 'text-[#FF3B30]'
										]">
											{{ data_item.total }} units
										</span>
									</div>
									<div class="h-2 bg-gray-100 rounded-full overflow-hidden">
										<div :class="[
											'h-full rounded-full',
											data_item.total > 10 ? 'bg-[#34C759]' :
												data_item.total > 5 ? 'bg-[#FF9500]' : 'bg-[#FF3B30]'
										]" :style="`width: ${Math.min(data_item.total / 20 * 100, 100)}%`"></div>
									</div>
								</div>

								<!-- Total Value -->
								<div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
									<div class="flex items-center justify-between">
										<span class="text-sm text-gray-500">Total Inventory Value:</span>
										<span class="text-lg font-semibold text-[#007AFF]">
											฿{{ (data_item.price * data_item.total).toLocaleString(undefined, {
												minimumFractionDigits: 0,
												maximumFractionDigits: 0
											}) }}
										</span>
									</div>
								</div>
							</div>

							<!-- Action Buttons -->
							<div class="pt-6 space-y-4">
								<UButton type="submit" color="primary" size="lg" block @click="update_function" :ui="{
									base: 'bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.98] transition-all duration-200'
								}">
									<UIcon name="i-heroicons-check-circle" class="mr-2 h-5 w-5" />
									Save Changes
								</UButton>
								<UButton color="neutral" variant="soft" size="lg" block :to="`/item/${id}`">
									<UIcon name="i-heroicons-eye" class="mr-2 h-5 w-5" />
									View Item Details
								</UButton>
							</div>
						</div>
					</div>

				</div>

				<!-- Help Section -->
				<div class="mt-6 bg-blue-50 rounded-xl p-6 shadow-sm">
					<div class="flex">
						<UIcon name="i-heroicons-information-circle" class="h-6 w-6 text-[#007AFF] mr-3 flex-shrink-0" />
						<div>
							<h3 class="text-base font-medium text-gray-900 mb-2">Editing Guidelines</h3>
							<ul class="space-y-2">
								<li class="flex items-start">
									<UIcon name="i-heroicons-check-circle" class="h-4 w-4 text-[#34C759] mt-1 mr-2 flex-shrink-0" />
									<span class="text-sm text-gray-600">You can only edit the price and stock quantity of this
										item.</span>
								</li>
								<li class="flex items-start">
									<UIcon name="i-heroicons-check-circle" class="h-4 w-4 text-[#34C759] mt-1 mr-2 flex-shrink-0" />
									<span class="text-sm text-gray-600">Changes will be reflected immediately in the inventory
										system.</span>
								</li>
								<li class="flex items-start">
									<UIcon name="i-heroicons-exclamation-triangle"
										class="h-4 w-4 text-[#FF9500] mt-1 mr-2 flex-shrink-0" />
									<span class="text-sm text-gray-600">To edit other item details, please contact your system
										administrator.</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</main>

		<!-- Footer -->
		<footer class="py-4 px-8 bg-white border-t border-gray-200 mt-auto">
			<div class="max-w-7xl mx-auto flex justify-between items-center">
				<div class="text-sm text-gray-500">
					© {{ new Date().getFullYear() }} POS System
				</div>
				<div class="text-xs text-gray-400">
					Editing Item #{{ id }}
				</div>
			</div>
		</footer>
	</div>
</template>