import React from 'react';
import Layout from  '../components/layout';
import styled from 'styled-components'
import Logo from '../components/logo'
import Button from '../components/button'

const ContactContent = styled.div`
    max-width:772px; 
    height: 100vh;
    padding-top: 5rem;
    form {
      .select {
        margin-top:1.8rem;
        max-width:680px;
        label {
            width:100%;
            background-color:transparent;
          }
          select {
            width:100%;
            background-color:transparent;
            border:0;
            border-bottom:1px solid #BCB2B2;
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
      .form-group {
        margin-bottom:1rem;
        textarea {
          margin-top:1.8rem;
        }
        div {
          padding:0;
          
        }
        textarea,input {
          color: #BCB2B2;
          background-color: transparent;
          max-width:680px;
          border:0;
          border-bottom:1px solid #BCB2B2;
          width:100%;
          font-size:1.2rem;
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



const Contact = ({location}) => (
    <Layout location={location}>
    <ContactContent>
          <div>
            <h1>Contact Me</h1>
            <p>Let’s build something together! Or <a href="mailto:lucas@gilbert.codes?Subject=Hi Gilbert!" target="_top">email</a> email me if you have
            any other questions.</p>
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
                <input type="email" placeholder="Company / Organisation" id="company" name="company" />
            </div>
            <div class="form-group" className="select">
              <label for="need">You need a..</label>
              <select name="requirement" id="need">
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
            <div class="form-group" className="select">
              <label for="currency">Currency</label>
              <select className="form-control" id="currency">
                <option>USD</option>
                <option>PHP</option>
              </select>
            </div>
            <div class="form-group">
              
            </div>
            <div class="form-group">
              <textarea className="form-control" placeholder="Project details" id="project-details" rows="3"></textarea>
            </div>
            <div class="form-group">
            <Button><button>Send</button></Button>
            </div>
            </form>
            <Logo/>
          </div>
        </ContactContent>
    </Layout>
);
export default Contact