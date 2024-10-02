import { Bits } from "../model/bits.models.js";

const getBitsById = async (req, res) => {
    try {
        const {id, text, user_id} = req.body;
        const bits = await Bits.findOne({
            where: {id, text, user_id} 
        })
        if (!bits) {
            return res.status(404).json({ Error: "bits not found" })
        }
        return res.status(200).json({ bits })
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const registerBits = (req, res) => {
    try {
        const text = req.body
        const bits = Bits.create({
            text: text
        })
        return res.status(200).json({bits})
    } catch(error){
        return res.status(400).json({error})
    }
}

export { getBitsById, registerBits }


