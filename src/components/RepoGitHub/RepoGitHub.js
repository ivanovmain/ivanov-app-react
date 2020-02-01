import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from '../Spinner';
import RepoGitHubCard from '../RepoGitHubCard';

const REPO_LIST = gql`
query($name: String!){
  search(query: $name, last: 10, type: REPOSITORY) {
    edges {
      node {
        ... on Repository {
          id
          name
          description
          url
        }
      }
    }
  }
}
`;

const RepoGitHub = (props) => {

  const { login } = props;

  return(
    <Query
    query={REPO_LIST}
    variables={{name:login}}
    
  >
    {({ loading, errors, data }) => {
       if (loading){
        return(
          <div className='api-wrapper'>
            <Spinner/>;
          </div>
        );
       } 
       if (errors) return <h2 className='error-api'>Error sending fetch request</h2>;       
       if(data.search.edges.length === 0){
         return(
          <div className='api-wrapper'>
            <h2 className='error-api'>No match</h2>
          </div>
         );
       }
       
       return data.search.edges.map((data)=>{
         return(
            <RepoGitHubCard key={data.node.id} data={data}/>
         );
       })
    }}
  </Query>
  );
};


export default RepoGitHub;