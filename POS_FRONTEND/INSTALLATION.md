# Installation Instructions

## Required Packages

To fix the current errors, please install the following packages:

```bash
# Install Heroicons for the icon components
npm install -D @iconify-json/heroicons

# Make sure Nuxt UI is properly installed
npm install @nuxt/ui
```

After installing the packages, restart your Nuxt development server.

## Configuration Check

Make sure your `nuxt.config.ts` file includes the UI module:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  // other configuration...
});
```

## Component Usage

The current implementation uses Nuxt UI components. Some important notes:

1. `UFormGroup` is not available in this version of Nuxt UI. Instead, use regular HTML elements with proper styling as shown in the updated templates.

2. Use `UInput`, `UButton`, and other UI components as provided by Nuxt UI.

3. For icons, we're using the Heroicons collection through UIcon: `<UIcon name="i-heroicons-icon-name" />`
