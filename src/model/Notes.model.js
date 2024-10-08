import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { User } from "./User.model.js";


const Notes = database.define("Notes", {

    notes_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    title: {
        type: DataTypes.STRING(400),
        allowNull: false
    },

    text: {
        type: DataTypes.TEXT,
        allowNull: false

    },

    mood: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: "user_id"
        },
        onDelete: 'CASCADE'
    }
})

export { Notes }