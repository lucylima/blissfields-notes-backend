import { Bits } from "../model/Bits.model.js";
import { Notes } from "../model/Notes.model.js";
import { User } from "../model/User.model.js";

User.hasMany(Bits, { foreignKey: 'user_id' });
Bits.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Notes, { foreignKey: 'user_id' });
Notes.belongsTo(User, { foreignKey: 'user_id' });