import { Sequelize } from "sequelize";
import "dotenv/config"

const database = new Sequelize(process.env.DATABASE_URL,{
    dialect: "postgres",
})

const sequelizeAuthenticate = async () => {
    try {
        await database.sync()
        console.log("database connection successful")
    } catch (error) {
        console.error(error)
    }
}

export { database, sequelizeAuthenticate }