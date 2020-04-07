import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/Add';
import './FAQ.scss'

export default function FAQ({ FAQs }) {

    return (
        <div className="faqs-container">
            {FAQs && FAQs.map((faq, index) =>
                <ExpansionPanel key={index}>
                    <ExpansionPanelSummary
                        className="summary-container"
                        expandIcon={<ExpandMoreIcon />}
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