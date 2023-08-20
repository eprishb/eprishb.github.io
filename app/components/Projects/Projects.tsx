import { useEffect, useState, type FC } from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'
import Button from '../base/Button';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

type ProjectsProps = {
	toggleModal: ((type?: string, e?: any) => void);
}

const Projects: FC<ProjectsProps> = ({ toggleModal }) => {
	const { projThumbs } = useLoaderData()

	const [active, setActive] = useState<number>(0);
	const [transition, setTransition] = useState<number>(0)
	const length = projThumbs.length;

	const next = () => active < length - 1 && setActive(active + 1);
	const prev = () => active > 0 && setActive(active - 1);

	// Experience Deatils CSS Calculations
	useEffect(() => {
		setTransition(active * - 240);
	}, [active])

	const expDetWidth = ((length - 1) * 100) + 'vw';
	const expDetTransform = 'translateX(' + transition + 'px)';
	// End Experience Deatils CSS Calculations

	return (
		<>
			<Project $width={expDetWidth} $transform={expDetTransform}>
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
			<Arrows>
				<Button icon className='left-arrow'>
					<BsCaretLeft onClick={prev} />
				</Button>
				<Button icon className='right-arrow'>
					<BsCaretRight onClick={next} />
				</Button>
			</Arrows>
		</>
  )
}

export default Projects

const Project = styled.div<{ $width: string, $transform: string}>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
	width: ${props => props.$width};
	margin-left: calc((100vw - 20px - 240px)/2);
	transform: ${props => props.$transform};
	transition: .5s all linear;
	will-change: transform;

	@media (min-width: 768px) {
		width: 80%;
		flex-wrap: wrap;
		justify-content: center;
		align-self: center;
		margin-left: 0px;
		transform: unset;
		transition: unset;
		will-change: unset;
	}
`

const Card = styled.div`
  width: 200px;
  height: 250px;
  margin: 16px 20px;
  text-align: center;
	position: relative;
	flex: 0 0 200px;
	pointer: cursor;

  img {
    max-width: 100%;
    margin: 10px 0;
    border-radius: 4px;
  }
`

const Arrows = styled.div`
	width: 100%;
	height: fit-content;
	position: absolute;
	bottom: 140px;
	cursor: pointer;

	.left-arrow {
		left: 0;
		margin-right: 0;
		position: inherit;
		font-size: 32px;
	}

	.right-arrow {
		right: 0;
		margin-right: 0;
		position: inherit;
		font-size: 32px;
	}

	@media (min-width: 768px) {
		display: none;
	}
`
