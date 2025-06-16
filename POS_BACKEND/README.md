using axum
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

## Database model

### Item
id : i32,
name : String,
total : i32,
type_item : TYPE,
price : i32,
expiration_date : date,
image_url : Option<String>,
update_at : datetime,

### Transaction
id : i32,
item_id : i32,
quantity: i32,
sold_at : datetime
