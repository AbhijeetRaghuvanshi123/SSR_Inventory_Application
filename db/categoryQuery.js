import { pool } from "./pool.js";

const getAllCategories = async () => {
    const rows = await pool.query("SELECT * FROM categories");
    return rows;
}

const getCategory = async (id) => {
    const rows = await pool.query("SELECT * FROM items WHERE categoryId = $1", [id]);
    return rows;
}

const addNewCategory = async (category) => {
    await pool.query("INSERT INTO categories(categoryName, categoryDescription) VALUES ( $1, $2 )", [category.name, category.description]);
}

const deleteCategory = async (id) => {
    await pool.query("DELETE FROM categories WHERE id = $1", [id]);
}

const categoryDB = {getAllCategories, getCategory, addNewCategory, deleteCategory};
export default categoryDB;

