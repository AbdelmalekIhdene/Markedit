import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Styles from "./sidebarStyles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "./sidebarItemComponent";
class SidebarComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addingNote: false,
			title: null
		};
	}
	render() {
		const { notes, classes, selectedNoteIndex } = this.props;
		return (
			<section className={classes.sidebarContainer}>
				<Button
				onClick={this.NewNoteBtnClick}
				className={classes.newNoteBtn}
				disableRipple={true}>
				{
					this.state.addingNote ?
					"Cancel" :
					"New Note"
				}
				</Button>
				{
					this.state.addingNote ?
					<section>
						<input type="text"
						className={classes.newNoteInput}
						placeholder="Enter Note Title..."
						onKeyUp={(event) => this.UpdateTitle(event.target.value)}>
						</input>
						<Button
						className={classes.newNoteSubmitBtn}
						onClick={this.NewNote}
						disableRipple={true}>Submit Note</Button>
					</section> :
					null
				}
				<List
				disablePadding="true">
				{
					notes ?
					notes.map((note, index) => {
						return (
							<article key={index}>
								<SidebarItemComponent
								note={note}
								index={index}
								selectedNoteIndex={selectedNoteIndex}
								SelectNote={this.SelectNote}
								DeleteNote={this.DeleteNote}></SidebarItemComponent>
							</article>
						)
					}) : null
				}
				</List>
			</section>
		);
	}
	NewNoteBtnClick = () => {
		console.log("NewNoteBtnClick Invoked");
		this.setState({ title: null, addingNote: !this.state.addingNote });
	}
	UpdateTitle = (title) => {
		console.log("Note Title Updated to '" + title + "'");
		this.setState({ title: title });
	}
	NewNote = () => {
		this.props.NewNote(this.state.title);
		this.setState({title: null, addingNote: false});
	}
	SelectNote = (note, index) => {
		this.props.SelectNote(note, index);
	}
	DeleteNote = (note) => {
		this.props.DeleteNote(note);
	}
}
export default withStyles(Styles)(SidebarComponent);
