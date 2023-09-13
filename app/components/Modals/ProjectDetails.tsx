import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { MdOutlineOpenInNew } from 'react-icons/md'

type ProjDetailsProps = {
	proj: {
		id: string;
		src: any;
		date: string;
		desc: any;
		skills?: Array<string>;
		type: string;
		title: string;
		client: string;
		clickable: boolean;
	};
}

type MediaProps = { src: string | object; type: string; }
type TitleProps = { title: string; }

const ProjectDetails: FC<ProjDetailsProps> = ({ proj }) => {
  return (
		<>
			<Detail>
				<Title title={proj.title} />
				<p>{proj.client}</p>
				<p>{proj.date}</p>
				<p>{proj.desc}</p>
			</Detail>
			<Media type={proj.type} src={proj.src} />
		</>
  )
}

export default ProjectDetails

function Media({ type, src }: MediaProps) {
	if (type === 'video' && typeof src === 'object') return (<ReactPlayer {...src} />)
	if (type === 'code' || type === 'design') return (<img src={src} alt='' />)
	if (type === 'multiDesign') return (
		<StyledMedia dangerouslySetInnerHTML={{__html: src }} />
	)
}

const Icon = () => (
	<MdOutlineOpenInNew /> 
)

function Title({ title }: TitleProps) {
	const variable: any = { '%variable%': Icon }
	const [content, setContent] = useState("")

	useEffect(() => {
		setContent(`${title}`)
	}, [title])

	const renderContent = () => {
		let res = content;
		for (let dynVar in variable) {
			const compAsHtml = renderToStaticMarkup(
				variable[dynVar]()
			);
			res = res.replace(dynVar, compAsHtml)
		}

		return res
	}

	return (
		<StyledTitle dangerouslySetInnerHTML={{__html: renderContent() }} />
	)
}

const StyledMedia = styled.div`
  display: grid;
  place-items: center;

  img {
    max-width: 450px;
    width: 80%;
    object-fit: contain;
  }

  .multiple {
    justify-items: center;
    text-align: center;
  }

  .multiple a {
    display: inline-flex;
    margin: 0 5px;
    color: #ccdbe5;
    text-decoration: none;
  }

  .slides img {
    height: 210px;
    width: auto;
  }

  .slides {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 0px;
    overflow: hidden;
    width: 250px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 480px) {
    .slides {
      width: 360px;
    }

    .slides img {
      height: 300px;
    }

    .w275 {
      height: 280px !important;
      width: 275px !important;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 620px) {
    .w275 {
      width: 360px !important;
    }
  }

  @media screen and (min-width: 620px) {
    .slides#w260 {
      width: 260px;
    }
  }
`
const Detail = styled.div`
	width: 50%;
	margin-right: 15px;
`

const StyledTitle = styled.div`
	font-size: 1.5em;
	font-weight: 600;
	text-transform: uppercase;

  a {
    color: #ccdbe5;
    vertical-align: text-top;
  }

  a svg {
    font-size: 1.125em;
  }
`