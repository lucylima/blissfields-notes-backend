import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { createId } from "@paralleldrive/cuid2";

const User = database.define("User", {
    
    user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: createId()
    },

    username: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
})

export { User }