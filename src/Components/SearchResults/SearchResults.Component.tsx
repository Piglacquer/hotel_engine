import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star } from '@material-ui/icons';
import ListFilters from '../ListFilters/ListFilters.Component';
import ListSorts from '../ListSorts/ListSorts.Component';

import { Endpoints } from '@octokit/types';

import './searchResults.styles.css';

type GithubSearchResponse = Endpoints['GET /search/repositories']['response'];
type Repositories = Endpoints['GET /search/repositories']['response']['data']['items'];

type Props = {
	results: GithubSearchResponse['data'],
};

const SearchResults:React.FC<Props> = ({ results }) => {
	const [ languages, setLanguages ] = useState<[] | string[]>([]);
	const [ selectedFilter, setSelectedFilter ] = useState<undefined | string>(undefined);
	const [ selectedSort, setSelectedSort ] = useState<string>('default');
	const [ repositories, setRepositories ] = useState<Repositories>(results.items);


	useEffect(() => {
		const getLanguageSelection = () => {
			const languages = results.items.reduce((accumulator, currentItem) => {
				if (!currentItem.language) {
					return accumulator;
				}

				const alreadyExists = accumulator.find(language => currentItem.language === language);

				if (!alreadyExists) {
					accumulator.push(currentItem.language);
				};

				return accumulator;
			}, [] as string[]);
			setLanguages(languages);
		};
		return getLanguageSelection();
	}, [results]);

	useEffect(() => {
		let updatedRepositories = [...results.items];
		if (selectedFilter) {
			updatedRepositories = updatedRepositories.filter(repository => repository.language === selectedFilter)
		};
		if (selectedSort === 'stars') {
			updatedRepositories.sort((a,b) => a.stargazers_count - b.stargazers_count);
		}
		setRepositories(updatedRepositories);

	}, [selectedFilter, selectedSort, results.items]);

	return (
		<div className='results-container'>
			<h2 className='results-numbers'>{`WE FOUND ${results.total_count} RESULTS! Here are ${results.items.length}`}</h2>
			<div className='sort-filter-container'>
				<ListFilters
					languages={languages}
					selectedFilter={selectedFilter}
					setSelectedFilter={setSelectedFilter}
				/>
				<ListSorts
					selectedSort={selectedSort}
					setSelectedSort={setSelectedSort}
				/>
			</div>
			{repositories.map(item => (
				<Link 
					to={{
						pathname: `/details/${item.id}`,
						state: { repositoryDetails: item }
					}}
					key={item.id}
					className='row-container'
				>
					<div>
						<h3 className='repo-name'>{item.name}</h3>
						<span>{item.description}</span>
					</div>
					<div>
						<div className='stars-container'>
							<Star color='primary' />
							<span>{`${item.stargazers_count}`}</span>
						</div>
						<span>{item.language}</span>
						<span>{item.owner.login}</span>
					</div>
				</Link>
			))}
		</div>
	);
};

export default SearchResults;