export type { CREATE_TRANSACTION };

declare global {
  interface CREATE_TRANSACTION {
    item_id: number;
    quantity: number;
  }
}
