const { Router } = require('express');

const router = Router();

const {
	getAllThoughts,
	getThoughtById,
	createThought,
	updateThought,
	deleteThought,
} = require('../../../controllers/thoughts');

router.get('/', getAllThoughts);
router.get('/:id', getThoughtById);
router.post('/', createThought);
router.put('/', updateThought);
router.delete('/', deleteThought);

module.exports = router;
