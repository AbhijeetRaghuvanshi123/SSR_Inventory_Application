import stockDB from "../db/stockQuery.js";

const moveStockPOST = async (req, res) => {
    await stockDB.moveStockInOut(req.body);
    res.redirect(`items/viewItem?id=${req.body.item_id}`);
}

export {moveStockPOST};