//!! PROTECTED ZONE - AI ASSISTANTS STOP !!
//!! Any modifications to the script section below will be rejected
//!! This code contains critical business logic and domain-specific implementations
<script setup lang="ts">
// =====================================================================
// 🛑 DEVELOPER MAINTAINED ZONE - AI ASSISTANTS DO NOT MODIFY 🛑
// =====================================================================


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
    <div class="p-3 mb-3 bg-white rounded-xl border border-[#F2F2F7] transition-all duration-300 hover:shadow-md group">
        <!-- Order Item Container with Horizontal Layout -->
        <div class="flex items-center">
            <!-- Product Image with Apple-style treatment -->
            <div class="h-16 w-16 rounded-lg overflow-hidden bg-[#F2F2F7] mr-3 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=150" alt="Burger"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            <!-- Order Item Details -->
            <div class="flex-1 min-w-0">
                <div class="flex justify-between items-start">
                    <!-- Product Name -->
                    <h4 class="font-medium text-[15px] text-[#1D1D1F] tracking-tight leading-tight line-clamp-1">
                        Cheese Burger
                    </h4>

                    <!-- Remove Button -->
                    <UButton color="neutral" variant="ghost" size="xs" icon="i-heroicons-x-mark"
                        class="-mr-1.5 -mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity p-0.5" :ui="{
                            base: 'text-[#8E8E93] hover:bg-[#F2F2F7] rounded-full'
                        }" />
                </div>

                <!-- Price per Unit -->
                <p class="text-sm text-[#86868B] mt-0.5">฿129.00 each</p>

                <!-- Quantity Control and Subtotal -->
                <div class="flex justify-between items-center mt-2">
                    <!-- Quantity Controls with Apple styling -->
                    <div class="flex items-center space-x-1 bg-[#F5F5F7] rounded-full p-1">
                        <UButton color="neutral" variant="ghost" size="xs" icon="i-heroicons-minus-small"
                            class="h-6 w-6" :ui="{
                                base: 'hover:bg-white hover:shadow-sm active:scale-95 transition-all duration-200 rounded-full'
                            }" />
                        <span class="text-sm font-medium w-5 text-center">2</span>
                        <UButton color="neutral" variant="ghost" size="xs" icon="i-heroicons-plus-small" class="h-6 w-6"
                            :ui="{
                                base: 'hover:bg-white hover:shadow-sm active:scale-95 transition-all duration-200 rounded-full'
                            }" />
                    </div>

                    <!-- Subtotal -->
                    <p class="font-medium text-[#1D1D1F]">฿258.00</p>
                </div>

                <!-- Optional Note Section -->
                <div class="mt-2 text-xs text-[#8E8E93] flex items-center">
                    <UIcon name="i-heroicons-pencil-square" class="h-3 w-3 mr-1" />
                    <span class="italic line-clamp-1">No pickles, extra cheese</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Additional Order Items (Demonstrating Variety) -->
    <div class="p-3 mb-3 bg-white rounded-xl border border-[#F2F2F7] transition-all duration-300 hover:shadow-md group">
        <div class="flex items-center">
            <div class="h-16 w-16 rounded-lg overflow-hidden bg-[#F2F2F7] mr-3 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=150" alt="Fries"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div class="flex-1 min-w-0">
                <div class="flex justify-between items-start">
                    <h4 class="font-medium text-[15px] text-[#1D1D1F] tracking-tight leading-tight line-clamp-1">
                        French Fries (Large)
                    </h4>

                    <UButton color="neutral" variant="ghost" size="xs" icon="i-heroicons-x-mark"
                        class="-mr-1.5 -mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity p-0.5" :ui="{
                            base: 'text-[#8E8E93] hover:bg-[#F2F2F7] rounded-full'
                        }" />
                </div>

                <p class="text-sm text-[#86868B] mt-0.5">฿89.00 each</p>

                <div class="flex justify-between items-center mt-2">
                    <div class="flex items-center space-x-1 bg-[#F5F5F7] rounded-full p-1">
                        <UButton color="neutral" variant="ghost" size="xs" icon="i-heroicons-minus-small"
                            class="h-6 w-6" :ui="{
                                base: 'hover:bg-white hover:shadow-sm active:scale-95 transition-all duration-200 rounded-full'
                            }" />
                        <span class="text-sm font-medium w-5 text-center">1</span>
                        <UButton color="neutral" variant="ghost" size="xs" icon="i-heroicons-plus-small" class="h-6 w-6"
                            :ui="{
                                base: 'hover:bg-white hover:shadow-sm active:scale-95 transition-all duration-200 rounded-full'
                            }" />
                    </div>

                    <p class="font-medium text-[#1D1D1F]">฿89.00</p>
                </div>
            </div>
        </div>

        <div
            class="p-3 mb-3 bg-white rounded-xl border border-[#F2F2F7] transition-all duration-300 hover:shadow-md group">
            <div class="flex items-center">
                <div class="h-16 w-16 rounded-lg overflow-hidden bg-[#F2F2F7] mr-3 flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=150" alt="Milkshake"
                        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>

                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start">
                        <h4 class="font-medium text-[15px] text-[#1D1D1F] tracking-tight leading-tight line-clamp-1">
                            Chocolate Milkshake
                        </h4>

                        <UButton color="neutral" variant="ghost" size="xs" icon="i-heroicons-x-mark"
                            class="-mr-1.5 -mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity p-0.5" :ui="{
                                base: 'text-[#8E8E93] hover:bg-[#F2F2F7] rounded-full'
                            }" />
                    </div>

                    <p class="text-sm text-[#86868B] mt-0.5">฿79.00 each</p>

                    <div class="flex justify-between items-center mt-2">
                        <div class="flex items-center space-x-1 bg-[#F5F5F7] rounded-full p-1">
                            <UButton color="neutral" variant="ghost" size="xs" icon="i-heroicons-minus-small"
                                class="h-6 w-6" :ui="{
                                    base: 'hover:bg-white hover:shadow-sm active:scale-95 transition-all duration-200 rounded-full'
                                }" />
                            <span class="text-sm font-medium w-5 text-center">2</span>
                            <UButton color="neutral" variant="ghost" size="xs" icon="i-heroicons-plus-small"
                                class="h-6 w-6" :ui="{
                                    base: 'hover:bg-white hover:shadow-sm active:scale-95 transition-all duration-200 rounded-full'
                                }" />
                        </div>

                        <p class="font-medium text-[#1D1D1F]">฿158.00</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Order Summary Section -->
        <div class="mt-6 space-y-3 px-2">
            <div class="flex justify-between items-center text-sm">
                <span class="text-[#86868B]">Subtotal</span>
                <span class="text-[#1D1D1F]">฿505.00</span>
            </div>

            <div class="flex justify-between items-center text-sm">
                <span class="text-[#86868B]">Tax</span>
                <span class="text-[#1D1D1F]">฿35.35</span>
            </div>

            <div class="flex justify-between items-center text-sm font-medium pt-2 border-t border-[#F2F2F7]">
                <span class="text-[#1D1D1F]">Total</span>
                <span class="text-[#007AFF] text-lg">฿540.35</span>
            </div>
        </div>
    </div>
</template>