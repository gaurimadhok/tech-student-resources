import { Router } from 'express';
import ExtraContentDescriptionController from '../controllers/ExtraContentDescriptionController';

const router = Router();

router.get('/', ExtraContentDescriptionController.getAllExtraContentDescriptions);
router.post('/admin', ExtraContentDescriptionController.addExtraContentDescription);
router.get('/admin/:id', ExtraContentDescriptionController.getAExtraContentDescription);
router.put('/admin/:id', ExtraContentDescriptionController.updateExtraContentDescription);
router.delete('/admin/:id', ExtraContentDescriptionController.deleteExtraContentDescription);

export default router;