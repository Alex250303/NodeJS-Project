const express = require('express');
const authController = require('../../controllers/users/authController');
const currentUserController = require('../../controllers/users/currentUserController');

const validation = require('../../middlewares/validation');
const tryCatchMiddleware = require('../../middlewares/tryCatchMiddleware');
const auth = require('../../middlewares/auth');

const { joiUser, joiSubscribtion } = require('../../models/user');

const router = express.Router();

router.post(
  '/signup',
  validation(joiUser),
  tryCatchMiddleware(authController.signup),
);

router.post(
  '/login',
  validation(joiUser),
  tryCatchMiddleware(authController.login),
);

router.get('/logout', auth, tryCatchMiddleware(authController.logout));

router.get(
  '/current',
  auth,
  tryCatchMiddleware(currentUserController.getCurrent),
);

router.patch(
  '/updateSubscription',
  auth,
  validation(joiSubscribtion),
  tryCatchMiddleware(currentUserController.updateSubscription),
);

router.delete(
  '/deleteUser',
  auth,
  tryCatchMiddleware(currentUserController.deleteUser),
);


module.exports = router;
