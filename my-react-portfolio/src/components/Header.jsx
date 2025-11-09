import React, { useEffect, useRef } from 'react';

export default function Header() {
	const navRef = useRef(null);

	useEffect(() => {
		const nav = navRef.current;
		if (!nav) return;

		const linkMap = {};
		nav.querySelectorAll('a[href^="#"]').forEach(a => {
			const id = a.getAttribute('href').slice(1);
			linkMap[id] = a;
		});

		const observerOptions = {
			root: null,
			rootMargin: '0px 0px -60% 0px',
			threshold: 0
		};

		const callback = (entries) => {
			entries.forEach(entry => {
				const id = entry.target.id;
				const link = linkMap[id];
				if (!link) return;
				if (entry.isIntersecting) {
					Object.values(linkMap).forEach(a => a.classList.remove('active'));
					link.classList.add('active');
				}
			});
		};

		const observer = new IntersectionObserver(callback, observerOptions);
		Object.keys(linkMap).forEach(id => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<header className="site-header">
			<div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
				<a className="logo" href="#home" style={{fontWeight:700}}>Welcome</a>
				<nav className="nav" ref={navRef}>
					<a href="#home">Home</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
					<a href="#about">About</a>
				</nav>
			</div>
		</header>
	);
}
