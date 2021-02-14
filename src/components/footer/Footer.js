import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { MenuItems } from '../header/MenuItems.js'

class Footer extends Component {
	render() {
		return (
			<footer>
				<Container className="Footer flex fcol">
					<ul className="footer-menu">
						{MenuItems.map((item, index) => {
							return (
								<li key={index}>
									<a className={item.cName} href={item.url}>{item.page}</a>
								</li>
							)
						})}
					</ul>
					<p>&copy;2021 | SEVEN TIMES DESIGN | All Rights Reserved</p>
				</Container>
			</footer>
		);
	}
}

export default Footer;