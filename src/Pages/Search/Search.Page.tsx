import { useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar.Component';
import SearchResults from '../../Components/SearchResults/SearchResults.Component';

import { Endpoints } from '@octokit/types';


type GithubSearchResponse = Endpoints['GET /search/repositories']['response']['data'];

const Search:React.FC = () => {
	const [ results, setResults ] = useState<undefined | GithubSearchResponse>(undefined);

	const searchGithub = (queryString:string):void => {
		fetch(`https://api.github.com/search/repositories?q=${queryString}`)
			.then(resp => resp.json())
			.then(resp => setResults(resp));
	};

	return (
		<div>
			<SearchBar searchGithub={searchGithub}/>
			{results && <SearchResults results={results} />}
		</div>
	);
};

export default Search;