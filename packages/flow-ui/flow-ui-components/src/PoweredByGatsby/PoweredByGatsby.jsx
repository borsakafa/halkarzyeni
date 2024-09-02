import React from 'react'
import { Link } from 'theme-ui'
import SVG from 'react-inlinesvg'
import gatsbySVG from '../../assets/Gatsby-Logo.svg'

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
      height: 24,
      ml: 2
    }
  }
}

const PoweredByGatsby = () => (
    <Link
        variant='mute'
        target='_blank'
        title='felixart'
        href='https://www.felixart.com.tr'
        rel='noopener'
        sx={styles.link}
    >
      Developed with ♥ By
      {gatsbySVG && <SVG src={gatsbySVG} />}
    </Link>
)

export default PoweredByGatsby