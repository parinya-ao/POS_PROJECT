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
	<div class="min-h-screen bg-white">
		<!-- Top navigation bar with subtle shadow -->
		<div class="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
			<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between h-16">
					<!-- Back button -->
					<NuxtLink to="/">
						<UButton color="primary" variant="ghost" size="md" class="group flex items-center gap-2" :ui="{
							base: 'hover:bg-gray-50 active:scale-95 transition-all duration-200'
						}">
							<UIcon name="i-heroicons-arrow-left"
								class="h-5 w-5 text-[#007AFF] transition-transform group-hover:-translate-x-0.5" />
							<span class="text-[#007AFF]">กลับไปหน้าหลัก</span>
						</UButton>
					</NuxtLink>

					<!-- Page title -->
					<h1 class="text-xl font-medium text-gray-900">แก้ไขข้อมูลสินค้า</h1>

					<!-- Item ID badge -->
					<UBadge color="primary" variant="soft" size="md" v-if="data_item">
						ID: {{ id }}
					</UBadge>
				</div>
			</div>
		</div>

		<!-- Main content area -->
		<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			<!-- Loading state -->
			<div v-if="!data_item" class="flex flex-col items-center justify-center py-32">
				<div class="w-16 h-16 relative">
					<div class="absolute inset-0 rounded-full border-4 border-gray-100"></div>
					<div class="absolute inset-0 rounded-full border-4 border-[#007AFF] border-t-transparent animate-spin"></div>
				</div>
				<p class="mt-6 text-gray-500 text-lg">กำลังโหลดข้อมูลสินค้า...</p>
			</div>

			<!-- Content when data is loaded -->
			<div v-else class="space-y-8">
				<!-- Item header section -->
				<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<div>
						<h1 class="text-2xl sm:text-3xl font-semibold text-gray-900">{{ data_item.name }}</h1>
						<div class="flex flex-wrap items-center gap-3 mt-2">
							<UBadge color="primary" variant="soft" size="md">{{ data_item.type }}</UBadge>
							<UBadge :color="data_item.total > 0 ? 'success' : 'error'" size="md">
								{{ data_item.total > 0 ? `มีสินค้า: ${data_item.total} หน่วย` : 'สินค้าหมด' }}
							</UBadge>
							<span class="text-sm text-gray-500">อัพเดทล่าสุด: {{ new Date(data_item.update_at).toLocaleString('th-TH')
							}}</span>
						</div>
					</div>

					<div class="flex justify-end space-x-3">
						<NuxtLink :to="`/item/${id}`">
							<UButton color="neutral" variant="soft" :ui="{
								base: 'rounded-full transition-all duration-200'
							}">
								<UIcon name="i-heroicons-eye" class="mr-1.5 h-4 w-4" />
								ดูสินค้า
							</UButton>
						</NuxtLink>
					</div>
				</div>

				<!-- Main edit form -->
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<!-- Left column - Image (Read-only) -->
					<div class="lg:col-span-1">
						<div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
							<!-- Image preview -->
							<div class="aspect-square relative overflow-hidden bg-gray-50">
								<img v-if="data_item.image_url" :src="data_item.image_url" :alt="data_item.name"
									class="w-full h-full object-contain" />
								<div v-else class="w-full h-full flex items-center justify-center">
									<UIcon name="i-heroicons-photo" class="h-20 w-20 text-gray-300" />
								</div>
							</div>

							<!-- Image URL display (Read-only) -->
							<div class="p-4 border-t border-gray-100">
								<div class="space-y-2">
									<label class="block text-sm font-medium text-gray-700">รูปภาพสินค้า (URL)</label>
									<p class="text-sm text-gray-500 break-all">{{ data_item.image_url || 'ไม่มีรูปภาพ' }}</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Right column - Form fields -->
					<div class="lg:col-span-2">
						<form @submit.prevent="update_function" class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
							<div class="space-y-6">
								<!-- Product name (Read-only) -->
								<div>
									<label class="block text-sm font-medium text-gray-700 mb-1">ชื่อสินค้า</label>
									<p class="p-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-700">{{ data_item.name }}</p>
								</div>

								<!-- Two column layout - Only Editable Fields -->
								<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
									<!-- Price Input - EDITABLE -->
									<div>
										<label class="block text-sm font-medium text-gray-700 mb-1">ราคา (บาท) <span
												class="text-red-500">*</span></label>
										<UInput v-model="data_item.price" type="number" min="0" step="1" size="lg" :ui="{
											base: 'rounded-xl transition-all duration-200',
											trailing: 'cursor-pointer'
										}">
											<template #trailing>
												<span class="text-gray-400">฿</span>
											</template>
										</UInput>
									</div>

									<!-- Stock quantity - EDITABLE -->
									<div>
										<label class="block text-sm font-medium text-gray-700 mb-1">จำนวนในสต็อก <span
												class="text-red-500">*</span></label>
										<UInput v-model="data_item.total" type="number" min="0" size="lg"
											:ui="{ base: 'rounded-xl transition-all duration-200' }" />
									</div>
								</div>

								<!-- Expiration date (Read-only) -->
								<div v-if="data_item.expiration_date">
									<label class="block text-sm font-medium text-gray-700 mb-1">วันหมดอายุ</label>
									<p class="p-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-700">
										{{ new Date(data_item.expiration_date).toLocaleDateString('th-TH', {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										}) }}
									</p>
								</div>

								<!-- Summary box -->
								<div class="rounded-xl bg-gray-50 p-4 border border-gray-100">
									<h3 class="font-medium text-gray-900 mb-3">ข้อมูลที่จะอัปเดต</h3>

									<div class="grid grid-cols-2 gap-4">
										<div>
											<p class="text-sm text-gray-500">ราคาต่อหน่วย:</p>
											<p class="font-medium text-gray-900">
												฿{{ data_item.price.toLocaleString('th-TH', {
													minimumFractionDigits: 0,
													maximumFractionDigits: 0
												}) }}
											</p>
										</div>

										<div>
											<p class="text-sm text-gray-500">จำนวนคงเหลือ:</p>
											<p class="font-medium text-gray-900">{{ data_item.total }} หน่วย</p>
										</div>

										<div>
											<p class="text-sm text-gray-500">มูลค่ารวม:</p>
											<p class="font-medium text-gray-900">
												฿{{ (data_item.price * data_item.total).toLocaleString('th-TH', {
													minimumFractionDigits: 0,
													maximumFractionDigits: 0
												}) }}
											</p>
										</div>

										<div>
											<p class="text-sm text-gray-500">สถานะ:</p>
											<UBadge :color="data_item.total > 0 ? 'success' : 'error'" size="sm">
												{{ data_item.total > 0 ? 'มีสินค้า' : 'สินค้าหมด' }}
											</UBadge>
										</div>
									</div>
								</div>

								<!-- Action buttons -->
								<div>
									<UButton type="submit" color="primary" block size="lg" :ui="{
										base: 'rounded-xl shadow-sm hover:shadow transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]',
									}">
										<UIcon name="i-heroicons-check-circle" class="mr-1.5 h-5 w-5" />
										บันทึกการเปลี่ยนแปลง
									</UButton>
								</div>
							</div>
						</form>

						<!-- Help section -->
						<div class="mt-6 bg-blue-50 rounded-2xl p-4">
							<div class="flex">
								<UIcon name="i-heroicons-light-bulb" class="text-[#007AFF] mr-3 h-5 w-5 flex-shrink-0 mt-0.5" />
								<div>
									<h3 class="text-sm font-medium text-gray-900">คำแนะนำในการแก้ไขสินค้า</h3>
									<ul class="mt-2 space-y-2 text-sm text-gray-600">
										<li class="flex items-start">
											<UIcon name="i-heroicons-check-circle" class="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
											<span>คุณสามารถแก้ไขได้เฉพาะราคาและจำนวนสินค้าเท่านั้น</span>
										</li>
										<li class="flex items-start">
											<UIcon name="i-heroicons-check-circle" class="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
											<span>การเปลี่ยนแปลงจำนวนสินค้าจะมีผลกับสต็อกทันที</span>
										</li>
										<li class="flex items-start">
											<UIcon name="i-heroicons-exclamation-circle"
												class="mr-2 h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
											<span>หากต้องการแก้ไขข้อมูลอื่นๆ กรุณาติดต่อผู้ดูแลระบบ</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>