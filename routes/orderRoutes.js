import express from "express";
import {
  placeOrder,
  placeOrderFonepay,
  allOrders,
  userOrders,
  UpdateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, UpdateStatus);

// Payment features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/fonepay", authUser, placeOrderFonepay);
// orderRouter.post('/esewaorkhalti', authUser, placeOrder)

// user Feature
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
