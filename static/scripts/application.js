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
				notes={this.state.notes}
				SelectNote={this.SelectNote}
				DeleteNote={this.DeleteNote}
				NewNote={this.NewNote}></SidebarComponent>
			{
				this.state.selectedNote ?
				<EditorComponent
				selectedNote={this.state.selectedNote}
				selectedNoteIndex={this.state.selectedNoteIndex}
				notes={this.state.notes}
				UpdateNote={this.UpdateNote}></EditorComponent> : null
			}
			</section>
		);
	}
	componentDidMount = async() => {
		console.log(localStorage.getItem("markedit-notes"));
		console.log(JSON.parse(localStorage.getItem("markedit-notes")));
		// We must wait for this.setState to finish before checking for null
		await this.setState({notes: JSON.parse(localStorage.getItem("markedit-notes"))});
		if(this.state.notes === null) {
			this.setState({notes: [
				{
					title: "My First Note",
					body: "<h1>Hello, World!</h1>",
					id: 0
				},
			]});
		}
	}
	componentWillUnmount = () => {
		localStorage.setItem("markedit-notes", JSON.stringify(this.state.notes));
	}
	SelectNote = (note, index) => {
		this.setState({selectedNoteIndex: index, selectedNote: note});
	}
	DeleteNote = async(note) => {
		// TODO: Write this function assuming that id is the index of the note inside notes
	}
	UpdateNote = (note, id) => {
		let notes = [...this.state.notes];
		notes[id] = { ...note, id };
		this.setState({notes: notes});
		console.log(notes);
		localStorage.setItem("markedit-notes", JSON.stringify(notes));
		console.log(localStorage.getItem("markedit-notes"));
	}
	NewNote = async(title) => {
		if(title.length > 0) {
			const newNoteIndex = this.state.notes.length;
			const note = {
				title: title,
				body: "",
				id: newNoteIndex
			};
			let notes = [...this.state.notes, note];
			await this.setState({notes: notes});
			this.setState({selectedNote: this.state.notes[newNoteIndex], selectedNoteIndex: newNoteIndex});
			console.log(notes);
			localStorage.setItem("markedit-notes", JSON.stringify(notes));
			console.log(localStorage.getItem("markedit-notes"));
		}
	}
}
export default Application;
