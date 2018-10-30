import React,{Component} from "react";
import PropTypes from "prop-types";
export default class Footer extends Component{
	render(){
		return(
			<footer className="footer">
				<span className="todo-count"><strong>{this.props.leftTodos}</strong>item left</span>
				<ul className="filters">
					<li><a className={this.props.visibility == "all" ? "selected" : ""} onClick={()=>this.props.setVisibility("all")} href="javascript:;">all</a></li>
					<li><a className={this.props.visibility == "active" ? "selected" : ""} onClick={()=>this.props.setVisibility("active")} href="javascript:;">active</a></li>
					<li><a className={this.props.visibility == "completed" ? "selected" : ""} onClick={()=>this.props.setVisibility("completed")} href="javascript:;">completed</a></li>
				</ul>
				{this.props.finishedTodos >0 ? <button className="clear-completed" onClick={()=>this.props.clearTodos()}>clear-completed</button> : null}
			</footer>
		);
	}
}
Footer.propTypes = {
	leftTodos:PropTypes.number.isRequired,
	finishedTodos:PropTypes.number.isRequired,
	clearTodos:PropTypes.func.isRequired,
};