import axios from "axios";

export interface InventoryTableRow {
    id: Number,
    Inventory: Number
}

export interface InventoryTableJsonObject {
    id: Number,
    inventory: Number,
    inventories_type: String,
}

export async function getInventoryTable() {
    const response = await axios.get(
      'http://localhost:8040/inventory',
      {}
    );

    return response;
}
