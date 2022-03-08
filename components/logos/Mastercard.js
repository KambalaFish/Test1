import * as React from "react";

function SvgMastercard(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         // width={66}
         // height={66}
         width={'100%'}
         height={'100%'}
         viewBox="80 10 45 45"
         {...props}
    >
      <path
        fill="#FFB600"
        d="M64.5 33.001c.002 10.435-8.436 18.896-18.85 18.898-10.412.004-18.855-8.455-18.858-18.889V33c-.004-10.437 8.437-18.897 18.849-18.9S64.497 22.556 64.5 32.991v.01z"
      />
      <path
        fill="#F7981D"
        d="M45.641 14.101c10.412-.003 18.856 8.455 18.859 18.891v.01c.002 10.435-8.436 18.896-18.85 18.898-10.412.004-18.855-8.455-18.858-18.889"
      />
      <path
        fill="#FF8500"
        d="M45.641 14.101c10.412-.003 18.856 8.455 18.859 18.891v.01c.002 10.435-8.436 18.896-18.85 18.898"
      />
      <path
        fill="#FF5050"
        d="M20.234 14.105C9.882 14.172 1.5 22.611 1.5 33.001c0 10.431 8.447 18.896 18.855 18.896 4.882 0 9.336-1.867 12.686-4.924v-.002h.002a18.978 18.978 0 001.915-2.023h-3.862a18.084 18.084 0 01-1.406-1.945h6.662c.406-.649.771-1.326 1.1-2.023H28.59a18.346 18.346 0 01-.787-1.984h10.436a19.058 19.058 0 00.536-10.04H27.248c.144-.671.323-1.335.538-1.984h10.44a19.155 19.155 0 00-.812-2.024h-8.826c.318-.68.68-1.344 1.082-1.984h6.657a19.108 19.108 0 00-1.462-2.022h-3.713a17.55 17.55 0 011.891-1.908 18.756 18.756 0 00-12.688-4.925c-.042-.004-.082-.004-.121-.004z"
      />
      <path
        fill="#E52836"
        d="M1.5 33.001c0 10.431 8.447 18.896 18.855 18.896 4.882 0 9.336-1.867 12.686-4.924v-.002h.002a18.978 18.978 0 001.915-2.023h-3.862a18.084 18.084 0 01-1.406-1.945h6.662c.406-.649.771-1.326 1.1-2.023H28.59a18.346 18.346 0 01-.787-1.984h10.436a19.058 19.058 0 00.536-10.04H27.248c.144-.671.323-1.335.538-1.984h10.44a19.155 19.155 0 00-.812-2.024h-8.826c.318-.68.68-1.344 1.082-1.984h6.657a19.108 19.108 0 00-1.462-2.022h-3.713a17.55 17.55 0 011.891-1.908 18.756 18.756 0 00-12.688-4.925h-.121"
      />
      <path
        fill="#CB2026"
        d="M20.355 51.896c4.882 0 9.336-1.867 12.686-4.924v-.002h.002a18.978 18.978 0 001.915-2.023h-3.862a18.084 18.084 0 01-1.406-1.945h6.662c.406-.649.771-1.326 1.1-2.023H28.59a18.346 18.346 0 01-.787-1.984h10.436a19.058 19.058 0 00.536-10.04H27.248c.144-.671.323-1.335.538-1.984h10.44a19.155 19.155 0 00-.812-2.024h-8.826c.318-.68.68-1.344 1.082-1.984h6.657a19.108 19.108 0 00-1.462-2.022h-3.713a17.55 17.55 0 011.891-1.908 18.756 18.756 0 00-12.688-4.925h-.121"
      />
      <path
        fill="#FFF"
        d="M27.135 37.812l.251-1.71c-.138 0-.34.059-.519.059-.697 0-.775-.373-.73-.647l.564-3.489h1.062l.257-1.893h-1.001l.205-1.176h-2.009c-.044.044-1.185 6.615-1.185 7.415 0 1.185.662 1.713 1.599 1.705.732-.008 1.305-.211 1.506-.264zM27.771 34.551c0 2.844 1.872 3.52 3.468 3.52 1.473 0 2.119-.331 2.119-.331l.355-1.94s-1.121.496-2.133.496c-2.155 0-1.777-1.611-1.777-1.611h4.08s.264-1.304.264-1.836c0-1.325-.66-2.939-2.863-2.939-2.02-.002-3.513 2.178-3.513 4.641zm3.521-2.842c1.132 0 .923 1.276.923 1.379h-2.229c-.001-.131.209-1.379 1.306-1.379zM44.002 37.812l.359-2.196s-.984.498-1.66.498c-1.424 0-1.995-1.092-1.995-2.261 0-2.376 1.225-3.684 2.589-3.684 1.023 0 1.844.577 1.844.577l.328-2.131s-1.218-.494-2.261-.494c-2.318 0-4.573 2.014-4.573 5.799 0 2.508 1.219 4.166 3.613 4.166.678 0 1.756-.274 1.756-.274zM16.093 29.939c-1.377 0-2.431.441-2.431.441l-.292 1.734s.872-.354 2.188-.354c.746 0 1.293.084 1.293.693 0 .37-.066.507-.066.507s-.589-.051-.863-.051c-1.734 0-3.559.742-3.559 2.982 0 1.764 1.195 2.168 1.938 2.168 1.416 0 2.025-.92 2.059-.924l-.064.77h1.767l.788-5.541c-.001-2.348-2.047-2.425-2.758-2.425zm.431 4.51c.037.34-.214 1.926-1.422 1.926-.623 0-.786-.479-.786-.76 0-.551.299-1.212 1.771-1.212.343 0 .379.038.437.046zM20.729 38.02c.452 0 3.036.117 3.036-2.557 0-2.5-2.392-2.006-2.392-3.011 0-.497.389-.657 1.103-.657.282 0 1.372.091 1.372.091l.254-1.777s-.705-.157-1.852-.157c-1.487 0-2.994.593-2.994 2.626 0 2.306 2.514 2.072 2.514 3.042 0 .648-.702.702-1.244.702-.936 0-1.777-.323-1.781-.308l-.269 1.758c.047.016.569.248 2.253.248zM60.631 28.344l-.433 2.693s-.756-1.045-1.938-1.045c-1.84 0-3.373 2.222-3.373 4.775 0 1.65.817 3.263 2.489 3.263 1.203 0 1.868-.84 1.868-.84l-.087.717h1.952l1.534-9.567-2.012.004zm-.932 5.254c0 1.061-.525 2.479-1.613 2.479-.724 0-1.061-.607-1.061-1.562 0-1.559.698-2.59 1.579-2.59.724.001 1.095.499 1.095 1.673zM5.223 37.916l1.223-7.223.18 7.223h1.383l2.582-7.223-1.145 7.223H11.5l1.584-9.577H9.906l-1.98 5.876-.103-5.876H4.895L3.29 37.916h1.933zM36.153 37.931c.584-3.329.692-6.034 2.087-5.541.244-1.288.479-1.786.746-2.332 0 0-.125-.026-.388-.026-.897 0-1.563 1.231-1.563 1.231l.178-1.13h-1.87l-1.251 7.798h2.061zM48.635 29.939c-1.377 0-2.432.441-2.432.441l-.29 1.734s.869-.354 2.187-.354c.748 0 1.295.084 1.295.693 0 .37-.068.507-.068.507s-.589-.051-.863-.051c-1.736 0-3.559.742-3.559 2.982 0 1.764 1.196 2.168 1.938 2.168 1.417 0 2.026-.92 2.059-.924l-.064.77h1.769l.788-5.541c-.002-2.348-2.047-2.425-2.76-2.425zm.43 4.51c.038.34-.21 1.926-1.422 1.926-.623 0-.784-.479-.784-.76 0-.551.299-1.212 1.769-1.212.343 0 .379.038.437.046zM53.006 37.931c.586-3.329.693-6.034 2.089-5.541.244-1.288.479-1.786.746-2.332 0 0-.126-.026-.388-.026-.9 0-1.564 1.231-1.564 1.231l.18-1.13h-1.871l-1.252 7.798h2.06z"
      />
      <g>
        <path
          fill="#DCE5E5"
          d="M24.03 36.371c0 1.185.662 1.713 1.599 1.705.732-.008 1.305-.211 1.506-.265l.251-1.71c-.138 0-.34.059-.519.059-.697 0-.775-.373-.73-.647l.564-3.489h1.062l.257-1.893h-1.001l.205-1.176M28.755 34.551c0 2.844.888 3.52 2.483 3.52 1.473 0 2.119-.331 2.119-.331l.355-1.94s-1.121.496-2.133.496c-2.155 0-1.777-1.611-1.777-1.611h4.08s.264-1.304.264-1.836c0-1.325-.66-2.939-2.863-2.939-2.019-.002-2.528 2.178-2.528 4.641zm2.537-2.842c1.132 0 1.265 1.276 1.265 1.379h-2.571c-.001-.131.209-1.379 1.306-1.379zM44.002 37.812l.359-2.196s-.984.498-1.66.498c-1.424 0-1.995-1.092-1.995-2.261 0-2.376 1.225-3.684 2.589-3.684 1.023 0 1.844.577 1.844.577l.328-2.131s-1.218-.494-2.261-.494c-2.318 0-3.589 2.014-3.589 5.799 0 2.508.234 4.166 2.629 4.166.678 0 1.756-.274 1.756-.274zM13.37 32.115s.872-.354 2.188-.354c.746 0 1.293.084 1.293.693 0 .37-.066.507-.066.507s-.589-.051-.863-.051c-1.734 0-3.559.742-3.559 2.982 0 1.764 1.195 2.168 1.938 2.168 1.416 0 2.025-.92 2.059-.924l-.064.77h1.767l.788-5.541c0-2.35-2.046-2.426-2.757-2.426m1.415 4.51c.037.34-1.198 1.926-2.406 1.926-.623 0-.786-.479-.786-.76 0-.551.299-1.212 1.771-1.212.342 0 1.362.038 1.421.046zM18.476 37.771c.048.017.569.248 2.253.248.452 0 3.036.117 3.036-2.557 0-2.5-2.392-2.006-2.392-3.011 0-.497.389-.657 1.103-.657.282 0 1.372.091 1.372.091l.254-1.777s-.705-.157-1.852-.157c-1.487 0-2.01.593-2.01 2.626 0 2.306 1.529 2.072 1.529 3.042 0 .648-.702.702-1.244.702M60.198 31.037s-.756-1.045-1.938-1.045c-1.84 0-2.389 2.222-2.389 4.775 0 1.65-.167 3.263 1.505 3.263 1.203 0 1.868-.84 1.868-.84l-.087.717h1.952l1.534-9.567m-2.524 5.258c0 1.061-.945 2.479-2.033 2.479-.724 0-1.061-.607-1.061-1.562 0-1.559.698-2.59 1.579-2.59.724.001 1.515.499 1.515 1.673zM5.223 37.916l1.223-7.223.18 7.223h1.383l2.582-7.223-1.145 7.223H11.5l1.584-9.577h-2.338l-2.82 5.876-.103-5.876H6.707l-3.418 9.577h1.934zM34.092 37.931h2.062c.584-3.329.692-6.034 2.087-5.541.244-1.288.479-1.786.746-2.332 0 0-.125-.026-.388-.026-.897 0-1.563 1.231-1.563 1.231l.178-1.13M45.913 32.115s.869-.354 2.187-.354c.748 0 1.295.084 1.295.693 0 .37-.068.507-.068.507s-.589-.051-.863-.051c-1.736 0-3.559.742-3.559 2.982 0 1.764 1.196 2.168 1.938 2.168 1.417 0 2.026-.92 2.059-.924l-.064.77h1.769l.788-5.541c0-2.35-2.045-2.426-2.758-2.426m1.413 4.51c.038.34-1.194 1.926-2.406 1.926-.623 0-.784-.479-.784-.76 0-.551.299-1.212 1.769-1.212.342 0 1.362.038 1.421.046zM50.945 37.931h2.061c.586-3.329.693-6.034 2.089-5.541.244-1.288.479-1.786.746-2.332 0 0-.126-.026-.388-.026-.9 0-1.564 1.231-1.564 1.231l.18-1.13"
        />
      </g>
    </svg>
  );
}

export default SvgMastercard;
