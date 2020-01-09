const Styles = theme => ({
	root: {
		// backgroundColor: theme.palette.background.paper,
		height: "calc(100% - 35px)",
		position: "absolute",
		left: "0",
		width: "300px",
		boxShadow: "0px 0px 2px black"
	},
	newChatBtn: {
		borderRadius: "0px"
	},
	unreadMessage: {
		color: "red",
		position: "absolute",
		top: "0",
		right: "5px"
	},
	newNoteBtn: {
		width: "calc(100% + 1px)",
		height: "35px",
		// borderBottom: "1px solid black",
		borderBottomLeftRadius: "0px",
		borderBottomRightRadius: "0px",
		backgroundColor: "#29487d",
		textTransform: "none",
		color: "white",
		"&:hover": {
			backgroundColor: "#29487d"
		},
		"&:active": {
			backgroundColor: "#88a2ce"
		}
	},
	sidebarContainer: {
		marginTop: "0px",
		width: "290px",
		height: "calc(100% - 20px)",
		boxSizing: "border-box",
		float: "left",
		overflowX: "hidden",
		overflowY: "hidden",
		marginRight: "10px",
		borderRadius: "0.5em",
		border: "1px solid #ccc"
	},
	newNoteInput: {
		width: "100%",
		margin: "0px",
		height: "35px",
		outline: "none",
		border: "none",
		paddingLeft: "5px",
	},
	newNoteSubmitBtn: {
		width: "100%",
		backgroundColor: "#28787c",
		borderRadius: "0px",
		color: "white",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "#28787c"
		},
		"&:active": {
			backgroundColor: "#88a2ce"
		}
	}
});
export default Styles;
