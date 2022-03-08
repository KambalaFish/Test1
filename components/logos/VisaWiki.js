import * as React from "react";

function SvgVisaWiki(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={'100%'}
      height={'80%'}
      // viewBox="300 0 600 324.684"
      viewBox="360 0 300 324.684"
      overflow="visible"
      {...props}
    >
      <defs>
        <linearGradient id="VisaWiki_svg__a">
          <stop offset={0} stopColor="#20225f" />
          <stop offset={0.2} stopColor="#1a1f61" />
          <stop offset={0.41} stopColor="#172272" />
          <stop offset={0.595} stopColor="#152682" />
          <stop offset={0.802} stopColor="#12288e" />
          <stop offset={1} stopColor="#0e2c9a" />
        </linearGradient>
        <linearGradient
          xlinkHref="#VisaWiki_svg__a"
          id="VisaWiki_svg__b"
          x1={-60.048}
          y1={431.608}
          x2={740.051}
          y2={431.608}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(75.136 -428.033) scale(1.24914)"
        />
      </defs>
      <path
        d="M651.185.5c-70.933 0-134.322 36.766-134.322 104.694 0 77.9 112.423 83.28 112.423 122.415 0 16.478-18.884 31.229-51.137 31.229-45.773 0-79.984-20.611-79.984-20.611l-14.638 68.547s39.41 17.41 91.734 17.41c77.552 0 138.576-38.572 138.576-107.66 0-82.316-112.89-87.537-112.89-123.86 0-12.91 15.501-27.053 47.662-27.053 36.286 0 65.892 14.99 65.892 14.99l14.326-66.204S696.614.5 651.185.5zM2.218 5.497L.5 15.49s29.842 5.461 56.719 16.356c34.606 12.492 37.072 19.765 42.9 42.353l63.51 244.832h85.138L379.927 5.497h-84.942L210.707 218.67l-34.39-180.696c-3.154-20.68-19.13-32.477-38.685-32.477H2.218zm411.865 0L347.449 319.03h80.999l66.4-313.534h-80.765zm451.759 0c-19.532 0-29.88 10.457-37.474 28.73L709.699 319.03h84.942l16.434-47.468h103.483l9.994 47.468H999.5L934.115 5.497h-68.273zm11.047 84.707l25.178 117.653h-67.454L876.89 90.204z"
        fill="url(#VisaWiki_svg__b)"
      />
    </svg>
  );
}

export default SvgVisaWiki;
