import { ChangeEvent, ChangeEventHandler, useState } from 'react';

export type InputHook = {
	value: string,
	setValue: Function,
	reset: Function,
	bind: Bind,
};

type Bind = {
	value: string,
	onChange: ChangeEventHandler,
};

const useInput = (initialValue: string): InputHook => {
	const [ value, setValue ] = useState(initialValue);

	return {
		value,
		setValue,
		reset: () => setValue(''),
		bind: {
			value,
			onChange: (event: ChangeEvent<HTMLInputElement>) => {
				setValue(event.target.value.toString());
			}
		}
	}	
};

export { useInput };