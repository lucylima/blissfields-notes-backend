import { Router } from "express";
import { getBitsById, registerBits } from "../controller/bits.controller.js";

const bitsRoutes = Router()

bitsRoutes.get("/bits", getBitsById)
bitsRoutes.post("/bits", registerBits)

export default bitsRoutes