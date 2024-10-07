import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { createId } from "@paralleldrive/cuid2";
import { User } from "./User.model.js";


const Notes = database.define("notes", {

    notes_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: createId()
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
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: "user_id"
        },
        onDelete: 'CASCADE'
    }
})

export { Notes }