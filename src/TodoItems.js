import React, { Component } from 'react';
import FlipMove from "react-flip-move";
// yarn add react-flip-move

class TodoItems extends Component {
    constructor(props){
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
    }
    // 將ItemList的選擇回傳至BuyList，在藉由BuyList傳到Main(設置props)。
    deleteItem(xid) {
        // console.log("deleteItem ...");
        // console.log(xid);
        this.props.handleDelete(xid)
    }
    // 使用map並劃出清單
    render() {
        let items = this.props.items
        // console.log("ItemList.js ...");
        // console.log(items);
        let prodList = items.map((item,index) =>{
                return (
                    <div className="buyitem" key={index} >
                        <div className="itemsMoney">
                            {index + 1}
                        </div>
                        <div className="itemsText">
                            {item.item}
                        </div>
                        <div className="itemsMoney">
                            {item.amt}
                        </div>
                        
                        <button onClick={() =>this.deleteItem(item.id)}
                            className="remove">移除</button>
                    </div>
                )
            }

        )
    return (

        <FlipMove duration={250} easing="ease-out">
            {prodList}
        </FlipMove>

    );
  }
}
export default TodoItems
