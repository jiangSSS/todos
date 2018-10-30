import React,{Component} from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";
export default class TodoList extends Component{
	render(){
		return(
			<section className="main">
				<input type="checkbox" className="toggle-all"
					onChange={e=>this.props.toggleAll(e.target.checked)}
				/>
				<ul className="todo-list">
					{this.props.todos.map((todo,index)=>
						<Todo todo={todo} key={index}
							deleteTodo={this.props.deleteTodo}
							toggleTodo={this.props.toggleTodo}
							updateTodo={this.props.updateTodo}
						/>
					)}
				</ul>
			</section>
		);
	}
}
TodoList.propTypes ={
	todos:PropTypes.array.isRequired,
	deleteTodo:PropTypes.func.isRequired,
	toggleTodo:PropTypes.func.isRequired,
	toggleAll:PropTypes.func.isRequired,
	updateTodo:PropTypes.func.isRequired,
};