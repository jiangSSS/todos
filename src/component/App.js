import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";
import "../style/todo-mvc.css";

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			todos:[
				{content:"html",complete:false},
				{content:"css",complete:true},
				{content:"js",complete:false}
			],
			visibility:"all"
		};
	}
	addTodo(todo){
		this.state.todos.push(todo);
		this.setState({
			todos:this.state.todos
		});
	}
	deleteTodo(todo){
		let index = this.state.todos.findIndex(t=>t == todo);
		this.state.todos.splice(index,1);
		this.setState({
			todos:this.state.todos
		});
	}
	toggleTodo(todo){
		let index = this.state.todos.findIndex(t=>t==todo);
		this.state.todos[index].complete = !this.state.todos[index].complete;
		this.setState({
			todos:this.state.todos
		});
	}
	toggleAll(done){
		this.state.todos.forEach(todo=>todo.complete = done);
		this.setState({
			todos:this.state.todos
		});

	}
	leftTodos(){
		return this.state.todos.filter(todo=>todo.complete).length;
	}
	filteredTodos(){
		switch (this.state.visibility){
		case "all":
			return this.state.todos;
		case "active":
			return this.state.todos.filter(todo=>!todo.complete);
		case "completed":
			return this.state.todos.filter(todo=>todo.complete);
		}
	}
	setVisibility(filter){
		this.setState({
			visibility:filter
		});
	}
	finishedTodos(){
		return this.state.todos.filter(todo=>todo.complete).length;
	}
	clearTodos(){
		let arr = this.state.todos.filter(todo=>todo.complete);
		this.setState({
			todos:arr
		});
	}
	updateTodo(todo,text){
		let index = this.state.todos.findIndex(t=>t==todo);
		this.state.todos[index].content = text;
		this.setState({
			todos:this.state.todos
		});
	}
	render() {
		return (
			<section className="todoapp">
				<AddTodo addTodo={this.addTodo.bind(this)}></AddTodo>
				<TodoList 
					todos={this.filteredTodos()}
					deleteTodo={this.deleteTodo.bind(this)}	
					toggleTodo={this.toggleTodo.bind(this)}
					toggleAll={this.toggleAll.bind(this)}	
					updateTodo={this.updateTodo.bind(this)}				
				>
				</TodoList>
				<Footer 
					leftTodos={this.leftTodos()}
					setVisibility={this.setVisibility.bind(this)}
					visibility={this.state.visibility}
					finishedTodos={this.finishedTodos()}
					clearTodos={this.clearTodos.bind(this)}
				>
				</Footer>
			</section>
		);
	}
}
export default App;
