'use strict';

class Collection {

    constructor(model) {
        this.model = model;
    }

    async read(id, options) {

        try {
            if (id) {
                return await this.model.findOne({ where: {id}, ...options});
            } else {
                return await this.model.findAll();
            }

        } catch (error) {
            console.log('COLLECTION READ ERROR: ', error);
        }
    }

    async create(data) {
        try {
            return await this.model.create(data);
        } catch (error) {
            console.log('COLLECTION CREATE ERROR: ', error);
        }
    }

    async update(id, data) {
        try {
            let updatedRecord = await this.model.update(
                data,
                {
                    where: { id}
                }
            )
            return updatedRecord
        } catch (error) {
            console.log('COLLECTION UPDATE ERROR: ', error);
        }
    }

    async delete(id) {
        try {
            console.log("id: ",id)
            let number = await this.model.destroy({ where: {id}} );
            return number;
        } catch (error) {
            console.log('COLLECTION DELETE ERROR: ', error);
        }
    }

}

module.exports = Collection;