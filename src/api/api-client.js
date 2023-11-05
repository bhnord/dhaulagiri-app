const aws_path = "https://pttmkhd20b.execute-api.us-east-2.amazonaws.com/Prod/";


class Api {

// TODO: remove this as hard-coded values
    constructor() {
        this.username = 'sam';
        this.password = 'samantha';
        this.storeName = 'Sam Store'
    }
    logout() {
        this.username = "";
        this.password = "";
        this.storeName = "";
    }
    login(username, password, storeName) {
      this.username=username;
      this.password=password;
      this.storeName=storeName;

      //TODO: add some kind of login checking through lambda

    }
    generateStoreInventory(storeName) {
        const endpoint = "generate-store-inventory";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {username: this.username, password: this.password, storeName: storeName}
            )
        };

        return fetch(aws_path + endpoint, requestOptions).then((response) => response.json());
    }

    //TODO: sitename -> storename
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


}

export let api = new Api();
