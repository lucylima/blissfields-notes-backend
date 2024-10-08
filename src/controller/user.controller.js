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

const registerUser = async (req, res) => {
    try {
        const { username , email, password } = req.body;

        await User.sync()

        const newUser = await User.create({
           username, email, password
        })

        return res.status(201).json({ newUser })

    } catch (error) {

        return res.status(400).json({ errorMessage: error.message })
    }
}

const deleteUser = async (req, res) => {

    const { user_id } = req.params;

    await User.destroy({
        where: {
            user_id
        }
    })

    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
}

const editUser = async (req, res) => {
    const { user_id } = req.params;
    const { username, password, email } = req.body;

    await User.update({username, password, email}, {
        where: {
            user_id
        }
    })

    return res.status(200).json({ message: 'Usuário editado com sucesso' });
}

const getAllUsers = async (req, res) => {

    try {

        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        })

        return res.status(200).json({ users })

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }

}

export { getUserById, registerUser, deleteUser, editUser, getAllUsers }