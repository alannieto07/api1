const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.GetUserByID);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.DeleteByID);


module.exports = router;
