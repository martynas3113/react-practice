import React, {useState} from 'react';
import Video from '../../videos/Video.mp4';
import { HeroContainer,HeroBack,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements';

const Hero = () => {

    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        
        <HeroContainer id="home">
            <HeroBack>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />    
            </HeroBack>
            <HeroContent>
                <HeroH1>Virtual Data</HeroH1>
                <HeroP>Sign Up for a new account today!</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>   
    
    )
}

export default Hero
