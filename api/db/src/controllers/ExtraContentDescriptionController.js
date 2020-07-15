import ExtraContentDescriptionService from '../services/ExtraContentDescriptionService';
import Responses from '../utils/responses';

const response = new Responses();

class ExtraContentDescriptionController {
  static async getAllExtraContentDescriptions(req, res) {
    try {
      const allExtraContentDescriptions = await ExtraContentDescriptionService.getAllExtraContentDescriptions();
      if (allExtraContentDescriptions.length > 0) {
        response.setSuccess(200, 'Extra Content Descriptions retrieved', allExtraContentDescriptions);
      } else {
        response.setSuccess(200, 'No extra content description found');
      }
      return response.send(res);
    } catch (error) {
      response.setError(400, error);
      return response.send(res);
    }
  }

  static async addExtraContentDescription(req, res) {
    console.log('in addExtraContentDescription');
    if (!req.body.extraDescription) {
      console.log('in extraContentDescription if statement');
      response.setError(400, 'Please provide complete details');
      return response.send(res);
    }
    const newExtraContentDescription = req.body;
    console.log(newExtraContentDescription);
    try {
      const createdExtraContentDescription = await ExtraContentDescriptionService.addExtraContentDescription(newExtraContentDescription);
      response.setSuccess(201, 'Extra Content Description Added!', createdExtraContentDescription);
      return response.send(res);
    } catch (error) { 
      response.setError(400, error.message);
      return response.send(res);
    }
  }

  static async updateExtraContentDescription(req, res) {
    const alteredExtraContentDescription = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      response.setError(400, 'Please input a valid numeric value');
      return response.send(res);
    }
    try {
      const updateExtraContentDescription = await ExtraContentDescriptionService.updateExtraContentDescription(id, alteredExtraContentDescription);
      if (!updateExtraContentDescription) {
        response.setError(404, `Cannot find extra content description with the id: ${id}`);
      } else {
        response.setSuccess(200, 'Extra content description updated', updateExtraContentDescription);
      }
      return response.send(res);
    } catch (error) {
      response.setError(404, error);
      return response.send(res);
    }
  }

  static async getAExtraContentDescription(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      response.setError(400, 'Please input a valid numeric value');
      return response.send(res);
    }

    try {
      const theExtraContentDescription = await ExtraContentDescriptionService.getAExtraContentDescription(id);

      if (!theExtraContentDescription) {
        response.setError(404, `Cannot find extra content description with the id ${id}`);
      } else {
        response.setSuccess(200, 'Found extra content description', theExtraContentDescription);
      }
      return response.send(res);
    } catch (error) {
      response.setError(404, error);
      return response.send(res);
    }
  }

  static async deleteExtraContentDescription(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      response.setError(400, 'Please provide a numeric value');
      return response.send(res);
    }

    try {
      const extraContentDescriptionToDelete = await ExtraContentDescriptionService.deleteExtraContentDescription(id);

      if (extraContentDescriptionToDelete) {
        response.setSuccess(200, 'Extra content description deleted');
      } else {
        response.setError(404, `Extra content description with the id ${id} cannot be found`);
      }
      return response.send(res);
    } catch (error) {
      response.setError(400, error);
      return response.send(res);
    }
  }
}

export default ExtraContentDescriptionController;