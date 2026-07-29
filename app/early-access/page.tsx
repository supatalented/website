'use client'

import { FormEvent, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

const memberTypes = [
  'Athlete',
  'Registered Sports Coach',
  'Sports Academy',
  'Sports Club',
  'Sports Organisation',
  'Sporting Body',
  'Sports Content Creator',
  'Podcaster',
  'Business / Subscriber',
  'Spectator / General Public',
]

const countries = [
  'Australia',
  'New Zealand',
  'Cook Islands',
  'United States',
  'Canada',
  'United Kingdom',
  'South Africa',
  'India',
  'Japan',
  'Argentina',
  'Brazil',
  'France',
  'Ireland',
  'Portugal',
  'Spain',
  'Other',
]

const entityLabels: Record<string, string> = {
  'Sports Academy': 'Sports academy name',
  'Sports Club': 'Sports club name',
  'Sports Organisation': 'Sports organisation name',
  'Sporting Body': 'Sporting body name',
  'Business / Subscriber': 'Business name',
}

type FormData = {
  email: string
  confirmEmail: string
  firstName: string
  lastName: string
  memberType: string
  age: string
  gender: string
  entityName: string
  country: string
  otherCountry: string
  state: string
  suburb: string
  consent: boolean
}

const initialFormData: FormData = {
  email: '',
  confirmEmail: '',
  firstName: '',
  lastName: '',
  memberType: '',
  age: '',
  gender: '',
  entityName: '',
  country: '',
  otherCountry: '',
  state: '',
  suburb: '',
  consent: false,
}

export default function EarlyAccessPage() {
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<
    'success' | 'error' | ''
  >('')

  const ages = useMemo(
    () => [
      ...Array.from({ length: 47 }, (_, index) => String(index + 13)),
      '60+',
    ],
    [],
  )

  const requiresEntityName = Boolean(
    entityLabels[formData.memberType],
  )

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))

    if (message) {
      setMessage('')
      setMessageType('')
    }
  }

  const showError = (text: string) => {
    setMessage(text)
    setMessageType('error')
  }

  const validateForm = () => {
    const email = formData.email.trim().toLowerCase()
    const confirmEmail = formData.confirmEmail.trim().toLowerCase()

    if (!email) {
      showError('Please enter your email address.')
      return false
    }

    if (!email.includes('@') || !email.includes('.')) {
      showError('Please enter a valid email address.')
      return false
    }

    if (!confirmEmail) {
      showError('Please confirm your email address.')
      return false
    }

    if (email !== confirmEmail) {
      showError('The two email addresses do not match.')
      return false
    }

    if (!formData.firstName.trim()) {
      showError('Please enter your first name.')
      return false
    }

    if (!formData.lastName.trim()) {
      showError('Please enter your last name.')
      return false
    }

    if (!formData.memberType) {
      showError('Please select your member type.')
      return false
    }

    if (
      formData.memberType === 'Athlete' &&
      (!formData.age || !formData.gender)
    ) {
      showError('Please select your age and gender.')
      return false
    }

    if (
      requiresEntityName &&
      !formData.entityName.trim()
    ) {
      showError(
        `Please enter your ${entityLabels[
          formData.memberType
        ].toLowerCase()}.`,
      )
      return false
    }

    if (!formData.country) {
      showError('Please select your country.')
      return false
    }

    if (
      formData.country === 'Other' &&
      !formData.otherCountry.trim()
    ) {
      showError('Please enter your country.')
      return false
    }

    if (!formData.state.trim()) {
      showError('Please enter your state or region.')
      return false
    }

    if (!formData.suburb.trim()) {
      showError('Please enter your suburb or city.')
      return false
    }

    if (!formData.consent) {
      showError('Please confirm the waitlist declaration.')
      return false
    }

    return true
  }

  const submitForm = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    if (!validateForm()) return

    setSubmitting(true)
    setMessage('')
    setMessageType('')

    const waitlistEndpoint =
      process.env.NEXT_PUBLIC_WAITLIST_FORM_URL

    if (!waitlistEndpoint) {
      setSubmitting(false)
      showError(
        'The waitlist collection destination has not been connected yet.',
      )
      return
    }

    const submission = {
      email: formData.email.trim().toLowerCase(),
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      memberType: formData.memberType,
      age:
        formData.memberType === 'Athlete'
          ? formData.age
          : '',
      gender:
        formData.memberType === 'Athlete'
          ? formData.gender
          : '',
      entityName: requiresEntityName
        ? formData.entityName.trim()
        : '',
      country:
        formData.country === 'Other'
          ? formData.otherCountry.trim()
          : formData.country,
      state: formData.state.trim(),
      suburb: formData.suburb.trim(),
      registeredAt: new Date().toISOString(),
    }

    try {
      const response = await fetch(waitlistEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(true)
      setFormData(initialFormData)
      setMessage(
        'FORM SUBMITTED SUCCESSFULLY! Returning you to the SUPATALENTED landing page.',
      )
      setMessageType('success')

      setTimeout(() => {
        router.push('/')
      }, 3000)
    } catch {
      showError(
        'Your registration could not be submitted. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="form-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: #111827;
          font-family: Arial, Helvetica, sans-serif;
        }

        button,
        input,
        select {
          font: inherit;
        }

        .form-page {
          min-height: 100svh;
          padding: 24px 16px 50px;
          background: #ffffff;
        }

        .form-sheet {
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          padding: 26px 18px 30px;
          border: 1px solid #dbe2ef;
          background: #ffffff;
          box-shadow: 0 16px 45px rgba(15, 23, 42, 0.1);
        }

        .wordmark {
          margin: 0;
          color: #898f90;
          font-family:
            Arial Black,
            Arial,
            Helvetica,
            sans-serif;
          font-size: clamp(35px, 10vw, 54px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.055em;
          text-align: center;
          white-space: nowrap;
          -webkit-text-stroke: 0.35px currentColor;
        }

        .wordmark .blue {
          color: #0e15db;
        }

        .form-heading {
          margin: 24px 0 7px;
          color: #111827;
          font-family:
            Arial Black,
            Arial,
            Helvetica,
            sans-serif;
          font-size: clamp(25px, 7vw, 36px);
          line-height: 1.05;
          text-align: center;
        }

        .form-intro {
          max-width: 530px;
          margin: 0 auto 26px;
          color: #536174;
          font-size: 15px;
          line-height: 1.5;
          text-align: center;
        }

        .form-section {
          margin-top: 22px;
          padding-top: 22px;
          border-top: 1px solid #dbe2ef;
        }

        .section-title {
          margin: 0 0 15px;
          color: #0e15db;
          font-family:
            Arial Black,
            Arial,
            Helvetica,
            sans-serif;
          font-size: 17px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .field.full {
          grid-column: 1 / -1;
        }

        .field label {
          color: #1f2937;
          font-size: 14px;
          font-weight: 800;
        }

        .required {
          color: #d71818;
        }

        .field input,
        .field select {
          width: 100%;
          min-height: 48px;
          padding: 10px 12px;
          border: 1px solid #aeb9c8;
          border-radius: 0;
          background: #ffffff;
          color: #111827;
          font-size: 16px;
          outline: none;
        }

        .field input:focus,
        .field select:focus {
          border-color: #0e15db;
          box-shadow:
            0 0 0 3px rgba(14, 21, 219, 0.12);
        }

        .field-note {
          margin: 0;
          color: #687386;
          font-size: 12px;
          line-height: 1.4;
        }

        .declaration {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-top: 22px;
          color: #374151;
          font-size: 14px;
          line-height: 1.45;
        }

        .declaration input {
          width: 20px;
          height: 20px;
          margin: 1px 0 0;
          flex: 0 0 20px;
          accent-color: #0e15db;
        }

        .submit-button {
          width: 100%;
          min-height: 54px;
          margin-top: 22px;
          padding: 12px 18px;
          border: 1px solid #0e15db;
          background: #0e15db;
          color: #ffffff;
          font-family:
            Arial Black,
            Arial,
            Helvetica,
            sans-serif;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        .submit-button:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }

        .message {
          margin: 18px 0 0;
          padding: 13px;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.4;
          text-align: center;
        }

        .message.success {
          border: 1px solid #16823a;
          background: #ecfdf3;
          color: #166534;
        }

        .message.error {
          border: 1px solid #dc2626;
          background: #fef2f2;
          color: #991b1b;
        }

        .success-panel {
          margin-top: 24px;
          padding: 22px 16px;
          border: 2px solid #16823a;
          background: #ecfdf3;
          text-align: center;
        }

        .success-panel h2 {
          margin: 0 0 8px;
          color: #166534;
          font-family:
            Arial Black,
            Arial,
            Helvetica,
            sans-serif;
          font-size: 24px;
        }

        .success-panel p {
          margin: 0;
          color: #166534;
          font-size: 15px;
          line-height: 1.5;
        }

        .back-button {
          display: block;
          margin: 20px auto 0;
          padding: 8px;
          border: none;
          background: transparent;
          color: #0e15db;
          font-weight: 800;
          cursor: pointer;
          text-decoration: underline;
        }

        @media (min-width: 640px) {
          .form-page {
            padding: 42px 20px 70px;
          }

          .form-sheet {
            padding: 38px 42px 42px;
          }

          .form-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        @media print {
          .form-page {
            padding: 0;
          }

          .form-sheet {
            max-width: none;
            padding: 14mm;
            border: none;
            box-shadow: none;
          }

          .submit-button,
          .back-button,
          .message {
            display: none;
          }

          .field input,
          .field select {
            border: 1px solid #707070;
          }
        }
      `}</style>

      <section className="form-sheet">
        <div className="wordmark">
          SUPA<span className="blue">TALENTED</span>
        </div>

        <h1 className="form-heading">
          JOIN THE WAITLIST
        </h1>

        <p className="form-intro">
          Register before launch and be in to win
          SUPATALENTED prizes.
        </p>

        {submitted ? (
          <section className="success-panel">
            <h2>YOU&apos;RE ON THE WAITLIST!</h2>

            <p>
              Thank you for registering your interest in
              SUPATALENTED. Watch your email for launch news
              and early-bird opportunities.
            </p>
          </section>
        ) : (
          <form onSubmit={submitForm}>
            <section className="form-section">
              <h2 className="section-title">
                1. CONTACT DETAILS
              </h2>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="email">
                    Email address{' '}
                    <span className="required">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      updateField(
                        'email',
                        event.target.value,
                      )
                    }
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="confirmEmail">
                    Confirm email address{' '}
                    <span className="required">*</span>
                  </label>

                  <input
                    id="confirmEmail"
                    type="email"
                    value={formData.confirmEmail}
                    onChange={(event) =>
                      updateField(
                        'confirmEmail',
                        event.target.value,
                      )
                    }
                    placeholder="Enter your email again"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="firstName">
                    First name{' '}
                    <span className="required">*</span>
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(event) =>
                      updateField(
                        'firstName',
                        event.target.value,
                      )
                    }
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="lastName">
                    Last name{' '}
                    <span className="required">*</span>
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(event) =>
                      updateField(
                        'lastName',
                        event.target.value,
                      )
                    }
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>
            </section>

            <section className="form-section">
              <h2 className="section-title">
                2. MEMBER TYPE
              </h2>

              <div className="form-grid">
                <div className="field full">
                  <label htmlFor="memberType">
                    I am{' '}
                    <span className="required">*</span>
                  </label>

                  <select
                    id="memberType"
                    value={formData.memberType}
                    onChange={(event) => {
                      updateField(
                        'memberType',
                        event.target.value,
                      )
                      updateField('age', '')
                      updateField('gender', '')
                      updateField('entityName', '')
                    }}
                    required
                  >
                    <option value="">
                      Select your member type
                    </option>

                    {memberTypes.map((type) => (
                      <option value={type} key={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.memberType === 'Athlete' && (
                  <>
                    <div className="field">
                      <label htmlFor="age">
                        Age{' '}
                        <span className="required">*</span>
                      </label>

                      <select
                        id="age"
                        value={formData.age}
                        onChange={(event) =>
                          updateField(
                            'age',
                            event.target.value,
                          )
                        }
                        required
                      >
                        <option value="">
                          Select age
                        </option>

                        {ages.map((age) => (
                          <option value={age} key={age}>
                            {age}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="field">
                      <label htmlFor="gender">
                        Gender{' '}
                        <span className="required">*</span>
                      </label>

                      <select
                        id="gender"
                        value={formData.gender}
                        onChange={(event) =>
                          updateField(
                            'gender',
                            event.target.value,
                          )
                        }
                        required
                      >
                        <option value="">
                          Select gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">
                          Female
                        </option>
                        <option value="Other">
                          Other
                        </option>
                      </select>
                    </div>
                  </>
                )}

                {requiresEntityName && (
                  <div className="field full">
                    <label htmlFor="entityName">
                      {entityLabels[
                        formData.memberType
                      ]}{' '}
                      <span className="required">*</span>
                    </label>

                    <input
                      id="entityName"
                      type="text"
                      value={formData.entityName}
                      onChange={(event) =>
                        updateField(
                          'entityName',
                          event.target.value,
                        )
                      }
                      required
                    />
                  </div>
                )}
              </div>
            </section>

            <section className="form-section">
              <h2 className="section-title">
                3. LOCATION
              </h2>

              <div className="form-grid">
                <div className="field full">
                  <label htmlFor="country">
                    Country{' '}
                    <span className="required">*</span>
                  </label>

                  <select
                    id="country"
                    value={formData.country}
                    onChange={(event) => {
                      updateField(
                        'country',
                        event.target.value,
                      )
                      updateField('otherCountry', '')
                    }}
                    required
                  >
                    <option value="">
                      Select country
                    </option>

                    {countries.map((country) => (
                      <option
                        value={country}
                        key={country}
                      >
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.country === 'Other' && (
                  <div className="field full">
                    <label htmlFor="otherCountry">
                      Country name{' '}
                      <span className="required">*</span>
                    </label>

                    <input
                      id="otherCountry"
                      type="text"
                      value={formData.otherCountry}
                      onChange={(event) =>
                        updateField(
                          'otherCountry',
                          event.target.value,
                        )
                      }
                      required
                    />
                  </div>
                )}

                <div className="field">
                  <label htmlFor="state">
                    State/region{' '}
                    <span className="required">*</span>
                  </label>

                  <input
                    id="state"
                    type="text"
                    value={formData.state}
                    onChange={(event) =>
                      updateField(
                        'state',
                        event.target.value,
                      )
                    }
                    autoComplete="address-level1"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="suburb">
                    Suburb/city{' '}
                    <span className="required">*</span>
                  </label>

                  <input
                    id="suburb"
                    type="text"
                    value={formData.suburb}
                    onChange={(event) =>
                      updateField(
                        'suburb',
                        event.target.value,
                      )
                    }
                    autoComplete="address-level2"
                    required
                  />
                </div>
              </div>
            </section>

            <label className="declaration">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(event) =>
                  updateField(
                    'consent',
                    event.target.checked,
                  )
                }
              />

              <span>
                I confirm that the information provided is
                correct and agree to receive SUPATALENTED
                waitlist, early-bird and launch
                communications.
              </span>
            </label>

            <button
              type="submit"
              className="submit-button"
              disabled={submitting}
            >
              {submitting
                ? 'SUBMITTING...'
                : 'ENTER TO WIN PRIZES'}
            </button>
          </form>
        )}

        {message && (
          <div
            className={`message ${messageType}`}
            role="status"
          >
            {message}
          </div>
        )}

        <button
          type="button"
          className="back-button"
          onClick={() => router.push('/')}
        >
          Return to main page
        </button>
      </section>
    </main>
  )
}