import itemDB from "../db/itemQuery.js";

const getAllItemsGET = async (req , res) => {
    const rows = await itemDB.getAllItems();
    res.render('item/items', {title: 'All avilable items' , items: rows.rows});
}

const getUserItemsGET = async (req, res) => {
    const rows = await itemDB.getUserItems(req.query.id);
    res.render('item/items', {title: `${req.query.name} Items: `, items: rows.rows});
}

const getItemGET = async (req, res) => {
    const {itemRow, usersRows} = await itemDB.getItem(req.query.id);
    res.render('item/viewItem', { title: itemRow.rows[0].itemname, item: itemRow.rows[0], users: usersRows.rows});
}

const addNewItemPOST = async (req, res) => {
    await itemDB.addNewItem(req.body);
    res.redirect('/items');
}

const addNewItemGET = async (req, res) => {
    const {brandRows, categoryRows } = await itemDB.getAllCategoriesAndBrandsNameAndId();
    res.render('item/newItem.ejs', {title: 'Add new Item', userId: req.query.id, username: req.query.name, categories: categoryRows.rows, brands: brandRows.rows});
}

const deleteItemPOST = async (req, res) => {
    await itemDB.deleteItem(req.body.id);
    res.redirect('/items');
}

export {getAllItemsGET, getUserItemsGET, addNewItemPOST, addNewItemGET, deleteItemPOST, getItemGET};