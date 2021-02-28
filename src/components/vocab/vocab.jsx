import React, { Component } from 'react';
import styles from './vocab.module.css';

class Vocab extends Component {
	render() {
		return (
			<ul>
				<li className={styles.vocab}>
					<span className='word'>Word</span>
					<span className='meaning'>Meaning</span>
					<span className='meaning'>State</span>
				</li>
				<li className={styles.vocab}>
					<span className='word'>demolish</span>
					<span className='meaning'>
						(건물을) 철거하다, (사상, 이론을) 뒤집다
					</span>
					<div className='buttons'>
						<button className={styles.complete}>
							<i className='fas fa-check-square'></i>
						</button>
						<button className={styles.delete}>
							<i className='fas fa-trash'></i>
						</button>
					</div>
				</li>
			</ul>
		);
	}
}

export default Vocab;
