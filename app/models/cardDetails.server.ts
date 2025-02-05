export async function getFeatProjects() {
  return [
    {
      id: 'memfeat',
      cName: 'feat',
      src: require('~/assets/img/memory-game-feat.png'),
      title: 'Dessert for Memory',
      description: 'Personal Project',
    },
    {
      id: 'ed520',
      cName: 'feat',
      src: require('~/assets/img/Ed-Dining-520x400.jpg'),
      title: 'Educational Dining',
      description: 'Continental Services',
    },
    {
      id: 'cont520',
      cName: 'feat',
      src: require('~/assets/img/Cont-Client-520x400.png'),
      title: 'Client Movie',
      description: 'Continental Services',
    },
    {
      id: 'ap520',
      cName: 'feat',
      src: require('~/assets/img/Andre-Port-520x400.png'),
      title: 'Portfolio Magazine',
      description: 'Andre Morton',
    },
  ]
}

export async function getProjThumbs() {
  return [
    {
      id: 'sweet',
      cName: 'proj',
      src: require('~/assets/img/SoSweet_Thumb.jpg'),
      title: 'So Sweet: Case Study',
      description: 'Brand Strategy',
			clickable: false,
    },
    {
      id: 'mem',
      cName: 'proj',
      src: require('~/assets/img/memory-game.png'),
      title: 'Memory Game',
      description: 'Javascript',
			clickable: true,
    },
    {
      id: 'maps',
      cName: 'proj',
      src: require('~/assets/img/neighborhood-maps.png'),
      title: 'Neighborhood Map',
      description: 'React.JS',
			clickable: true,
    },
    {
      id: 'reads',
      cName: 'proj',
      src: require('~/assets/img/my-reads.png'),
      title: 'My Reads',
      description: 'React.JS',
			clickable: true,
    },
    {
      id: 'gm305',
      cName: 'proj',
      src: require('~/assets/img/GM-Power-305x320.png'),
      title: 'GM Powertrain',
      description: 'Greeter Board Mini',
			clickable: true,
    },
    {
      id: 'bala305',
      cName: 'proj',
      src: require('~/assets/img/Balaboosta-305x320.png'),
      title: 'Balaboosta',
      description: 'POS Flyer & Motion Graphic',
			clickable: true,
    },
    {
      id: 'ed305',
      cName: 'proj',
      src: require('~/assets/img/Ed-Dining-305x320.png'),
      title: 'Educational Dining',
      description: 'Stationery Collateral',
			clickable: true,
    },
    {
      id: 'cont305',
      cName: 'proj',
      src: require('~/assets/img/Cont-Client-305x320.png'),
      title: 'Client Movie',
      description: 'Continental | Showcase',
			clickable: true,
    },
    {
      id: 'luc305',
      cName: 'proj',
      src: require('~/assets/img/Lucca-305x320.png'),
      title: 'Lucca | Italian Street Food',
      description: 'Motion Graphic Promo',
			clickable: true,
    },
    {
      id: 'rof305',
      cName: 'proj',
      src: require('~/assets/img/Rise-of-Fall-305x320.png'),
      title: 'The Rise of Fall Pasta',
      description: 'Point of Sales Flyer',
			clickable: true,
    },
    {
      id: 'ap305',
      cName: 'proj',
      src: require('~/assets/img/Andre-Port-305x320.png'),
      title: 'Portfolio Magazine',
      description: 'Assisting Art Director',
			clickable: true,
    },
  ]
}

