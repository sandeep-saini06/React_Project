import React from 'react'
import { Icon, StyleProvider } from '@repay/saguaro-web';

const VerticalTimeline = ({ steps, activeSteps }) => {

    return (
        <StyleProvider>
            <div className='tl-container'>
                <ul className="tl">
                    {
                        steps.map((step, key) =>
                            <React.Fragment key={key}>
                                <li className="tl-item">
                                    <Icon className={(key <= activeSteps - 1 ? "completed" : "")} style={{ fontSize: '32px' }} icon={step.icon}></Icon>
                                    <div className="item-title">{step.label}</div>
                                </li>
                                {step?.steps && (Math.floor(activeSteps - 1) === key) && step.steps.map((data, key) =>
                                    <React.Fragment key={key}>
                                        <li className="tl-item small">
                                            <Icon className={'small-icon  ' + (key + 1 <= activeSteps.toString().substring(activeSteps.toString().indexOf(".") + 1, activeSteps.length) ? "completed" : "")} style={{ fontSize: '20px' }} icon={step.icon}></Icon>
                                            <div className="item-title">{data.label}</div>
                                        </li>
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        )
                    }
                </ul>

            </div>
        </StyleProvider>
    )
}

export default VerticalTimeline