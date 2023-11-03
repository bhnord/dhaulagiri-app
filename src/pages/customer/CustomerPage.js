import styles from "./CustomerPage.module.css";
export default function CustomerPage() {

  //will be returned from lambda
  // const totalInventoryAmt = 10000;
  // const siteManagerBalance = 43005;
  // const siteBalance = 100000;


  // //will be returned from lambda
  // const c_data = {
  //   name: "Company1",
  //   balance: 1000,
  //   inventory: 1000,
  //   computersInStock: 43,
  // };

  // //load examples
  // const companies = [];
  // for (let i = 0; i < 3; i++) {
  //   companies.push(<Company key={i} company_data={c_data} />);
  // }

  return (
    <div className={styles.wrapper}>
      <h3>SiteManagerPage</h3>
      <div className={styles.content}>
        <div id={styles.site_reports}>{companies}</div>
        <div id={styles.store_view}>

          <input className="CheckBox" type="checkbox" id="4GB" name="RAM" value="4GB or less">
            <label for="4GB">4GB or less</label></input>
          <input className="CheckBox" type="checkbox" id="8GB" name="RAM" value="8GB">
            <label for="8GB">8GB</label></input>
          <input className="CheckBox" type="checkbox" id="16GB" name="RAM" value="16GB">
            <label for="16GB">16GB</label></input>
          <input className="CheckBox" type="checkbox" id="32GB" name="RAM" value="32GB or more">
            <label for="32GB">32GB or more</label></input>
          <br></br>

          <input className="CheckBox" type="checkbox" id="256GB" name="Storage" value="256GB or less">
            <label for="256GB">256GB or less</label></input>
          <input className="CheckBox" type="checkbox" id="512GB" name="Storage" value="512GB">
            <label for="512GB">512GB</label></input>
          <input className="CheckBox" type="checkbox" id="1TB" name="Storage" value="1TB">
            <label for="1TB">1TB</label></input>
          <input className="CheckBox" type="checkbox" id="2TB" name="Storage" value="2TB or more">
            <label for="256GB">2TB or more</label></input>
          <br></br>

          <input className="CheckBox" type="checkbox" id="AllIntel" name="ProcessorType" value="All Intel">
            <label for="AllIntel">All Intel</label></input>
          <input className="CheckBox" type="checkbox" id="AllAMD" name="ProcessorType" value="All AMD">
            <label for="AllAMD">All AMD</label></input>
          <br></br>

          <input className="CheckBox" type="checkbox" id="AllIntel" name="Graphics" value="All Intel">
            <label for="AllIntel">All Intel</label></input>
          <input className="CheckBox" type="checkbox" id="AllAMD" name="Graphics" value="All AMD">
            <label for="AllAMD">All AMD</label></input>
          <input className="CheckBox" type="checkbox" id="AllNVIDIA" name="Graphics" value="All NVIDIA">
            <label for="AllNVIDIA">All NVIDIA</label></input>

          <input className="CheckBox" type="checkbox" id="500" name="Price" value="$500 or less">
            <label for="500">$500 or less</label></input>
          <input className="CheckBox" type="checkbox" id="1000" name="Price" value="$501 to $1000">
            <label for="1000">$501-$1000</label></input>
          <input className="CheckBox" type="checkbox" id="1500" name="Price" value="$1001 to $1500">
            <label for="1500">$1001-$1500</label></input> 
          <input className="CheckBox" type="checkbox" id="2000" name="Price" value="$1501 to $2000">
            <label for="2000">$1500-$2000</label></input>
          <input className="CheckBox" type="checkbox" id="2500" name="Price" value="$2001 or more">
            <label for="2500">$2001 or more</label></input> 
            
        </div>
      </div>
    </div>
  );
}
