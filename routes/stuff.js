const express = require('express');
const router = express.Router();

const Thing = require('../models/things');

router.get('/', stuffCtrl.getAllStuff);
router.post('/', stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.get('/:id', stuffCtrl.deleteThing);

module.exports = router;
