import type { FC } from 'react'

type PortfolioProps = {
	toggleModal: any;
}

const Portfolio: FC<PortfolioProps> = ({ toggleModal }: PortfolioProps) => {
  return (
    <section id="portfolio">
      <div>
        <h1>Portfolio</h1>
        {/* <Projects toggleModal={toggleModal} /> */}
      </div>
    </section>
  )
}

export default Portfolio