import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Star } from '@material-ui/icons';
import { Avatar, Card, CardHeader, CardContent } from '@material-ui/core'
import { Endpoints } from '@octokit/types';

import './details.styles.css';

type RouterState = {
	repositoryDetails: Endpoints['GET /repos/{owner}/{repo}']['response']['data'];
}

type Props = RouteComponentProps<{}, {}, RouterState>;


const DetailsPage:React.FC<Props> = ({location}) => {
	const { state: { repositoryDetails } } = location;
	const {
		name,
		description,
		language,
		created_at: createdAt,
		forks,
		homepage,
		html_url: githubUrl,
		license,
		open_issues: openIssues,
		stargazers_count: stars,
		owner,
	} = repositoryDetails;

	return (
		<Card>
			<CardHeader
				title={name}
				subheader={		
					<div className='stars-container'>
						<Star />
						<p>{stars}</p>
					</div>
				}
			>
				<h1 className='repo-name'>{name}</h1>
		
				<p>{`${forks} forks`}</p>
			</CardHeader>
			<CardContent>
				<h2>{description}</h2>
				<section className='owner-and-info'>
					<div className='avatar-and-name'>
						<p>Owner: </p>
						<Avatar alt={`${owner?.login}`} src={`${owner?.avatar_url}`} />
						<p>{owner?.login}</p>
					</div>
					<span>{`Language: ${language}`}</span>
					<p>{`Created Date: ${createdAt}`}</p>
					<a href={githubUrl} className='link'>Visit on Github</a>
				</section>
			</CardContent>
		</Card>
	);
};

export default DetailsPage;