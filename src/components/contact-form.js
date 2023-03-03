import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import Seo from './seo'

const FormHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`

const FormDescription = styled.div`
  grid-column: 1/13;
  margin-bottom: 30px;
`

const StyledLabel = styled.label`
  margin: 0 0 20px 0;
  text-transform: uppercase;
  font: normal 800 12px/16px Inter, sans-serif;
  @media (max-width: 640px) {
    grid-column: 1/13;
  }
`

const StyledInput = styled.input`
  margin-top: 10px;
  width: 100%;
  padding: 11px 20px 12px;
  border-radius: 6px;
  background-color: #f2f3f5;
  border: 1px solid #e4e8ed;
  height: 48px;
  font: normal 400 15px/24px Inter, sans-serif;
  @media (max-width: 640px) {
    grid-column: 1/13;
  }
`

const StyledForm = styled.form`
  display: grid;
  grid-gap: 24px 16px;
  grid: auto-flow auto / repeat(12, 1fr [col-start]);
  grid-area: 1 / 5 / 2 / 13;
  margin: 0;
  @media (max-width: 911px) {
    grid-gap: 0;
  }
`
const NameLabel = styled(StyledLabel)`
  grid-column: 1/6;
  grid-row: 1/2;

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
  margin-top: 10px;
  border-radius: 6px;
  background-color: #f2f3f5;
  font-size: 15px;
  line-height: 24px;
  border: 1px solid #e4e8ed;
  min-height: 200px;
  padding: 24px 20px;
`

const SubmitButton = styled.button`
  border-style: none;
  color: #fff;
  cursor: pointer;
  width: 200px;
  justify-self: start;
  display: flex;
  height: 48px;
  padding: 13px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: var(--swatch_fcde4a6f);
  transition-property: color, background-color, border-color;
  transition-duration: 400ms, 400ms, 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94),
    cubic-bezier(0.25, 0.46, 0.45, 0.94), cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
`

const IntroLeft = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  margin-right: auto;
  margin-left: 0;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  grid-area: span 1 / span 3 / span 1 / span 3;
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
        <FormHeader>{formHeader}</FormHeader>
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
        </TextAreaLabel>
        <SubmitButton type="submit">Send</SubmitButton>
      </StyledForm>
    </>
  )
}

export default ContactForm
