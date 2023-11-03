const aws_path = "https://pttmkhd20b.execute-api.us-east-2.amazonaws.com/Prod/";

export function postGenerateStoreInventory(storeName) {
  const endpoint = "generate-store-inventory";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ storeName: storeName }),
  };

  return fetch(aws_path + endpoint, requestOptions).then((response) =>
    response.json()
  );
}

export function postRemoveStore(storeName) {
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
