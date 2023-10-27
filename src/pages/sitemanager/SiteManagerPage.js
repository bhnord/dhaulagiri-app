import styles from "./SiteManagerPage.module.css";
import Company from "../../components/Company/Company";
export default function SiteManagerPage() {
  return (
    <div className={styles.wrapper}>
      <h3>SiteManagerPage</h3>
      <div className={styles.content}>
        <div id={styles.site_reports}>
            <Company />
        </div>
        <div id={styles.store_view}>dd</div>
      </div>
    </div>
  );
}
