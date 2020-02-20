const router = require("express").Router();
const jobRoutes = require("./jobs");
const userRoutes = require("./users");
const authRoutes = require('./auth');

router.use("/jobs", jobRoutes);

router.use("/user", userRoutes);

router.use('/auth', authRoutes)

module.exports = router;
