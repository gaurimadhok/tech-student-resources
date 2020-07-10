import { Router } from 'express';
import ResourceCatController from '../controllers/ResourceCatController';

const router = Router();

router.get('/', ResourceCatController.getAllResourcesCategories);
router.post('/admin', ResourceCatController.addResourceCategory);
router.get('/admin/:id', ResourceCatController.getAResourceCateogry);
router.put('/admin/:id', ResourceCatController.updatedResourceCategory);
router.delete('/admin/:id', ResourceCatController.deleteResourceCategory);

export default router;