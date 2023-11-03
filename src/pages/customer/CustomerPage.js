import styles from "./CustomerPage.module.css";
import Computer from "../../components/computer/CustomerComputer";

export default function CustomerPage() {

  //will be returned from lambda
  // const storeBalance = 10000;
  // const totalInventory = 43005;

  //will be returned from lambda
  const c_data = {
    name: "Computer X",
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
      <h3>Customer Page</h3>
      <div className={styles.content}>
        <div id={styles.filter_view}>
          <h3>Filter</h3>
          <label><input className="CheckBox" type="checkbox" id="4GB" name="RAM" value="4GB or less" />4GB or less</label>
          <input className="CheckBox" type="checkbox" id="8GB" name="RAM" value="8GB"></input>
          <input className="CheckBox" type="checkbox" id="16GB" name="RAM" value="16GB"></input>
          <input className="CheckBox" type="checkbox" id="32GB" name="RAM" value="32GB or more"></input>
          <br></br>

          <input className="CheckBox" type="checkbox" id="256GB" name="Storage" value="256GB or less"></input>
          <input className="CheckBox" type="checkbox" id="512GB" name="Storage" value="512GB"></input>
          <input className="CheckBox" type="checkbox" id="1TB" name="Storage" value="1TB"></input>
          <input className="CheckBox" type="checkbox" id="2TB" name="Storage" value="2TB or more"></input>
          <br></br>

          <input className="CheckBox" type="checkbox" id="AllIntel" name="ProcessorType" value="All Intel"></input>
          <input className="CheckBox" type="checkbox" id="AllAMD" name="ProcessorType" value="All AMD"></input>
          <br></br>

          <input className="CheckBox" type="checkbox" id="AllIntel" name="Graphics" value="All Intel"></input>
          <input className="CheckBox" type="checkbox" id="AllAMD" name="Graphics" value="All AMD"></input>
          <input className="CheckBox" type="checkbox" id="AllNVIDIA" name="Graphics" value="All NVIDIA"></input>
          <br></br>

          <input className="CheckBox" type="checkbox" id="500" name="Price" value="$500 or less"></input>
          <input className="CheckBox" type="checkbox" id="1000" name="Price" value="$501 to $1000"></input>
          <input className="CheckBox" type="checkbox" id="1500" name="Price" value="$1001 to $1500"></input> 
          <input className="CheckBox" type="checkbox" id="2000" name="Price" value="$1501 to $2000"></input>
          <input className="CheckBox" type="checkbox" id="2500" name="Price" value="$2001 or more"></input> 
        </div>
        <div id={styles.computer_view}>
          {companies}
        </div>
        <div id={styles.compare_view}>
          <h3>Compare Computers</h3>
        </div>
      </div>
    </div>
  );
}
