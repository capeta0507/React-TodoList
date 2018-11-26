# React input Refs
###### tags: `React` `input` `refs`
## ref
在 React 的世界裡，父元件（parent components）透過 props 將資料傳遞給 子元件（children components），另外子元件也會在 state 存放一些狀態與資料。但某些情況的時候，我們需要能夠存取自己 render 的 DOM 元素或子元件，例如：
* 管理聚焦、文字選擇，媒體播放。
* 觸發動畫
* 整合第三方的 DOM 函式庫

**切記ref不能頻繁的使用**
```javascript=
<div className="todoListMain">
    <div className="header">
        <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                placeholder="enter task"></input>
            <button type="submit">add</button>
            <TodoItems entries={this.state.items} 
                       delete={this.deleteItem} />
        </form>
    </div>
</div>
```
## Date now()
方法回傳自 1970/01/01 00:00:00 UTC 起經過的毫秒數。

在此範例中，為了避免在創立新的key值會衝突到重覆值，因此使用Date now的毫秒來判定key值。
```javascript=
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
}

```
## Array filter
遍歷每個元素，回傳 true 時，目前的值會保留在陣列內，這會回傳一個新陣列，而不是修改原本的陣列。
當input輸入文字時觸發onChenge事件，event.target.value值存入this.state.search，再利用this.state.search使用filter()回圈過濾data內的資料。
```javascript=
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
```


