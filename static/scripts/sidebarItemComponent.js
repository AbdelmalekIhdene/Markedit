import React from "react";
import { withStyles} from "@material-ui/core/styles";
import Styles from "./sidebarItemStyles";
import ListItem from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { RemoveHTMLTags } from "./helpers";
class SidebarItemComponent extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<h1>Hello, SidebarItem!</h1>
		);
	}
}
export default withStyles(Styles)(SidebarItemComponent);
