import styles from "./Company.module.css";
export default function Company({company_data}) {
  const company_name = company_data.name;
  const balance = company_data.balance;
  const inventory = company_data.inventory;
  const computersInStock = company_data.computersInStock;

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
        <button>Inventory Report</button>
        <button>Delete Store</button>
      </div>
    </div>
  );
}
