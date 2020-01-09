import React from "react";
import ReactQuill from "react-quill";
import Debounce from "./helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import Styles from "./editorStyles";
import "regenerator-runtime";
class EditorComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			title: "",
			id: ""
		};
	}
	componentDidMount = () => {
		this.setState({
			text: this.props.selectedNote.body,
			title: this.props.selectedNote.title,
			id: this.props.selectedNote.id
		});
	}
	componentDidUpdate = () => {
		if(this.props.selectedNote.id !== this.state.id) {
			this.setState({
				text: this.props.selectedNote.body,
				title: this.props.selectedNote.title,
				id: this.props.selectedNote.id
			});
		}
	}
	render() {
		const { classes } = this.props;
		return (
			<section className={classes.editorContainer}>
				<ReactQuill value={this.state.text}
				onChange={this.UpdateBody}></ReactQuill>
			</section>
		);
	}
	UpdateBody = async(value) => {
		await this.setState({ text: value });
		this.Update();
	}
	// Every time Update is called, the previously
	// called Update is cancelled
	// If an interval of time passes without Update
	// being cancelled, localStorage is updated
	Update = Debounce(() => {
		this.props.UpdateNote({
			title: this.state.title,
			body: this.state.text
		}, this.state.id);
	}, 200);
}
export default withStyles(Styles)(EditorComponent);
