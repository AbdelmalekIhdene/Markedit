// Debounce ensures that the web application does not
// save to local storage every time the user stops typing
// I honestly have no clue how this works, but it works
// I should have a library that does it for me, atleast that way,
// I can guarantee that the function doesn't break someday for no reason
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
	return string.replace(/<[^>]*>?/gm, "");
}

export function LogAndReturn(prefix, value) {
	console.log(String(prefix) + " " + String(value));
	return value;
}
