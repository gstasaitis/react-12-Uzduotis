npm init -y
npm i json-server
npm run start

GET request
http://localhost:3000/products/1
http://localhost:3000/reviews/1


http://localhost:3000/reviews?productId=1

POST Request (geriausia naudoti uuid del unikalaus ID)
http://localhost:3000/products
    schema: {
            "id": "1",
            "title": "Product 1",
            "category": "electronics",
            "price": 4000,
            "description": "This is description about product 1"
            }

http://localhost:3000/reviews
    schema: {
            "id": "1",
            "rating": 3,
            "comment": "Review 1 for product id 1",
            "productId": 1
            }


PUT request keičia viską išskyrus id
http://localhost:3000/products/3
schema: {
            "id": "5",
            "title": "Product 3",
            "category": "fitness",
            "price": 1200,
            "description": "This is description about product 3"
            }


PATCH request keičia tik nurodytus parametrus
http://localhost:3000/products/3
schema: {
            "price": 555
            }


DELETE
http://localhost:3000/products/3

Tas pats su reviews