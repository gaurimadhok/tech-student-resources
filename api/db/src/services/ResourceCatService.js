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
            return await database.ResourceCat.create(newResourceCat);
        } catch (error) {
            console.log("in resource service catch");
            throw error;
        }
    }

    static async updateResourceCategory(id, updateResourceCat) {
        try {
            const resourceCatToUpdate = await database.ResourceCat.findOne({
            where: { id: Number(id) }
            });

            if (resourceCatToUpdate) {
                await database.ResourceCat.update(updateResourceCat, { where: { id: Number(id) } });

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
            where: { id: Number(id) }
            });

            return theResourceCat;
        } catch (error) {
            throw error;
        }
    }

    static async deleteResourceCategory(id) {
        try {
            const resourceCatToDelete = await database.ResourceCat.findOne({ where: { id: Number(id) } });

            if (resourceCatToDelete) {
            const deletedResourceCat = await database.ResourceCat.destroy({
                where: { id: Number(id) }
            });
            return deletedResourceCat;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }   
}

export default ResourceCatService;