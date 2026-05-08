import brandDB from "../db/brandQuery.js";

const getAllBrandsGET = async (req , res) => {
    const rows = await brandDB.getAllBrands();
    res.render('brands', { title: 'Avilable Brands: ', brands: rows.rows});
}

const getBrandByIdGET = async (req , res) => {
    const rows = await brandDB.getBrand(req.query.id);
    res.render('brand', { title: 'Brand: ', brand: rows.rows[0]});
}

export {getAllBrandsGET , getBrandByIdGET};