export async function getProjectImages() {
  return [
    {
      id: 'ap04',
      cName: 'proj',
      src: require('~/assets/img/projects/AP_04.jpg'),
      title: 'Portfolio Magazine',
      description: 'Assisting Art Director',
    },
    {
      id: 'ap05',
      cName: 'proj',
      src: require('~/assets/img/projects/AP_05.jpg'),
      title: 'Portfolio Magazine',
      description: 'Assisting Art Director',
    },
    {
      id: 'ap07',
      cName: 'proj',
      src: require('~/assets/img/projects/AP_07.jpg'),
      title: 'Portfolio Magazine',
      description: 'Assisting Art Director',
    },
    {
      id: 'ap08',
      cName: 'proj',
      src: require('~/assets/img/projects/AP_08.jpg'),
      title: 'Portfolio Magazine',
      description: 'Assisting Art Director',
    },
    {
      id: 'ap10',
      cName: 'proj',
      src: require('~/assets/img/projects/AP_10.jpg'),
      title: 'Portfolio Magazine',
      description: 'Assisting Art Director',
    },
    {
      id: 'ap11',
      cName: 'proj',
      src: require('~/assets/img/projects/AP_11.jpg'),
      title: 'Portfolio Magazine',
      description: 'Assisting Art Director',
    },
    {
      id: 'bala',
      cName: 'proj',
      src: require('~/assets/img/projects/Balaboosta.png'),
      title: 'Balaboosta',
      description: 'Point of Sales Flyer & Motion Graphic',
    },
    {
      id: 'ebroch',
      cName: 'proj',
      src: require('~/assets/img/projects/ed-dining-brochure.png'),
      title: 'Educational Dining',
      description: 'Stationery Collateral',
    },
    {
      id: 'efold',
      cName: 'proj',
      src: require('~/assets/img/projects/ed-dining-folder.png'),
      title: 'Educational Dining',
      description: 'Stationery Collateral',
    },
    {
      id: 'epos',
      cName: 'proj',
      src: require('~/assets/img/projects/ed-dining-pos.png'),
      title: 'Educational Dining',
      description: 'Stationery Collateral',
    },
    {
      id: 'greet',
      cName: 'proj',
      src: require('~/assets/img/projects/GMGreeter_1.mp4'),
      title: 'GM Powertrain',
      description: 'Greeter Board Mini',
    },
    {
      id: 'lucca',
      cName: 'proj',
      src: require('~/assets/img/projects/Lucca.mp4'),
      title: 'Lucca | Italian Street Food',
      description: 'Motion Graphic Promo',
    },
    {
      id: 'rofpos',
      cName: 'proj',
      src: require('~/assets/img/projects/rise-of-fall.png'),
      title: 'The Rise of Fall Pasta',
      description: 'Point of Sales Flyer',
    },
  ]
}

export async function getJobs() {
	return [
		{
			id: 'weco',
			src: require('~/assets/img/weco-logo-horizontal-black.png'),
			company: 'WECO Hospitality',
			jobTitle: 'Software Engineer',
			width: '200px',
		},
    {
      id: 'brooks',
      src: require('~/assets/img/brooks-logo-black.png'),
      company: 'Brooks Equipment',
      jobTitle: 'Web Developer & Graphic Designer',
			width: '125px',
    },
    {
      id: 'bradley',
      src: require('~/assets/img/bradley-logo-black.png'),
      company: 'Bradley Co.',
      jobTitle: 'Graphic Designer',
			width: '150px',
    },
    {
      id: 'continental',
      src: require('~/assets/img/continental-logo-black.png'),
      company: 'Continental Services',
      jobTitle: 'Graphic & Motion Designer',
			width: '180px',
    },
    {
      id: 'palace',
      src: require('~/assets/img/palace-logo-black.png'),
      company: 'Palace Sports & Entertainment',
      jobTitle: 'Graphic Design Intern',
			width: '100px',
    },
  ]
}

export async function getThemeIcons() {
  return [
    {
      id: 'primary',
      cName: 'theme',
      src: '~/assets/icons/ColorSelectorDefault.png',
      title: 'Default Theme',
      description: 'Theme',
    },
    {
      id: 'secondary',
      cName: 'theme',
      src: '~/assets/icons/ColorSelectorSecondary.png',
      title: 'Secondary Theme',
      description: 'Theme',
    },
    {
      id: 'dark',
      cName: 'theme',
      src: '~/assets/icons/ColorSelectorDark.png',
      title: 'Dark Theme',
      description: 'Theme',
    },
  ]
}
