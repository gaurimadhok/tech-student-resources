// import database from '../db/models';
import database from '/Users/gaurimadhok/Desktop/Projects/tech-student-resources/api/db/src/models';
class ResourceCatService {
    static async getAllResourceCategories() {
        try {
          return await database.ResourceCat.findAll();
        } catch (error) {
          throw error;
        }
      }
    
    static async addResourceCategory(newResourceCat) {
        try {
            console.log("in resource service try");
            console.log(newResourceCat);
            return await database.ResourceCat.create(newResourceCat);
        } catch (error) {
            console.log("in resource service catch");
            throw error;
        }
    }

    static async updateResourceCategory(id, updateResourceCat) {
        try {
            const resourceCatToUpdate = await database.ResourceCat.findOne({
            where: { catID: Number(id) }
            });

            if (resourceCatToUpdate) {
                await database.ResourceCat.update(updateResourceCat, { where: { catID: Number(id) } });

                return updateResourceCat;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async getAResourceCategory(id) {
        try {
            const theResourceCat = await database.ResourceCat.findOne({
            where: { catID: Number(id) }
            });

            return theResourceCat;
        } catch (error) {
            throw error;
        }
    }

    static async getAResourceCategoryID(resourceType) {
        try {
            const resourceCatID = await database.ResourceCat.findOne({
                attribute: 'cat_id',
                where: { resourceType: resourceType }
            });

            return resourceCatID['dataValues']['catID'];
        } catch (error) {
            throw error;
        }
    }

    static async deleteResourceCategory(id) {
        try {
            const resourceCatToDelete = await database.ResourceCat.findOne({ where: { catID: Number(id) } });

            if (resourceCatToDelete) {
            const deletedResourceCat = await database.ResourceCat.destroy({
                where: { catID: Number(id) }
            });
            return deletedResourceCat;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }   

    static async doesCatExist(inputResourceType) {
        try {
            let returnedResourceType = await database.ResourceCat.findOne({ where: { resourceType: inputResourceType}});
            if(returnedResourceType == null) {
                return false;
            }
            return true;
        } catch(error) {
            throw error;
        }
    }
}



export default ResourceCatService;