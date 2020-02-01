import React from 'react';
import './RepoGitHubCard.css';




const RepoGitHubCard = (props) => {
  
  const { node:{ name, description, url } } = props.data;

  return(
    <div className="repo-card">
      <h2>{name}</h2>
      <div className='repo-desc'>{description}</div>
      <a className='repo-link' href={url}>{name}</a>
    </div>
  );
}

export default RepoGitHubCard; 