import styles from './Computer.module.css'
export default function CustomerComputer({computer_data, refresh, setRefresh}) {
  const computerID = computer_data.computerID
  const name = computer_data.computerName
  const ram = computer_data.ram
  const storage = computer_data.storage
  const processor = computer_data.processor
  const processor_generation = computer_data.processGen
  const graphics = computer_data.graphics
  const price = computer_data.price

  const refreshParent = () => {
    setRefresh(refresh + 1)
  }
  
  const buyComputer = () => {
    //TODO: Implement
    refreshParent();
  }

  return (
    <div id={styles.computer}>
      <div id={styles.computerSpecs}>
        <h2> {name} </h2>
        <div>
          <ul>
            <li>Ram: {ram}</li>
            <li>Storage: {storage}</li>
            <li>Processor: {processor}</li>
            <li>Processor Generation: {processor_generation}</li>
            <li>Graphics: {graphics}</li>
            <li>Price: ${price}</li>
          </ul>
        </div>
      </div>
      <div>
        <form>
          <div id={styles.computerRadio}>
            <label><input className="Radio" type="radio" id="Compare" name="Compare" value="Compare"></input>Compare</label>
          </div>
          <div id={styles.buyButton}>
            <button className={styles.buttons} onClick={buyComputer}>Buy Computer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
