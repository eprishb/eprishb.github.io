import type { FC } from 'react'

type HeroProps = {
	activePage: any;
}

const Hero: FC<HeroProps> = ({ activePage }: HeroProps) => {
  return (
    <section id="hero">
      <div>
        <div>
          <p className="main">Hi! I'm &Eacute;pris. I am a ... </p>
          <h3>
            Technical <br />
            <span>&</span> Visual
          </h3>
          <p className="second">Problem Solver</p>
          <div>
            {/* <Button
              primary
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              text="VIEW MY WORK"
              activePage={activePage}
            />
            <Button
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              text="MORE ABOUT ME"
              activePage={activePage}
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero