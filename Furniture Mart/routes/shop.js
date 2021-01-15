const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const authMiddleware = require("../authmiddleware/authmid");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", authMiddleware, shopController.getCart);

router.post("/cart", authMiddleware, shopController.postCart);

router.post(
  "/cart-delete-item",
  authMiddleware,
  shopController.postCartDeleteProduct
);

router.get("/checkout", authMiddleware, shopController.getCheckout);

router.get("/checkout/success", shopController.getCheckoutSuccess);

router.get("/checkout/cancel", shopController.getCheckout);

//router.post('/create-order',authMiddleware, shopController.postOrder);

router.get("/orders", authMiddleware, shopController.getOrders);

router.get("/orders/:orderId", authMiddleware, shopController.getInvoice);

router.post("/order-cancel", authMiddleware, shopController.postCancelOrder);

module.exports = router;
