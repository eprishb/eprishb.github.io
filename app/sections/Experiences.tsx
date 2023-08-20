import {useEffect, useState, type FC, type ReactElement} from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'
import {
	MdFace,
  MdFireplace,
	MdLocalDining,
	MdOutlineOpenInNew,
	MdSportsBasketball
} from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { useScrollIntoView } from '~/hooks/useScrollIntoView'
import Button from '~/components/base/Button'

type ExperienceProps = {
	toggleModal: ((type?: string | undefined, e?: any) => void);
}

type IconProps = {
	id: string;
	onClick: ((e?: any) => void);
	children: Element | ReactElement;
}

const stringToIcon : {[key: string]: any} = {
	MdFace: <MdFace />,
	MdFireplace: <MdFireplace />,
	MdLocalDining: <MdLocalDining />,
	MdSportsBasketball: <MdSportsBasketball />,
	TbTruckDelivery: <TbTruckDelivery />,
}

const Experience: FC<ExperienceProps> = ({ toggleModal }) => {
	const { jobs } = useLoaderData()
	const expRef = useScrollIntoView('experience')

	const [active, setActive] = useState<number>(0);
	const [transition, setTransition] = useState<number>(0)
	const length = jobs.length;

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
    <Section id="experience" ref={expRef}>
      <Container>
        <Heading>Work Experience</Heading>
				<ExperienceDetails $width={expDetWidth} $transform={expDetTransform}>
					{jobs.map((job: any, index: number) => (
            <Details
							key={index}
						>
							{stringToIcon[job.icon]}
              <Typography>{job.company}</Typography>
							<Typography className="overline">{job.jobTitle}</Typography>
							<Icon
								id={job.company}
								onClick={(e) => toggleModal('experience', e.currentTarget)}
							>
								<OpenInNewWindow />
							</Icon>
            </Details>
          ))}
				</ExperienceDetails>
				<Arrows>
					<Button icon className='left-arrow'>
						<BsCaretLeft onClick={prev} />
					</Button>
					<Button icon className='right-arrow'>
						<BsCaretRight onClick={next} />
					</Button>
				</Arrows>
      </Container>
    </Section>
  )
}

export default Experience;

const Section = styled.section`
  display: grid;
  place-items: center;
  margin-bottom: 80px;
  color: #ccdbe5;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: calc(100vw - 20px);
	margin: 0 10px;
	position: relative;
	overflow: hidden;

  @media screen and (min-width: 768px) {
		position: unset;
		overflow: unset;
  }

	@media (min-width: 1200px) {
		max-width: 1100px;
		margin: 0 150px;
	}
`
const Heading = styled.h4`
  font-size: 48px;
  font-family: 'Playfair Display', Serif;
  font-weight: normal;
  text-align: center;
  margin-bottom: 50px;
`
const ExperienceDetails = styled.div <{ $width: string, $transform: string}>`
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
const Details = styled.div`
	height: 200px;
	width: 200px;
  padding: 15px;
  margin: 20px;
  border: 1px solid #bf4953;
  border-top: 10px solid #bf4953;
  position: relative;
  overflow: hidden;
	flex: 0 0 200px;

	&:hover {
		background-color: #bf4953;
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

const Typography = styled.p`
  font-weight: normal;

  &.overline {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    top: 100px;
    color: #ccdbe5;
  }
`

const Icon = styled.div<IconProps>`
	fontSize: 18px;
	position: absolute;
	bottom: 5px;
	right: 5px;
	cursor: pointer;
`

const OpenInNewWindow = styled(MdOutlineOpenInNew)`
	color: #ccdbe5;
`
