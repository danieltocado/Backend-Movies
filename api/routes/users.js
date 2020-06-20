const router = require('express').Router();
const UserController = require('../controllers/UserController');

const auth = require('../middleware/auth');

router.get('/', auth,  UserController.getAll);
router.post('/signup',  UserController.signup);
router.post('/login',  UserController.login);
router.delete('/delete/:id', UserController.delete);

/*
app.post('/user/crear', addUser);
app.post('/user/login, );
app.get('user/perfil, showProfile);
app.delete('/user/delete, )
*/

/*
app.get('/movies/titulos, searchTitle);
app.get('/movies/id, searchId);
app.get('/movies/all, searchallmovies);
*/

/*
app.post('/orders', creaPedido);
*/


module.exports = router;