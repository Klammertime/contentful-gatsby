import { navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Seo from './seo'
import Button from './ui/button'

const FormDescription = styled.div`
  grid-column: 1/13;
  margin-bottom: 30px;
`

const StyledLabel = styled.label`
  margin: 0 0 20px 0;
  font: normal 800 12px/16px Inter, sans-serif;
  text-transform: uppercase;
  @media (max-width: 640px) {
    grid-column: 1/13;
  }
`

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  margin-top: 10px;
  padding: 11px 20px 12px;
  font: normal 400 15px/24px Inter, sans-serif;
  background-color: #f2f3f5;
  border: 1px solid #e4e8ed;
  border-radius: 6px;
  @media (max-width: 640px) {
    grid-column: 1/13;
  }
`

const StyledForm = styled.form`
  display: grid;
  grid: auto-flow auto / repeat(12, 1fr [col-start]);
  grid-area: 1 / 5 / 2 / 13;
  grid-gap: 24px 16px;
  margin: 0;
  @media (max-width: 911px) {
    grid-gap: 0;
  }
`
const NameLabel = styled(StyledLabel)`
  grid-row: 1/2;
  grid-column: 1/6;

  @media (max-width: 911px) {
    grid-column: 1/13;
  }
`

const EmailLabel = styled(StyledLabel)`
  grid-row: 1/2;
  grid-column: 6/13;
  @media (max-width: 911px) {
    grid-row: 2/3;
    grid-column: 1/13;
  }
`

const TextAreaLabel = styled(StyledLabel)`
  grid-column: 1/13;
`

const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  margin-top: 10px;
  padding: 24px 20px;
  font-size: 15px;
  line-height: 24px;
  background-color: #f2f3f5;
  border: 1px solid #e4e8ed;
  border-radius: 6px;
`

const IntroLeft = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  grid-area: span 1 / span 3 / span 1 / span 3;
  align-items: flex-start;
  margin-right: auto;
  margin-left: 0;
  text-align: left;
`

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = ({ formDescription, formHeader }) => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }
  return (
    <>
      <Seo title="contact" />
      <IntroLeft>
        <FormDescription>{formDescription}</FormDescription>
      </IntroLeft>
      <StyledForm
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <EmailLabel>
          Email
          <br />
          <StyledInput
            type="email"
            name="email"
            placeholder="Contact Email"
            onChange={handleChange}
          />
        </EmailLabel>
        <NameLabel>
          Name
          <br />
          <StyledInput
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
          />
        </NameLabel>
        <TextAreaLabel>
          Message
          <br />
          <Textarea
            name="message"
            rows="5"
            placeholder="How can I help you?"
            onChange={handleChange}
          />
          <Button type="submit">Submit Message</Button>
        </TextAreaLabel>
      </StyledForm>
    </>
  )
}

export default ContactForm
