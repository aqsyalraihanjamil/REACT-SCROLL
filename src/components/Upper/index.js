import React, {useState} from 'react'
import {UpperContainer, UpperBg, VideoBg, UpperContent, UpperP, 
UpperH1, UpperBtnWrapper, ArrowForward, ArrowRight} from './UpperElements'
import Video from '../../Videos/video.mp4'
import {Button} from '../ButtonElements'

const Upper = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <UpperContainer id="home">
            <UpperBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </UpperBg>
            <UpperContent>
                <UpperH1>Minuman Kolagen Premium Terbaik</UpperH1>
                <UpperP>Klik tombol dibawah ini jika ingin menanyakan tentang produk
                     lebih lanjut</UpperP>
                <UpperBtnWrapper>
                    <Button to="/contact" onMouseEnter={onHover} onMouseLeave={onHover} 
                    primary='true'
                    dark='true'
                    >Hubungi Kami 
                    {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </UpperBtnWrapper>
            </UpperContent>
        </UpperContainer>
    )
}

export default Upper
