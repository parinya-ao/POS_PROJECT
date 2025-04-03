//!! PROTECTED ZONE - AI ASSISTANTS STOP !!
//!! Any modifications to the script section below will be rejected
//!! This code contains critical business logic and domain-specific implementations
<script setup lang="ts">
import post_item from '~~/utils/post_item';

// =====================================================================
// 🛑 DEVELOPER MAINTAINED ZONE - AI ASSISTANTS DO NOT MODIFY 🛑
// =====================================================================

enum TYPE {
  Electronics = "Electronics",
  Fashion = "Fashion",
  Home_Appliances = "Home Appliances",
  Grocery = "Grocery",
  Beauty = "Beauty",
}

const data = ref<CREATE_ITEM>({
  name: '',
  type_item: '' as TYPE | "",
  price: 0,
  total: 0,
  image_url: "",
  expiration_date: ''
});

const dropdown = ref(false);
const showSuccess = ref(false);
const typeOption = Object.entries(TYPE).map(([key, value]) => ({
  label: value,
  value: key
}));

const add_item = async () => {
  console.log(data.value);
  post_item(data.value);
}

const filterOptions = ref({
  category: '',
  priceRange: [0, 10000],
  inStock: true
});

const resetForm = () => {
  data.value = {
    name: '',
    type_item: '' as TYPE | "",
    price: 0,
    total: 0,
    image_url: "",
    expiration_date: ''
  };
}

