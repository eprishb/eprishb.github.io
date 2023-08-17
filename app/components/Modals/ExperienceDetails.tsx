import React from 'react';
import type { FC } from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'

type ExpDetailsProps = {
	content: {
		id: string;
	}
}

type JobProps = {
	id?: string;
	src: string;
	date: string;
	desc: string;
	company: string;
	match: boolean;
}

type DescProps = {
	desc: string;
}

const ExperienceDetails: FC<ExpDetailsProps> = ({ content }) => {
	const { expDescs } = useLoaderData()
	
  return (
    <>
      {expDescs.map((job: JobProps) => (
        <Job
          key={job.id}
          src={job.src}
          date={job.date}
          desc={job.desc}
          company={job.company}
          match={job.company === content.id}
        />
      ))}
    </>
  )
}

export default ExperienceDetails

function Description({ desc }: DescProps) {
	return (
		<StyledDescription dangerouslySetInnerHTML={{__html: desc }} />
	)
}

function Job({ src, date, desc, company, match }: JobProps) {
	return (
    <>
      {match && (
        <Detail>
          <img src={src} alt={company} />
          <Date>{date}</Date>
					<Description desc={desc} />
        </Detail>
      )}
    </>
  )
}

const Detail = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 300px;
    width: 80%;
  }
`
const Date = styled.p`
  margin-bottom: 50px;
`
const StyledDescription = styled.div`
  max-width: 600px;
  width: 80%;

  li {
    margin-bottom: 10px;
  }
`
