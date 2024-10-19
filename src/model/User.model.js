import { DataTypes } from "sequelize";
import { database } from "../database/database.js";

const User = database.define("User", {
    user_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },

    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
})

export { User }