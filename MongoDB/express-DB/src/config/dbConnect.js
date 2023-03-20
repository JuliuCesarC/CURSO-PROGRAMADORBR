import mongoose from "mongoose";
import password from "./passwordDB.js";

mongoose.connect(password())

const db = mongoose.connection

export default db