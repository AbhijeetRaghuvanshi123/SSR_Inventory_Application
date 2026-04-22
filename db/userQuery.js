import { pool } from "./pool.js";

const getAllUsers = async () => {
    const rows = await pool.query("SELECT * FROM users");
    return rows;
}

const addNewUser = async (user) => {
    await pool.query("INSERT INTO users(username, email) VALUES( $1, $2)", [user.username, user.email]);
}

const getUser = async (user) => {
    const rows = await pool.query("SELECT * FROM users WHERE id=$1", [user.id]);
    return rows;
}

const userDB = { getAllUsers, addNewUser, getUser };

export default userDB;