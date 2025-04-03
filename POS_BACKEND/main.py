from fastapi import FastAPI, Depends, HTTPException, Query
from database import create_db_and_tabls

# import from router
from routers import items

app = FastAPI()

# config CORS
from fastapi.middleware.cors import CORSMiddleware

origin = ["http://localhost", "http://localhost:8000", "http://localhost:3000", "*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    create_db_and_tabls()


@app.get("/")
def root():
    return {"status": "start"}


app.include_router(items.router)
