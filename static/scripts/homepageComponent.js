import React from "react";
class HomepageComponent extends React.Component {
	render() {
		return (
			<section className="outerContainer">
				<section className="centeredContainer">
					<h2>Welcome to Markedit</h2>
					<article>
						<p>Cobbled together in one week for personal resume and powered by <b>ReactJS</b>, <b>Quill</b> & <b>MaterialUI</b></p>
						<p>A dynamic fully-featured note editor served by a <b>Golang</b> REST API, <em>try it out by creating a new note!</em></p>
					</article>
					<h1>Cool Features:</h1>
					<ul>
						<li>100% client-side and thus easily scalable application</li>
						<li>Persistent notes through local storage</li>
						<li>Bundled together with <b>Browserify/Babelify</b></li>
						<li>Fork it on my <b>Github</b> [<a href="https://github.com/AbdelmalekIhdene/markedit">AbdelmalekIhdene/Markedit</a>]</li>
					</ul>
				</section>
			</section>
		);
	}
}
export default HomepageComponent;
