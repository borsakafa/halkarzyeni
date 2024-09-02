import React from 'react'
import { Card, Text, IconButton } from 'theme-ui'
import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa'
import Section from '@components/Section'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'

const ContactInfo = () => {
    const { phone, address, email } = useSiteMetadata()

    return (
        <Section aside title='Reklam İçin'>
            <Card variant='paper'>
                <Text variant='p'>Websitemizde şirketinizin, işletmenizin reklamını yayınlayabilirsiniz.</Text>
                <Text variant='p'>
                    Websitemizde reklam yayınlamak için lütfen bize ulaşın.
                </Text>
                {phone && (
                    <Text>
                        <IconButton variant='simple' role='presentation'>
                            <FaPhone />
                        </IconButton>
                        {phone}
                    </Text>
                )}
                {email && (
                    <Text>
                        <IconButton variant='simple' role='presentation'>
                            <FaEnvelope />
                        </IconButton>
                        {email}
                    </Text>
                )}
                {address && (
                    <Text>
                        <IconButton variant='simple' role='presentation'>
                            <FaLocationArrow />
                        </IconButton>
                        {address}
                    </Text>
                )}
            </Card>
        </Section>
    )
}

export default ContactInfo
