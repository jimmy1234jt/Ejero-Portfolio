import './App.css'
import top from "./assets/corner-top.svg"
import bottom from "./assets/corner-bottom.svg"
import smalltop from "./assets/small-corner-top.svg"
import logo from "./assets/logo.svg"


function App() {
  const email = 'ejeroodafewomoni@gmail.com';
  const encodedEmail = encodeURIComponent(email);

  return (
    <div className='app'>
       <div className='wrapper'>
        <img className='corner top' src={top} alt=''/>
        <img className='corner bottom' src={bottom} alt='' />
        <div className='nav'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='social'>
            <a href={`mailto:${encodedEmail}`}>
              <svg className='icon' width="30" height="30" viewBox="0 0 50 50"  xmlns="http://www.w3.org/2000/svg">
                <path d="M39.0208 11.2708L36.3542 13.3542L25 21.7917L13.6458 13.2708L10.9792 11.1875C10.3509 10.6678 9.58406 10.3438 8.77352 10.2557C7.96297 10.1676 7.14439 10.3193 6.41918 10.6918C5.69397 11.0644 5.09401 11.6416 4.69362 12.3518C4.29324 13.0621 4.11002 13.8741 4.16666 14.6875V38.8333C4.16666 39.5848 4.46518 40.3054 4.99653 40.8368C5.52788 41.3682 6.24855 41.6667 7 41.6667H13.6458V25.5833L25 34.1042L36.3542 25.5833V41.6667H43C43.7514 41.6667 44.4721 41.3682 45.0035 40.8368C45.5348 40.3054 45.8333 39.5848 45.8333 38.8333V14.6875C45.8724 13.8812 45.6765 13.0808 45.2693 12.3838C44.8621 11.6867 44.2611 11.123 43.5395 10.7611C42.8179 10.3992 42.0067 10.2547 41.2045 10.3452C40.4023 10.4357 39.6437 10.7573 39.0208 11.2708Z" />
              </svg>
            </a>
            <a href='https://x.com/Promize_Aj?t=b1jAGXU5t4inVilGZh5bBA&s=09'>
              <svg className='icon' width="30" height="30" viewBox="0 0 50 50"  xmlns="http://www.w3.org/2000/svg">
                <path d="M29.0437 21.65L44.8656 3.125H41.1156L27.3813 19.2094L16.4063 3.125H3.75L20.3438 27.45L3.75 46.875H7.5L22.0063 29.8875L33.5969 46.875H46.2531L29.0437 21.65ZM23.9094 27.6625L22.2281 25.2406L8.85 5.96875H14.6094L25.4031 21.5219L27.0844 23.9438L41.1188 44.1625H35.3594L23.9094 27.6625Z" />
              </svg>
            </a>
            <a href='https://github.com/jimmy1234jt'>
              <svg className='icon' width="30" height="30" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 4.16663C22.2641 4.16663 19.555 4.7055 17.0274 5.75247C14.4998 6.79944 12.2032 8.33401 10.2686 10.2686C6.36161 14.1756 4.16667 19.4746 4.16667 25C4.16667 34.2083 10.1458 42.0208 18.4167 44.7916C19.4583 44.9583 19.7917 44.3125 19.7917 43.75V40.2291C14.0208 41.4791 12.7917 37.4375 12.7917 37.4375C11.8333 35.0208 10.4792 34.375 10.4792 34.375C8.58334 33.0833 10.625 33.125 10.625 33.125C12.7083 33.2708 13.8125 35.2708 13.8125 35.2708C15.625 38.4375 18.6875 37.5 19.875 37C20.0625 35.6458 20.6042 34.7291 21.1875 34.2083C16.5625 33.6875 11.7083 31.8958 11.7083 23.9583C11.7083 21.6458 12.5 19.7916 13.8542 18.3125C13.6458 17.7916 12.9167 15.625 14.0625 12.8125C14.0625 12.8125 15.8125 12.25 19.7917 14.9375C21.4375 14.4791 23.2292 14.25 25 14.25C26.7708 14.25 28.5625 14.4791 30.2083 14.9375C34.1875 12.25 35.9375 12.8125 35.9375 12.8125C37.0833 15.625 36.3542 17.7916 36.1458 18.3125C37.5 19.7916 38.2917 21.6458 38.2917 23.9583C38.2917 31.9166 33.4167 33.6666 28.7708 34.1875C29.5208 34.8333 30.2083 36.1041 30.2083 38.0416V43.75C30.2083 44.3125 30.5417 44.9791 31.6042 44.7916C39.875 42 45.8333 34.2083 45.8333 25C45.8333 22.2641 45.2945 19.555 44.2475 17.0274C43.2005 14.4998 41.6659 12.2031 39.7314 10.2686C37.7968 8.33401 35.5002 6.79944 32.9726 5.75247C30.445 4.7055 27.7359 4.16663 25 4.16663Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className='content'>
          <div className='about'>
            <h1>Welcome</h1>
            <div className='about-text'>
              <p>My name is Ian Dunkerley, I'm a front-end developer based in Torquay, Devon, UK. I have developed many types of front-ends from well know DJ applications to Ecommerce booking platforms.</p>
              <p>My name is Ian Dunkerley, I'm a front-end developer based in Torquay, Devon, UK. I have developed many types of front-ends from well know DJ applications to Ecommerce booking platforms.</p>
              <p>My name is Ian Dunkerley, I'm a front-end developer based in Torquay, Devon, UK. I have developed many types of front-ends from well know DJ applications to Ecommerce booking platforms.</p>
            </div>
          </div>
          <div className='project-wrapper'>
            <h2>Projects</h2>
            <div className='projects'>
              <img className='small-corner small-top' src={smalltop} alt=''/>
              <div className='project-list'>
                <a href='/'>
                  <div className='project-item'>
                    <h4>First Projects</h4>
                  </div>
                </a>
                <a href='/'>
                  <div className='project-item'>
                    <h4>First Projects</h4>
                  </div>
                </a>
                <a href='/'>
                  <div className='project-item'>
                    <h4>Weather app</h4>
                  </div>
                </a>
                <a href='/'>
                  <div className='project-item'>
                    <h4>Shopify guide clone</h4>
                  </div>
                </a>
                <a href='/'>
                  <div className='project-item'>
                    <h4>login page Projects</h4>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
        <div className='copyright'>
          <p>&copy; 2023 Ejero .P. Odafewomoni. All rights reserved.</p>
        </div>
       </div>
    </div>
  )
}

export default App
