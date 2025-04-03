from fastapi import FastAPI, dependencies, HTTPException, Depends, Query
from sqlmodel import Field, Session, SQLModel, create_engine, select
from typing import Annotated, Optional
from pydantic import ConfigDict
import os
from dotenv import load_dotenv
from enum import Enum
from datetime import datetime, date

load_dotenv()
sqlite_file_name = os.getenv("SQLFILENAME")
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)


def create_db_and_tabls():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]


# ประเภทของสินค้า
class TYPE(str, Enum):
    ELECTRONICS = "Electronics"
    FASHION = "Fashion"
    HOME_APPLIANCES = "Home_Appliances"
    GROCERY = "Grocery"
    BEAUTY = "Beauty"


class Item(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    total: int = Field(index=True)
    type_item: TYPE = Field(index=True)
    price: int = Field(index=True)
    expiration_date: Optional[date] = Field(default=None, index=True)
    image_url: Optional[str] = Field(default=None, index=True)
    update_at: datetime = Field(default_factory=datetime.now, index=True)
