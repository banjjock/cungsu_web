import '../App.css';
import {Header_icon, Header_title, Header_menu} from '../component/header'
import {Score, Quality_prams, Report, Graph} from '../component/body'


export default function main() {
    return (
      <div className="App">
        <header className="header">
            <div className="header-content">
              <div className="logo-and-title">
                <Header_icon/>
                <Header_title/>
              </div>
              <Header_menu/>
            </div>
        </header>
        <div className="main-content-wrapper container">
          <div className="main-content">
            <Score/>
            <section className="indicators">
              <Quality_prams category='Temp' ppm = '°C'/>
              <Quality_prams category='DO' ppm = 'ppm'/>
              <Quality_prams category='pH' ppm = ''/>
              <Quality_prams category='NH3/NH4' ppm = 'ppm'/>
              <Quality_prams category='NO2' ppm = '°ppm'/>
              <Quality_prams category='NO3' ppm = 'ppm'/>
            </section>
          </div>
          <div className="right-content">
            <Report/>
            <Graph/>
          </div>
        </div>

        <footer className="footer">
            <div className="container">
              <p>© 2024 AquaVitality. All rights reserved.</p>
            </div>
          </footer>
      </div>
    )
}