import React from 'react';

export default function ProjectCard({ project }) {
  const { title, description, tags, image, github, live } = project;
  return (
    <article className="project-card">
      <img src={image} alt={`${title} screenshot`} loading="lazy" style={{width:'100%',height:140,objectFit:'cover'}} onError={(e)=> e.currentTarget.src='/src/assets/placeholder.png'} />
      <div className="card-body">
        <h3 style={{margin:'0.25rem 0'}}>{title}</h3>
        <p className="muted" style={{margin:0,fontSize:'0.95rem'}}>{description.length>120?description.slice(0,120)+'…':description}</p>
        <div style={{marginTop:8}}>
          {tags.map(t => <span key={t} className="tag" style={{marginRight:6}}>{t}</span>)}
        </div>
        <div style={{marginTop:8}}>
          {github && <a href={github} target="_blank" rel="noreferrer">Code</a>}{' '}
          {live && <a href={live} target="_blank" rel="noreferrer">Live</a>}
        </div>
      </div>
    </article>
  );
}
