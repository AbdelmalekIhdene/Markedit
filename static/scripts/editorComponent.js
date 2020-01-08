import PropTypes from "prop-types";
import React from "react";
import ReactQuill from "react-quill";
export default class EditorComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
		editorHtml: "",
		theme: "snow"
	}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (html) {
  	this.setState({editorHtml: html});
  }
  render() {
    return (
        <ReactQuill
        theme={this.state.theme}
        onChange={this.handleChange}
        value={this.state.editorHtml}
        modules={EditorComponent.modules}
        formats={EditorComponent.formats}
        bounds={'#application'}
        placeholder={this.props.placeholder}/>
	);
  }
}

EditorComponent.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  }
}

EditorComponent.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

EditorComponent.propTypes = {
  placeholder: PropTypes.string,
}
