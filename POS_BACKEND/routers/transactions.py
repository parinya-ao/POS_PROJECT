from fastapi import FastAPI, dependencies, HTTPException, Query, APIRouter
from typing import Annotated, Optional
from database import SessionDep
from sqlmodel import Field, Session, SQLModel, create_engine, select

from datetime import datetime, date


from database import Item

# import database for create schmea
from database import Transaction


class create_transaction(SQLModel):
    item_id: int = None
    quantity: int = None


router = APIRouter(
    prefix="/transaction",
    tags=["transactions"],
    responses={
        404: {"error": "/routers/transaction", "detial": "bug on router transaction"}
    },
)


@router.get("/")
async def get_all_transaction(
    session: SessionDep, offset: int = 0, limit: Annotated[int, Query(le=100)] = 100
):
    result = session.exec(select(Transaction).offset(offset).limit(limit)).all()
    return result


@router.get("/{item_id}")
async def get_item_transaction(
    session: SessionDep, item_id: int, limit: Annotated[int, Query(le=100)] = 100
):
    result = session.exec(
        select(Transaction).where(Transaction.item_id == item_id).limit(limit)
    ).all(0)
    return result


@router.post("/")
async def log_sell(transaction: create_transaction, session: SessionDep):
    item = session.get(Item, transaction.item_id)
    if not item:
        raise HTTPException(status_code=404, detail="item not found")
    if transaction.quantity > item.total:
        raise HTTPException(status_code=404, detail="item เกิน")
    transaction = Transaction(
        item_id=transaction.item_id,
        quantity=transaction.quantity,
        sold_at=datetime.now(),
    )
    session.add(transaction)
    session.commit()
    session.refresh(transaction)

    return transaction