const submitForm = async () => {
  await add_item();
  showSuccess.value = true;
  resetForm();
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
  <div class="min-h-screen bg-[#F5F5F7] dark:bg-[#1C1C1E] px-4 py-8 md:px-6 lg:px-8">
    <!-- Header section -->
    <UContainer class="max-w-3xl mx-auto">
      <!-- Success notification component -->
      <AddItemSuccess v-if="showSuccess" @close="showSuccess = false" />

      <h1 class="text-[28px] font-semibold text-[#1C1C1E] dark:text-[#F5F5F7] mb-2">เพิ่มสินค้าใหม่</h1>
      <p class="text-[#8E8E93] text-[17px] mb-6">กรอกข้อมูลด้านล่างเพื่อเพิ่มสินค้าใหม่เข้าระบบ</p>

      <!-- Form card -->
      <div class="bg-white dark:bg-[#2C2C2E] rounded-[12px] shadow-lg p-6 transition-all duration-300">
        <form @submit.prevent="submitForm">
          <!-- Product name -->
          <div class="mb-6">
            <div class="mb-1">
              <label class="block text-[#1C1C1E] dark:text-[#F5F5F7] font-medium mb-1">ชื่อสินค้า <span
                  class="text-[#FF3B30]">*</span></label>
              <UInput v-model="data.name" placeholder="เช่น น้ำดื่มตราคริสตัล 600ml"
                :ui="{ base: 'h-12 rounded-[12px]' }" size="lg" required />
              <p class="text-[#8E8E93] text-[14px] mt-1">ระบุชื่อที่ชัดเจนพร้อมขนาดเพื่อง่ายต่อการค้นหา</p>
            </div>
          </div>

          <!-- Product type dropdown - Fixed implementation with Tailwind only -->
          <div class="mb-6">
            <div class="mb-1">
              <label class="block text-[#1C1C1E] dark:text-[#F5F5F7] font-medium mb-1">ประเภทสินค้า <span
                  class="text-[#FF3B30]">*</span></label>

              <!-- Pure Tailwind dropdown implementation -->
              <div class="relative">
                <!-- Dropdown trigger button -->
                <button type="button" @click="dropdown = !dropdown"
                  class="w-full h-12 flex items-center justify-between px-4 bg-white dark:bg-[#2C2C2E] border border-gray-200 dark:border-gray-700 rounded-[12px] text-left focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all duration-200">
                  <span v-if="data.type_item" class="text-[#1C1C1E] dark:text-[#F5F5F7]">
                    {{ TYPE[data.type_item as keyof typeof TYPE] }}
                  </span>
                  <span v-else class="text-gray-400">เลือกประเภทสินค้าที่เหมาะสม</span>

                  <UIcon name="i-heroicons-chevron-down" class="text-gray-400 transition-transform duration-200"
                    :class="dropdown ? 'rotate-180 transform' : ''" />
                </button>

                <!-- Fixed dropdown menu -->
                <div v-show="dropdown"
                  class="absolute z-50 w-full mt-1 bg-white dark:bg-[#2C2C2E] shadow-lg rounded-[12px] py-1 border border-gray-200 dark:border-gray-700 max-h-60 overflow-auto">
                  <div v-for="option in typeOption" :key="option.value"
                    @click="data.type_item = option.value as any; dropdown = false;"
                    class="px-4 py-3 cursor-pointer hover:bg-[#F5F5F7] dark:hover:bg-[#3A3A3C] transition-colors duration-200"
                    :class="data.type_item === option.value ? 'bg-[#007AFF]/10 text-[#007AFF] font-medium' : 'text-[#1C1C1E] dark:text-[#F5F5F7]'">
                    {{ option.label }}
                  </div>
                </div>
              </div>

              <p class="text-[#8E8E93] text-[14px] mt-1">การจัดหมวดหมู่ช่วยให้ค้นหาและจัดการสต็อกได้ง่ายขึ้น</p>
            </div>
          </div>

          <!-- Two column layout for price and quantity -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block text-[#1C1C1E] dark:text-[#F5F5F7] font-medium mb-1">ราคา (บาท) <span
                  class="text-[#FF3B30]">*</span></label>
              <UInput v-model="data.price" type="number" min="0" step="0.01" placeholder="0.00"
                :ui="{ base: 'h-12 rounded-[12px]' }" size="lg" required />
              <p class="text-[#8E8E93] text-[14px] mt-1">ระบุราคาขายต่อหน่วย (สามารถมีทศนิยม 2 ตำแหน่ง)</p>
            </div>

            <div>
              <label class="block text-[#1C1C1E] dark:text-[#F5F5F7] font-medium mb-1">จำนวน <span
                  class="text-[#FF3B30]">*</span></label>
              <UInput v-model="data.total" type="number" min="0" placeholder="0" :ui="{ base: 'h-12 rounded-[12px]' }"
                size="lg" required />
              <p class="text-[#8E8E93] text-[14px] mt-1">ระบุจำนวนสินค้าที่เพิ่มเข้าสต็อก (จำนวนเต็มเท่านั้น)</p>
            </div>
          </div>

          <!-- Image URL Input - Simplified without validation -->
          <div class="mb-6">
            <label class="block text-[#1C1C1E] dark:text-[#F5F5F7] font-medium mb-1">รูปภาพสินค้า (URL) <span
                class="text-[#FF3B30]">*</span></label>

            <div class="mt-2 flex flex-col sm:flex-row gap-4">
              <!-- Image Preview - Simplified -->
              <div class="flex-shrink-0">
                <div
                  class="w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <img v-if="data.image_url" :src="data.image_url" alt="Preview" class="w-full h-full object-cover" />
                  <div v-else class="text-center p-2">
                    <UIcon name="i-heroicons-photo" class="mx-auto h-8 w-8 text-gray-400" />
                    <p class="mt-1 text-xs text-gray-500">ไม่มีรูปภาพ</p>
                  </div>
                </div>
              </div>

              <!-- URL Input - Simplified -->
              <div class="flex-1 flex flex-col justify-center">
                <UInput v-model="data.image_url" placeholder="https://example.com/image.jpg"
                  :ui="{ base: 'h-12 rounded-[12px]' }" size="lg" required />

                <p class="text-xs text-gray-500 mt-1">ใส่ URL ของรูปภาพสินค้า (ต้องเป็น URL ที่สามารถเข้าถึงได้)</p>

                <div v-if="data.image_url" class="mt-2 flex items-center text-sm">
                  <UIcon name="i-heroicons-link" class="mr-1 h-4 w-4 text-[#8E8E93]" />
                  <span class="text-[#8E8E93] truncate" style="max-width: 250px">
                    {{ data.image_url }}
                  </span>
                </div>
              </div>
            </div>

            <p class="text-[#8E8E93] text-[14px] mt-2">
              ระบุ URL ของรูปภาพที่ชัดเจน เห็นรายละเอียดสินค้าครบถ้วน
            </p>
          </div>

          <!-- Expiration date -->
          <div class="mb-8">
            <div>
              <label class="block text-[#1C1C1E] dark:text-[#F5F5F7] font-medium mb-1">วันหมดอายุ <span
                  class="text-[#8E8E93] text-sm">(optional)</span></label>
              <UInput v-model="data.expiration_date" type="date" :ui="{ base: 'h-12 rounded-[12px]' }" size="lg" />
              <p class="text-[#8E8E93] text-[14px] mt-1">ใส่เฉพาะสินค้าที่มีวันหมดอายุ สามารถเว้นว่างได้</p>
            </div>
          </div>

          <!-- Filter Section -->
          <div class="mb-6 p-4 bg-gray-50 dark:bg-[#1C1C1E] rounded-[12px]">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-[#1C1C1E] dark:text-[#F5F5F7] font-medium">ตัวกรองการค้นหา</h3>
              <UButton size="xs" color="neutral" variant="ghost" icon="i-heroicons-funnel" class="rounded-full">
                ดูทั้งหมด
              </UButton>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <!-- Category Filter -->
              <div>
                <USelectMenu v-model="filterOptions.category" :options="typeOption" placeholder="เลือกหมวดหมู่"
                  size="sm" class="w-full" />
              </div>

              <!-- Price Range Filter -->
              <div>
                <UInput v-model="filterOptions.priceRange[0]" type="number" placeholder="ราคาต่ำสุด" size="sm" />
              </div>

              <!-- Stock Status -->
              <div>
                <UCheckbox v-model="filterOptions.inStock" label="มีสินค้าในสต็อกเท่านั้น" size="sm" />
              </div>
            </div>
          </div>

          <!-- Tips callout -->
          <div class="bg-[#F2F7FD] dark:bg-[#1C3A5E] p-4 rounded-[12px] mb-6 flex items-start">
            <UIcon name="i-heroicons-light-bulb" class="text-[#007AFF] mr-3 text-lg mt-0.5 flex-shrink-0" />
            <div>
              <p class="text-[15px] text-[#1C1C1E] dark:text-[#F5F5F7] font-medium">เคล็ดลับ</p>
              <p class="text-[14px] text-[#8E8E93] dark:text-[#D1D1D6]">
                ตรวจสอบข้อมูลสินค้าในตัวอย่างด้านล่างก่อนกดบันทึก
                หลังจากบันทึกแล้วระบบจะอัพเดทสต็อกสินค้าทันที</p>
            </div>
          </div>

          <!-- Submit button -->
          <div class="flex justify-end">
            <UButton type="submit" color="primary" size="lg" :ui="{
              base: 'rounded-[12px] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]'
            }">
              <template #leading>
                <UIcon name="i-heroicons-plus-circle" class="text-lg" />
              </template>
              เพิ่มสินค้า
            </UButton>
          </div>
        </form>
      </div>

      <!-- Preview card section - Simplified image error handling -->
      <div v-if="data.name || data.price > 0 || data.image_url"
        class="mt-6 bg-white dark:bg-[#2C2C2E] rounded-[12px] shadow-lg p-6 transition-all duration-300">
        <h2 class="text-[24px] font-semibold text-[#1C1C1E] dark:text-[#F5F5F7] mb-4">รายละเอียดสินค้า</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <!-- Product Image Preview - Simplified -->
          <div class="md:col-span-1">
            <div class="aspect-square rounded-lg bg-gray-100 overflow-hidden">
              <img v-if="data.image_url" :src="data.image_url" alt="Product preview"
                class="w-full h-full object-cover" />
              <div v-else class="w-full h-full flex items-center justify-center">
                <UIcon name="i-heroicons-photo" class="h-16 w-16 text-gray-300" />
              </div>
            </div>
          </div>

          <!-- Product Details -->
          <div class="md:col-span-2 space-y-4 text-[17px] divide-y divide-gray-100 dark:divide-gray-700">
            <!-- Product name section -->
            <div class="pb-3">
              <h3 class="text-[#8E8E93] text-[14px] uppercase font-medium mb-1">ชื่อสินค้า</h3>
              <p class="text-[20px] font-medium text-[#1C1C1E] dark:text-[#F5F5F7]">{{ data.name || 'ยังไม่ได้ระบุ' }}
              </p>
            </div>

            <!-- Product type section -->
            <div class="py-3">
              <h3 class="text-[#8E8E93] text-[14px] uppercase font-medium mb-1">หมวดหมู่สินค้า</h3>
              <div class="flex items-center">
                <UBadge :color="data.type_item ? 'primary' : 'neutral'" size="lg" class="mr-2">
                  {{ data.type_item ? TYPE[data.type_item as keyof typeof TYPE] : 'ยังไม่ได้เลือก' }}
                </UBadge>
              </div>
            </div>

            <!-- Price and inventory section -->
            <div class="py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Price details -->
              <div>
                <h3 class="text-[#8E8E93] text-[14px] uppercase font-medium mb-1">ข้อมูลราคา</h3>
                <p class="text-[24px] font-semibold text-[#1C1C1E] dark:text-[#F5F5F7]">
                  {{ data.price ? `฿${Number(data.price).toLocaleString('th-TH', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}` : '฿0.00' }}
                </p>
                <p class="text-[#8E8E93] text-[14px]">
                  {{ data.price && data.total ? `มูลค่ารวม: ฿${(Number(data.price) *
                    Number(data.total)).toLocaleString('th-TH',
                      { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'มูลค่ารวม: ฿0.00' }}
                </p>
              </div>

              <!-- Quantity details -->
              <div>
                <h3 class="text-[#8E8E93] text-[14px] uppercase font-medium mb-1">สต็อกสินค้า</h3>
                <div class="flex items-center">
                  <p class="text-[24px] font-semibold text-[#1C1C1E] dark:text-[#F5F5F7] mr-2">{{ data.total || '0' }}
                  </p>
                  <p class="text-[#8E8E93]">หน่วย</p>
                </div>
                <p class="text-[#8E8E93] text-[14px]">
                  สถานะสินค้า:
                  <UBadge :color="data.total > 0 ? 'success' : 'error'" size="sm" class="ml-1">
                    {{ data.total > 0 ? 'มีสินค้า' : 'สินค้าหมด' }}
                  </UBadge>
                </p>
              </div>
            </div>

            <!-- Expiration date section -->
            <div v-if="data.expiration_date" class="pt-3">
              <h3 class="text-[#8E8E93] text-[14px] uppercase font-medium mb-1">ข้อมูลวันหมดอายุ</h3>
              <div class="flex items-center">
                <UIcon name="i-heroicons-calendar" class="text-[#8E8E93] mr-2" />
                <p class="text-[17px] text-[#1C1C1E] dark:text-[#F5F5F7]">
                  {{ new Date(data.expiration_date).toLocaleDateString('th-TH', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  }) }}
                </p>
              </div>
              <p class="text-[#8E8E93] text-[14px] mt-1">
                <span :class="[
                  new Date(data.expiration_date) < new Date() ? 'text-[#FF3B30]' :
                    (new Date(data.expiration_date) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) ? 'text-[#FF9500]' : 'text-[#34C759]')
                ]">
                  {{ new Date(data.expiration_date) < new Date() ? 'สินค้าหมดอายุแล้ว' : `วันหมดอายุอีก ${Math.ceil((new
                    Date(data.expiration_date).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} วัน` }} </span>
              </p>
            </div>

            <div v-else class="pt-3">
              <h3 class="text-[#8E8E93] text-[14px] uppercase font-medium mb-1">ข้อมูลวันหมดอายุ</h3>
              <p class="text-[17px] text-[#8E8E93]">ไม่ได้ระบุวันหมดอายุ</p>
            </div>

            <!-- System information -->
            <div class="pt-3">
              <h3 class="text-[#8E8E93] text-[14px] uppercase font-medium mb-1">ข้อมูลระบบ</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[14px] text-[#8E8E93]">
                <p>วันที่สร้าง: {{ new Date().toLocaleDateString('th-TH', {
                  year: 'numeric', month: 'long', day: 'numeric'
                }) }}
                </p>
                <p>เวลา: {{ new Date().toLocaleTimeString('th-TH') }}</p>
                <p>สถานะ: <UBadge color="primary" size="sm">รอการบันทึก</UBadge>
                </p>
                <p>รูปภาพ: <UBadge :color="data.image_url ? 'success' : 'error'" size="sm">
                    {{ data.image_url ? 'มีรูปภาพ' : 'ไม่มีรูปภาพ' }}
                  </UBadge>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>

  <!-- Add a click outside handler to close the dropdown -->
  <div v-if="dropdown" class="fixed inset-0 z-40" @click="dropdown = false"></div>
</template>
