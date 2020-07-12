import ResourceCatService from '../services/ResourceCatService';
import Responses from '../utils/responses';

const response = new Responses();

class ResourceCatController {
  static async getAllResourcesCategories(req, res) {
    try {
      const allResourceCategories = await ResourceCatService.getAllResourceCategories();
      if (allResourceCategories.length > 0) {
        response.setSuccess(200, 'Resources retrieved', allResourceCategories);
      } else {
        response.setSuccess(200, 'No resource found');
      }
      return response.send(res);
    } catch (error) {
      response.setError(400, error);
      return response.send(res);
    }
  }

  static async addResourceCategory(req, res) {
    console.log('in addResourceCategory');
    if (!req.body.resourceType) {
      response.setError(400, 'Please provide complete details');
      return response.send(res);
    }
    const newResourceCategory = req.body;
    console.log(newResourceCategory);
    try {
      const createdResourceCategory = await ResourceCatService.addResourceCategory(newResourceCategory);
      response.setSuccess(201, 'Resource Added!', createdResourceCategory);
      return response.send(res);
    } catch (error) {
      response.setError(400, error.message);
      return response.send(res);
    }
  }

  static async updatedResourceCategory(req, res) {
    const alteredResourceCategory = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      response.setError(400, 'Please input a valid numeric value');
      return response.send(res);
    }
    try {
      const updateResourceCategory = await ResourceCatService.updatedResourceCategory(id, alteredResourceCategory);
      if (!updateResourceCategory) {
        response.setError(404, `Cannot find resource with the id: ${id}`);
      } else {
        response.setSuccess(200, 'Resource updated', updateResourceCategory);
      }
      return response.send(res);
    } catch (error) {
      response.setError(404, error);
      return response.send(res);
    }
  }

  static async getAResourceCateogry(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      response.setError(400, 'Please input a valid numeric value');
      return response.send(res);
    }

    try {
      const theResourceCategory = await ResourceCatService.getAResourceCategory(id);

      if (!theResourceCategory) {
        response.setError(404, `Cannot find resource with the id ${id}`);
      } else {
        response.setSuccess(200, 'Found Resource', theResourceCategory);
      }
      return response.send(res);
    } catch (error) {
      response.setError(404, error);
      return response.send(res);
    }
  }

  static async deleteResourceCategory(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      response.setError(400, 'Please provide a numeric value');
      return response.send(res);
    }

    try {
      const resourceCatToDelete = await ResourceCatService.deleteResourceCategory(id);

      if (resourceCatToDelete) {
        response.setSuccess(200, 'Resource deleted');
      } else {
        response.setError(404, `Resource with the id ${id} cannot be found`);
      }
      return response.send(res);
    } catch (error) {
      response.setError(400, error);
      return response.send(res);
    }
  }
}

export default ResourceCatController;