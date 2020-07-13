import database from '../models';
class ExtraContentDescriptionService {
    static async getAllExtraContentDescriptions() {
        try {
          return await database.ExtraContentDescription.findAll();
        } catch (error) {
          throw error;
        }
      }
    
    static async addExtraContentDescription(newExtraContentDescription) {
        try {
            console.log("in extra description try");
            console.log(newExtraContentDescription);
            return await database.ExtraContentDescription.create(newExtraContentDescription);
        } catch (error) {
            console.log("in extra description catch");
            throw error;
        }
    }

    static async updateExtraContentDescription(id, updateExtraContentDescription) {
        try {
            const extraContentDescriptionToUpdate = await database.ExtraContentDescription.findOne({
            where: { extraDescriptionID: Number(id) }
            });

            if (extraContentDescriptionToUpdate) {
                await database.ExtraContentDescription.update(updateExtraContentDescription, { where: { extraDescriptionID: Number(id) } });

                return updateExtraContentDescription;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async getAExtraContentDescription(id) {
        try {
            const extraContentDescription = await database.ExtraContentDescription.findOne({
            where: { extraDescriptionID: Number(id) }
            });

            return extraContentDescription;
        } catch (error) {
            throw error;
        }
    }

    static async deleteExtraContentDescription(id) {
        try {
            const extraContentDescriptionToDelete = await database.ExtraContentDescription.findOne({ where: { extraDescriptionID: Number(id) } });

            if (extraContentDescriptionToDelete) {
                const extraContentDescriptionToDelete = await database.ExtraContentDescription.destroy({
                    where: { extraDescriptionID: Number(id) }
            });
            return extraContentDescriptionToDelete;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }   
}

export default ExtraContentDescriptionService;