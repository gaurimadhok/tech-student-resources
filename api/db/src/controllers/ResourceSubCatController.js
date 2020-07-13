import ResourceSubCatService from '../services/ResourceSubCatService';
import Responses from '../utils/responses';

const response = new Responses();

class ResourceSubCatController {
  static async getAllResourceSubCategories(req, res) {
    try {
      const allResourceSubCatCategories = await ResourceSubCatService.getAllResourceSubCategories();
      if (allResourceSubCatCategories.length > 0) {
        response.setSuccess(200, 'Resource SubCats retrieved', allResourceSubCatCategories);
      } else {
        response.setSuccess(200, 'No resource sub category found');
      }
      return response.send(res);
    } catch (error) {
      response.setError(400, error);
      return response.send(res);
    }
  }

  static async addResourceSubCategory(req, res) {
    console.log('in addResourceSubCategory');
    if (!req.body.subCatTitle) {
      response.setError(400, 'Please provide complete details');
      return response.send(res);
    }
    const newResourceSubCategory = req.body;
    console.log(newResourceSubCategory);
    try {
      const createdResourceSubCategory = await ResourceSubCatService.addResourceSubCategory(newResourceSubCategory);
      response.setSuccess(201, 'Resource SubCat Added!', createdResourceSubCategory);
      return response.send(res);
    } catch (error) {
      response.setError(400, error.message);
      return response.send(res);
    }
  }

  static async updateResourceSubCategory(req, res) {
    const alteredResourceSubCategory = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      response.setError(400, 'Please input a valid numeric value');
      return response.send(res);
    }
    try {
      const updateResourceSubCategory = await ResourceSubCatService.updateResourceSubCategory(id, alteredResourceSubCategory);
      if (!updateResourceSubCategory) {
        response.setError(404, `Cannot find resource with the id: ${id}`);
      } else {
        response.setSuccess(200, 'Resource updated', updateResourceSubCategory);
      }
      return response.send(res);
    } catch (error) {
      response.setError(404, error);
      return response.send(res);
    }
  }

  static async getAResourceSubCategory(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      response.setError(400, 'Please input a valid numeric value');
      return response.send(res);
    }

    try {
      const theResourceSubCategory = await ResourceSubCatService.getAResourceSubCategory(id);

      if (!theResourceSubCategory) {
        response.setError(404, `Cannot find resource with the id ${id}`);
      } else {
        response.setSuccess(200, 'Found Resource SubCat', theResourceSubCategory);
      }
      return response.send(res);
    } catch (error) {
      response.setError(404, error);
      return response.send(res);
    }
  }

  static async deleteResourceSubCategory(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      response.setError(400, 'Please provide a numeric value');
      return response.send(res);
    }

    try {
      const resourceSubCatToDelete = await ResourceSubCatService.deleteResourceSubCategory(id);

      if (resourceSubCatToDelete) {
        response.setSuccess(200, 'Resource SubCat deleted');
      } else {
        response.setError(404, `Resource SubCat with the id ${id} cannot be found`);
      }
      return response.send(res);
    } catch (error) {
      response.setError(400, error);
      return response.send(res);
    }
  }
}

export default ResourceSubCatController;