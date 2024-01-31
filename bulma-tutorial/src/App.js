import 'bulma/css/bulma.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return ( <>
     <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item">
                    Home
                  </a>
            
                  <a class="navbar-item">
                    Documentation
                  </a>
            
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      More
                    </a>
            
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        About
                      </a>
                      <a class="navbar-item">
                        Jobs
                      </a>
                      <a class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider"/>
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a class="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
    <div classname="main"> 
      <div className="buttons">
        <button class="button is-primary">Primary</button>
        <button class="button is-link">Link</button>
        <button class="button is-info">Info</button>
        <button class="button is-success is-small is-loading">Success</button>
        <button class="button is-warning is-medium is-disabled">Warning</button>
        <button class="button is-danger is-large is-outlined">Danger</button>
        <button class="button is-black">Black</button>
        <button class="button is-white">White</button>
        <button class="button is-dark">Dark</button>
        <button class="button is-light">Light</button>
      </div>
    </div>
    
    <div className="buttons">
  <button class="button is-primary">Primary</button>
  <button class="button is-link">Link</button>
  <button class="button is-info">Info</button>
  <button class="button is-success">Success</button>
  <button class="button is-warning">Warning</button>
  <button class="button is-danger">Danger</button>
  <button class="button is-black">Black</button>
  <button class="button is-white">White</button>
  <button class="button is-dark">Dark</button>
  <button class="button is-light">Light</button>
</div>
</>
  )
}

export default App;


