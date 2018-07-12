class TodoHeader extends React.Component {
    render(){
        const {name, username, todoCount} = this.props
        return (
            <div>
                <h1>{name}</h1>
                <h3>Hi {username}, welcome! You have {todoCount} today!</h3>
            </div>
        )
    }
}

TodoHeader.propTypes = {
    name: React.PropTypes.string,
    username: React.PropTypes.string,
    todoCount: React.PropTypes.number
};

TodoHeader.defaultProps = {
  name: '我的待辦清單',
  username: 'Guest',
  todoCount: 0
};

window.App.TodoHeader = TodoHeader;