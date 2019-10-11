let inMemoryWorkshop = [];


function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop);
    });
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"));
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === workshop));
    });
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"));
        }
        if (!description) {
            reject(new Error("Workshop description required"));
        }
        inMemoryWorkshop.push({
            name,
            description
        });
        resolve();
    });
}

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name to remove required"));
        }

        let i = inMemoryWorkshop.map(x => x.name).indexOf(name);

        if (i >= 0) {
            inMemoryWorkshop.splice(i, 1);
        }else {
            reject(new Error("No workshop with this name"));
        }

        resolve();
    });
}

function updateWorkshop(oldname, name, description) {
    return new Promise((resolve, reject) => {
        if (!oldname) {
            reject(new Error("Workshop name to replace required"));
        }

        if (!name) {
            reject(new Error("Workshop name required"));
        }

        if (!description) {
            reject(new Error("Workshop description required"));
        }

        let i = inMemoryWorkshop.map(x => x.name).indexOf(oldname);

        if (i >= 0) {
            inMemoryWorkshop.splice(i, 1, { name, description });
        }else {
            reject(new Error("No workshop with this name"));
        }

        resolve();
    });
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
};