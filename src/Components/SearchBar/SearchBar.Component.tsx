import React from 'react';
import { TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useInput } from '../../Hooks/input-hook';

type Props = {
	searchGithub: Function,
};

const SearchBar:React.FC<Props> = ({searchGithub}) => {
	const { value: searchValue, bind: bindSearchValue } = useInput('');

	return (
		<div>
			<h3>Looking for some light reading?</h3>
			<span>Search Github for your favorite topic!</span>
			<TextField id='filled-basic' {...bindSearchValue}/>
			<Button
				variant='contained'
				color='primary'
				startIcon={<SearchIcon />}
				onClick={() => searchGithub(searchValue)}
			>
				Search Github
			</Button>
		</div>
	);
}

export default SearchBar;