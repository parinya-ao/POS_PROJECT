from fastapi import APIRouter, dependencies, HTTPException, Query
from sqlmodel import Field, Session, SQLModel, create_engine, select
from typing import Annotated, Optional
from database import SessionDep

# import schmea
from database import Item, TYPE
from datetime import datetime, date


class ItemCreate(SQLModel):
    name: Optional[str] = None
    total: Optional[int] = None
    type_item: Optional[TYPE] = None
    price: Optional[int] = None
    expiration_date: Optional[date] = None
    image_url: Optional[str] = None


class ItemUpdate(SQLModel):
    total: Optional[int] = None
    price: Optional[int] = None


router = APIRouter(
    prefix="/items",
    tags=["items"],
    responses={404: {"error": "/routers/items", "detial": "bug or error solve"}},
)


@router.post("/")
async def add_item(item: ItemCreate, session: SessionDep) -> Item:
    item = Item(
        name=item.name,
        total=item.total,
        type_item=item.type_item,
        price=item.price,
        image_url=item.image_url,
        expiration_date=item.expiration_date,
    )
    session.add(item)
    session.commit()
    session.refresh(item)
    return item


# read all
@router.get("/")
async def read_item(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[Item]:
    items = session.exec(select(Item).offset(offset).limit(limit)).all()
    return items


# read one Item
@router.get("/{item_id}")
async def read_one_item(item_id: int, session: SessionDep) -> Item:
    items_result = session.get(Item, item_id)
    # no item
    if not items_result:
        raise HTTPException(
            status_code=404, detail="read one item bugg item not found "
        )
    return items_result


@router.put("/{item_id}")
async def update_item(item_id: int, item_update: ItemUpdate, session: SessionDep):
    items_result = session.get(Item, item_id)
    # don't Item
    if not items_result:
        raise HTTPException(status_code=404, detail="item not found for update")

    if items_result.total is not None:
        items_result.total = item_update.total
    if item_update.price is not None:
        items_result.price = item_update.price

    session.add(items_result)
    session.commit()
    session.refresh(items_result)
    return items_result


@router.delete("/{item_id}")
async def delete_one_item(item_id: int, session: SessionDep):
    items_result = session.get(Item, item_id)
    if not items_result:
        raise HTTPException(status_code=404, detail="delete one item bug no item")
    session.delete(items_result)
    session.commit()
    return {"ok": True, "delete": item_id}
