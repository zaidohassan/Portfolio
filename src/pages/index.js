import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
      pics: [
        'https://cdn-images-1.medium.com/max/1026/1*3SVfBkNZI2f-sspiq59xcw.png',
        'https://cdn-images-1.medium.com/max/614/1*SRL22ADht1NU4LXUeU4YVg.png',
        'https://11m5ki43y82budjol1gjvv5s-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/node-js-main.jpg',
        'https://cdn-images-1.medium.com/max/1200/1*7AOhGDnRL2eyJMUidCHZEA.jpeg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://cdn-images-1.medium.com/max/1200/1*eXIBeNlLhz4Pe6vDrYkXLQ.png',
        'https://pbs.twimg.com/profile_images/997239666641223680/l7PYMOSm_400x400.jpg',
      ],
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    const skillspic = this.state.pics.map((el, i) => {
      return (
        <div className="skillslogo">
          <img className="skillslogopic" src={el} />
        </div>
      )
    })
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Chemical Engineer Turned Software Developer</h2>
                </header>
                <p>
                  Born and Raised in Clifton, NJ. I am a full stack developer
                  now residing in the DFW who is open to relocating back to my
                  hometown. I came to Dallas with my family after working in
                  Ecommerce and in my previous field.
                </p>
                <p>
                  I never thought I'd make a jump in Software after finishing a
                  Bachelor's in Chemical Engineering from New Jersey Insituite
                  of Technology until I came to Dallas and wanted a career
                  change that has only made me more confident in my abilities to
                  learn new skills. I have loved technology since I was very
                  young building HTML websites.
                </p>
                <p>
                  I went to work at the age of 14 with my immigrant parents,
                  dedicated to always learn what I can and support my family. I
                  love different sort of activities such as photography, soccer
                  and traveling! Thank you for reading!
                </p>
              </div>
              <span className="image">
                <img
                  src="https://i.postimg.cc/J0TmSC9r/pic.jpg"
                  alt="Picture of Me"
                />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Stacks I Have Used</h2>
            </header>
            <div className="features">{skillspic}</div>
            <footer className="major">
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul> */}
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Projects Worked On</h2>
              <p>
                "Learning is not attained by chance, it must be sought for with
                ardor and attended to with dilgence"
                <br />
                -Abigail Adams
              </p>
            </header>
            <div className="entireprofileContainer">
              <div className="projectContaier">
                <a href="http://www.bookscout.live">
                  <img
                    src="https://i.postimg.cc/hPqNNzRM/pic1.png"
                    alt=""
                    className="projectimg"
                  />
                  <div>
                    <h2>Book Scout</h2>
                    <p>
                      Book Scout is Amazon Book Selling app made for third party
                      sellers to scan books quickly and easily. You start off by
                      entering an ISBN number, which will hit Amazon's MWS API
                      and return you neccassary data in order for users to make
                      the best buying decision.
                    </p>
                    <p>
                      It utilizes Material UI components, ChartJS and Inventory
                      Tracking to to keep users up to date!
                    </p>
                  </div>
                </a>
              </div>
              <div className="projectContaier">
                <a href="http://www.awayfromhome.live">
                  <img
                    src="https://i.postimg.cc/L61sR05R/pic2.png"
                    alt=""
                    className="projectimg"
                  />
                  <div>
                    <h2>awayFromHome</h2>
                    <p>
                      Having a hard time finding your right hotel? awayFromHome
                      will help you solve your frustration by providing you
                      hotels based off your travel dates in the locations you
                      are visiting. (Only customized to Dallas).
                    </p>
                    <p>
                      Front-End Engineer on this project which used new
                      technologies such as React Hooks and Thunk. This was a
                      team effort which was required task assignments, standups
                      and usage of github issues.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Where to Find Me</h2>
              <p>
                I am active through LinkedIn, Email, and Instagram
                <br />
                For a more direct contact:
                <br />
                <span> Call/Text: </span> 862-264-9889
                <br />
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=zaid.m.hassan@gmail.com&su=@Portfolio&tf=1">
                  <span> Email: </span> zaid.m.hassan@gmail.com
                </a>
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="https://www.instagram.com/iamzaidoooo/?hl=en">
                    <img
                      src=" https://clipart.info/images/ccovers/1522452763instagram-png-logo-with-text-and-icon.png"
                      className="connectInstalogo"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/zaidmhassan">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png"
                      className="connectLinkedInlogo"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/zaidohassan">
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      className="connectGithublogo"
                    />
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
