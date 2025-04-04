export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'neutral',
    colors: [
      'blue',
      'neutral',
      'green',
      'orange',
      'red',
    ],
    strategy: 'merge',

    // Apple-inspired theme configuration
    theme: {
      // Core colors
      colors: {
        // Primary color (iOS Blue)
        blue: {
          50: '#E3F1FD',
          100: '#C7E3FC',
          200: '#A0D0FA',
          300: '#74BCF7',
          400: '#47A9F5',
          500: '#007AFF', // iOS Blue
          600: '#0062CC',
          700: '#004A99',
          800: '#003166',
          900: '#001833',
        },
        // Neutral color (Apple Gray)
        neutral: {
          50: '#F5F5F7', // Apple Light Background
          100: '#E5E5EA',
          200: '#D1D1D6',
          300: '#C7C7CC',
          400: '#AEAEB2',
          500: '#8E8E93', // Apple Gray
          600: '#636366',
          700: '#48484A',
          800: '#2C2C2E',
          900: '#1C1C1E', // Apple Dark Background
        },
        // Success color (Apple Green)
        green: {
          50: '#E3F9E9',
          100: '#C7F2D3',
          200: '#8FE6A7',
          300: '#57DA7C',
          400: '#34C759', // Apple Green
          500: '#2EB350',
          600: '#259942',
          700: '#1D7F34',
          800: '#155326',
          900: '#0C2913',
        },
        // Warning color (Apple Orange)
        orange: {
          50: '#FFF5E6',
          100: '#FFEACC',
          200: '#FFD599',
          300: '#FFC066',
          400: '#FFAB33',
          500: '#FF9500', // Apple Orange
          600: '#CC7600',
          700: '#995800',
          800: '#663A00',
          900: '#331D00',
        },
        // Error color (Apple Red)
        red: {
          50: '#FFEBEA',
          100: '#FFD6D5',
          200: '#FFADAB',
          300: '#FF8581',
          400: '#FF5C57',
          500: '#FF3B30', // Apple Red
          600: '#FF1409',
          700: '#D50D03',
          800: '#A20A02',
          900: '#6F0701',
        },
      },
    },
    
    // Base component styles
    base: {
      // Using Apple's design principles for a clean, balanced look
      background: 'bg-neutral-50 dark:bg-neutral-900',
      ring: 'ring-blue-500 dark:ring-blue-400',
      border: 'border-neutral-200 dark:border-neutral-700',
    },

    // Button styling with Apple-like aesthetics
    button: {
      rounded: 'rounded-xl', // Apple's slightly rounded corners
      font: 'font-medium',
      gap: 'gap-2',
      padding: {
        sm: 'px-3 py-1.5',
        md: 'px-4 py-2',
        lg: 'px-5 py-2.5',
        xl: 'px-6 py-3',
      },
      transition: 'transition-all duration-200 ease-out',
      base: 'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      variant: {
        solid: {
          gray: 'bg-neutral-500 hover:bg-neutral-600 text-white',
          default: 'bg-blue-500 hover:bg-blue-600 active:scale-[0.98] shadow-sm hover:shadow-md text-white dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-white focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400',
        },
        soft: {
          gray: 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-white',
          default: 'bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-950 dark:hover:bg-blue-900 dark:text-blue-400 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400',
        },
        outline: {
          gray: 'border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100 text-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 dark:text-neutral-300',
          default: 'border border-blue-500 hover:bg-blue-50 text-blue-500 dark:border-blue-400 dark:hover:bg-blue-950 dark:text-blue-400 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400',
        },
      },
    },

    // Card styling with Apple's light design approach
    card: {
      rounded: 'rounded-xl',
      shadow: 'shadow-sm hover:shadow-md',
      transition: 'transition-all duration-200 ease-out',
      background: 'bg-white dark:bg-neutral-800',
      ring: 'ring-1 ring-neutral-200 dark:ring-neutral-700',
    },

    // Input styling that resembles Apple's clean forms
    input: {
      rounded: 'rounded-lg',
      placeholder: 'placeholder-neutral-400 dark:placeholder-neutral-500',
      background: 'bg-white dark:bg-neutral-800',
      ring: 'ring-1 ring-inset ring-neutral-200 dark:ring-neutral-700',
      padding: {
        sm: 'px-3 py-1.5',
        md: 'px-4 py-2',
        lg: 'px-5 py-2.5',
        xl: 'px-6 py-3',
      },
    },

    // Modal styling with Apple's focus on clarity
    modal: {
      rounded: 'rounded-xl',
      shadow: 'shadow-lg',
      background: 'bg-white dark:bg-neutral-800',
    },

    // Badge styling with Apple's approach to status indicators
    badge: {
      rounded: 'rounded-full',
      font: 'font-medium',
      padding: {
        sm: 'px-2 py-0.5',
        md: 'px-2.5 py-0.5',
        lg: 'px-3 py-1',
      },
    },

    // Dropdown styling for clean, intuitive navigation
    dropdown: {
      rounded: 'rounded-xl',
      shadow: 'shadow-lg',
      background: 'bg-white dark:bg-neutral-800',
      ring: 'ring-1 ring-neutral-200 dark:ring-neutral-700',
    },

    tooltip: {
      background: 'bg-neutral-900 dark:bg-white',
      color: 'text-white dark:text-black',
      rounded: 'rounded-md',
      shadow: 'shadow-lg',
    },

    // Avatar styling for user profiles
    avatar: {
      rounded: 'rounded-full',
      background: 'bg-neutral-200 dark:bg-neutral-700',
    },

    // Select fields styling
    select: {
      rounded: 'rounded-lg',
      padding: {
        sm: 'pl-3 pr-8 py-1.5',
        md: 'pl-4 pr-9 py-2',
        lg: 'pl-5 pr-10 py-2.5',
        xl: 'pl-6 pr-11 py-3',
      },
      background: 'bg-white dark:bg-neutral-800',
      ring: 'ring-1 ring-inset ring-neutral-200 dark:ring-neutral-700',
      icon: {
        base: 'text-neutral-500 dark:text-neutral-400',
      },
    },

    // Toggle styling for switches
    toggle: {
      rounded: 'rounded-full',
      background: {
        off: 'bg-neutral-200 dark:bg-neutral-700',
        on: 'bg-blue-500 dark:bg-blue-400',
      },
      transition: 'transition-all duration-200 ease-out',
    },

    // Animation timings for a smooth experience
    transition: {
      base: 'transition-all ease-out',
      duration: {
        fast: 'duration-200', // Apple's quick interactions
        normal: 'duration-300', // Standard transitions
        slow: 'duration-500', // More noticeable transitions
      },
    },
  }
})
