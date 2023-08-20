type Description = {
	id: string;
	src: any;
	company?: string;
	date: string;
	service?: string;
	desc: any;
}

export async function getExperienceDescriptions(): Promise<Array<Description>> {
	return [
		{
			id: 'palace',
			src: require('~/assets/img/palace-logo.png'),
			company: 'Palace Sports & Entertainment',
			date: 'Jun 2013 - Sep 2013',
			desc: `
				<ul>
					<li>
						Designed vouchers and business cards cohesive to the Palace brands in
						Photoshop and Illustrator.
					</li>
					<li>
						Worked with creative director to keep printing and copy-write errors
						to a minimum.
					</li>
				</ul>
			`
		},
		{
			id: 'continental',
			src: require('~/assets/img/continental-logo.png'),
			company: 'Continental Services',
			date: 'Sep 2013 - Sep 2015',
			desc: `
				<ul>
					<li>
						Created digital menus, point-of-sales sheets, collateral, etc. using
						InDesign, Illustrator, Photoshop and Word
					</li>
					<li>
						Established and maintained branding for education dining division
					</li>
					<li>Kept consistency in the branding of cafe division</li>
					<li>
						Worked along-side cafe managers to ensure the design of menu boards
						succeeded in assisting with the growth and satisfaction of customers
					</li>
					<li>
						Created mini videos in After Effects for use on digital menu boards
					</li>
					<li>
						Pushed menu board content to the system using VitalCast software
					</li>
				</ul>
			`,
		},
		{
			id: 'bradley',
			date: 'May 2017 - May 2018',
			src: require('~/assets/img/bradley-logo.png'),
			company: 'Bradley Co.',
			desc: `
				<ul>
					<li>Redrew logos in Illustrator when requested by the customer</li>
					<li>Delivered assets via atEase/Facilis management system online</li>
					<li>Designed eBlasts in MailChimp</li>
					<li>Created interactive forms in InDesign</li>
					<li>Developed virtual mockups of artwork on the merchandise</li>
					<li>
						Created new merchandise and webstore ideas to be presented to
						prospective clients
					</li>
				</ul>
			`,
		},
		{
			id: 'brooks',
			src: require('~/assets/img/brooks-logo.png'),
			company: 'Brooks Equipment',
			date: 'Feb 2019 - Jul 2022',
			desc: `
				<ul>
					<li>
						Collaborated with IT in building two eCommerce websites and a service
						website from the ground up.
					</li>
					<li>
						Implement Google Marketing Platform (Analytics & Tag Manager) and
						Google Search Console into eCommerce sites for eCommerce tracking and
						SEO purposes.
					</li>
					<li>
						Perform web maintenance on 7 company sites – including making older
						sites accessible, mobile-friendly, optimized for search engines – and
						redeveloping the site/refactoring code when UI/UX needs to be updated.
					</li>
					<li>
						Increased web traffic of a training and services website by 6 - 7% by
						implementing fundamental SEO strategy alongside the marketing team.
					</li>
					<li>
						Integrate HubSpot into sites for automated email, marketing processes,
						and form capturing.
					</li>
					<li>
						Utilize Hubspot to develop custom templates, create landing pages, and
						create lead capturing forms.
					</li>
					<li>
						Assist graphic designers with heavy workloads by creating web banners,
						optimizing images for web, and developing catalogs and deliverables to
						keep customers informed on the latest products and industry standards.
					</li>
				</ul>
			`,
		},
		{
			id: 'weco',
			src: require('~/assets/img/weco-logo.png'),
			company: 'WECO Hospitality',
			date: 'Jul 2022 - Jul 2023',
			desc: `
				<ul>
					<li>Collaborated with a small yet dynamic team to develop and enhance the technology stack to deliver a seamless and efficient online food service application for our customers.</li>
					<li>Implemented a user-friendly signup/login process, allowing customers to authenticate using email, Google, and Facebook accounts, enhancing user convenience and engagement.</li>
					<li>Implemented data handling by posting and fetching data from the backend API using Axios, ensuring real-time updates and seamless data synchronization between the client and server.</li>
					<li>Integrated Google Maps and Autocomplete APIs to provide a user-friendly interface for customers to select pickup locations and delivery addresses quickly and conveniently.</li>
					<li>Implemented Sentry to efficiently monitor and manage errors and exceptions.</li>
					<li>Integrated Google Analytics to gain valuable insights into user behavior, product performance, and application usage, leading to data-driven decisions for continuous improvement.</li>
					<li>Implemented Google Ads and Tag Manager, enabling seamless tracking of marketing campaigns and user interactions, resulting in optimized ad targeting and increased conversion rates.</li>
				</ul>
			`
		}
	];
}

