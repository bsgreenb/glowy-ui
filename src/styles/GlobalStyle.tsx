import { fontFamily, fontWeight, fontSize, lineHeight } from "./typography";
import { breakPointPx, spacerSizeEm } from "./layout";
import { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar as farStar,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCircle,
  faTimes,
  faStar,
  faStarHalfAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle as faCircleLight } from "@fortawesome/pro-light-svg-icons";

// TODO: define border radius
// TODO: when we do button -- https://eightshapes.com/articles/size-in-design-systems.html
// TODO: border-sizing reset

/* Font Awesome Library */
library.add(
  faChevronLeft,
  faChevronRight,
  faCircle,
  faCircleLight,
  faComment,
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  faTimes,
  faBars,
  faStar,
  farStar,
  faStarHalfAlt
);

// TODO: extract "Reset" from the rest, etc
const GlobalStyle = createGlobalStyle`
    /* Fonts */
    /* IMPORTANT NOTE: Cus we self-host fonts, we have some extra steps, and an ASSUMPTION, that the font is available in fonts/ directory. */
    @font-face {
      font-family: ${fontFamily.primary};
      src: url("../assets/fonts/CerebriSans-Light.woff2") format("woff2"),
      url("../assets/fonts/CerebriSans-Light.woff") format('woff'),
      url("../assets/fonts/CerebriSans-Light.ttf") format('truetype');
      font-weight: ${fontWeight.light};
    }
    @font-face {
      font-family: ${fontFamily.primary};
      src: url("../assets/fonts/CerebriSans-Regular.woff2") format("woff2"),
      url("../assets/fonts/CerebriSans-Regular.woff") format('woff'),
      url("../assets/fonts/CerebriSans-Regular.ttf") format('truetype');
      font-weight: ${fontWeight.body};
    }

    @font-face {
      font-family: ${fontFamily.primary};
      src: url("../assets/fonts/CerebriSans-Medium.woff2") format("woff2"),
      url("../assets/fonts/CerebriSans-Medium.woff") format('woff'),
      url("../assets/fonts/CerebriSans-Medium.ttf") format('truetype');
      font-weight: ${fontWeight.medium};
    }

    html {
      font-size: 14px;
      @media (min-width: ${breakPointPx.md}) {
        font-size: 16px;
      }
    }
    body {
      /* Font defaults for body text */
      font-family: ${fontFamily.stack};
      font-size: ${fontSize.p};
      font-weight: ${fontWeight.body};
      margin: 0;
      * {
        margin: 0;
        padding: 0;
      }

      ul, ol {
        margin-left: ${spacerSizeEm.md}; 
        margin-top: ${spacerSizeEm.sm};
        list-style-position: inside; 
      }

      /* https://stackoverflow.com/questions/11737266/what-is-default-list-styling-css */
      ul { 
        list-style-type: disc; 
          
      }
      ol { 
        list-style-type: decimal; 
        list-style-position: inside; 
      }
      ul ul, ol ul { 
        list-style-type: circle; 
      }
      ol ol, ul ol { 
        list-style-type: lower-latin; 
      }

      .box {
        ul, ol, ul ul, ol ul, ol ol, ul ol {
          margin-left: ${spacerSizeEm.sm}; 
        }
      }
      
      a {
        text-decoration: none;
      }

      /* https://github.com/necolas/normalize.css/blob/master/normalize.css */
      /**
       * 1. Change the font styles in all browsers.
       * 2. Remove the margin in Firefox and Safari.
      */

      button,
      input,
      optgroup,
      select,
      textarea {
        color: inherit;
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: ${lineHeight.dense}; /* 1 */
      }

      line-height: ${lineHeight.default};
    }
    `;

export default GlobalStyle;
