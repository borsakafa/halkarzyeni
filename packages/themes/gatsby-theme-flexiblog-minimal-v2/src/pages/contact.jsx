import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'

export default props => (
  <Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
          <PageTitle
              header="Bize Ulaşın"
              subheader='Halka Arzlar hakkında tüm bilgileri zamanında size ulaştırmak için tüm gayretimizle çalışıyoruz. Öneri, istek ve şikayetleriniz için bize ulaşabilirsiniz.'
          />
        <Divider />
        <ContactForm />
      </Main>
    </Stack>
  </Layout>
)

