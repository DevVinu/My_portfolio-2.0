import React from 'react';
import myImage from '../assets/me.jpg';

export default function Hero() {
	return (
		<section id="home" className="hero">
			<div className="container">
				<div className="hero-content">
					<img src={myImage} alt="Vinudana dissanayaka" className="hero-avatar" />
					<div className="hero-text">
						<h1>Vinudana dissanayaka</h1>
						<p className="lead">This is my portfolio</p>
						<a className="btn" href="#projects">See projects</a>
					</div>
				</div>
			</div>
		</section>
	);
}
