import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,
ServicesH2, ServicesP} from './ServiceElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'


const Services = () => {
    return (
        <ServicesContainer>
              <ServicesH1>Our Achievement</ServicesH1>
              <ServicesWrapper>
                  <ServicesCard>
                      <ServicesIcon src={Icon1} />
                        <ServicesH2>Iki H2222222222</ServicesH2>
                      <ServicesP>Iki Pasd asdn wnao andsoaasd fgna </ServicesP>
                  </ServicesCard>
                  <ServicesCard>
                      <ServicesIcon src={Icon2} />
                        <ServicesH2>Iki H222222</ServicesH2>
                      <ServicesP>Iki Pppppppppppppppp and aasda</ServicesP>
                  </ServicesCard>
                  <ServicesCard>
                      <ServicesIcon src={Icon3} />
                        <ServicesH2>Iki H2</ServicesH2>
                      <ServicesP>Iasdgfnasd asdknlnf alnsadlasdm </ServicesP>
                  </ServicesCard>
              </ServicesWrapper>
        </ServicesContainer>
    )
}
    
export default Services