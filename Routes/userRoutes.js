import express from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../Controller/userController.js'

const userRouter = express.Router();



userRouter.route('/')
    .get(getUsers)
    .post(createUser)


userRouter.route('/:id')
    .get(getUser)
    .delete(deleteUser)
    .patch(updateUser)


export default userRouter