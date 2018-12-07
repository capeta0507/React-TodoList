import React,{Component} from 'react';
import TodoItems from './TodoItems';
import Todo from './Todo';
import "./TodoList.css";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state={
            items:[
                {
                    id:0,
                    item:"Apple",
                    amt:25
                }
            ]
        }
        // this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(xID,xName,xAmt){
        
        let newList = {
            id:xID,
            item:xName,
            amt:xAmt
        };
        // console.log(newList);
        this.setState({
            items : this.state.items.concat(newList)
        })
            // console.log(this.state.items);
        }

        deleteItem = (xid) => {
            console.log("Main.js xid : " + xid);
            this.setState({
                items : this.state.items.filter((item) => {return item.id !== xid})
            })
        }
        render(){
            return(
                <div className="todoListMain">
                    <div className="header">
                        <Todo handleAdd={this.addItem}/>
                        <TodoItems items={this.state.items}
                                    handleDelete={this.deleteItem}
                        />
    
                    </div>
                </div>
            )
        }
    }

export default TodoList;