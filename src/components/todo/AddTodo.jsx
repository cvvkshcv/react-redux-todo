import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoAction';
import ListTodo from './ListTodo';

class AddTodo extends Component {

    state = {
        todoText: '',
        hasError: false
    };

    emitAddTodo = (e) => {
        e.preventDefault();
        this.setState({ hasError: false });
        if (this.state.todoText.trim() !== '') {
            this.props.addTodo(this.state.todoText);
            this.setState({ todoText : ''});
        } else {
            this.setState({ hasError: true});
        }
    }

    addTodoText = (e) => {
        this.setState({todoText : e.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <h3>Todo app</h3>
                <ListTodo />
                <form onSubmit={this.emitAddTodo}>
                <div className="form-inline">
                    <input className="form-control" type="text" value={this.state.todoText} onChange={ this.addTodoText } />
                    <button type="submit" className="btn btn-info">Add</button>
                </div>
                { this.state.hasError && <p className="text-danger">Filed is empty</p> }
                </form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    todo: ownProps
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodo: (payload) => dispatch(addTodo(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);