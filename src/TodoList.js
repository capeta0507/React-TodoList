import React,{Component} from 'react';
import TodoItems from './TodoItems';
import "./TodoList.css";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state={
            items:[]
        }
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        e.preventDefault();
        if (this._inputElement.value !== "") {
            var newItem = {
                text : this._inputElement.value,
                key : Date.now()
            };
            let newArray = this.state.items;
            newArray.push(newItem);
            this.setState({
                    items : newArray
                }
            )
            this._inputElement.value = "";
            // console.log(this.state.items);
        }


    }
    deleteItem(key) {
        let filteredItem = this.state.items.filter( (item) => {
                return(item.key !== key)
            }
        )
        // console.log(filteredItem)
        this.setState({
            items : filteredItem
        })
    }
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="enter task" 
                        ></input>
                        <button type="submit">add</button>
                        <TodoItems entries={this.state.items}
                                    delete={this.deleteItem}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;