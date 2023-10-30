import styles from "./SiteManagerPage.module.css";
import Company from "../../components/Company/Company";
export default function SiteManagerPage() {

  //will be returned from lambda
  const totalInventoryAmt = 10000;
  const siteManagerBalance = 43005;
  const siteBalance = 100000;


  //will be returned from lambda
  const c_data = {
    name: "Company1",
    balance: 1000,
    inventory: 1000,
    computersInStock: 43,
  };

  //load examples
  const companies = [];
  for (let i = 0; i < 3; i++) {
    companies.push(<Company company_data={c_data} />);
  }

  return (
    <div className={styles.wrapper}>
      <h3>SiteManagerPage</h3>
      <div className={styles.content}>
        <div id={styles.site_reports}>{companies}</div>
        <div id={styles.store_view}>
          <p>Total Inventory $ Amount: ${totalInventoryAmt}</p>
          <p>Site Manager Balance: ${siteManagerBalance}</p>
          <p>Site Balance: ${siteBalance}</p>
          <p>Generate Site Reports:</p>
          <button>Internal Profit Report</button>
          <button>Total Inventory Report</button>
        </div>
      </div>
    </div>
  );
}
