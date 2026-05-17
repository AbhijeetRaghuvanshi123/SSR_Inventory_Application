import { pool } from "./pool.js";

const getAllItems = async () => {
    const rows = await pool.query("SELECT * FROM items");
    return rows;
}

const getItem = async (id) => {
    const itemPromise = pool.query(`
        SELECT 
            items.id, 
            items.itemName, 
            items.itemDescription, 
            categories.categoryName, 
            users.username, 
            brands.brandName,
            COALESCE(SUM(stock_movements.quantity), 0) AS quantity
        FROM items
        LEFT JOIN categories ON items.categoryId = categories.id
        LEFT JOIN users ON items.addedBy = users.id
        LEFT JOIN brands ON items.brandId = brands.id
        LEFT JOIN stock_movements ON items.id = stock_movements.item_id 
        WHERE items.id = $1
        GROUP BY 
            items.id, 
            categories.categoryName, 
            users.username, 
            brands.brandName
    `, [id]);

    const usersPromise = pool.query("SELECT id, username FROM users");

    const [itemRow, usersRows] = await Promise.all([itemPromise, usersPromise]);
    
    return {itemRow , usersRows};
}

const getUserItems = async (id) => {
    const rows = await pool.query("SELECT * FROM items WHERE addedBy= $1", [id]);
    return rows;
}

const addNewItem = async (item) => {
    await pool.query("INSERT INTO items(itemName, itemDescription, categoryId, brandId, addedBy) VALUES($1, $2, $3, $4, $5)", [item.name, item.description, item.categoryId, item.brandId, item.addedBy]);
}

const deleteItem = async (id) => {
    await pool.query("DELETE FROM items WHERE id = $1", [id]);
}

const getAllCategoriesAndBrandsNameAndId = async () => {
    const brandPromise = pool.query("SELECT id, brandName FROM brands");
    const categoryPromise = pool.query("SELECT id, categoryName FROM categories");

    const [brandRows, categoryRows] = await Promise.all([brandPromise, categoryPromise]);

    return {brandRows, categoryRows};
}


const itemDB = { getAllItems, getUserItems, addNewItem, deleteItem, getItem, getAllCategoriesAndBrandsNameAndId};
export default itemDB;