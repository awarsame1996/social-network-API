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
router.put('/:id', updateThought);
router.delete('/:id', deleteThought);

module.exports = router;
