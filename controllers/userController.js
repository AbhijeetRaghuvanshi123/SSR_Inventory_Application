import userDB from "../db/userQuery.js";

const homeGET =  async ( req, res) => {
    const rows = await userDB.getAllUsers();
    res.render('home/home', {  title: 'All Users' ,users: rows.rows});
}

const newUserFormGET = async (req, res) => {
    res.render('user/newUser', {title: 'Add new User'});
}

const addNewUserPOST = async (req, res) => {
    await userDB.addNewUser(req.body);
    res.redirect('/');
}

const viewUserGET = async (req, res) => {
    const rows = await userDB.getUser(req.query.id);
    res.render('user/profile', {title: 'User Profile', user: rows.rows[0]});
}

export { homeGET, newUserFormGET, addNewUserPOST, viewUserGET };