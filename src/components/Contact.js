import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Contact() {
    return (
        <Spring
            from={{ opacity: 0, transition: 'all 2s' }}
            to={{ opacity: 1 }}
        >
            { props => (
                <div style={props}>
                    <div style={styleC}>
                        <h1>CONTACT ME</h1>

                        <p>LORMENUZEKFBFYJZEBFZYJFBZEJFBYZEJF ZEF
                            RVER
                            VERGVERGR
                            GREGERGERGFERGVERVRVER
                            VERVERVERVNREUKGREYKCZVGRGZR
                            GVTHRTNUCGREGZ
                        </p>
                    </div>
                </div>
            ) }
        </Spring>
        
    )
}

const styleC = {
    background: 'steelblue'
}