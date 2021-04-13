// import javascript and bootstrap
import "bootstrap/scss/bootstrap.scss"
import 'jquery/dist/jquery.min.js'
import "bootstrap/dist/js/bootstrap.min.js"
import 'popper.js/dist/popper.min'

// importing fontawesome library components
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faDiscord, faTelegram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { fas, faCircle } from '@fortawesome/free-solid-svg-icons'

library.add( fab, faDiscord, fas, faCircle, faTelegram, faGithub, faTwitter ); // adding imported modules to library to be used with FontAwesomeIcon components