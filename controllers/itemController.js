import itemDB from "../db/itemQuery.js";

const getAllItemsGET = async (req , res) => {
    const rows = await itemDB.getAllItems();
    res.render('item/items', {title: 'All avilable items' , items: rows.rows});
}

const getUserItemGET = async (req, res) => {
    const rows = await itemDB.getUserItems(req.query.id);
    res.render('item/items', {title: `${req.query.name} Items: `, items: rows.rows});
}

export {getAllItemsGET, getUserItemGET};