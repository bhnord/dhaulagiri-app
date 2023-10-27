import styles from "./Company.module.css";
export default function Company() {
  const company_name = "Company1";
  const balance = 1000;
  const inventory = 1000;
  const computersInStock = 20;

  return (
      <div id={styles.company}>
        <h2> {company_name} </h2>
        <div>
          <div id={styles.companySpecs}>
            <ul>
              <li>Inventory: ${inventory}</li>
              <li>Balance: ${balance}</li>
              <li>Computers in Stock: {computersInStock}</li>
            </ul>
          </div>
          <div id={styles.companyButtons}>
            <button>Inventory Report</button>
            <button>Delete Store</button>
          </div>
        </div>
      </div>
  );
}
