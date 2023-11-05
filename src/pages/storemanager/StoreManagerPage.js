import styles from "./StoreManagerPage.module.css";
import Computer from "../../components/computer/Computer";
import {api} from "../../api/api-client";
import {useEffect, useState} from "react";
export default function StoreManagerPage() {
    const [computers, setComputers] = useState([]);
    const [inventory, setInventory] = useState(0);
    const [refresh, setRefresh] = useState(0);


    // will be returned from lambda
    const storeBalance = 10000;
    const totalInventory = 43005;

    // will be returned from lambda
    const c_data = {
        name: "Computer X",
        ram: 12,
        storage: 10,
        processor: "AMD",
        processor_generation: 10,
        graphics: "NVDIA",
        price: 1000
    };

    useEffect(() => {
        const getComputers = async () => {
            const resp = await api.generateStoreInventory();
            const computers = resp.computers;
            const inventory = resp.inventory

            console.log(resp)
            if (resp.statusCode !== 200) {
                alert("invalid login")

            } else {
                setComputers(computers)
                setInventory(inventory)
            }
        };
        getComputers();
    }, [refresh])


    // // load examples
    // const companies = [];
    // for (let i = 0; i < 3; i++) {
    //     companies.push (<Computer key={i}
    //         computer_data={c_data}/>);
    // }

    return (<div className={
        styles.wrapper
    }>
        <h3>StoreManagerPage</h3>
        <div className={
            styles.content
        }>
            <div id={
                styles.site_reports
            }> {
                computers.map((computer) => <Computer key={
                        computer.computerID
                    }
                    refresh={refresh}
                    setRefresh={setRefresh}
                    computer_data={computer}/>)
            } </div>
            <div id={
                styles.store_view
            }>
                <p>Total Store Balance: ${storeBalance}</p>
                <p>Total Inventory $ Amount: ${totalInventory}</p>
                <button>Inventory Report</button>
                <div className="addComputer">
                    <p>Add A Computer</p>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Price"/>
                    <input type="text" placeholder="Memory"/>
                    <input type="text" placeholder="Storage"/>
                    <input type="text" placeholder="Processor"/>
                    <input type="text" placeholder="Processor Generation"/>
                    <input type="text" placeholder="Graphics"/>
                    <button>Add Computer</button>
                </div>
            </div>
        </div>
    </div>);
}
