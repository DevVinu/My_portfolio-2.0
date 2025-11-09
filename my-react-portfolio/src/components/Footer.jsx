import React from 'react';

export default function Footer() {
	return (
		<footer className="site-footer" style={{padding:'1rem 0',borderTop:'1px solid #eee',marginTop:24}}>
			<div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
				<p style={{margin:0}}>© {new Date().getFullYear()} Vinudana dissanayaka </p>
				<div>
					<a href="https://github.com/DevVinu" target="_blank" rel="noreferrer">GitHub</a>
				</div>
			</div>
		</footer>
	);
}
