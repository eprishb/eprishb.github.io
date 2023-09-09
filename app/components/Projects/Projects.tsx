import { type FC } from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'

type ProjectsProps = {
	toggleModal: ((type?: string, e?: any) => void);
}

const Projects: FC<ProjectsProps> = ({ toggleModal }) => {
	const { projThumbs } = useLoaderData()

	return (
		<>
			<Project>
				{projThumbs.map((image: any, index: number) => (
					<Card
						key={index}
						id={image.id}
						onClick={(e) => image.clickable && toggleModal('portfolio', e.currentTarget)}
					>
						<img src={image.src} alt={image.id} />
						{image.title}
						<br />
						{image.description}
					</Card>
				))}
			</Project>
		</>
  )
}

export default Projects

const Project = styled.div`
  display: flex;
  flex-direction: column;
	justify-content: center;
`

const Card = styled.div`
	padding: 30px;
	margin-bottom: 50px;
	border-radius: 30px;
	background-color: #202945;
	color: white;

  img {
    width: calc(100% - 60px);
		height: auto;
    border-radius: 4px;
  }
`