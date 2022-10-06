const express = require('express')

const router = express.Router();


const {
    HomePageController,
    CreateUserController,
    DeleteUserController,
    UpdateUserController
} = require('../controllers/userControllers')

router.get('/',HomePageController)
router.post('/createuser',CreateUserController)
router.delete('/delete/:id',DeleteUserController)
// router.patch('/updateuser',UpdateUserController)


module.exports = router;