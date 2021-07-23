import React from 'react';

const Footer = () => {
	return(
		<footer className=" width-full pb-0 mt-6">
			<section className="container">
				<h5 className="is-marginless has-text-right width-full mb-0">
					<span className="is-size-6">This site was created with <i>React.js</i> & <i>Bulma</i> - </span>
					<a
					className="App-link is-size-6"
					href="https://9ete.dev"
					target="_blank"
					rel="noopener noreferrer"
					>
						@9ete
					</a>
					&nbsp;
				</h5>
			</section>
		</footer>
	);
};

export default Footer;
