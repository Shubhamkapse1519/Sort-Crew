import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

const Section4 = () => {
  const handleFocus = (e: React.FocusEvent<any>) => {
    e.target.parentElement.classList.add('active')
  }
  const handleBlur = (e: React.FocusEvent<any>) => {
    e.target.value.length === 0 &&
      e.target.parentElement.classList.remove('active')
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  })

  const onSubmitForm = async (values: any) => {
    try {
      console.log('submitted')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="contact mb-5" id="contact">
      <div>
        <h2 className="sub-heading">
          Got A Project <br /> Or A Partnership <br />
          In Mind ?
        </h2>
      </div>
      <div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitForm)}
          className="form"
        >
          <div className="flex w-100">
            <div className="form-group mr-3">
              <input
                type="text"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'You must enter your name',
                  },
                })}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label htmlFor="first">Enter your name</label>
              <p className="invalid">
                {errors && errors.name && errors.name.message}
              </p>
            </div>
            <div className="form-group">
              <input
                type="text"
                {...register('phone', {
                  required: {
                    value: true,
                    message: 'You must enter your phone number',
                  },
                  pattern: {
                    value:
                      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
                    message: 'Invalid phone number!',
                  },
                })}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <p className="invalid">
                {errors && errors.phone && errors.phone.message}
              </p>

              <label htmlFor="first">Your Phone Number</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              {...register('email', {
                required: {
                  value: true,
                  message: 'You must enter your email address',
                },
                minLength: {
                  value: 8,
                  message: 'This is not long enough to be an email',
                },
                maxLength: {
                  value: 120,
                  message: 'This is too long to be an email',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email!',
                },
              })}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label htmlFor="first">Your E-mail</label>
            <p className="invalid">
              {errors && errors.email && errors.email.message}
            </p>
          </div>
          <div className="form-group">
            <TextareaAutosize
              {...register('message', {
                required: {
                  value: true,
                  message: 'You need to enter your message',
                },
                maxLength: {
                  value: 500,
                  message: "Your message can't be more than 500 characters",
                },
                minLength: {
                  value: 50,
                  message: 'Your message must be longer than 50 characters!',
                },
              })}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label htmlFor="first">Tell us about your project</label>
            <p className="invalid">
              {errors && errors.message && errors.message.message}
            </p>
          </div>
          <button className="button pill-button bg-blue">Send a message</button>
        </form>
      </div>
    </div>
  )
}

export default Section4
