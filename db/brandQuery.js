import { pool } from "./pool.js"

const getAllBrands = async () => {
    const rows = await pool.query("SELECT * FROM brands");
    return rows;
}

const getBrand = async (id) => {
    const rows = await pool.query("SELECT * FROM brands WHERE id = $1", [id]);
    return rows;
}

const addNewBrand = async (brand) => {
    await pool.query("INSERT INTO brands(brandName, brandDescription) VALUES($1, $2)", [brand.name, brand.description]);
}

const deleteBrand = async (id) => {
    await pool.query("DELETE FROM brands WHERE id = $1", [id]);
}

const brandDB = { getAllBrands, getBrand, addNewBrand, deleteBrand };
export default brandDB;