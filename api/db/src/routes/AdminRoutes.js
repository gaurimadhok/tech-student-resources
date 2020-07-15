import { Router } from 'express';
import ResourceCatController from '../controllers/ResourceCatController';
import ResourceSubCatController from '../controllers/ResourceSubCatController';
import ResourceContentController from '../controllers/ResourceContentController';
import ExtraContentDescriptionController from '../controllers/ExtraContentDescriptionController';

const router = Router();

router.get('/', ExtraContentDescriptionController.getAllExtraContentDescriptions);

router.post('/resourceCat', ResourceCatController.addResourceCategory);
router.post('/resourceSubCat', ResourceSubCatController.addResourceSubCategory);
router.post('/resourceContent', ResourceContentController.addResourceContent);
router.post('/extraContentDescription', ExtraContentDescriptionController.addExtraContentDescription);

router.get('/admin/:id', ExtraContentDescriptionController.getAExtraContentDescription);
router.put('/admin/:id', ExtraContentDescriptionController.updateExtraContentDescription);
router.delete('/admin/:id', ExtraContentDescriptionController.deleteExtraContentDescription);

export default router;