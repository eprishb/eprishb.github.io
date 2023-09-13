import { type FC } from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'
import ProjectDetails from '../Modals/ProjectDetails';

type ProjectsProps = {
	toggleModal: ((type?: string, e?: any) => void);
}

const Projects: FC<ProjectsProps> = ({ toggleModal }) => {
	const { projDescs } = useLoaderData()

	return (
		<>
			<Project>
				{projDescs.map((proj: any, index: number) => (
					<Card
						key={index}
						id={proj.id}
						onClick={(e) => proj.clickable && toggleModal('portfolio', e.currentTarget)}
					>
						<ProjectDetails proj={proj} />
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
	display: flex;
	padding: 30px;
	margin-bottom: 50px;
	border-radius: 30px;
	background-color: #202945;
	color: white;

  img {
    width: 50%;
		height: auto;
    border-radius: 4px;
  }
`