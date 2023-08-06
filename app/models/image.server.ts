type Image = {

}

export async function getFeatImages(): Promise<Array<Image>> {
	return [
		{
			id: 'memfeat',
			cName: 'feat',
			src: require('./assets/memory-game-feat.png'),
			title: 'Dessert for Memory',
			description: 'Personal Project',
		},
		{
			id: 'ed520',
			cName: 'feat',
			src: require('./assets/Ed-Dining-520x400.jpg'),
			title: 'Educational Dining',
			description: 'Continental Services',
		},
		{
			id: 'cont520',
			cName: 'feat',
			src: require('./assets/Cont-Client-520x400.png'),
			title: 'Client Movie',
			description: 'Continental Services',
		},
		{
			id: 'ap520',
			cName: 'feat',
			src: require('./assets/Andre-Port-520x400.png'),
			title: 'Portfolio Magazine',
			description: 'Andre Morton',
		},
	]
}

export async function getImages(): Promise<Array<Image>> {
	return [
		{
			id: 'sweet',
			cName: 'proj',
			src: require('./assets/SoSweet_Thumb.jpg'),
			title: 'So Sweet: Case Study',
			description: 'Brand Strategy',
		},
		{
			id: 'mem',
			cName: 'proj',
			src: require('./assets/memory-game.png'),
			title: 'Memory Game',
			description: 'Javascript',
		},
		{
			id: 'maps',
			cName: 'proj',
			src: require('./assets/neighborhood-maps.png'),
			title: 'Neighborhood Map',
			description: 'React.JS',
		},
		{
			id: 'reads',
			cName: 'proj',
			src: require('./assets/my-reads.png'),
			title: 'My Reads',
			description: 'React.JS',
		},
		{
			id: 'gm305',
			cName: 'proj',
			src: require('./assets/GM-Power-305x320.png'),
			title: 'GM Powertrain',
			description: 'Greeter Board Mini',
		},
		{
			id: 'bala305',
			cName: 'proj',
			src: require('./assets/Balaboosta-305x320.png'),
			title: 'Balaboosta',
			description: 'POS Flyer & Motion Graphic',
		},
		{
			id: 'ed305',
			cName: 'proj',
			src: require('./assets/Ed-Dining-305x320.png'),
			title: 'Educational Dining',
			description: 'Stationery Collateral',
		},
		{
			id: 'cont305',
			cName: 'proj',
			src: require('./assets/Cont-Client-305x320.png'),
			title: 'Client Movie',
			description: 'Continental | Showcase',
		},
		{
			id: 'luc305',
			cName: 'proj',
			src: require('./assets/Lucca-305x320.png'),
			title: 'Lucca | Italian Street Food',
			description: 'Motion Graphic Promo',
		},
		{
			id: 'rof305',
			cName: 'proj',
			src: require('./assets/Rise-of-Fall-305x320.png'),
			title: 'The Rise of Fall Pasta',
			description: 'Point of Sales Flyer',
		},
		{
			id: 'ap305',
			cName: 'proj',
			src: require('./assets/Andre-Port-305x320.png'),
			title: 'Portfolio Magazine',
			description: 'Assisting Art Director',
		},
	]
}

