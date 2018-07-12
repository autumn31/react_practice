const { 
  InputField
} = window.App;

class TodoItem extends React.Component {
    constructor(props, context){
        super(props, context)
        this.state = { editable: false }
        this.toggleEditMode = this.toggleEditMode.bind(this)
    }

    toggleEditMode() {
        // 6. 更新元件狀態來切換模式
        this.setState({ editable: !this.state.editable });
    }

    render() {
    // 2. 判斷目前模式為何，渲染不同的畫面
        return this.state.editable ? this.renderEditMode() : this.renderViewMode();
    }
    renderViewMode() {
        const {title, completed, onDelete} = this.props
        return (
            <div>
                <input type="checkbox" checked={completed}/>
                <span onDoubleClick={this.toggleEditMode}>{title}</span>
                <button onClick={()=> onDelete && onDelete()}>x</button>
            </div>
        )
    }

    renderEditMode() {
        // 4. 「編輯模式」使用 InputField 元件
        const { title } = this.props;
        return (
            <InputField
                autoFocus                    // 5. autoFocus 讓使用者切換到編輯模式後，可以立即編打
                placeholder="編輯待辦事項"
                onBlur={this.toggleEditMode} // 8. 當使用者點擊其他地方，則切換為「瀏覽模式」
                onKeyDown={(e) => {          // 9. 當使用者按下 ESC，則切換為「瀏覽模式」
                if (e.keyCode === 27) {
                    e.preventDefault();
                    this.toggleEditMode();
                }
                }}
            />
        );
    }
}

window.App.TodoItem = TodoItem;