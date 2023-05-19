const uuid = require('uuid');

export class UUIDManager {
    public id;
    constructor() {
        this.id = uuid.v4();
    }

    getId() {
        return this.id;
    }

    generateNewId() {
        this.id = uuid.v4();
        return this.id;
    }

    validateId(id) {
        return uuid.validate(id);
    }
}

export const uuidManager = new UUIDManager();

const a = uuidManager.generateNewId();

console.log(a);

