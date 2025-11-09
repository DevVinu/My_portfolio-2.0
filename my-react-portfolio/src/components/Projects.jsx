import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects({ projects = [] }) {
  return (
    <section id="projects" className="projects-section container">
      <div style={{padding:'2rem 0'}}>
        <h2>Projects</h2>
        {projects.length === 0 ? (
          <p className="muted">No projects yet.</p>
        ) : (
          <div className="projects-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:12,marginTop:12}}>
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}
