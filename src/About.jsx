import React from 'react'
import about from './images/112.jpg'

import Common from './Common'
 function About() {
    return (
        <div>
                <Common name='welcome to About page' visit='/contact' btname='contact now' imgsrc={about} />
        </div>
    )
}


export default About