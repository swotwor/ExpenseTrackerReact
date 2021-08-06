import React from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
	const { text, id, amount } = transaction;

	const sign = amount > 0 ? '+' : '-';

	const { deleteTransaction } = React.useContext(GlobalContext);

	return (
		<li className={amount < 0 ? 'minus' : 'plus'}>
			{text}{' '}
			<span>
				{sign}${Math.abs(amount)}
			</span>
			<button className='delete-btn' onClick={() => deleteTransaction(id)}>
				x
			</button>
		</li>
	);
};
