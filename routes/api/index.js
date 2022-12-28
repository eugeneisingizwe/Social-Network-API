const router = require('express').Router();

const thoughRoutes = require('./thoughRoutes');
const userRoutes = require('./userRoutes');

router.use('/thoughts', thoughRoutes);
router.use('/users', userRoutes);

module.exports = router;
