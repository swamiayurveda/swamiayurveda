import React, { Component } from 'react'
// import axios from 'axios'
// import async from 'async'
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stepper from 'react-stepper-horizontal';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

// const HOST = PRODUCTION ? '/' : 'http://localhost:3000/'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      confirmationModalOpen: false,
      confirmationTextVisible: false,
      appointmentDateSelected: false,
      appointmentMeridiem: 0,
      validEmail: true,
      validPhone: true,
      smallScreen: window.innerWidth < 768,
      confirmationSnackbarOpen: false,
      currentStep: 0,
      schedule: {},
    }

    this.handleNextStep = this.handleNextStep.bind(this)
    this.handleSetAppointmentDate = this.handleSetAppointmentDate.bind(this)
    this.handleSetAppointmentSlot = this.handleSetAppointmentSlot.bind(this)
    this.handleSetAppointmentMeridiem = this.handleSetAppointmentMeridiem.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validatePhone = this.validatePhone.bind(this)
    this.checkDisableDate = this.checkDisableDate.bind(this)
    this.renderAppointmentTimes = this.renderAppointmentTimes.bind(this)
    this.renderConfirmationString = this.renderConfirmationString.bind(this)
    this.renderAppointmentConfirmation = this.renderAppointmentConfirmation.bind(this)
    this.resize = this.resize.bind(this)
  }

  handleNextStep() {
    const { currentStep } = this.state
    console.log('handleSetAppointmentDate', currentStep);
    return (currentStep < 3) ? this.setState({ currentStep: currentStep + 1}) : null
  }

  handleSetAppointmentDate(date) {
    this.handleNextStep()
    this.setState({ appointmentDate: date, confirmationTextVisible: true })
  }

  handleSetAppointmentSlot(slot) {
    this.handleNextStep()
    console.log('select slot', slot);
    this.setState({ appointmentSlot: slot })
  }

  handleSetAppointmentMeridiem(meridiem) {
    this.setState({ appointmentMeridiem: meridiem})
  }

  handleFetch(response) {
    const { appointments } = response;
    // const { configs } = response;
    const initSchedule = {}
    const today = moment().startOf('day')
    initSchedule[today.format('DD-MM-YYYY')] = true
    const schedule = !appointments.length ? initSchedule : appointments.reduce((currentSchedule, appointment) => {
      const { date, slot } = appointment
      const dateString = moment(date, 'DD-MM-YYYY').format('DD-MM-YYYY')

      if (!currentSchedule[date]) {
        Array(8).fill(false)
      }

      if (Array.isArray(currentSchedule[dateString])) {
        currentSchedule[dateString][slot] = true
      }

      return currentSchedule;
    }, initSchedule)

    //Imperative x 100, but no regrets
    for (let day in schedule) {
      let slots = schedule[day]

      if (slots.length) {
        if (slots.every(slot => slot === true)) {
          schedule[day] = true
        }
      }
    }

    this.setState({
      schedule,
      loading: false
    })
  }

  handleFetchError(err) {
    console.log(err)
    this.setState({ confirmationSnackbarMessage: 'Error fetching data', confirmationSnackbarOpen: true })
  }

  handleSubmit() {
    // const appointment = {
    //   date: moment(this.state.appointmentDate).format('DD-MM-YYYY'),
    //   slot: this.state.appointmentSlot,
    //   name: this.state.firstName + ' ' + this.state.lastName,
    //   email: this.state.email,
    //   phone: this.state.phone
    // }
    // axios.post(HOST + 'api/appointments', appointment)
    // .then(response => this.setState({ confirmationSnackbarMessage: "Appointment succesfully added!", confirmationSnackbarOpen: true, processed: true }))
    // .catch(err => {
    //   console.log(err)
    //   return this.setState({ confirmationSnackbarMessage: "Appointment failed to save.", confirmationSnackbarOpen: true })
    // })
  }

  validateEmail(email) {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return regex.test(email) ? this.setState({ email: email, validEmail: true }) : this.setState({ validEmail: false })
  }

  validatePhone(phoneNumber) {
    const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    return regex.test(phoneNumber) ? this.setState({ phone: phoneNumber, validPhone: true }) : this.setState({ validPhone: false })
  }

  checkDisableDate(day) {
    const dateString = moment(day).format('DD-MM-YYYY')
    return this.state.schedule[dateString] === true || moment(day).startOf('day').diff(moment().startOf('day')) < 0
  }

  renderConfirmationString() {
    return this.state.confirmationTextVisible && (
      <h5 className="text-secondary mt-5">
        { <span>
          Scheduling a <span className="text-info"> 1 hour </span>
          appointment {this.state.appointmentDate && <span> on <span className="text-info">{moment(this.state.appointmentDate).format('dddd[,] MMMM Do')}</span>
        </span>} {Number.isInteger(this.state.appointmentSlot) && <span>at <span className="text-info">{moment().hour(9).minute(0).add(this.state.appointmentSlot, 'hours').format('h:mm a')}</span></span>}
        </span>}
      </h5>
    )
  }

  renderAppointmentTimes() {
    if (true) {
      const slots = [...Array(8).keys()]
      return slots.map(slot => {
        const appointmentDateString = moment(this.state.appointmentDate).format('DD-MM-YYYY')
        const t1 = moment().hour(9).minute(0).add(slot, 'hours')
        const t2 = moment().hour(9).minute(0).add(slot + 1, 'hours')
        const scheduleDisabled = this.state.schedule[appointmentDateString] ? this.state.schedule[moment(this.state.appointmentDate).format('DD-MM-YYYY')][slot] : false
        const meridiemDisabled = this.state.appointmentMeridiem ? t1.format('a') === 'am' : t1.format('a') === 'pm'
        return(
          <Form.Check
            type="radio"
            style={{ display: meridiemDisabled ? 'none' : 'inherit' }}
            label={t1.format('h:mm a') + ' - ' + t2.format('h:mm a')}
            name="appointmentTimes"
            value={slot}
            disabled={scheduleDisabled || meridiemDisabled}
            onChange={e => this.handleSetAppointmentSlot(e.target.value)}
          />
        );
      })
    } else {
      return null
    }
  }

  renderAppointmentConfirmation() {
    const spanStyle = { color: '#00bcd4' }
    return <section>
      <p>Name: <span style={spanStyle}>{this.state.firstName} {this.state.lastName}</span></p>
      <p>Number: <span style={spanStyle}>{this.state.phone}</span></p>
      <p>Email: <span style={spanStyle}>{this.state.email}</span></p>
      <p>Appointment: <span style={spanStyle}>{moment(this.state.appointmentDate).format('dddd[,] MMMM Do[,] YYYY')}</span> at <span style={spanStyle}>{moment().hour(9).minute(0).add(this.state.appointmentSlot, 'hours').format('h:mm a')}</span></p>
    </section>
  }

  resize() {
    this.setState({ smallScreen: window.innerWidth < 768 })
  }

  UNSAFE_componentWillMount() {
    // async.series({
    //   configs(callback) {
    //     axios.get(HOST + 'api/config').then(res =>
    //       callback(null, res.data.data)
    //     )
    //   },
    //   appointments(callback) {
    //     axios.get(HOST + 'api/appointments').then(res => {
    //       callback(null, res.data.data)
    //     })
    //   }
    // }, (err,response) => {
    //   err ? this.handleFetchError(err) : this.handleFetch(response)
    // })
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  renderContent() {
    const { currentStep, loading, smallScreen, confirmationModalOpen, confirmationSnackbarOpen, ...data } = this.state
    const contactFormFilled = data.firstName && data.lastName && data.phone && data.email && data.validPhone && data.validEmail
    const modalActions = [
      <Button
        variant="outline-danger"
        onClick={() => this.setState({ confirmationModalOpen : false})}
      >
        Cancel
      </Button>,
      <Button
        variant="outline-success"
        onClick={() => this.handleSubmit()}
      >
        Confirm
      </Button>,
    ]

    switch (currentStep) {
      case 0: return (
        <React.Fragment>
          <DayPickerInput
            placeholder="Select to enter date"
            value={data.appointmentDate}
            onDayChange={day => this.handleSetAppointmentDate(day)}
            component={props => <Form.Control {...props} />}
          />
        </React.Fragment>
      )
      case 1: return (
        <React.Fragment>
          <Form.Group as={Col}>
            <Form.Label>AM or PM</Form.Label>s
            <Form.Control
              as="select"
              value={data.appointmentMeridiem}
              onChange={e => this.handleSetAppointmentMeridiem(e.target.value)}
            >
              <option value={0}>AM</option>
              <option value={1}>PM</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={10}>
              {this.renderAppointmentTimes()}
            </Col>
          </Form.Group>
        </React.Fragment>
      )
      case 2: return (
        <React.Fragment>
          <section>
            <Form.Group>
              <Form.Control
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={e => this.setState({ firstName: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={e => this.setState({ lastName: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onChange={e => this.validateEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {data.validEmail ? null : 'Enter a valid email address'}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="phone"
                name="phone"
                placeholder="Phone"
                onChange={e => this.validatePhone(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {data.validPhone ? null: 'Enter a valid phone number'}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="mt-5"
              disabled={!contactFormFilled || data.processed }
              onClick={() => this.setState({ confirmationModalOpen: !this.state.confirmationModalOpen })}
              variant="primary"
              size="lg"
              block
            >
              {contactFormFilled ? 'Schedule' : 'Fill out your information to schedule'}
            </Button>
          </section>
          <Modal
            show={confirmationModalOpen}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Confirm your appointment
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.renderAppointmentConfirmation()}
            </Modal.Body>
            <Modal.Footer>
              {modalActions}
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      )
      default: return(null)
    }
  }

  render() {
    const { currentStep } = this.state

    return (
      <div>
        <section>
          <Card className="p-4 text-center">
            <Stepper
              activeColor="#21a6b3"
              activeStep={currentStep}
              steps={[
                { title: 'Choose Date', onClick: () => this.setState({ currentStep: 0 }) },
                { title: 'Choose Time', onClick: () => this.setState({ currentStep: 1 }) },
                { title: 'Fill Info', onClick: () => this.setState({ currentStep: 2 }) },
              ]}
            />
            {this.renderConfirmationString()}
            <div className="my-5">
              {this.renderContent()}
            </div>
          </Card>
          {/* <SnackBar
            open={confirmationSnackbarOpen || loading}
            message={loading ? 'Loading... ' : data.confirmationSnackbarMessage || ''}
            autoHideDuration={10000}
            onRequestClose={() => this.setState({ confirmationSnackbarOpen: false })} /> */}
        </section>
      </div>
    )
  }
}
