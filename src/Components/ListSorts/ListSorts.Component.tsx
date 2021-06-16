import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

type Props = {
	selectedSort: string,
	setSelectedSort: Function,
};

const ListSorts:React.FC<Props> = ({ selectedSort, setSelectedSort }) => (
	<div>
		<p>SORTS:</p>
		<ToggleButtonGroup
			exclusive
			value={selectedSort}
			onChange={(event, value) => setSelectedSort(value)}
		>
			<ToggleButton value='default'>
				Default
			</ToggleButton>
			<ToggleButton value='stars'>
				Stars
			</ToggleButton>
		</ToggleButtonGroup>
	</div>
);

export default ListSorts;