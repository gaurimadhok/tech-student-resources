import ResourceContentService from '../services/ResourceContentService';
import Responses from '../utils/responses';
import ResourceSubCatService from '../services/ResourceSubCatService';

const response = new Responses();

class ResourceContentController {
  static async getAllResourceContent(req, res) {
    try {
      const allResourceContent = await ResourceContentService.getAllResourceContent();
      if (allResourceContent.length > 0) {
        response.setSuccess(200, 'Resource Contents retrieved', allResourceContent);
      } else {
        response.setSuccess(200, 'No resource content found');
      }
      return response.send(res);
    } catch (error) {
      response.setError(400, error);
      return response.send(res);
    }
  }

  static async addResourceContent(req, res) {
    console.log('in addResourceContent');
    if (!req.body.title || !req.body.contentDescription || !req.body.link ) {
      response.setError(400, 'Please provide complete details');
      return response.send(res);
    }
    const newResourceContent = req.body;
    console.log(newResourceContent);
    try {
      let doesContentExist = await ResourceContentService.doesContentExist(newResourceContent['link']);
      if(doesContentExist) {
        response.setSuccess(201, 'Resource Content exists.');
        return response.send(res);
      }
      let subCatID = await ResourceSubCatService.getAResourceSubCategoryID(newResourceContent['subCatTitle']);
      const actualNewResource = { 'title': newResourceContent['title'], 'contentDescription': newResourceContent['contentDescription'], 
                                  'link': newResourceContent['link'], 'image': newResourceContent['image'], 'subCatID': subCatID};
      const createdResourceContent = await ResourceContentService.addResourceContent(actualNewResource);
      response.setSuccess(201, 'Resource Content Added!', createdResourceContent);
      return response.send(res);
    } catch (error) { 
      response.setError(400, error.message);
      return response.send(res);
    }
  }

  static async updateResourceContent(req, res) {
    const alteredResourceContent = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      response.setError(400, 'Please input a valid numeric value');
      return response.send(res);
    }
    try {
      const updateResourceContent = await ResourceContentService.updateResourceContent(id, alteredResourceContent);
      if (!updateResourceContent) {
        response.setError(404, `Cannot find resource with the id: ${id}`);
      } else {
        response.setSuccess(200, 'Resource updated', updateResourceContent);
      }
      return response.send(res);
    } catch (error) {
      response.setError(404, error);
      return response.send(res);
    }
  }

  static async getAResourceContent(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      response.setError(400, 'Please input a valid numeric value');
      return response.send(res);
    }

    try {
      const theResourceContent = await ResourceContentService.getAResourceContent(id);

      if (!theResourceContent) {
        response.setError(404, `Cannot find resource with the id ${id}`);
      } else {
        response.setSuccess(200, 'Found Resource Content', theResourceContent);
      }
      return response.send(res);
    } catch (error) {
      response.setError(404, error);
      return response.send(res);
    }
  }

  static async deleteResourceContent(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      response.setError(400, 'Please provide a numeric value');
      return response.send(res);
    }

    try {
      const resourceContentToDelete = await ResourceContentService.deleteResourceContent(id);

      if (resourceContentToDelete) {
        response.setSuccess(200, 'Resource Content deleted');
      } else {
        response.setError(404, `Resource Content with the id ${id} cannot be found`);
      }
      return response.send(res);
    } catch (error) {
      response.setError(400, error);
      return response.send(res);
    }
  }
}

export default ResourceContentController;