// Debounce ensures that the web application does not
// save to local storage every time the user stops typing
export default function Debounce(a, b, c){
	var d, e;
	return function(){
		function h(){
			d = null;
			c || (e = a.apply(f, g));
		}
		var f = this, g = arguments;
		return (clearTimeout(d), d=setTimeout(h,b), c && !d && (e = a.apply(f,g)), e);
	}
}

// RemoveHTMLTags is used for previews below a document's title
export function RemoveHTMLTags(string) {
	return str.replace(/<[^>]*?/gm, "");
}
