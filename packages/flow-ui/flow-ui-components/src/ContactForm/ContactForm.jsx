import React from 'react'
import PropTypes from 'prop-types'
import { Box, Label, Input, Textarea, Button, Message, Spinner } from 'theme-ui'

/**
 * How to enable form integration:
 *
 * 1) Shadow this component
 * 2) Remove the demo attribute from the form tag.
 * 3) Add your action end-point to the form tag.
 * 4) If required by your form API provider, add the hidden input(s).
 *
 * Some recommended serverless form providers:
 * Getform (https://www.gatsbyjs.com/docs/building-a-contact-form/#getform)
 * Formspree (https://www.gatsbyjs.com/docs/building-a-contact-form/#formspree)
 * Netlify Form (https://www.gatsbyjs.com/docs/building-a-contact-form/#netlify)
 *
 */

const ContactForm = ({ handleSubmit, submitting, success }) => (
    <form
        onSubmit={handleSubmit}
        method='POST'
        action="/"
        data-netlify="true"
    >
      {success === true && (
          <Message variant='success'>
            Thank you for contacting us. We'll get back to you soon!
          </Message>
      )}
      {success === false && (
          <Message variant='error'>
            Something went wrong. Please try again later!
          </Message>
      )}
      <Box variant='forms.row'>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-name'>İsim</Label>
          <Input type='text' id='contact-form-name' name='name' required />
        </Box>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-company'>Şirket</Label>
          <Input type='text' id='contact-form-company' name='company' />
        </Box>
      </Box>
      <Box variant='forms.row'>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-email'>Email</Label>
          <Input
              type='email'
              placeholder='email@ornek.com'
              id='contact-form-email'
              name='email'
              required
          />
        </Box>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-phone'>Telefon</Label>
          <Input
              type='tel'
              placeholder='(5xx) xxx-xxxx'
              id='contact-form-phone'
              name='phone'
          />
        </Box>
      </Box>
      <Box variant='forms.row'>
        <Label htmlFor='contact-form-subject'>Konu</Label>
        <Input type='text' id='contact-form-subject' name='subject' required />
      </Box>
      <Box variant='forms.row'>
        <Label htmlFor='contact-form-message'>Mesajınız</Label>
        <Textarea name='message' id='contact-form-message' />
      </Box>
      <Button
          variant={success || submitting ? 'disabled' : 'primary'}
          disabled={success || submitting}
          type='submit'
          required
      >
        Gönder {submitting && <Spinner size='20' />}
      </Button>
    </form>
)

export default ContactForm

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
