import { pool } from "./pool.js";

const getAllItems = async () => {
    const rows = await pool.query("SELECT * FROM items");
    return rows;
}

const getUserItems = async (id) => {
    const rows = await pool.query("SELECT * FROM items WHERE addedBy= $1", [id]);
    return rows;
}

const itemDB = { getAllItems, getUserItems };
export default itemDB;