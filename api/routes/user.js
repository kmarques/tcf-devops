const { Router } = require('express');

const router = Router();
const UserController = require('../controllers/user');

router.get('/users', UserController.getUsers);
router.post('/users', UserController.post);
router.get('/users/:id', UserController.getUser);
router.put('/users/:id', UserController.put);
router.delete('/users/:id', UserController.delete);

module.exports = router;
