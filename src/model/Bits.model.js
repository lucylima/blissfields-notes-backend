import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { createId } from "@paralleldrive/cuid2";
import { User } from "./User.model.js";


const Bits = database.define("Bits", {
    bits_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: createId()
    },
    text: {
        type: DataTypes.TEXT,
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

export { Bits }



