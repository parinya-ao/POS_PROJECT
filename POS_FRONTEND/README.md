# POS System Frontend

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Framework](https://img.shields.io/badge/framework-Nuxt%203-green)
![License](https://img.shields.io/badge/license-Proprietary-red)

A modern, elegant Point of Sale system frontend with Apple-inspired design aesthetics built with Nuxt 3, Vue 3, and Tailwind CSS.

## Features

- **Intuitive UI/UX**: Clean Apple-like interfaces with consistent design language
- **Inventory Management**: Add, edit, and track product inventory
- **Sales Processing**: Easy-to-use order processing and checkout
- **Transaction History**: Comprehensive history and reporting
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dark Mode Support**: Supports both light and dark themes

## Technology Stack

- **Nuxt 3**: Vue 3 framework with enhanced features
- **Tailwind CSS**: For responsive and clean UI design
- **TypeScript**: For type-safe code
- **Nuxt UI**: Pre-built UI components with Apple-like aesthetics
- **Axios**: For API communication

## Prerequisites

- Node.js 18+ (or Bun)
- Backend API running (see POS_BACKEND documentation)

## Installation

This project uses `bun` package manager (recommended). Install Bun first if you haven't ([Bun Installation Guide](https://bun.sh/)).

```bash
# Install dependencies
bun install

# Install required icons for UI components
bun add -D @iconify-json/heroicons
```

## Development

Start the development server:

```bash
bun run dev
```

The development server will be available at `http://localhost:3000`.

## Building for Production

```bash
# Generate static project
bun run build

# Preview the built project
bun run preview
```

## Project Structure

```
POS_FRONTEND/
├── app/                    # Nuxt application
│   ├── app.config.ts       # UI configuration
│   ├── app.vue             # Main app component
│   ├── assets/             # Static assets and CSS
│   │   └── css/
│   │       └── main.css    # Main CSS file with theme variables
│   └── pages/              # Vue page components
│       ├── additem.vue     # Add new item page
│       ├── history.vue     # Transaction history page
│       ├── index.vue       # Main POS page (dashboard)
│       ├── edit/           # Edit item pages
│       │   └── [id].vue    # Dynamic edit page
│       └── item/           # Item detail pages
│           └── [id].vue    # Dynamic item detail page
├── components/             # Reusable Vue components
│   ├── item_card.vue       # Item card component
│   └── item_order.vue      # Order item component
├── public/                 # Public static assets
├── server/                 # Server-side code
├── types/                  # TypeScript type definitions
├── utils/                  # API utilities
│   ├── get_items.ts        # Get all items
│   ├── get_one_item.ts     # Get single item
│   ├── get_transactions.ts # Get transactions
│   ├── ping.ts             # API connectivity check
│   ├── post_item.ts        # Create item
│   ├── post_transaction.ts # Create transaction
│   └── put_item.ts         # Update item
├── nuxt.config.ts          # Nuxt configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## API Integration

The frontend connects to the backend API with the following utilities:

- `get_items.ts`: Fetches all inventory items
- `get_one_item.ts`: Fetches a specific item by ID
- `get_transactions.ts`: Fetches transaction history
- `post_item.ts`: Creates new inventory items
- `post_transaction.ts`: Records new transactions
- `put_item.ts`: Updates existing inventory items
- `ping.ts`: Checks API connectivity

## Design System

The application uses an Apple-inspired design system with:

- **Color Palette**:
  - Primary: iOS Blue (#007AFF)
  - Success: Apple Green (#34C759)
  - Warning: Apple Orange (#FF9500)
  - Error: Apple Red (#FF3B30)
  - Neutral: Apple Gray (#8E8E93)
  - Background: Light (#F5F5F7) / Dark (#1C1C1E)

- **UI Elements**: Rounded corners (12px), soft shadows, and smooth transitions

## License

© 2025 Parinya Aobaun. All rights reserved.
This software is proprietary. No use or modification is permitted without explicit authorization.
