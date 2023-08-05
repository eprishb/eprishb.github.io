import type { FC } from 'react'

type ExperienceProps = {
	toggleModal: any;
}


const Experience: FC<ExperienceProps> = ({ toggleModal }: ExperienceProps) => {
  return (
    <section id="experience">
      <div>
        <h1>Work Experience</h1>
      </div>
    </section>
  )
}

export default Experience