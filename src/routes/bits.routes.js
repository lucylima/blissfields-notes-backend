import { Router } from "express";
import { deleteBits, editBits, getAllBits, getBitsByUser, registerBits } from "../controller/bits.controller.js";

const bitsRoutes = Router()

bitsRoutes.get("/bits/:user_id", getBitsByUser)
bitsRoutes.get("/bits", getAllBits)
bitsRoutes.post("/bits", registerBits)
bitsRoutes.put("/bits/:bits_id", editBits)
bitsRoutes.delete("/bits/:bits_id", deleteBits)

export default bitsRoutes