import { Router } from 'express';
import ResourceContentController from '../controllers/ResourceContentController';

const router = Router();

router.get('/', ResourceContentController.getAllResourceContent);
router.post('/admin', ResourceContentController.addResourceContent);
router.get('/admin/:id', ResourceContentController.getAResourceContent);
router.put('/admin/:id', ResourceContentController.updateResourceContent);
router.delete('/admin/:id', ResourceContentController.deleteResourceContent);

export default router;