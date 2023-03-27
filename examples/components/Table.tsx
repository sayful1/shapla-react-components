import {Table} from "../../src/index";
import React, { useState } from "react"
const columns = [
  { key: "id", label: "ID", sortable: true },
  { key: "title", label: "Title", sortable: true },
  { key: "author", label: "Author" },

  
] 
const actions = [
 { key: "edit", label: "Edit" },
 { key: "trash", label: "Delete" },
]
const items =[
 {
   id: 1,
   title: "Wings of Fire: An Autobiography",
   author: "A.P.J. Abdul Kalam",
 },
 {
   id: 2,
   title: "Who Moved My Cheese?",
   author: "Spencer Johnson",
 },
 {
   id: 3,
   title: "Option B",
   author: "Sheryl Sandberg",
 },
]
export default () =>{
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  return (
    <Table
      items={items}
      columns={columns}
      showCb={true}
      actions={actions}
      selectedItems = {selectedItems}
      onItemSelect={(Items) => {
        setSelectedItems(Items);
      }}
      onActionClick={(action, row) => {
        console.log(action, row);
      }}
    >
      
    </Table>
  )
}