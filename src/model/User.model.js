import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { createId } from "@paralleldrive/cuid2";

const User = database.define("User", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: createId()
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    { timestamps: false }
)

export { User }