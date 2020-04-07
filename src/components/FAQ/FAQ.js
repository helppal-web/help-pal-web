import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/Add';
import ShrinkIcon from '@material-ui/icons/Remove';
import './FAQ.scss'

export default function FAQ({ FAQs }) {
    const [expanded, setExpanded] = React.useState(0);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="faqs-container">
            {FAQs && FAQs.map((faq, index) =>
                <ExpansionPanel key={index} expanded={expanded === index} onChange={handleChange(index)}>
                    <ExpansionPanelSummary
                        className="summary-container"
                        expandIcon={
                            expanded === index ?
                                <ShrinkIcon /> :
                                <ExpandMoreIcon />
                        }
                    >
                        <Typography className='heading'>{faq.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {faq.text}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )}
        </div>
    )
}