const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register a new user
router.post("/", registerUser);

// Login user
router.post("/login", authUser);

// Get all users (search) - protected route
router.get("/", protect, allUsers);

module.exports = router;
