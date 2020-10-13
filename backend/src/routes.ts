import { Router } from 'express';
import orphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);
routes.post('/orphanages', orphanagesController.create);

export default routes;
