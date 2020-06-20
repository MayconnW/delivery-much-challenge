import { Router } from 'express';

const routes = Router();
routes.get('/test', (req, res) => {
  return res.json({ test: 'tes' });
});

export default routes;
