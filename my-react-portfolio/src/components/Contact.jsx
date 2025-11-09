import React from 'react';

export default function Contact() {
	return (
		<section id="contact" className="contact container" style={{padding:'2rem 0'}}>
			<h2>Contact</h2>
			<p>Prefer email? <a href="mailto:you@example.com">you@example.com</a></p>
			<form onSubmit={(e) => { e.preventDefault(); alert('Replace with Email service or handler'); }} style={{maxWidth:600}}>
				<div style={{display:'flex',gap:8,marginBottom:8}}>
					<input name="name" placeholder="Name" required style={{flex:1}} />
					<input name="email" placeholder="Email" type="email" required style={{flex:1}} />
				</div>
				<div style={{marginBottom:8}}>
					<textarea name="message" placeholder="Message" required style={{width:'100%',minHeight:100}} />
				</div>
				<button type="submit">Send</button>
			</form>
		</section>
	);
}
