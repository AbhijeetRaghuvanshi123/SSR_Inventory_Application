import { pool } from "./pool.js";

const moveStockInOut = async (item) => {
    if(item.movement === 'out' && item.quantity > 0){
        item.quantity = -item.quantity;
    }
    await pool.query(
        "INSERT INTO stock_movements(item_id, quantity, note, created_by) VALUES($1, $2, $3, $4)", 
        [item.item_id, item.quantity, item.note, item.created_by]
    );
}

const stockDB = { moveStockInOut };
export default stockDB;