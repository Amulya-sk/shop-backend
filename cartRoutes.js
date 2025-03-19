const express = require('express')
const { addToCart } = require('../Controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')
const cartRouter = express.Router()

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.get("/")
cartRouter.post("/remove")

module.exports=cartRouter