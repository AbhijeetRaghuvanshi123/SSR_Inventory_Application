import brandDB from "../db/brandQuery.js";

const getAllBrandsGET = async (req , res) => {
    const rows = await brandDB.getAllBrands();
    res.render('brand/brands', { title: 'Avilable Brands: ', brands: rows.rows});
}

const getBrandByIdGET = async (req , res) => {
    const rows = await brandDB.getBrand(req.query.id);
    res.render('brand/brand', { title: 'Brand: ', brand: rows.rows[0]});
}

const addNewBrandGET = async (req, res) => {
    res.render('brand/newBrand');
}

const addNewBrandPOST = async (req, res) => {
    await brandDB.addNewBrand(req.body);
    res.redirect('/brands');
}

const deleteBrandPOST = async (req, res) => {
    await brandDB.deleteBrand(req.body.id);
    res.redirect('/brands');
}

export {getAllBrandsGET , getBrandByIdGET, addNewBrandGET, addNewBrandPOST, deleteBrandPOST};