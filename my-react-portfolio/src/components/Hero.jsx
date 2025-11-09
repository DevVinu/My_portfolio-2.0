import React from 'react';

export default function Hero() {
	return (
		<section id="home" className="hero container">
			<div style={{padding: '3rem 0', textAlign: 'center'}}>
				<h1 style={{fontSize: '2.25rem', margin: 0}}>Vinudana dissanayaka</h1>
				<p style={{marginTop: '0.5rem'}} className="muted">This is my portfolio</p>
				<div style={{marginTop: '1rem'}}>
					<a className="btn" href="#projects">See projects</a>
				</div>
			</div>
		</section>
	);
}
