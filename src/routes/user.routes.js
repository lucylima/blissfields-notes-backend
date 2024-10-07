import { Router } from "express";
import { deleteUser, editUser, getAllUsers, getUserById, registerUser } from "../controller/user.controller.js"

const userRouter = Router()

userRouter.get("/user", getUserById)
userRouter.get("/alluser", getAllUsers)
userRouter.post("/user", registerUser)
userRouter.delete("/user/:user_id", deleteUser)
userRouter.put("/user/:user_id", editUser)

export default userRouter