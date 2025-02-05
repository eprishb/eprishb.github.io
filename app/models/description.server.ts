interface Description {
	id: string;
	src: any;
	date: string;
	desc: any;
	skills: Array<string>;
}

interface ExpDescription extends Description {
	company: string;
	jobTitle: string;
	imgWidth: string;
}

interface ProjDescription extends Description {
	type: string;
	title: string;
	client: string;
	clickable: boolean;
}

export async function getExperienceDescriptions(): Promise<Array<ExpDescription>> {
	return [
		{
			id: 'weco',
			src: require('~/assets/img/weco-logo-horizontal-black.png'),
			company: 'WECO Hospitality',
			date: 'Jul 2022 - Jul 2023',
			jobTitle: 'Software Engineer',
			imgWidth: '200px',
			desc: 'Collaborated with small cross-functional team to move a food service web application from WordPress to React in order to scale the app, control the flow, and update the UI/UX, thereby enhancing the user experience. This included working with data from open and internal APIs as well as internal SQL and noSQL databases. Developed, maintained and shipped production ready code.',
			skills: ['React', 'Typescript', 'Styled Components', 'Django', 'Node.js', 'Jest', 'React Testing Library', 'MSW', 'Firebase', 'Google Maps API', 'Google Autocomplete API', 'Google Marketing Platform', 'Sentry'],
		},
		{
			id: 'brooks',
			src: require('~/assets/img/brooks-logo-black.png'),
			company: 'Brooks Equipment',
			date: 'Feb 2019 - Jul 2022',
			jobTitle: 'Web Developer & Graphic Designer',
			imgWidth: '125px',
			desc: 'Teamed up with the creative director and back-end engineers to revamp all existing subsidiary websites and develop two additional websites for newly acquired companies within a year. Ongoing routine maintainance and updates to UI/UX and SEO were performed.',
			skills: ['Javascript', 'HTML', 'CSS', 'ASP.NET', 'Google Marketing Platform', 'Adobe CC', 'Hubspot', 'Workfront'],
		},
		{
			id: 'bradley',
			src: require('~/assets/img/bradley-logo-black.png'),
			date: 'May 2017 - May 2018',
			company: 'Bradley Co.',
			jobTitle: 'Graphic Designer',
			imgWidth: '150px',
			desc: 'Transformed .png and .jpeg logo images into vector to late be used on various merchandise. Updated eCommerce sites, web banners, and ad banners. Designed PPG Paint yearly calendars as needed.',
			skills: ['Adobe CC', 'eCommerce Design'],
		},
		{
			id: 'continental',
			src: require('~/assets/img/continental-logo-black.png'),
			company: 'Continental Services',
			date: 'Sep 2013 - Sep 2015',
			jobTitle: 'Graphic & Motion Designer',
			imgWidth: '180px',
			desc: 'Crafted digital menu boards for various cafe locations. Designed motion graphics for campaigns, collateral pieces, proposals, creative briefs, and POS posters.',
			skills: ['Adobe CC'],
		},
		{
			id: 'palace',
			src: require('~/assets/img/palace-logo-black.png'),
			company: 'Palace Sports & Entertainment',
			date: 'Jun 2013 - Sep 2013',
			jobTitle: 'Graphic Design Intern',
			imgWidth: '100px',
			desc: 'Received mentorship. Updated templated business cards for employees and tickets for events.',
			skills: ['Adobe CC'],
		},
	];
}

// const techSkills = ['Javascript', 'Typescript', 'React', 'Remix', 'ExpressJs', 'Lodash', 'React Testing Library', 'Mock Service Worker (MSW)',  'MongoDB', 'Firebase', 'Git', 'Github', 'AWS', 'Responsive Design', 'Accessibility', 'HubSpot', 'Google Analytics', 'Google Search Console', 'Google Tag Manager', 'Sentry', 'Trello', 'Shortcut']
// 	const designSkills = ['InDesign', 'Illustrator', 'Photoshop', 'XD', 'AfterEffects', 'Figma', 'Branding and Identity', 'Print Design', 'Web Design']

export async function getProjectDescriptions(): Promise<Array<ProjDescription>> {
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
      date: '<span> Sep 2018 <a href="https://my-reads-brown.vercel.app/" target="_blank" rel="noopener noreferrer">%variable%</a></span>',
      service: 'ReactJS | Personal Project',
      desc: 'My Reads allows a user to browse a digital library and add different books to their lists. The primary challenge was dynamically rendering content and working with query inputs.',
      src: `<img src=${require('~/assets/img/my-reads.png')} alt="" />`,
    },
    {
      id: 'mem',
      date: '<span>Aug 2018 <a href="https://memory-game-steel-two.vercel.app/" target="_blank" rel="noopener noreferrer">%variable%</a></span>',
      service: 'Vanilla JS | Personal Project',
      desc: 'We all scream for better memory. No one likes to experience brain fog. Have fun with this mentally stimulating and sweet memory game.',
      src: `<img src=${require('~/assets/img/memory-game.png')} alt="" />`,
    },
    {
      id: 'gm305',
      date: 'Sep 2013',
      service:
        'After Effects | General Motors Powertrain | Continental Services',
      desc: 'Nothing beats having a cafe inside the workplace. Digital menus are a great way to display regular prices and great deals at the same time. This digital menu was created as a way to increase sales by offering the best deals up front.',
      src: {
        url: 'https://youtu.be/o4aBO8hHzq8',
        id: 'video',
        width: 'fit-content',
        height: '100%',
      },
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
        url: 'https://youtu.be/aVkRW2K-fRo',
        id: 'video',
        width: 'fit-content',
        height: '100%',
      },
    },
    {
      id: 'luc305',
      date: 'Jan 2014',
      service: 'Digital Menu Board | Continental Services',
      desc: '',
      src: {
        url: 'https://youtu.be/vxCD96BGkdw',
        id: 'video',
        width: 'fit-content',
        height: '100%',
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