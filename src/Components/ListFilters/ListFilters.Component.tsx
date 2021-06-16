import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import './listFilters.styles.css';

type Props = {
	languages: [] | string[],
	selectedFilter: undefined | string,
	setSelectedFilter: Function,
};

const ListFilters:React.FC<Props> = ({ languages, selectedFilter, setSelectedFilter }) => {
	return (
		<div>
			<p>FILTERS:</p>
			<ToggleButtonGroup
				exclusive
				value={selectedFilter}
				onChange={(event, value) => setSelectedFilter(value)}
				classes={{ root: 'container'}}
			>
			{languages.map((language:string, index:number) => (
				<ToggleButton value={language}>
					{language}
				</ToggleButton>
			))}
			</ToggleButtonGroup>
		</div>
	);
};

export default ListFilters;