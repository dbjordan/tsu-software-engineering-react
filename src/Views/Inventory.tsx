import { useEffect, useState } from "react";
import "../App.css";
import {InventoryTableRow, InventoryTableJsonObject, getInventoryTable} from "../DataObjects/InventoryTableInterface";
import { INIT_RESULT_DATA } from "../DataConstants/InventoryTableConstants";




export default function Main() {
    
  const [tableData, setTableData] = useState<InventoryTableRow[]>([INIT_RESULT_DATA]);
  const [modalClientData, setmodalClientData] = useState<InventoryTableRow>(INIT_RESULT_DATA);
  const [isModalActive, setIsModalActive] = useState<Boolean>(false);


  //A function that supports the creation of the inventory table.
  function setInventoryTable(){
    try{
      getInventoryTable().then(
        function (response: any){
          let inventoryTableArray: InventoryTableRow[] = [];
          
          //Define the output of my objects to the array.
          response.data.forEach((element: InventoryTableJsonObject) => {
            inventoryTableArray.push({
              id: (element.id ? element.id : null),
              Inventory: (element.inventory ? element.inventory: null),
            });
          });


          //Overwrite the table data.
          setTableData(inventoryTableArray);
        },
        (error) => {
          console.log(error)
        }
      );
    } catch{}
  } 
  
  function toggleModal() {
    setIsModalActive(!isModalActive);
  }

  function showModal(key: number){
    let inventoryRow: InventoryTableRow = tableData.at(key);
    setmodalClientData(inventoryRow);
    toggleModal();
  }


  const Modal = ({ closeModal, modalState }: { closeModal: any, modalState: boolean }) => {
    if(!modalState) {
      return null;
    }
    
    return(
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <div className="modal-card-head is-radiusless">
            <p className="modal-card-title">Inventory Information</p>
            <button className="delete is-pulled-right" aria-label="close" onClick={closeModal}></button>
          </div>
          <section className="modal-card-body columns">
            <div className="column">
              <label className="has-text-weight-medium">Number: </label>
              <p className="mb-3">{(modalClientData.id ? modalClientData.id.toString() : "")}</p>
            </div>
            <div className="column">
              { modalClientData.Inventory &&
                <>
                  <label className="has-text-weight-medium">Inventory Type: </label>
                  <p>{(modalClientData.Inventory ? modalClientData.Inventory.toString() : "")}</p>
                </>
              }
            </div>
          </section>
        </div>
      </div>
    );
  }


  //The useEffect is a function that runs whenever the set data changes or when loading the page.
  useEffect(() => {
    setInventoryTable();
  }, []);
  
  return (
    <>
      <h2 className="is-size-2 pb-6 has-text-weight-medium">Inventory List</h2>
      <div className="box columns is-centered is-radiusless">
        <div className="column is-12 px-0 py-0"> 
            <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Inventory Details</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) =>
                    <tr id={(row.id ? row.id.toString() : "")}>
                      <td>{(row.id ? row.id.toString() : "")}</td>
                      <td>{(row.Inventory ? row.Inventory.toString() : "")}</td>
                      <td><button className="button is-dark" onClick={() => showModal(i)}>Observe Inventory Details</button></td>
                    </tr> 
                  )}
                </tbody>
            </table>
            <Modal
              closeModal={toggleModal}
              modalState={isModalActive.valueOf()}
            />
        </div>
      </div>
    </>
  );
}
