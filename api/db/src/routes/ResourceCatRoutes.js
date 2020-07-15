import { Router } from 'express';
import ResourceCatController from '../controllers/ResourceCatController';
import ResourceSubCatController from '../controllers/ResourceSubCatController';

const router = Router();

router.get('/', ResourceCatController.getAllResourcesCategories);
router.post('/admin', [ResourceCatController.addResourceCategory, ResourceSubCatController.addResourceSubCategory]);
router.get('/admin/:id', ResourceCatController.getAResourceCategory);
router.put('/admin/:id', ResourceCatController.updatedResourceCategory);
router.delete('/admin/:id', ResourceCatController.deleteResourceCategory);

export default router;