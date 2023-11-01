import styles from './Computer.module.css'
export default function Computer({computer_data}) {
    const name = computer_data.name
    const ram = computer_data.ram
    const storage = computer_data.storage
    const processor = computer_data.processor
    const processor_generation = computer_data.processor_generation
    const graphics = computer_data.graphics
    const price = computer_data.price

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
      <div id={styles.computerButtons}>
        <button className={styles.buttons}>Adjust Price</button>
        <button className={styles.buttons}>Remove</button>
      </div>
    </div>
  );
}
