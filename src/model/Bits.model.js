import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { User } from "./User.model.js";


const Bits = database.define("Bits", {
    bits_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    text: {
        type: DataTypes.TEXT,
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

export { Bits }



