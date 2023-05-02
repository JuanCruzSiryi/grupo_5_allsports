const { body } = require('express-validator');
const db = require('../database/models');

const rules = [
  body('nameProduct')
    .isLength({ min: 5 })
    .withMessage('El nombre del producto es obligatorio y debe tener como mínimo 5 caracteres.'),
  body('descProduct')
    .isLength({ min: 20 })
    .withMessage('La descripción del producto es obligatoria y debe tener como mínimo 20 caracteres.'),
  body('price')
    .isFloat({ gt: 0 })
    .withMessage('El precio del producto es obligatorio y debe ser un número mayor a cero.'),
  body('discount')
    .isFloat({ min: 0, max: 99 })
    .withMessage('El descuento debe ser un número entre 0 y 99.'),
  body('size')
    .custom(async (value, { req }) => {
      const sizes = await db.Size.findAll();
      const validSizes = sizes.map((size) => size.dataValues.nameSize);
      if (!validSizes.includes(value)) {
        throw new Error('El tamaño ingresado no es válido.');
      }
      return true;
    }),
  body('category')
    .custom(async (value, { req }) => {
      const categories = await db.Category.findAll();
      const validCategories = categories.map(
        (category) => category.dataValues.nameCategory
      );
      if (!validCategories.includes(value)) {
        throw new Error('La categoría ingresada no es válida.');
      }
      return true;
    }),
  body('color')
    .custom(async (value, { req }) => {
      const colors = await db.Color.findAll();
      const validColors = colors.map((color) => color.dataValues.nameColor);
      if (!validColors.includes(value)) {
        throw new Error('El color ingresado no es válido.');
      }
      return true;
    }),
  body('brand')
    .custom(async (value, { req }) => {
      const brands = await db.Brand.findAll();
      const validBrands = brands.map((brand) => brand.dataValues.nameBrand);
      if (!validBrands.includes(value)) {
        throw new Error('La marca ingresada no es válida.');
      }
      return true;
    }),
  body('tag').optional({ nullable: true }).isArray().withMessage('Los tags deben ser un array.')
];

module.exports = rules;
