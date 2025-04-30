# POS System Backend

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Framework](https://img.shields.io/badge/framework-FastAPI-green)
![Database](https://img.shields.io/badge/database-SQLite-orange)
![License](https://img.shields.io/badge/license-Proprietary-red)

A high-performance, modern API backend for the Point of Sale system built with FastAPI and SQLModel.

## Features

- **RESTful API**: Clean, well-structured endpoints
- **Inventory Management**: CRUD operations for inventory items
- **Transaction Processing**: Record and manage sales transactions
- **SQLite Database**: Lightweight, embedded database
- **Type Safety**: Fully typed with Pydantic models
- **Fast Performance**: Leveraging FastAPI's high-speed capabilities

## Technology Stack

- **FastAPI**: Modern, fast web framework for building APIs
- **SQLModel**: SQL databases in Python with type hints
- **SQLite**: Embedded relational database
- **Pydantic**: Data validation using Python type annotations
- **Uvicorn**: ASGI server for running the application

## Prerequisites

- Python 3.12+
- Python virtual environment (recommended)

## Installation

1. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Configure the environment:
   - Create a `.env` file based on the existing template
   - Set `SQLFILENAME` to the desired database path (default: `database.db`)

## Running the API

Start the development server with Uvicorn:

```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`.

## API Documentation

Once the server is running, you can access:

- Interactive API documentation: [http://localhost:8000/docs](http://localhost:8000/docs)
- Alternative documentation: [http://localhost:8000/redoc](http://localhost:8000/redoc)

## Project Structure

```
POS_BACKEND/
├── __init__.py             # Package initializer
├── database.py             # Database models and connection
├── main.py                 # FastAPI application entry point
├── requirements.txt        # Python dependencies
├── routers/                # API endpoint routers
│   ├── __init__.py
│   ├── items.py            # Item management endpoints
│   └── transactions.py     # Transaction endpoints
└── .env                    # Environment configuration
```

## API Endpoints

### Items

- `GET /items/`: List all items
- `GET /items/{item_id}`: Get a specific item
- `POST /items/`: Create a new item
- `PUT /items/{item_id}`: Update an existing item
- `DELETE /items/{item_id}`: Delete an item

### Transactions

- `GET /transaction/`: List all transactions
- `GET /transaction/{transaction_id}`: Get a specific transaction
- `POST /transaction/`: Create a new transaction

## Database Models

### Item

```python
class Item(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    total: int = Field(index=True)
    type_item: TYPE = Field(index=True)
    price: int = Field(index=True)
    expiration_date: Optional[date] = Field(default=None, index=True)
    image_url: Optional[str] = Field(default=None, index=True)
    update_at: datetime = Field(default_factory=datetime.now, index=True)
```

### Transaction

```python
class Transaction(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    item_id: int = Field(foreign_key="item.id")
    quantity: int
    sold_at: datetime = Field(default_factory=datetime.now, index=True)
```

## Development

The application uses SQLModel for ORM and FastAPI for API endpoint creation. The database is automatically created at startup if it doesn't exist.

## License

© 2025 Parinya Aobaun. All rights reserved.
This software is proprietary. No use or modification is permitted without explicit authorization.