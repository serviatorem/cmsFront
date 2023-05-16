from fastapi import FastAPI
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

origins = [
    "http://localhost",
    "http://localhost:8080",
]
app = FastAPI(
    title='CMS System'
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
dealsUser = [{
    "id": 13131
}]


@app.get("/deals")
def get_deals():
    return dealsUser


@app.post("/auth/{user}/{password}")
def post_deals(user: str, password: str):
    if user == 'admin' and password == 'admin':
        return 'auth'
    else:
        return 'reg'

@app.get("/")
def get():
    return 'HI'


class DealsModels(BaseModel):
    id: int
    name: str
    category: str
    income: str
    cost: int
    description: str
    image: str

# @app.post("/deals/{deals}")
# def post_deals(deals: List[DealsModels]):
#     dealsUser.extend(deals)
#     return {"status": 200, "data": dealsUser}
