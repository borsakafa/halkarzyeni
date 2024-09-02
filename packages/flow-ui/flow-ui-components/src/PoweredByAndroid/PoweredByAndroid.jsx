import React from 'react'
import { Link } from 'theme-ui'
import SVG from 'react-inlinesvg'
import googleSVG from '../../assets/googleplay.svg'

const styles = {
    link: {
        display: `inline-flex`,
        color: `heading`,
        fontWeight: `medium`,
        ':visited': {
            color: `heading`
        },
        svg: {
            fill: `omegaDarker`,
            height: 400,
        }
    }
}

const PoweredByAndroid = () => (
    <Link
        variant='mute'
        target='_blank'
        title='googleplay'
        href='https://play.google.com/store/apps/details?id=com.halkaarzhaber.hisseler&hl=en&gl=TR'
        rel='noopener'
        sx={styles.link}
    >

        {googleSVG && <SVG src={googleSVG} />}
    </Link>
)

export default PoweredByAndroid