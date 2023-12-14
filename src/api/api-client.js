const aws_path = "https://pttmkhd20b.execute-api.us-east-2.amazonaws.com/Prod/";

class Api { // TODO: remove this as hard-coded values
    constructor() {
        this.logout();
    }
    logout() {
        this.username = null;
        this.password = null;
        this.storeName = null;
    }
    login(username, password, storeName) {
        this.logout();
        this.username = username;
        this.password = password;
        this.storeName = storeName;
        // TODO: add some kind of login checking through lambda
    }

    generateStoreInventory(storeName = this.storeName, latitude, longitude) {
        const endpoint = "generate-store-inventory";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {username: this.username, password: this.password, storeName: storeName, latitude: latitude, longitude: longitude}
            )
        };

        return fetch(aws_path + endpoint, requestOptions).then((response) => response.json());
    }

    // TODO: sitename -> storename
    removeStore(storeName) {
        const endpoint = "remove-store";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {siteName: this.storeName, username: this.username, password: this.password, storeName: storeName}
            )
        };

        return fetch(aws_path + endpoint, requestOptions).then((response) => response.json());
    }

    createStore(storeName, username, password, longitude, latitude) {
        const endpoint = "create-store";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    storeName: storeName,
                    username: username,
                    password: password,
                    longitude: longitude,
                    latitude: latitude
                }
            )
        };

        return fetch(aws_path + endpoint, requestOptions).then((response) => response.json());
    }

    addComputer(computerName, ram, storage, processor, processGen, graphics, price) {
        const endpoint = "create-computer";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    username: this.username,
                    password: this.password,
                    storeName: this.storeName,
                    computer: {
                        computerName: computerName,
                        ram: ram,
                        storage: storage,
                        processor: processor,
                        processGen: processGen,
                        graphics: graphics,
                        price: price
                    }

                }
            )
        };

        return fetch(aws_path + endpoint, requestOptions).then((response) => response.json());
    }

    listStores() {
        const endpoint = "list-stores";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        };

        return fetch(aws_path + endpoint, requestOptions).then((response) => response.json());

    }

    generateTotalInventory() {
        const endpoint = "generate-total-inventory";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                siteName: this.storeName,
                username: this.username,
                password: this.password
            })
        };

        return fetch(aws_path + endpoint, requestOptions).then((response) => response.json());

    }

    removeComputer(computerID) {
        const endpoint = "remove-computer";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
            {
                    username: this.username, 
                    password: this.password, 
                    storeName: this.storeName,
                    computerID: computerID
            }
            )
        };

        return fetch(aws_path + endpoint, requestOptions).then((response) => response.json());
    }

    filterComputer(storeName, features) {
        const endpoint = "filter-computers";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
            {
                    storeName: storeName,
                    features: features
            }
            )
        };
        return fetch(aws_path + endpoint, requestOptions).then((response) => response.json());
    }
}

export let api = new Api();
