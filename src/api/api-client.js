const aws_path = "https://pttmkhd20b.execute-api.us-east-2.amazonaws.com/Prod/";

//TODO: remove this as hard-coded values
let username = 'sam'
let password = 'samantha'
let storeName = 'Sam Store'

export function generateStoreInventory(storeName) {
  const endpoint = "generate-store-inventory";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password, storeName: storeName }),
  };

  return fetch(aws_path + endpoint, requestOptions).then((response) =>
    response.json()
  );
}

export function removeStore(storeName) {
  const endpoint = "remove-store";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ storeName: storeName }),
  };

  return fetch(aws_path + endpoint, requestOptions).then((response) =>
    response.json()
  );
}
