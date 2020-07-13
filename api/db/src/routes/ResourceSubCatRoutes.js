import { Router } from 'express';
import ResourceSubCatController from '../controllers/ResourceSubCatController';

const router = Router();

router.get('/', ResourceSubCatController.getAllResourceSubCategories);
router.post('/admin', ResourceSubCatController.addResourceSubCategory);
router.get('/admin/:id', ResourceSubCatController.getAResourceSubCategory);
router.put('/admin/:id', ResourceSubCatController.updateResourceSubCategory);
router.delete('/admin/:id', ResourceSubCatController.deleteResourceSubCategory);

export default router;