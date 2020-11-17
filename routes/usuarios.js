// Rutas para crear usuarios
const express = require('express');
const router = express.Router();

// Importamos nuestro control
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');

// Crear un usuario
// api/usuarios
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'La contraseña debe ser de minimo 6 caracteres').isLength({ min: 6 })
    ],
    usuarioController.crearUsuario
);

module.exports = router;