import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = props => (
    <Section aside title='' {...props}>
        <Card variant='paper'>
            <Text variant='p'>
                Kullanıcılarımıza olan bağlılığımızı ciddiye alıyoruz. Yardımımıza ihtiyacınız varsa, siteyi nasıl kullanacağınızla ilgili sorularınız varsa veya herhangi bir teknik sorun yaşıyorsanız, lütfen bizimle iletişime geçmekten çekinmeyin.
            </Text>
        </Card>
    </Section>
)

export default Commitment
