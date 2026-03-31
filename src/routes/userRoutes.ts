import Express from "express";

const router = Express.Router();

// @route   GET /api/v1/users
// @desc    Get all users
// @access  Public
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get all users" });
});

export default router;