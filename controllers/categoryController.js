import categoryDB from "../db/categoryQuery.js";

const getAllCategoriesGET = async (req, res) => {
    const rows = await categoryDB.getAllCategories();
    res.render('category/categories', { title: 'Avilable Categories' , categories: rows.rows});
}

const getCategoryGET = async (req, res) => {
    const rows = await categoryDB.getCategory(req.query.id);
    res.render('category/category', { title: req.query.category , category: rows.rows});
}

const addNewCategoryPOST = async (req, res) => {
    await categoryDB.addNewCategory(req.body);
    res.redirect('/categories');
}

const addNewCategoryFormGET = async (req, res) => {
    res.render('category/newCategory');
}

export {getAllCategoriesGET, getCategoryGET, addNewCategoryPOST, addNewCategoryFormGET};