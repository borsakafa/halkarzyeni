import React from 'react'
import { Link } from 'theme-ui'
import SVG from 'react-inlinesvg'
import appstoreSVG from '../../assets/AppStore.svg'

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

const PoweredByiOS = () => (
    <Link
        variant='mute'
        target='_blank'
        title='appstore'
        href='https://apps.apple.com/app/halka-arz-haber/id1618120293'
        rel='noopener'
        sx={styles.link}
    >

        {appstoreSVG && <SVG src={appstoreSVG} />}
    </Link>
)

export default PoweredByiOS