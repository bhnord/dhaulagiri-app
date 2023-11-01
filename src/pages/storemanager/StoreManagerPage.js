import styles from "./StoreManagerPage.module.css";
import Computer from "../../components/computer/Computer";
export default function StoreManagerPage() {
  //will be returned from lambda
  const storeBalance = 10000;
  const totalInventory = 43005;

  //will be returned from lambda
  const c_data = {
    name: "Computer",
    ram: 12,
    storage: 10,
    processor: "AMD",
    processor_generation: 10,
    graphics: "NVDIA",
    price: 1000,
  };

  //load examples
  const companies = [];
  for (let i = 0; i < 3; i++) {
    companies.push(<Computer key={i} computer_data={c_data} />);
  }

  return (
    <div className={styles.wrapper}>
      <h3>StoreManagerPage</h3>
      <div className={styles.content}>
        <div id={styles.site_reports}>{companies}</div>
        <div id={styles.store_view}>
          <p>Total Store Balance: ${storeBalance}</p>
          <p>Total Inventory $ Amount: ${totalInventory}</p>
          <button>Inventory Report</button>
          <div className="addComputer">
            <h5>Add A Computer</h5>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Price" />
            <input type="text" placeholder="Memory" />
            <input type="text" placeholder="Storage" />
            <input type="text" placeholder="Processor" />
            <input type="text" placeholder="Processor Generation" />
            <input type="text" placeholder="Graphics" />
            <button>Add Computer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
