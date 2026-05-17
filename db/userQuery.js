import { pool } from "./pool.js";

const getAllUsers = async () => {
    const rows = await pool.query("SELECT * FROM users");
    return rows;
}

const addNewUser = async (user) => {
    await pool.query("INSERT INTO users(username, email) VALUES( $1, $2)", [user.username, user.email]);
}

const getUser = async (id) => {
    const rows = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    return rows;
}

const deleteUser = async (id) => {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
}

const userDB = { getAllUsers, addNewUser, getUser, deleteUser };

export default userDB;