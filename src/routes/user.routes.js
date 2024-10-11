import { Router } from "express";
import { deleteUser, editUser, getAllUsers, loginUser, registerUser } from "../controller/user.controller.js"

const userRouter = Router()

userRouter.post("/user", loginUser)
userRouter.get("/alluser", getAllUsers)
userRouter.post("/user", registerUser)
userRouter.delete("/user/:user_id", deleteUser)
userRouter.put("/user/:user_id", editUser)

export default userRouter