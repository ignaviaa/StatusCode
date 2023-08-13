import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = () => {
  return (
    <>
    <div className=' font-Poppins text-black '>
<h1 className=' justify-center text-center text-4xl pb-[10vh] text-gray-800'>Our Approach<hr className='w-[50%] justify-center items-center m-auto mt-10 h-[6px] border border-amber-950 rounded bg-amber-950'/></h1>
    </div>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(90,174,88)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   rgb(92, 201, 77)' }}
    lineColor={'red'}
    iconStyle={{ background: 'rgb(90,174,88)', color: '#fff' }}
    
   
  >
    <h3 className="vertical-timeline-element-title font-semibold text-lg">Tokenizing Carbon Credits</h3>
    <p> 
    The project involves tokenizing carbon credits using blockchain technology. Each token represents a specific amount of carbon emissions reduced or offset. This creates a digital asset that can be bought, sold, and traded on a decentralized platform.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(90,174,88)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   rgb(92, 201, 77)' }}
    lineColor="#743600"
    iconStyle={{ background: 'rgb(90,174,88)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title font-semibold text-lg">NGO Involvement</h3>
    <p>
    NGOs play a crucial role in this project by identifying and implementing carbon reduction initiatives. They can partner with businesses, communities, and governments to develop projects such as reforestation, renewable energy installations, and others.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(90,174,88)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   rgb(92, 201, 77)' }}
    iconStyle={{ background: 'rgb(90,174,88)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title font-semibold text-lg">Funding Mechanism</h3>
    <p>
    Investors and individuals interested in supporting environmental initiatives can purchase these carbon tokens. The funds generated from token sales are then directed towards the NGOs' projects. This provides a direct financial incentive for NGOs to engage in carbon reduction activities.
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(90,174,88)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   rgb(92, 201, 77)' }}
    iconStyle={{ background: 'rgb(90,174,88)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title font-semibold text-lg">Global Participation</h3>
    
    <p>
    The decentralized nature of the blockchain allows for global participation. Anyone, anywhere can purchase carbon tokens, making it easier for individuals and businesses around the world to contribute to carbon reduction efforts.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(90,174,88)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   rgb(92, 201, 77)' }}
    iconStyle={{ background: 'rgb(90,174,88)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title font-semibold text-lg">Balancing Earth's Environment</h3>
    <p>
    By supporting a wide range of carbon reduction initiatives, the project helps balance the Earth's environment by mitigating climate change, conserving ecosystems, and reducing overall carbon emissions.
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
</>

  )
}

export default Timeline;