export async function getProjectDescriptions(): Promise<Array<Description>> {
	return [
		// {
		// 	id: "sweet",
		// 	date: "Feb 2020",
		// 	service: "Brand Strategy | Personal Project",
		// 	desc: "Coming Soon"
		// },
		{
			id: 'maps',
			date: '<span> Nov 2018 <a href="https://neighborhood-map-eprishb.herokuapp.com/" target="_blank" rel="noopener noreferrer">%variable%</a></span>',
			service: ' ReactJS | Personal Project',
			desc: 'Maps is a smoothie locator with a predetermined list of smoothie shop locations in certain cities. This intermediate project teaches the ins and outs of React and how to use APIs. The planning of the project required a layout of the components and knowing which components rely on one another. The next problem was connecting the API to the map and getting the location pointers to match the geographical location.',
			src: `<img src=${require('~/assets/img/neighborhood-maps.png')} alt="" />`,
		},
		{
			id: 'reads',
			date: '<span> Sep 2018 <a href="https://my-reads-eprishb.herokuapp.com/" target="_blank" rel="noopener noreferrer">%variable%</a></span>',
			service: 'ReactJS | Personal Project',
			desc: 'My Reads allows a user to browse a digital library and add different books to their lists. The primary challenge was dynamically rendering content and working with query inputs.',
			src: `<img src=${require('~/assets/img/my-reads.png')} alt="" />`,
		},
		{
			id: 'mem',
			date: '<span>Aug 2018 <a href="https://eprisr.github.io/Project-Memory_Game/" target="_blank" rel="noopener noreferrer">%variable%</a></span>',
			service: 'Vanilla JS | Personal Project',
			desc: 'We all scream for better memory. No one likes to experience brain fog. Have fun with this mentally stimulating and sweet memory game.',
			src: `<img src=${require('~/assets/img/memory-game.png')} alt="" />`,
		},
		{
			id: 'gm305',
			date: 'Sep 2013',
			service: 'After Effects | General Motors Powertrain | Continental Services',
			desc: 'Nothing beats having a cafe inside the workplace. Digital menus are a great way to display regular prices and great deals at the same time. This digital menu was created as a way to increase sales by offering the best deals up front.',
			src: {
				url: "https://youtu.be/o4aBO8hHzq8",
				id: "video",
				width: "fit-content",
				height: "100%",
			}
		},
		{
			id: 'bala305',
			date: 'Nov 2013',
			service: 'Continental Services',
			desc: '',
			src: `<img src=${require('~/assets/img/projects/Balaboosta.png')} alt="" />`,
		},
		{
			id: 'ed305',
			date: 'Sep 2013',
			service: 'Educational Dining | Continental Services',
			desc: 'Branded collateral pieces',
			src: `
				<div class="multiple">
					<div class="slides">
						<img
							src=${require('~/assets/img/projects/ed-dining-brochure.png')}
							alt=""
							id="ed305-1"
						/>
						,
						<img
							src=${require('~/assets/img/projects/ed-dining-folder.png')}
							alt=""
							id="ed305-2"
						/>
						,
						<img
							src=${require('~/assets/img/projects/ed-dining-pos.png')}
							alt=""
							id="ed305-3"
						/>
						,
					</div>
					<a href="#ed305-1">1</a>
					<a href="#ed305-2">2</a>
					<a href="#ed305-3">3</a>
				</div>
			`,
		},
		{
			id: 'cont305',
			date: 'Feb 2014',
			service: 'Brand Showcase | Continental Serivces',
			desc: '',
			src: {
				url: "https://youtu.be/aVkRW2K-fRo",
				id: "video",
				width: "fit-content",
				height: "100%",
			},
		},
		{
			id: 'luc305',
			date: 'Jan 2014',
			service: 'Digital Menu Board | Continental Services',
			desc: '',
			src: {
				url: "https://youtu.be/vxCD96BGkdw",
				id: "video",
				width: "fit-content",
				height: "100%",
			},
		},
		{
			id: 'rof305',
			date: 'Oct 2013',
			service: 'Point of Sales | Continental Services',
			desc: '',
			src: `
				<img src=${require('~/assets/img/projects/rise-of-fall.png')} alt="" />
			`,
		},
		{
			id: 'ap305',
			date: 'May 2013',
			service: 'Portfolio Magazine | Andre Morton | I AM Creative LLC',
			desc: 'Ad a part of portfolio show, students have to showcase their work. With aspirations of being a creative director, I had the opportunity to be under his direction. I was given an idea of what the content and topics would be and we went out and took photos based off of those concepts. After that, we began strategizing the order and layout of the piece.',
			src: `
				<div class="multiple">
					<div class="slides" id="w260">
						<img
							src=${require('~/assets/img/projects/AP_04.jpg')}
							alt=""
							id="ap305-1"
							class="w275"
						/>
						,
						<img
							src=${require('~/assets/img/projects/AP_05.jpg')}
							alt=""
							id="ap305-2"
							class="w275"
						/>
						,
						<img
							src=${require('~/assets/img/projects/AP_07.jpg')}
							alt=""
							id="ap305-3"
							class="w275"
						/>
						,
						<img
							src=${require('~/assets/img/projects/AP_08.jpg')}
							alt=""
							id="ap305-4"
							class="w275"
						/>
						,
						<img
							src=${require('~/assets/img/projects/AP_10.jpg')}
							alt=""
							id="ap305-5"
							class="w275"
						/>
						,
						<img
							src=${require('~/assets/img/projects/AP_11.jpg')}
							alt=""
							id="ap305-6"
							class="w275"
						/>
					</div>
					<a href="#ap305-1">1</a>
					<a href="#ap305-2">2</a>
					<a href="#ap305-3">3</a>
					<a href="#ap305-4">4</a>
					<a href="#ap305-5">5</a>
					<a href="#ap305-6">6</a>
				</div>
			`,
		},
	]
}