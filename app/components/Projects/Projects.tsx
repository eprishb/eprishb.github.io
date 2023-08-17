import type { FC } from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'

type ProjectsProps = {
	toggleModal: ((type?: string, e?: any) => void);
}

const Projects: FC<ProjectsProps> = ({ toggleModal }) => {
	const { projThumbs } = useLoaderData()

  return (
    <Project>
      {projThumbs.map((image: any, index: number) => (
        <Card
          key={index}
					id={image.id}
					onClick={(e) => toggleModal('portfolio', e.currentTarget)}
        >
          <img src={image.src} alt={image.id} />
          {image.title}
          <br />
          {image.description}
        </Card>
      ))}
    </Project>
  )
}

export default Projects

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  width: 200px;
  height: 250px;
  margin: 16px 20px;
  text-align: center;

  img {
    max-width: 100%;
    margin: 10px 0;
    border-radius: 4px;
  }
`
