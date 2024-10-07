import { Router } from "express";
import { deleteNotes, editNotes, getAllNotes, getNotesById, registerNotes } from "../controller/notes.controller.js";

const notesRoutes = Router()

notesRoutes.get("/notes/:notes_id", getNotesById)
notesRoutes.get("/notes", getAllNotes)
notesRoutes.post("/notes", registerNotes)
notesRoutes.put("/notes/:notes_id", editNotes)
notesRoutes.delete("/notes/:notes_id", deleteNotes)

export default notesRoutes