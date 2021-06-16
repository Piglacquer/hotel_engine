import React from 'react';
import { 
	TextField,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useInput } from '../../Hooks/input-hook';

import './searchBar.styles.css';

type Props = {
	searchGithub: Function,
};

const SearchBar:React.FC<Props> = ({searchGithub}) => {
	const { value: searchValue, bind: bindSearchValue } = useInput('');

	return (
		<div className='search-container'>
			<Card variant='outlined'>
				<CardHeader
					title='Looking for some light reading?'
					subheader='Search Github for your favorite topic!'
				/>
				<CardActions>
					<TextField
						id='filled-basic' 
						{...bindSearchValue}
						onKeyPress={event => {
							if (event.code === 'Enter') {
								searchGithub(searchValue);
							}
						}} 
					/>
					<Button
						variant='contained'
						color='primary'
						startIcon={<SearchIcon />}
						onClick={() => searchGithub(searchValue)}
					>
						Search Github
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}

export default SearchBar;