import styles from "./CustomerPage.module.css";
import Computer from "../../components/computer/CustomerComputer";

export default function CustomerPage({computer_data, refresh, setRefresh}) {

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
  const computers = [];
  for (let i = 0; i < 3; i++) {
    computers.push(<Computer key={i} computer_data={c_data} />);
  }

  const refreshParent = () => {
    setRefresh(refresh + 1)
  }

  const compare = () => {
    //TODO: implement
    //refreshParent()
  }

  return (
    <div className={styles.wrapper}>
      <h3>Customer Page</h3>
      <div className={styles.content}>
        <div id={styles.filter_view}>
          <h3>Filter</h3>

          <form>
            <div id={styles.checkbox_div}>
              <label><input className="CheckBox" type="checkbox" id="4GB" name="RAM" value="4GB or less" />4GB or less</label>
              <label><input className="CheckBox" type="checkbox" id="8GB" name="RAM" value="8GB"></input>8GB</label>
              <label><input className="CheckBox" type="checkbox" id="16GB" name="RAM" value="16GB"></input>16GB</label>
              <label><input className="CheckBox" type="checkbox" id="32GB" name="RAM" value="32GB or more"></input>32GB or more</label>
            </div>
          </form>
          <br></br>

          <form>
            <div id={styles.checkbox_div}>
              <label><input className="CheckBox" type="checkbox" id="256GB" name="Storage" value="256GB or less"></input>256GB or less</label>
              <label><input className="CheckBox" type="checkbox" id="512GB" name="Storage" value="512GB"></input>512GB</label>
              <label><input className="CheckBox" type="checkbox" id="1TB" name="Storage" value="1TB"></input>1TB</label>
              <label><input className="CheckBox" type="checkbox" id="2TB" name="Storage" value="2TB or more"></input>2TB or more</label>
            </div>
          </form>
          <br></br>


          <form>
            <div id={styles.checkbox_div}>
              <label><input className="CheckBox" type="checkbox" id="AllIntel" name="ProcessorType" value="All Intel"></input>All Intel</label>
              <label><input className="CheckBox" type="checkbox" id="AllAMD" name="ProcessorType" value="All AMD"></input>All AMD</label>
            </div>
          </form>
          <br></br>

          <form>
            <div id={styles.checkbox_div}>
              <label><input className="CheckBox" type="checkbox" id="AllIntel" name="Graphics" value="All Intel"></input>All Intel</label>
              <label><input className="CheckBox" type="checkbox" id="AllAMD" name="Graphics" value="All AMD"></input>All AMD</label>
              <label><input className="CheckBox" type="checkbox" id="AllNVIDIA" name="Graphics" value="All NVIDIA"></input>All NVIDIA</label>
            </div>
          </form>
          <br></br>


          <form>
            <div id={styles.checkbox_div}>
              <label><input className="CheckBox" type="checkbox" id="500" name="Price" value="$500 or less"></input>$500 or less</label>
              <label><input className="CheckBox" type="checkbox" id="1000" name="Price" value="$501 to $1000"></input>$501 to $1000</label>
              <label><input className="CheckBox" type="checkbox" id="1500" name="Price" value="$1001 to $1500"></input>$1001 to $1500</label>
              <label><input className="CheckBox" type="checkbox" id="2000" name="Price" value="$1501 to $2000"></input>$1501 to $2000</label>
              <label><input className="CheckBox" type="checkbox" id="2500" name="Price" value="$2001 or more"></input>$2001 or more</label>
            </div>
          </form>

        </div>
        <div id={styles.computer_view}>
          {computers}
        </div>
        <div id={styles.compare_view}>
          <h3>Compare Computers</h3>
          <button onClick={compare}>Compare Computers</button>
          <div id={styles.compare_div}>
            <div id={styles.computer_compare}>

            </div>
            <div id={styles.computer_compare}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
