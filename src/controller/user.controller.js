import { User } from "../model/User.model.js";

const getUserById = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email, password }
        })
        if (!user) {
            return res.status(404).json({ Error: "user not found" })
        }
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
const registerUser = (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = User.create({
            name, email, password
        })
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
const deleteUser = () => { }
const editUser = () => { }

export { getUserById, registerUser, deleteUser, editUser }