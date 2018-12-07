import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            id:0,
            item:"",
            amt:0
        }
        this.handleName = this.handleName.bind(this);
        this.handleAmt = this.handleAmt.bind(this);
        this.submitAddList = this.submitAddList.bind(this);
    }

    // 取得item的內容(在input內設置onChange)
    handleName(e) {
        // console.log(e.target.value);
        this.setState({
                id:Date.now(),
                item:e.target.value,
        })
    }

    // 取得amount的內容(在input內設置onChange)
    handleAmt(e) {
        console.log(e.target.value);
        this.setState({
            amt:e.target.value
        })
    }

    // 將輸入值(取name命名)傳送至Main.js，設置props讓Main傳遞給Buy
    submitAddList(e){
        e.preventDefault();
        // console.log(this.state);
        var id = this.state.id;
        var item = this.state.item;
        var amt = this.state.amt;
        if(item.length > 0 && amt > 0){
            e.target.elements.inpItem.value = "";
            e.target.elements.inpAmt.value = 0;
            this._inputElement.focus();
            this.props.handleAdd(id,item,amt);
            this.setState({
                item:'',
                amount:0
            })
        }else {
            console.log("輸入錯誤",item,amt);
            alert("需要填寫資料 ...");
        }
        
    }
    render() {
        return (
            <div className="buyListMain">
                <div className="header">
                    <form onSubmit={this.submitAddList}>
                        <input onChange={this.handleName} 
                            ref={(a) => this._inputElement = a}
                            name="inpItem" 
                            className="item"  
                            placeholder="Item">
                        </input>
                        <input onChange={this.handleAmt} 
                            name="inpAmt"
                            className="amout" placeholder="Amount" defaultValue="0">
                        </input>
                        <button type="submit">買了</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Todo