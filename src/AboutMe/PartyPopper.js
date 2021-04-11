import React from "react";
import { css, jsx } from "@emotion/react";

const PartyPopper = ({ isLast, ...props }) => {
  return (
    <div
      css={css`
        ${!isLast &&
        css`
          margin-right: 6px;
        `}
      `}
    >
      <svg
        width="28"
        height="27"
        viewBox="0 0 28 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.86201 5.26498C8.77664 5.35035 8.71185 5.45326 8.65773 5.56607L8.65163 5.55998L0.102044 24.8194L0.110429 24.8278C-0.0481225 25.135 0.217146 25.76 0.760643 26.3043C1.30414 26.8478 1.9292 27.1131 2.23639 26.9545L2.24401 26.9621L21.5034 18.4118L21.4973 18.4049C21.6094 18.3516 21.7123 18.2868 21.7984 18.1999C22.9891 17.0092 21.0583 13.1483 17.4871 9.57636C13.9143 6.00438 10.0534 4.07432 8.86201 5.26498V5.26498Z"
          fill="#DD2E44"
        />
        <path
          d="M9.90937 8.70432L0.317003 24.3354L0.102044 24.8194L0.110429 24.8278C-0.0481225 25.135 0.217146 25.76 0.760643 26.3043C0.937488 26.4811 1.12119 26.6153 1.30109 26.7289L12.9584 12.5156L9.90937 8.70432Z"
          fill="#EA596E"
        />
        <path
          d="M17.5412 9.5169C21.101 13.0782 23.0775 16.8743 21.9539 17.9964C20.8311 19.1199 17.035 17.1441 13.473 13.5844C9.91241 10.023 7.93662 6.22544 9.05944 5.10262C10.183 3.9798 13.9791 5.95559 17.5412 9.5169V9.5169Z"
          fill="#A0041E"
        />
        <path
          d="M14.1705 9.93081C14.0188 10.0535 13.8206 10.1176 13.611 10.0947C12.9493 10.023 12.3929 9.79284 12.0034 9.42924C11.591 9.04429 11.3875 8.52748 11.4431 8.0099C11.5407 7.10127 12.4523 6.26735 14.0066 6.43505C14.6111 6.49985 14.8809 6.30547 14.8901 6.21247C14.9007 6.12024 14.6789 5.8725 14.0745 5.80695C13.4128 5.73529 12.8563 5.50509 12.4661 5.14149C12.0537 4.75654 11.8494 4.23973 11.9058 3.72215C12.0049 2.81352 12.9158 1.9796 14.4685 2.14807C14.9091 2.19533 15.1416 2.10462 15.24 2.04592C15.3185 1.9979 15.3497 1.95216 15.3528 1.92548C15.3619 1.83325 15.1431 1.58551 14.5371 1.51996C14.1187 1.47422 13.8153 1.09919 13.8618 0.67994C13.9068 0.261455 14.281 -0.0411644 14.701 0.00457157C16.2538 0.171508 16.9673 1.17999 16.8689 2.08937C16.7698 2.99952 15.8589 3.83191 14.3047 3.66498C13.8641 3.61695 13.6339 3.70843 13.5348 3.76712C13.4563 3.81438 13.4242 3.86088 13.4212 3.8868C13.4113 3.97979 13.6316 4.22677 14.2376 4.29232C15.7903 4.46002 16.5038 5.46774 16.4055 6.37712C16.3071 7.28574 15.3962 8.11966 13.8427 7.9512C13.4021 7.90394 13.1704 7.99541 13.0713 8.05335C12.992 8.10213 12.9615 8.14787 12.9585 8.17378C12.9486 8.26602 13.1689 8.51376 13.7741 8.57931C14.1918 8.62505 14.496 9.00084 14.4495 9.41933C14.4281 9.62819 14.3222 9.80885 14.1705 9.93081V9.93081Z"
          fill="#AA8DD8"
        />
        <path
          d="M23.3717 16.9803C24.8757 16.5557 25.9131 17.2265 26.1601 18.1069C26.4071 18.9866 25.872 20.1002 24.3688 20.5233C23.7818 20.6879 23.6057 20.9684 23.6294 21.0576C23.6553 21.1476 23.9533 21.2955 24.5388 21.13C26.0419 20.707 27.0794 21.3778 27.3264 22.2574C27.5749 23.1379 27.0382 24.25 25.5343 24.6738C24.9481 24.8385 24.7712 25.1198 24.7972 25.2089C24.8223 25.2981 25.1196 25.446 25.7058 25.2814C26.1098 25.1678 26.5321 25.4033 26.6457 25.8081C26.7585 26.2136 26.5229 26.6344 26.1174 26.7487C24.615 27.1718 23.5768 26.5025 23.3283 25.6213C23.0813 24.7417 23.6172 23.6295 25.1219 23.2057C25.7088 23.0403 25.8849 22.7605 25.859 22.6706C25.8346 22.5814 25.5373 22.4328 24.9519 22.5974C23.4472 23.0212 22.4105 22.352 22.1628 21.47C21.915 20.5904 22.4509 19.4782 23.9549 19.0536C24.5403 18.8897 24.7164 18.6077 24.692 18.5193C24.6661 18.4293 24.3695 18.2815 23.7833 18.4461C23.3778 18.5604 22.9578 18.3241 22.8435 17.9194C22.7299 17.5154 22.9662 17.0946 23.3717 16.9803V16.9803Z"
          fill="#77B255"
        />
        <path
          d="M17.5329 14.9244C17.3088 14.9244 17.0878 14.8261 16.9368 14.6386C16.6738 14.3093 16.728 13.8298 17.0557 13.5668C17.2219 13.4334 21.1857 10.3203 26.7876 11.1215C27.2046 11.1809 27.4942 11.5666 27.4348 11.9836C27.3753 12.3998 26.9927 12.6925 26.5719 12.63C21.6225 11.9272 18.0444 14.7293 18.0093 14.7575C17.8676 14.8703 17.6999 14.9244 17.5329 14.9244V14.9244Z"
          fill="#AA8DD8"
        />
        <path
          d="M4.38599 11.7534C4.31357 11.7534 4.23963 11.7427 4.16646 11.7214C3.76322 11.6002 3.53454 11.1756 3.65574 10.7724C4.51939 7.89632 5.30223 3.30672 4.34025 2.10996C4.23277 1.97427 4.07041 1.84088 3.69843 1.86908C2.98342 1.92396 3.05126 3.43249 3.05202 3.44774C3.08404 3.86774 2.76846 4.23363 2.34921 4.26489C1.92311 4.2908 1.56332 3.98132 1.53206 3.56131C1.45355 2.51015 1.78056 0.485567 3.58409 0.349121C4.38904 0.28814 5.05755 0.567892 5.52939 1.15484C7.33672 3.40429 5.50195 9.92548 5.11624 11.2107C5.01715 11.5407 4.71376 11.7534 4.38599 11.7534Z"
          fill="#77B255"
        />
        <path
          d="M19.4378 7.94207C20.0693 7.94207 20.5812 7.43016 20.5812 6.79867C20.5812 6.16719 20.0693 5.65527 19.4378 5.65527C18.8064 5.65527 18.2944 6.16719 18.2944 6.79867C18.2944 7.43016 18.8064 7.94207 19.4378 7.94207Z"
          fill="#5C913B"
        />
        <path
          d="M1.52453 14.8025C2.36651 14.8025 3.04907 14.1199 3.04907 13.2779C3.04907 12.4359 2.36651 11.7534 1.52453 11.7534C0.682557 11.7534 0 12.4359 0 13.2779C0 14.1199 0.682557 14.8025 1.52453 14.8025Z"
          fill="#9266CC"
        />
        <path
          d="M24.7738 15.5647C25.4053 15.5647 25.9172 15.0528 25.9172 14.4213C25.9172 13.7898 25.4053 13.2779 24.7738 13.2779C24.1423 13.2779 23.6304 13.7898 23.6304 14.4213C23.6304 15.0528 24.1423 15.5647 24.7738 15.5647Z"
          fill="#5C913B"
        />
        <path
          d="M17.9132 24.7119C18.5447 24.7119 19.0566 24.2 19.0566 23.5685C19.0566 22.9371 18.5447 22.4251 17.9132 22.4251C17.2817 22.4251 16.7698 22.9371 16.7698 23.5685C16.7698 24.2 17.2817 24.7119 17.9132 24.7119Z"
          fill="#5C913B"
        />
        <path
          d="M21.3434 4.13073C22.1854 4.13073 22.8679 3.44817 22.8679 2.6062C22.8679 1.76422 22.1854 1.08167 21.3434 1.08167C20.5014 1.08167 19.8188 1.76422 19.8188 2.6062C19.8188 3.44817 20.5014 4.13073 21.3434 4.13073Z"
          fill="#FFCC4D"
        />
        <path
          d="M24.7738 7.17981C25.4053 7.17981 25.9172 6.66789 25.9172 6.03641C25.9172 5.40492 25.4053 4.89301 24.7738 4.89301C24.1423 4.89301 23.6304 5.40492 23.6304 6.03641C23.6304 6.66789 24.1423 7.17981 24.7738 7.17981Z"
          fill="#FFCC4D"
        />
        <path
          d="M22.4869 10.2288C23.1184 10.2288 23.6303 9.71693 23.6303 9.08545C23.6303 8.45396 23.1184 7.94205 22.4869 7.94205C21.8554 7.94205 21.3435 8.45396 21.3435 9.08545C21.3435 9.71693 21.8554 10.2288 22.4869 10.2288Z"
          fill="#FFCC4D"
        />
        <path
          d="M5.71689 18.6138C6.34837 18.6138 6.86029 18.1019 6.86029 17.4704C6.86029 16.8389 6.34837 16.327 5.71689 16.327C5.0854 16.327 4.57349 16.8389 4.57349 17.4704C4.57349 18.1019 5.0854 18.6138 5.71689 18.6138Z"
          fill="#FFCC4D"
        />
      </svg>
    </div>
  );
};

export default PartyPopper;
