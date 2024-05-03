import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Journey = () => {
  return (
    <>
    <div id="education" className="w-full py-20">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
    <p className="text-xl tracking-widest uppercase text-[#1E90FF]" >
					Education
				</p>
        <h2 className="py-4">What&apos;s My Qualification</h2>
        </div>
  
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2023 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon=""
      >
        <h3 className="vertical-timeline-element-title">MCA</h3>
        <h4 className="vertical-timeline-element-subtitle">Christ University</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon=""
      >
        <h3 className="vertical-timeline-element-title">BCA</h3>
        <h4 className="vertical-timeline-element-subtitle">Kristu Jayanti College</h4>
        {/* <p className="vertical-timeline-element-subtitle">Score: 75%</p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018 - 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon=""
      >
        <h3 className="vertical-timeline-element-title">12th</h3>
        <h4 className="vertical-timeline-element-subtitle">CMR National Pu College</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </>
  );
}

export default Journey;
