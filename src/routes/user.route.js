import { Router } from "express";
import { deleteUser, editUser, getUserById, registerUser } from "../controller/user.controller.js"

const userRouter = Router()

userRouter.get("/user", getUserById)
userRouter.post("/user", registerUser)
userRouter.delete("/user/:id", deleteUser)
userRouter.put("/user/:id", editUser)

export default userRouter