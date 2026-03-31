import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get all movies' });
});

export default router;