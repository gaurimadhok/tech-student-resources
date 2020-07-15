import database from '../models';
class ResourceSubCatService {
    static async getAllResourceSubCategories() {
        try {
          return await database.ResourceSubCat.findAll();
        } catch (error) {
          throw error;
        }
      }
    
    static async addResourceSubCategory(newResourceSubCat) {
        try {
            console.log("in resource service try");
            console.log(newResourceSubCat);
            return await database.ResourceSubCat.create(newResourceSubCat);
        } catch (error) {
            console.log("in resource service catch");
            throw error;
        }
    }

    static async updateResourceSubCategory(id, updateResourceSubCat) {
        try {
            const resourceSubCatToUpdate = await database.ResourceSubCat.findOne({
            where: { subCatID: Number(id) }
            });

            if (resourceSubCatToUpdate) {
                await database.ResourceSubCat.update(updateResourceSubCat, { where: { subCatID: Number(id) } });

                return updateResourceSubCat;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async getAResourceSubCategory(id) {
        try {
            const resourceSubCat = await database.ResourceSubCat.findOne({
            where: { subCatID: Number(id) }
            });

            return resourceSubCat;
        } catch (error) {
            throw error;
        }
    }

    static async getAResourceSubCategoryID(subCatTitle) {
        try {
            const resourceSubCatID = await database.ResourceSubCat.findOne({
                attribute: 'subCatID',
                where: { subCatTitle: subCatTitle }
            });

            return resourceSubCatID['dataValues']['subCatID'];
        } catch (error) {
            throw error;
        }
    }

    static async deleteResourceSubCategory(id) {
        try {
            const resourceSubCatToDelete = await database.ResourceSubCat.findOne({ where: { subCatID: Number(id) } });

            if (resourceSubCatToDelete) {
                const resourceSubCatToDelete = await database.ResourceSubCat.destroy({
                    where: { subCatID: Number(id) }
            });
            return resourceSubCatToDelete;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }   

    static async doesSubCatExist(inputSubCat) {
        try {
            let returnedSubCat = await database.ResourceSubCat.findOne({ where: { subCatTitle: inputSubCat}});
            if(returnedSubCat == null) {
                return false;
            }
            return true;
        } catch(error) {
            throw error;
        }
    }
}

export default ResourceSubCatService;