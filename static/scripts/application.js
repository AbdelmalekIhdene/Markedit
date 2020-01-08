import React from "react";
import SidebarComponent from "./sidebarComponent";
import EditorComponent from "./editorComponent";
class Application extends React.Component {
	constructor(props) {
		super();
		this.state = {
			selectedNoteIndex: null,
			selectedNote: null,
			notes: null
		};
	}
	render() {
		return (
			<section className="container">
				<SidebarComponent
				selectedNoteIndex={this.state.selectedNoteIndex}
				notes={this.state.notes}></SidebarComponent>
				<EditorComponent></EditorComponent>
			</section>
		);
	}
	componentDidMount = () => {
		this.setState({notes: localStorage.getItem("markedit-notes")});
	}
	componentWillUnmount = () => {
		localStorage.setItem("markedit-notes", JSON.stringify(this.state.notes));
	}
}
export default Application;
