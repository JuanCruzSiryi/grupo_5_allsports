const { body } = require('express-validator');

const rules = [
    body('firstName')
        .isLength({ min: 1 }).withMessage('El campo no debe estar vacío.'),
    body('lastName')
        .isLength({ min: 1 }).withMessage('El campo no debe estar vacío.'),
    body('email')
        .isLength({ min: 2 }).withMessage('Por lo menos necesito 2 caracteres'),
        // .isEmail('asd@gmail.com').withMessage('No es un formato de email válido.')
    body('password')
        .isLength({ min: 8 }).withMessage('Por lo menos necesito 8 caracteres')
                 
];

module.exports = rules;