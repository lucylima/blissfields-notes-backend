import { Notes } from "../model/Notes.model.js";

const getNotesByUser = async (req, res) => {
    try {
        const { user_id } = req.params;

        const notes = await Notes.findAll({
            where: { user_id } 
        })

        if (!notes) {
            return res.status(404).json({ Error: "notes not found" })
        }

        return res.status(200).json({ notes })
    } catch (error) {
        return res.status(400).json({ messageError: error.message })
    }
}

const registerNotes = async (req, res) => {
    try {

        const { title, text, mood, user_id } = req.body

        await Notes.sync()

        const notes = await Notes.create({
            title, text, mood, user_id
        })

        return res.status(201).json({ notes })
    } catch(error){
        return res.status(400).json({  messageError: error.message })
    }
}


const editNotes = async (req, res) => {
    const { notes_id } = req.params;
    const { title, text, mood } = req.body;

    await Notes.update({ title, text, mood }, {
        where: {
            notes_id
        }
    })

    return res.status(200).json({ message: 'Notes editado com sucesso' });
}

const deleteNotes = async (req, res) => {

    const { notes_id } = req.params;

    await Notes.destroy({
        where: {
            notes_id
        }
    })

    return res.status(200).json({ message: 'Notes deletado com sucesso' });
}

const getAllNotes = async (req, res) => {

    try {

        const notes = await Notes.findAll()

        return res.status(200).json({ notes })

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }

}

export { getNotesByUser, registerNotes, editNotes, getAllNotes, deleteNotes }