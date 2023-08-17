import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { MdOutlineOpenInNew } from 'react-icons/md'

type ProjDetailsProps = {
	content: {
		id: string;
	}
}

type ProjectProps = {
	id?: string;
	src: string;
	date: string;
	desc: string;
	service: string;
	match: boolean;
}

type MediaProps = { src: string | object; }
type DateProps = { date: string; }

const ProjectDetails: FC<ProjDetailsProps> = ({ content }) => {
	const { projDescs } = useLoaderData()

  return (
    <>
      {projDescs.map((proj: ProjectProps) => (
        <Project
          key={proj.id}
          src={proj.src}
					date={proj.date}
          desc={proj.desc}
          service={proj.service}
          match={proj.id === content.id}
        />
      ))}
    </>
  )
}

export default ProjectDetails

function Media({ src }: MediaProps) {
	if (typeof src === 'object') return (<ReactPlayer {...src} />)
	
	return (
		<StyledMedia dangerouslySetInnerHTML={{__html: src }} />
	)
}

const Icon = () => (
	<MdOutlineOpenInNew /> 
)

function Date({ date }: DateProps) {
	const variable: any = { '%variable%': Icon }
	const [content, setContent] = useState("")

	useEffect(() => {
		setContent(`${date}`)
	}, [date])

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
		<StyledDate dangerouslySetInnerHTML={{__html: renderContent() }} />
	)
}

function Project({ src, date, desc, service, match }: ProjectProps) {
  return (
    <>
      {match && (
        <DetailWrapper>
					<Media src={src} />
          <Detail>
            <Service>{service}</Service>
						<Date date={date} />
            <Description>{desc}</Description>
          </Detail>
        </DetailWrapper>
      )}
    </>
  )
}

const DetailWrapper = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  align-items: center;
`
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
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`
const Service = styled.h4``
const StyledDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 30px 0;

  a {
    color: #ccdbe5;
    vertical-align: middle;
  }

  a svg {
    font-size: 15px;
  }
`
const Description = styled.p``
