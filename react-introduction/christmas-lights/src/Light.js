import React from 'react';
import './styles.css';

export default function Light({color}) {
	return <div className={`circle ${color === 'off' ? 'off' : color}`}></div>;
}
