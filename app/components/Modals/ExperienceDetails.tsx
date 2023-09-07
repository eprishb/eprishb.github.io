import type { FC } from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'
import { Chip } from '~/components/base/Chip'

type ExpDetailsProps = {
}

type JobProps = {
	id?: string;
	src: string;
	company: string;
	date: string;
	jobTitle: string;
	imgWidth: string;
	desc: string;
	skills: Array<string>;
}

const ExperienceDetails: FC<ExpDetailsProps> = () => {
	const { expDescs } = useLoaderData()
	
  return (
    <>
			{expDescs.map((job: JobProps) => (
				<JobInfo key={job.id}>
					<Heading>
						<Company>
							<Img src={job.src} alt={job.company + 'logo'} $width={job.imgWidth} />
							{job.jobTitle}
						</Company>
						<Date>{job.date}</Date>
					</Heading>
					<Description>{job.desc}</Description>
					<Skills>
						{job.skills.map((skill: string, index: number) => (
							<Chip key={index} outline bold color='#202945'>{skill}</Chip>
						))}
					</Skills>
				</JobInfo>
      ))}
    </>
  )
}

export default ExperienceDetails

const JobInfo = styled.div`
	margin-bottom: 45px;
`

const Heading = styled.div`
	display: flex;
	align-items: end;
	justify-content: space-between;
`

const Company = styled.div``

const Img = styled.img<{ $width: string }>`
	display: block;
	width: ${ props => props.$width };
`

const Date = styled.div``

const Description = styled.div``

const Skills = styled.div``