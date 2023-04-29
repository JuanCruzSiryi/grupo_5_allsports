const { body } = require('express-validator');

const rules = [
    body('nameProduct')
        .isLength({ min: 5 }).withMessage('El nombre del producto es obligatorio y debe tener como mínimo 5 caracteres.'),
    body('descProduct')
        .isLength({ min: 20 }).withMessage('La descripción del producto es obligatoria y debe tener como mínimo 20 caracteres.'), 
];

module.exports = rules;