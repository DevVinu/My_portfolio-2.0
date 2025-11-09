import React from 'react';

export default function About() {
	return (
		<section id="about" className="about container" style={{padding:'2rem 0'}}>
			<h2>About</h2>
			<p>I’m a frontend developer building performant and accessible web apps.</p>
			<ul className="skills">
				<li>React</li>
				<li>Vite</li>
				<li>JavaScript</li>
				<li>CSS</li>
			</ul>
		</section>
	);
}
