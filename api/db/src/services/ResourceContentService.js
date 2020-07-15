import database from '../models';
class ResourceContentService {
    static async getAllResourceContent() {
        try {
          return await database.ResourceContent.findAll();
        } catch (error) {
          throw error;
        }
      }
    
    static async addResourceContent(newResourceContent) {
        try {
            console.log("in resource content try");
            console.log(newResourceContent);
            return await database.ResourceContent.create(newResourceContent);
        } catch (error) {
            console.log("in resource content catch");
            throw error;
        }
    }

    static async updateResourceContent(id, updateResourceContent) {
        try {
            const resourceContentToUpdate = await database.ResourceContent.findOne({
            where: { contentID: Number(id) }
            });

            if (resourceContentToUpdate) {
                await database.ResourceContent.update(resourceContentToUpdate, { where: { contentID: Number(id) } });

                return updateResourceContent;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async getAResourceContent(id) {
        try {
            const resourceContent = await database.ResourceContent.findOne({
            where: { contentID: Number(id) }
            });

            return resourceContent;
        } catch (error) {
            throw error;
        }
    }

    static async deleteResourceContent(id) {
        try {
            const resourceContentToDelete = await database.ResourceContent.findOne({ where: { contentID: Number(id) } });

            if (resourceContentToDelete) {
                const resourceContentToDelete = await database.ResourceContent.destroy({
                    where: { contentID: Number(id) }
            });
            return resourceContentToDelete;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }   

    static async doesContentExist(inputContent) {
        try {
            let returnedContent = await database.ResourceContent.findOne({ where: { link: inputContent}});
            if(returnedContent == null) {
                return false;
            }
            return true;
        } catch(error) {
            throw error;
        }
    }
}

export default ResourceContentService;