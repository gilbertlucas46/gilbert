import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Button from './button'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const ContactContent = styled.div`
    form {
      .select {
        margin:1.8rem 0;
        max-width:680px;
        select.changed {
          border-bottom:2px solid #ED2654;
          color: #fff;
        }
        label {
            width:100%;
            background-color:transparent;
          }
          select {
            width:100%;
            background-color:transparent;
            border:0;
            border-bottom:2px solid #BCB2B2;
            color: #BCB2B2;
            border-radius:0;
            line-height: 3rem;
            height: 3.2rem;
            font-size:1.2rem;
            -webkit-appearance: none;
            -moz-appearance: none;
            -webkit-border-radius: 0px;
            background-image: url('data:image/svg+xml;base64,
            PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDkzLjI1OCA0OTMuMjU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTMuMjU4IDQ5My4yNTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGcgaWQ9IlhNTElEXzYyMV8iPgoJPHBhdGggaWQ9IlhNTElEXzYyM18iIGQ9Ik0xMzEuNTY0LDIxOS4yNThoMjMwLjEzYzkuMzE0LDAsMTcuODU3LTUuMTYsMjIuMjAzLTEzLjM4OWM0LjM0LTguMjQ2LDMuNzY5LTE4LjE5My0xLjQ5NC0yNS44OTUgICBMMjY1LjkyLDkuNzcyQzI2MS43NSwzLjY4LDI1NC44NDYsMC4wMzMsMjQ3LjQ2MSwwYy03LjM3Ny0wLjAxOC0xNC4zMDMsMy41ODQtMTguNTA3LDkuNjU4TDExMC45MzUsMTc5Ljg2MyAgIGMtNS4zMTksNy42NjgtNS45MzgsMTcuNjY0LTEuNjA3LDI1Ljk0MUMxMTMuNjU5LDIxNC4wNjcsMTIyLjIyNSwyMTkuMjU4LDEzMS41NjQsMjE5LjI1OHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0JDQjJCMiIgZGF0YS1vbGRfY29sb3I9IiNFOUU5RTkiPjwvcGF0aD4KCTxwYXRoIGlkPSJYTUxJRF82MjJfIiBkPSJNMzYxLjY5NCwyNzMuOTk4aC0yMzAuMTNjLTkuMzM5LDAtMTcuOTA1LDUuMTkzLTIyLjIzNiwxMy40NTVjLTQuMzMxLDguMjc3LTMuNzExLDE4LjI3MywxLjYwNywyNS45MzkgICBsMTE4LjAxOSwxNzAuMjA1YzQuMjA0LDYuMDc0LDExLjEzLDkuNjc2LDE4LjUwNyw5LjY2YzcuMzg1LTAuMDMxLDE0LjI4OS0zLjY4MiwxOC40NTktOS43NzJsMTE2LjQ4My0xNzAuMjA1ICAgYzUuMjYzLTcuNjk5LDUuODM0LTE3LjY0OCwxLjQ5NC0yNS44OTVDMzc5LjU1MSwyNzkuMTU4LDM3MS4wMDgsMjczLjk5OCwzNjEuNjk0LDI3My45OTh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNCQ0IyQjIiIGRhdGEtb2xkX2NvbG9yPSIjRTlFOUU5Ij48L3BhdGg+CjwvZz48L2c+IDwvc3ZnPg==');
            background-position: 99% 50%;
            background-repeat: no-repeat;
            background-size: 16px;
              &:focus {
              outline:none;
            }
          }
      }
      .sendButton {
        margin-top:2rem;
        button {
          padding-bottom:0;
        }
        div {
          padding: 0;
          margin: auto;
          text-align: center;
          @media (max-width:767px) {
            width:100%;
            max-width:100%;
          }
        }
        
      }
      .form-group {
        margin-bottom:1rem;
        max-width:680px;
        .slider {
          
          .slider-group {
            height:70px;
            margin-bottom: 4rem;
            .mlabel {
              
                @media (min-width:768px) {
                display:none;
              }
              @media (max-width:767px) {
                display:inline;
              }
              
            }
            .value{
              @media (min-width:768px) {
                display:block;
              }
              @media (max-width:767px) {
                display:none;
              }
            }
            .sliderContainer {
              display:grid;
              grid-gap:15px;
              align-content: space-evenly;
              align-items: center;
              padding: 1rem 0;
              @media (min-width:768px) {
                grid-template-columns: 5fr 1fr;
              }
              @media (max-width:767px) {
               
              }
            }
            .hiddenField {
              display:none;
            }
            .value{
              text-align:right;
              letter-spacing:1px;
            }
            .rangeslider{
              .rangeslider__fill {
                background-color:#ED2654;
              }
            }
            .rangeslider__labels {
              margin-top:1rem;
              li {
                margin-bottom:0;
                width: 100%;
                text-align: center;
                letter-spacing:1px;
                @media (max-width:470px) {
                  font-size:10px; 
                }
              }
            }
            .rangeslider__handle-label {
              display:none;
            }
            .rangeslider__handle{
              &:after {
                display:none;
              }
              &:focus {
                outline:none;
              }
            }
            .rangeslider__handle-tooltip{
              width:100px;
              letter-spacing:1px;
            }
          }
          .rangeslider-horizontal {
            height: 2px;
            background-color:#BCB2B2;
            box-shadow:none;
          }
        }
        textarea {
          margin-top:1.8rem;
          padding-top:.5rem;
        }
        div {
          padding:0;
              padding: 0;
        }
        .ButtonSend {
          margin-top:2rem;
        }
        textarea,input {
          color: #BCB2B2;
          background-color: transparent;
          border:0;
          border-bottom:2px solid #BCB2B2;
          width:100%;
          font-size:1.2rem;
          &:-internal-autofill-selected, &:-internal-autofill-previewed {
            background-color:red;
          }
          &:focus {
            outline:none;
          }
        }
        input {
          height: 3.2rem;
        }
      }
      
    }
    
    @media (min-width:1440px) {
        width:88%;
    }
    p {
        font-size: 1.2rem;
        color: #BCB2B2;
        line-height:2rem;
    }
    h4 {
        border-color:#BCB2B2;
        font-size:1.5rem;
        font-weight:normal;
    }
`;

