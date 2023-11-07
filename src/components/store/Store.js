import styles from "./Store.module.css";
export default function Store({store_data}) {
  const company_name = store_data.storeName;
  const balance = store_data?.balance;
  const inventory = store_data?.inventory;
  const computersInStock = store_data?.computersInStock;

  return (
    <div id={styles.company}>
      <div id={styles.companySpecs}>
        <h2> {company_name} </h2>
        <div>
          <ul>
            <li>Inventory: ${inventory}</li>
            <li>Balance: ${balance}</li>
            <li>Computers in Stock: {computersInStock}</li>
          </ul>
        </div>
      </div>
      <div id={styles.companyButtons}>
        <button className={styles.buttons}>Inventory Report</button>
        <button className={styles.buttons}>Delete Store</button>
      </div>
    </div>
  );
}
