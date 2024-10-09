import { Bits } from "../model/Bits.model.js";

const getBitsByUser = async (req, res) => {
    try {
        const { user_id } = req.params;

        const bits = await Bits.findAll({
            where: { user_id } 
        })

        if (!bits) {
            return res.status(404).json({ messageError: "bits not found" })
        }

        return res.status(200).json({ bits })
    } catch (error) {
        return res.status(400).json({ messageError: error.message })
    }
}

const registerBits = async (req, res) => {
    try {

        const { text, user_id } = req.body

        await Bits.sync()

        const bits = await Bits.create({
            text, user_id
        })

        return res.status(201).json({ bits })
    } catch(error){
        return res.status(400).json({ messageError: error.message })
    }
}


const editBits = async (req, res) => {
    const { bits_id } = req.params;
    const { text } = req.body;

    await Bits.update({ text }, {
        where: {
            bits_id
        }
    })

    return res.status(200).json({ message: 'Bits editado com sucesso' });
}

const deleteBits = async (req, res) => {

    const { bits_id } = req.params;

    await Bits.destroy({
        where: {
            bits_id
        }
    })

    return res.status(200).json({ message: 'Bits deletado com sucesso' });
}

const getAllBits = async (req, res) => {

    try {

        const bits = await Bits.findAll()

        return res.status(200).json({ bits })

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }

}

export { getBitsByUser, registerBits, editBits, getAllBits, deleteBits }