export default class ContactForm extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      budget: 6000,
      deadline: 4,
    }
  }

  handleChangebudget = value => {
    this.setState({
      budget: value
    })
  };
  selectRequirement = () => {
    const selectReq = document.querySelector("#need");
    selectReq.classList.add("changed");
  }

  handleChangedeadline = value => {
    this.setState({
      deadline: value
    })
  };
  render() {
    const { budget, deadline } = this.state
    const budgetLabels = {
      4000: 'Low',
      12000: 'Medium',
      19500: 'High'
    }

    const deadlineLabels = {
      0: '+3 Months',
      14: '-12 Months',
      22: '24 Months',
    }
    const formarMoney = value => value + ' USD'
    const formatDeadline = p => p + ' Months'

    return (
        <ContactContent>
              <div>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou">
                {/* You still need to add the hidden input with the form name to your JSX form */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                    <input type="text" placeholder="Name" id="name" name="name" />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Company / Organisation" id="company" name="company" />
                </div>
                <div className="form-group" className="select">
                  <label htmlFor="need">You need a..</label>
                  <select name="requirement" id="need" onChange={this.selectRequirement}>
                    <option>Website designed &amp; developed</option>
                    <option>Website developed</option>
                    <option>Website designed</option>
                    <option>Website updated</option>
                    <option>Mobile / tablet app</option>
                    <option>Content Management System</option>
                    <option>Ecommerce site</option>
                    <option>Data visualisation</option>
                    <option>Print designer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                <div className='slider'>
                  <div className="slider-group">
                  <label htmlFor="budget">Budget: </label><span className="mlabel"> {formarMoney(budget)}</span>
                  <input type="text" id="budget" name="budget" value={`${budget} USD`} className="hiddenField"/>
                    <div className="sliderContainer">
                    <Slider
                      min={3000}
                      max={22000}
                      value={budget}
                      labels={budgetLabels}
                      format={formarMoney}
                      handleLabel={budget}
                      onChange={this.handleChangebudget}
                    />
                    <div className='value'>{formarMoney(budget)}</div>
                    </div>
                  </div>
                  <div className="slider-group">
                  <label htmlFor="deadline">Deadline: </label><span className="mlabel"> {formatDeadline(deadline)}</span>
                  <input type="text" id="deadline" name="deadline" value={`${deadline} Months`} className="hiddenField"/>
                    <div className="sliderContainer">
                    <Slider
                      min={3}
                      max={24}
                      value={deadline}
                      labels={deadlineLabels}
                      handleLabel={deadline}
                      format={formatDeadline}
                      onChange={this.handleChangedeadline}
                    />
                    <div className='value'>{formatDeadline(deadline)}</div>
                    </div>
                    
                  </div>
                </div>
                </div>
                <div className="form-group">
                  <textarea name="details" placeholder="Project details" id="project-details" rows="8"></textarea>
                </div>
                <div className="form-group sendButton">
                <Button><button>Send</button></Button>
                </div>
                </form>
                <Logo/>
            </div>
        </ContactContent>
    )
  }
}
