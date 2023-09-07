import type {FC} from 'react'
import styled from 'styled-components'

type ChipProps = {
	outline?: boolean;
	color: string;
	bold?: boolean;
	className?: string;
	children: string | string[] | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const BaseChip: FC<ChipProps> = ({ className, children }) => {
	return (
		<div className={className}>{children}</div>
	)
}

export default BaseChip

export const Chip = styled(BaseChip) `
	display: inline-flex;
	padding: .25rem .75rem;
	margin: 5px 5px 0px 0px;
	border-radius: 25px;
	width: fit-content;
	font-size: .75em;
	font-weight: ${(props) => props.bold ? 600 : 400};
	color: ${(props) => props.outline ? `${props.color}` : 'white'};
	background-color: ${(props) => props.outline ? 'unset' : `${props.color}`};

	border: ${(props) => props.outline ? `1.5px solid ${props.color}`: 'unset'};
	outline: none;
`