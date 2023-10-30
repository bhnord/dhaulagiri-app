import styles from "./SiteManagerPage.module.css";
import Company from "../../components/Company/Company";
export default function SiteManagerPage() {
    const totalInventoryAmt = 10000;
    const siteManagerBalance= 43005;
    const siteBalance = 100000;
  return (
    <div className={styles.wrapper}>
      <h3>SiteManagerPage</h3>
      <div className={styles.content}>
        <div id={styles.site_reports}>
            <Company />
            <Company />
            <Company />
        </div>
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
