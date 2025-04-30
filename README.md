# POS System (Point of Sale)

![License](https://img.shields.io/badge/license-Commercial-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)

A modern, elegant Point of Sale system with inventory management capabilities built with FastAPI (Backend) and Nuxt 3 (Frontend). Designed with Apple-like UI aesthetics for an intuitive and seamless user experience.

## 📋 Features

- **Intuitive UI/UX**: Apple-inspired design system with clean interfaces
- **Inventory Management**: Track stock levels and product details
- **Transaction History**: Comprehensive sales history and reporting
- **Real-time Updates**: Live connection status and inventory updates
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode Support**: Supports both light and dark themes

## 🚀 Tech Stack

- **Frontend**: 
  - Nuxt 3 (Vue 3)
  - Tailwind CSS
  - Nuxt UI Components
  - TypeScript
  - Axios for API requests
  
- **Backend**:
  - FastAPI
  - SQLModel
  - SQLite Database
  - Python 3.12+

## 📦 Prerequisites

- Docker and Docker Compose
- Node.js 18+ and npm/bun (for local development)
- Python 3.12+ (for local backend development)

## 💻 Installation & Setup

### Using Docker (Recommended)

The easiest way to run the complete system is using Docker Compose:

```bash
docker compose up -d --build
```

After the containers are running, access the application at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

### Manual Installation

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd POS_BACKEND
   ```

2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Run the backend server:
   ```bash
   uvicorn main:app --reload
   ```

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd POS_FRONTEND
   ```

2. Install dependencies using bun:
   ```bash
   bun install
   ```

3. Run the development server:
   ```bash
   bun run dev
   ```

4. For production build:
   ```bash
   bun run build
   bun run preview  # To test the production build
   ```

## 📂 Project Structure

```
POS_PROJECT/
├── POS_BACKEND/               # Backend application
│   ├── main.py                # Entry point for FastAPI application
│   ├── database.py            # Database models and connection
│   ├── requirements.txt       # Python dependencies
│   └── routers/               # API endpoints
│       ├── items.py           # Item management endpoints
│       └── transactions.py    # Transaction endpoints
│
└── POS_FRONTEND/              # Frontend application
    ├── app/                   # Nuxt application
    │   ├── app.config.ts      # UI configuration
    │   ├── assets/            # Static assets and CSS
    │   └── pages/             # Vue page components
    ├── components/            # Reusable Vue components
    ├── types/                 # TypeScript type definitions
    └── utils/                 # API utility functions
```

## 📱 Usage

### Inventory Management
- Add new items with details like name, price, quantity, and expiry date
- Edit existing items to update prices or stock levels
- View detailed information about each item

### Sales Processing
1. Select items from the inventory grid
2. Specify quantities for each item
3. Complete the transaction to update inventory and record the sale

### Reporting and History
- View transaction history with detailed information
- Track sales performance by item
- Monitor inventory levels and value

## 🛠️ Development

To contribute to development:

1. Clone the repository
2. Set up the development environment as described in the installation section
3. Make your changes
4. Test thoroughly before submitting pull requests

## 📄 License

Copyright © 2025 Parinya Abaoon

This software is proprietary and commercial. All rights reserved.
No use or modification is permitted without explicit authorization.

## 👤 Contact

For inquiries about this project, please contact:
- **Developer**: Parinya Aobaun
- **LinkedIn** : [Parinya Aobaun](https://www.linkedin.com/in/parinya-aobaun)

