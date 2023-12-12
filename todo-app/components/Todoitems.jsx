import React from "react";
export default class Todoitems extends React.Component {
  constructor() {
    super();
  }
  render() {
    let {e,i,updateItem,deleteItem}=this.props
    return (
      <div key={i}>
        <input
          type="text"
          onChange={(ee) => {
            updateItem(ee.target.value, ee.target.index);
          }}
          value={e}
        />
        <button
          onClick={(d) => {
            deleteItem(i);
          }}
        //   style={{
        //     backgroundColor:blue,
        //   }}
          >
          DELETE
        </button>
      </div>
    );
  }
}
