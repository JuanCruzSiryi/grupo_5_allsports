const { body } = require('express-validator');

const rules = [
    body('nameProduct')
        .isLength({ min: 1 }).withMessage('El campo no debe estar vacío.'),
    body('descProduct')
        .isLength({ min: 1 }).withMessage('El campo no debe estar vacío.'), 
];

module.exports = rules;