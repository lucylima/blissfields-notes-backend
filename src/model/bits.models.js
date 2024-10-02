import { DataTypes } from "sequelize";
import { database } from "../database/database.js";
import { createId } from "@paralleldrive/cuid2";
import { User } from "../model/User.model.js";


const Bits = database.define("bits", {
    id: {
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
            key: "id"
        }
    }
},
    {
        timestamps: false
    }

)

export { Bits }



