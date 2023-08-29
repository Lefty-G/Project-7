const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');

router.get('/', auth, postCtrl.findAll);
router.post('/', auth, multer, postCtrl.createPost);
router.get('/:id', auth, multer, postCtrl.getOnePost);
router.post('/:id/read', auth, postCtrl.usersRead);
// router.put('/:id', auth, multer, postCtrl.updatePost);
// router.delete('/:id', auth, postCtrl.deletePost);



module.exports = router;