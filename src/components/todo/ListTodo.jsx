import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeTodoDone } from '../../actions/todoAction';
import './todo.css';

class ListTodo extends Component {

    render() {
        let { todoList } = this.props;
        return (
            <React.Fragment>
                <ul className="todo-list">
                    { todoList.map((todo) => {
                        return (    
                            <li key={todo.id}>
                                <input type="checkbox" value={todo.done} onChange={
                                    (e) => this.props.todoToDone(e.target.checked, todo)
                                } />
                                <span className={todo.done ? 'done' : ''}>{todo.text}</span>
                            </li>
                            )
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    todoList: state.todoList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    todoToDone: (checked, payload) => dispatch(makeTodoDone(checked, payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);