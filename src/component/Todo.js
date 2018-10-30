import React,{Component} from "react";
import PropTypes from "prop-types";
export default class Todo extends Component{
	constructor(props){
		super(props);
		this.state = {
			editing:false
		};
	}
	_setClassName(){
		if(this.props.todo.complete){
			if(this.state.editing){
				return "todo completed editing";
			}
			return "todo completed";
		}else{
			if(this.state.editing){
				return "tood editing";
			}
			return "todo";
		}
	}
	handleDoubleClick(){
		this.setState({
			editing:true
		},()=>{
			this.refs.ipt.focus();
		});		
	}
	handleKeyUp(e){
		if(e.keyCode == 13){
			let text = e.target.value.trim();
			this._updateTodo(text);
		}else if(e.keyCode == 27){
			this.setState({
				editing:false
			});
			e.target.value = this.props.todo.content;
		}
	}
	_updateTodo(text){
		if(text){
			this.props.updateTodo(this.props.todo,text);
		}else {
			this.props.deleteTodo(this.props.todo);
		}
		this.setState({
			editing:false
		});
	}
	handeBlur(e){
		let text = e.target.value.trim();
		this._updateTodo(text);
	}
	render(){
		return(
			<li className={this._setClassName()}>
				<div className="view">
					<input type="checkbox" className="toggle" 
						checked={this.props.todo.complete}
						onClick={()=>this.props.toggleTodo(this.props.todo)}
					/>
					<label onDoubleClick={this.handleDoubleClick.bind(this)}>{this.props.todo.content}</label>
					<button className="destroy" onClick={()=>this.props.deleteTodo(this.props.todo)}></button>
				</div>
				{this.state.editing ? <input                    
					ref="ipt" type="text" className="edit" 
					defaultValue={this.props.todo.content} 
					tyle={{display:this.state.editing ? "block" : "none"}}
					onKeyUp={this.handleKeyUp.bind(this)} 
					onBlur={this.handeBlur.bind(this)}
				/> : null 
				}
			</li>
		);
	}
}
Todo.propTypes = {
	todo:PropTypes.object.isRequired,
	deleteTodo:PropTypes.func.isRequired,
	toggleTodo:PropTypes.func.isRequired,
	updateTodo:PropTypes.func.isRequired,
};