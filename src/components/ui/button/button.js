import React from 'react';

import classes from './button.module.css';

function Button({ onClickHandler, submit, alt, disabled, ...props }) {
	return (
		<button
			type={submit && 'submit'}
			className={`${classes.Button} ${alt && classes.Alt}`}
			onClick={onClickHandler}
			disabled={disabled}>
			{props.children}
		</button>
	);
}

export default Button;
