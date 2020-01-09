import React from "react";
import { withStyles} from "@material-ui/core/styles";
import Styles from "./sidebarItemStyles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { LogAndReturn, RemoveHTMLTags } from "./helpers";
// SidebarItemComponent is a functional component since it doesn't have a state
class SidebarItemComponent extends React.Component {
	render() {
		const { index, note, classes, selectedNoteIndex } = this.props;
		return (
			<article key={index}>
				<ListItem
				className={classes.ListItem}
				selected={selectedNoteIndex === index}
				alignItems="flex-start">
					<section
					className={classes.textSection}
					onClick={() => this.SelectNote(note, index)}>
						<p className="lastModified">Last Modified: {note.lastModified}</p>
						<ListItemText
						primary={note.title}
						// This is not optimal at all, but oh well ¯\_(ツ)_/¯
						// Maybe in the future, when I learn a bit more about Javascript,
						// I'll come and fix this mess
						secondary={
						RemoveHTMLTags(note.body).length > 25 ?
						RemoveHTMLTags(note.body).substring(0, 25).trim() + "..." : RemoveHTMLTags(note.body)}></ListItemText>
					</section>
					<DeleteIcon
					className={classes.deleteIcon}
					onClick={() => this.DeleteNote(note)}></DeleteIcon>
				</ListItem>
			</article>
		);
	}
	SelectNote = (note, index) => {
		this.props.SelectNote(note, index);
	}
	DeleteNote = (note) => {
		if(confirm("Please confirm the deletion of note \"" + note.title + "\"")) {
			this.props.DeleteNote(note);
		}
	}
}
export default withStyles(Styles)(SidebarItemComponent);
