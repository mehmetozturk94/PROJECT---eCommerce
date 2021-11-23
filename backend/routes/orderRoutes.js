const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} = require("../controllers/orderController");
const { bearerAuthorization, admin } = require("../middleware/authMiddleware");

router
  .route("/")
  .post(bearerAuthorization, addOrderItems)
  .get(bearerAuthorization, admin, getOrders);
router.route("/myorders").get(bearerAuthorization, getMyOrders);
router.route("/:id").get(bearerAuthorization, getOrderById);
router.route("/:id/pay").put(bearerAuthorization, updateOrderToPaid);
router
  .route("/:id/deliver")
  .put(bearerAuthorization, admin, updateOrderToDelivered);

module.exports = router;