export async function getProjectImages(): Promise<Array<Image>> {
	return [
		{
			id: 'ap04',
			cName: 'proj',
			src: require('./assets/projects/AP_04.jpg'),
			title: 'Portfolio Magazine',
			description: 'Assisting Art Director',
		},
		{
			id: 'ap05',
			cName: 'proj',
			src: require('./assets/projects/AP_05.jpg'),
			title: 'Portfolio Magazine',
			description: 'Assisting Art Director',
		},
		{
			id: 'ap07',
			cName: 'proj',
			src: require('./assets/projects/AP_07.jpg'),
			title: 'Portfolio Magazine',
			description: 'Assisting Art Director',
		},
		{
			id: 'ap08',
			cName: 'proj',
			src: require('./assets/projects/AP_08.jpg'),
			title: 'Portfolio Magazine',
			description: 'Assisting Art Director',
		},
		{
			id: 'ap10',
			cName: 'proj',
			src: require('./assets/projects/AP_10.jpg'),
			title: 'Portfolio Magazine',
			description: 'Assisting Art Director',
		},
		{
			id: 'ap11',
			cName: 'proj',
			src: require('./assets/projects/AP_11.jpg'),
			title: 'Portfolio Magazine',
			description: 'Assisting Art Director',
		},
		{
			id: 'bala',
			cName: 'proj',
			src: require('./assets/projects/Balaboosta.png'),
			title: 'Balaboosta',
			description: 'Point of Sales Flyer & Motion Graphic',
		},
		{
			id: 'ebroch',
			cName: 'proj',
			src: require('./assets/projects/ed-dining-brochure.png'),
			title: 'Educational Dining',
			description: 'Stationery Collateral',
		},
		{
			id: 'efold',
			cName: 'proj',
			src: require('./assets/projects/ed-dining-folder.png'),
			title: 'Educational Dining',
			description: 'Stationery Collateral',
		},
		{
			id: 'epos',
			cName: 'proj',
			src: require('./assets/projects/ed-dining-pos.png'),
			title: 'Educational Dining',
			description: 'Stationery Collateral',
		},
		{
			id: 'greet',
			cName: 'proj',
			src: require('./assets/projects/GMGreeter_1.mp4'),
			title: 'GM Powertrain',
			description: 'Greeter Board Mini',
		},
		{
			id: 'lucca',
			cName: 'proj',
			src: require('./assets/projects/Lucca.mp4'),
			title: 'Lucca | Italian Street Food',
			description: 'Motion Graphic Promo',
		},
		{
			id: 'rofpos',
			cName: 'proj',
			src: require('./assets/projects/rise-of-fall.png'),
			title: 'The Rise of Fall Pasta',
			description: 'Point of Sales Flyer',
		},
	]
}

export async function getJobImages(): Promise<Array<Image>> {
	return [
		{
			id: 'brooks',
			cName: 'logo',
			src: require('./assets/brooks-logo.png'),
			title: 'Brooks',
			description: 'Logo',
			// icon: <FireplaceIcon />,
			company: 'Brooks Equipment',
			jobTitle: 'Web Developer & Graphic Designer',
		},
		{
			id: 'bradley',
			cName: 'logo',
			src: require('./assets/bradley-logo.png'),
			title: 'Bradley',
			description: 'Logo',
			// icon: <FaceIcon />,
			company: 'Bradley Co.',
			jobTitle: 'Graphic Designer',
		},
		{
			id: 'continental',
			cName: 'logo',
			src: require('./assets/continental-logo.png'),
			title: 'Continental',
			description: 'Logo',
			// icon: <LocalDiningIcon />,
			company: 'Continental Services',
			jobTitle: 'Graphic & Motion Designer',
		},
		{
			id: 'palace',
			cName: 'logo',
			src: require('./assets/palace-logo.png'),
			title: 'Palace Sports & Entertainment',
			description: 'Logo',
			// icon: <SportsBasketballIcon />,
			company: 'Palace Sports & Entertainment',
			jobTitle: 'Graphic Design Intern',
		},
	]
}

export async function getThemeIcons(): Promise<Array<Image>> {
	return [
		{
			id: 'primary',
			cName: 'theme',
			src: require('../assets/icons/ColorSelectorDefault.png'),
			title: 'Default Theme',
			description: 'Theme',
		},
		{
			id: 'secondary',
			cName: 'theme',
			src: require('../assets/icons/ColorSelectorSecondary.png'),
			title: 'Secondary Theme',
			description: 'Theme',
		},
		{
			id: 'dark',
			cName: 'theme',
			src: require('../assets/icons/ColorSelectorDark.png'),
			title: 'Dark Theme',
			description: 'Theme',
		},
	]
}