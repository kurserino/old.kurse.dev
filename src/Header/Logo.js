import React, { useEffect, useRef } from "react";
import { useAppDispatch } from "../hooks";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import { setTabsLeftOffset } from "../store/slices/tabs";

var Logo = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const logoRef = useRef(null);

  var rectDOM = logoRef.current
    ? logoRef.current.getBoundingClientRect()
    : false;

  useEffect(() => {
    if (rectDOM) {
      dispatch(setTabsLeftOffset(rectDOM.right));
    }
  }, [rectDOM]);

  return (
    <div
      css={css`
        padding: 0px 0px 0 38px;

        @media screen and (min-width: 991px) {
          padding: 12px 15px;
        }

        svg {
          width: 33px;

          @media screen and (min-width: 991px) {
            width: 30px;
          }
        }
      `}
      ref={logoRef}
    >
      <svg viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.21018 0.812933V9.32459H3.67685C3.87298 9.32459 4.02178 9.29754 4.12323 9.24343C4.22468 9.18256 4.32613 9.08449 4.42758 8.94922L6.416 5.98688C6.53774 5.8178 6.67638 5.69268 6.83194 5.61152C6.9875 5.5236 7.18702 5.47963 7.4305 5.47963H10.3117L7.59282 9.22314C7.33581 9.56131 7.03146 9.8386 6.67977 10.055C6.83532 10.17 6.97735 10.3053 7.10586 10.4608C7.23436 10.6096 7.3561 10.7787 7.47108 10.9681L10.4334 16H7.59282C7.3561 16 7.1532 15.9628 6.98412 15.8884C6.81503 15.8072 6.673 15.6686 6.55803 15.4725L4.56961 11.7492C4.47492 11.5802 4.37685 11.4719 4.2754 11.4246C4.17395 11.3705 4.02178 11.3434 3.81888 11.3434H3.21018V16H0.0652251V0.812933H3.21018ZM14.3411 7.10283C14.6658 6.53471 15.0378 6.08833 15.4571 5.76369C15.8832 5.43905 16.3701 5.27673 16.918 5.27673C17.3914 5.27673 17.7769 5.38833 18.0745 5.61152L17.8716 7.92458C17.8378 8.07337 17.7803 8.17482 17.6991 8.22893C17.6247 8.28304 17.5199 8.31009 17.3846 8.31009C17.3305 8.31009 17.2595 8.30671 17.1716 8.29994C17.0837 8.29318 16.9924 8.28642 16.8977 8.27965C16.803 8.26613 16.7049 8.25598 16.6035 8.24922C16.5088 8.23569 16.4209 8.22893 16.3397 8.22893C15.8798 8.22893 15.5112 8.35067 15.2339 8.59415C14.9634 8.83763 14.7334 9.1758 14.544 9.60865V16H11.3991V5.47963H13.2658C13.4213 5.47963 13.5498 5.49316 13.6513 5.52021C13.7595 5.54727 13.8474 5.59123 13.9151 5.6521C13.9895 5.70621 14.0436 5.7806 14.0774 5.87529C14.118 5.96998 14.1518 6.08495 14.1788 6.22022L14.3411 7.10283ZM25.8321 7.78255C25.7509 7.91105 25.663 8.00236 25.5683 8.05646C25.4804 8.11057 25.3654 8.13762 25.2234 8.13762C25.0746 8.13762 24.9258 8.10719 24.777 8.04632C24.6282 7.97869 24.4659 7.90767 24.2901 7.83327C24.121 7.75888 23.9282 7.69124 23.7118 7.63037C23.4954 7.56274 23.2485 7.52892 22.9712 7.52892C22.5722 7.52892 22.2644 7.6067 22.048 7.76226C21.8384 7.91105 21.7335 8.12072 21.7335 8.39125C21.7335 8.58739 21.8012 8.74971 21.9364 8.87821C22.0785 9.00671 22.2644 9.12169 22.4944 9.22314C22.7243 9.31783 22.9847 9.40913 23.2756 9.49705C23.5664 9.58498 23.864 9.68305 24.1683 9.79126C24.4727 9.89947 24.7703 10.028 25.0611 10.1768C25.3519 10.3188 25.6123 10.498 25.8422 10.7145C26.0722 10.9241 26.2548 11.1811 26.3901 11.4855C26.5321 11.7898 26.6031 12.155 26.6031 12.5811C26.6031 13.1019 26.5084 13.5821 26.3191 14.0217C26.1297 14.4613 25.8456 14.8401 25.4669 15.158C25.0949 15.4758 24.6316 15.7227 24.077 15.8985C23.5292 16.0744 22.8968 16.1623 22.1799 16.1623C21.8214 16.1623 21.463 16.1285 21.1045 16.0609C20.7461 15.9932 20.3978 15.9019 20.0596 15.787C19.7282 15.672 19.4205 15.5367 19.1364 15.3812C18.8523 15.2188 18.6089 15.0464 18.406 14.8638L19.1364 13.7072C19.2176 13.572 19.319 13.4671 19.4407 13.3927C19.5693 13.3116 19.7316 13.271 19.9277 13.271C20.1103 13.271 20.2726 13.3116 20.4147 13.3927C20.5635 13.4739 20.7224 13.5618 20.8915 13.6565C21.0606 13.7512 21.2567 13.8391 21.4799 13.9203C21.7098 14.0014 21.9973 14.042 22.3422 14.042C22.5857 14.042 22.792 14.0183 22.9611 13.971C23.1301 13.9169 23.2654 13.8459 23.3669 13.758C23.4683 13.67 23.5427 13.572 23.5901 13.4637C23.6374 13.3555 23.6611 13.2439 23.6611 13.129C23.6611 12.9193 23.5901 12.7468 23.448 12.6116C23.306 12.4763 23.12 12.3613 22.8901 12.2666C22.6601 12.1652 22.3963 12.0739 22.0987 11.9927C21.8079 11.9048 21.5103 11.8067 21.206 11.6985C20.9016 11.5903 20.6007 11.4618 20.3031 11.313C20.0123 11.1575 19.7519 10.9647 19.5219 10.7347C19.292 10.498 19.106 10.2106 18.9639 9.87242C18.8219 9.53425 18.7509 9.12507 18.7509 8.64487C18.7509 8.19849 18.8354 7.77579 19.0045 7.37675C19.1804 6.97095 19.4407 6.61587 19.7857 6.31152C20.1306 6.00717 20.5635 5.76708 21.0842 5.59123C21.605 5.40862 22.2137 5.31731 22.9103 5.31731C23.2891 5.31731 23.6543 5.35113 24.006 5.41876C24.3645 5.4864 24.6992 5.58108 25.0104 5.70282C25.3215 5.82456 25.6055 5.96998 25.8625 6.13906C26.1195 6.30138 26.3461 6.48061 26.5423 6.67674L25.8321 7.78255Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default Logo;
