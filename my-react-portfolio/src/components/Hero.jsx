import React from 'react';
import myImage from '../assets/me.jpg';

export default function Hero() {
	return (
		<section id="home" className="hero">
			<div className="container">
				<div className="hero-content">
					<img src={myImage} alt="Vinudana dissanayaka" className="hero-avatar" />
					<div className="hero-text">
						<h1>Vinudana Dissanayaka</h1>
						<p className="lead">Hi!! this is my portforlio, Explor as you like so many content</p>
						<a className="btn" href="#projects">See projects</a>
					</div>
				</div>
			</div>
		</section>
	);
}
