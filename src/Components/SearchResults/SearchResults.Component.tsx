import React from 'react';
import { Endpoints } from '@octokit/types';

type GithubSearchResponse = Endpoints['GET /search/repositories']['response'];

type Props = {
	results: GithubSearchResponse['data']
};

const SearchResults:React.FC<Props> = ({ results }) => {
	console.warn('yeet results', results);
	return (
		<div>
			{`WE HAVE ${results.total_count} RESULTS!`}
		</div>
	);
};

export default SearchResults;