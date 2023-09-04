import React from 'react';
import type { FC } from 'react'
import { useLoaderData } from '@remix-run/react'
import styled from 'styled-components'

type ExpDetailsProps = {
}

type JobProps = {
	id?: string;
	date: string;
	desc: string;
}

type DescProps = {
	desc: string;
}

const ExperienceDetails: FC<ExpDetailsProps> = () => {
	const { expDescs } = useLoaderData()
	
  return (
    <>
      {expDescs.map((job: JobProps) => (
        <Description key={job.id} desc={job.desc} />
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

const StyledDescription = styled.div`
	ul {
		margin-right: 15px;
	}

  li {
    margin-bottom: 10px;
  }

	&::-webkit-scrollbar-track {
		border-radius: 10px;
		background-color: rgb(44, 53, 81);
	}

	&::-webkit-scrollbar {
		display: block;
		width: 5px;
		background-color: unset;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: rgb(60, 71, 99);
	}
`
