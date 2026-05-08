import { pool } from "./pool.js"

const getAllBrands = async () => {
    const rows = await pool.query("SELECT * FROM brands");
    return rows;
}

const getBrand = async (id) => {
    const rows = await pool.query("SELECT * FROM brands WHERE id = $1", [id]);
    return rows;
}

const brandDB = { getAllBrands, getBrand };
export default brandDB;