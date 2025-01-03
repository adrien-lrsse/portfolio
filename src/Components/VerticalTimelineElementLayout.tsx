import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './TimeLineElement.css'

interface VerticalTimelineElementLayoutProps {
    title: string;
    date: string;
    icon: React.ReactNode;
    subtitle: string;
    content: string;
    detail: React.ReactNode;
}

function VerticalTimelineElementLayout({ title, date, icon, subtitle, content, detail }: VerticalTimelineElementLayoutProps) {
    
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("Show Details")

    const handleShow = () => {
        if (show) {
            setShow(false)
            setButtonText("Show Details")
        }
        else {
            setShow(true)
            setButtonText("Mask Details")
        }
    }
    
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', borderTop: '3px solid #4464AD'}}
            date={date}
            iconStyle={{ background: '#4464AD', color: '#fff' }}
            icon={icon}
            contentArrowStyle={{ borderRight: '7px solid  #4464AD', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            <div>
            <p>
            {content}
            </p>
            {show ? (
                detail
            ) : null}
            <Button className='view-detail-button' onClick={handleShow}>{buttonText}</Button>

            </div>


            
                    
        </VerticalTimelineElement>
    );
}

export default VerticalTimelineElementLayout;