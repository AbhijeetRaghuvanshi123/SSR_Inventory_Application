import userDB from "../db/userQuery.js";

const homeGET =  async ( req, res) => {
    const rows = await userDB.getAllUsers();
    res.render('home', {  title: 'All Users' ,users: rows.rows});
}

const newUserFormGET = async (req, res) => {
    res.render('newUser', {title: 'Add new User'});
}

const addNewUserPOST = async (req, res) => {
    await userDB.addNewUser(req.body);
    res.redirect('/');
}

const viewUserGET = async (req, res) => {
    const rows = await userDB.getUser(req.query);
    res.render('profile', {title: 'User Profile', user: rows.rows[0]});
}

export { homeGET, newUserFormGET, addNewUserPOST, viewUserGET };