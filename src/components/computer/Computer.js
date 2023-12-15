import styles from './Computer.module.css'
import { api } from "../../api/api-client";

export default function Computer({computer_data, refresh, setRefresh}) {
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

    const adjustPrice = () => {
        let newPrice = prompt("Enter new price for \"" + name + "\"")
        newPrice = parseFloat(newPrice)

        //if not a valid number, exit
        if(isNaN(newPrice)){
            alert("invalid input")
            return
        }

        //TODO: Implement api
        //api.updatePrice(computerID, newPrice)
        //refreshParent()
    }
    const remove = async() => {
        const resp = await api.removeComputer(computerID);
        if(resp.statusCode !== 200){
            alert("invalid login: please login as store owner")
        } else {
            refreshParent()
        }
    }

    return (<div id={
        styles.computer
    }>
        <div id={
            styles.computerSpecs
        }>
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
        <div id={
            styles.computerButtons
        }>
            <button className={
                styles.buttons
            } onClick={adjustPrice}>Adjust Price</button>
            <button className={
                    styles.buttons
                }
                onClick={remove}>Remove</button>
        </div>
    </div>);
}
