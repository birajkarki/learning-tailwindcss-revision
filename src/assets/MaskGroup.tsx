export default function MaskGroup(props: MaskGroupProps) {
  return (
    <div className={`absolute w-[1272px] h-[477px] left-[100px] top-[883px]`}>
      <svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio={"none"}
        viewBox={"0 0 1272 477"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <g filter={"url(#filter0_d_3_1021)"}>
          <rect
            x={"14"}
            y={"16"}
            width={"1240"}
            height={"445"}
            rx={"8"}
            fill={"white"}
          ></rect>
        </g>
        <mask
          id={"mask0_3_1021"}
          maskUnits={"userSpaceOnUse"}
          x={"14"}
          y={"16"}
          width={"1240"}
          height={"445"}
        >
          <rect
            x={"14"}
            y={"16"}
            width={"1240"}
            height={"445"}
            rx={"8"}
            fill={"white"}
          ></rect>
        </mask>
        <g mask={"url(#mask0_3_1021)"}>
          <g filter={"url(#filter1_f_3_1021)"}>
            <path
              d={
                "M 1106.6 151.165 C 990.946 140.435 982.521 206.389 967.203 243.966 C 961.458 258.059 951.622 268.484 941.57 276.009 C 928.445 285.839 912.88 291.841 896.637 294.006 C 792.152 307.944 809.201 449.124 848.486 461 H 1265.14 C 1367.77 265.439 1222.25 161.908 1106.6 151.165 Z"
              }
              fill={"#EBF3FE"}
            ></path>
          </g>
          <g filter={"url(#filter2_f_3_1021)"}>
            <path
              d={
                "M 815.119 146.005 C 725.044 146.554 700.948 235.012 749.816 284.749 C 817.407 353.551 1003.01 144.856 815.119 146.005 Z"
              }
              fill={"#EBF3FE"}
            ></path>
          </g>
        </g>
        <defs>
          <filter
            id={"filter0_d_3_1021"}
            x={"0"}
            y={"0"}
            width={"1272"}
            height={"477"}
            filterUnits={"userSpaceOnUse"}
            colorInterpolationFilters={"sRGB"}
          >
            <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>
            <feColorMatrix
              in={"SourceAlpha"}
              type={"matrix"}
              values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
              result={"hardAlpha"}
            ></feColorMatrix>
            <feOffset dx={"2"}></feOffset>
            <feGaussianBlur stdDeviation={"8"}></feGaussianBlur>
            <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>
            <feColorMatrix
              type={"matrix"}
              values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}
            ></feColorMatrix>
            <feBlend
              mode={"normal"}
              in2={"BackgroundImageFix"}
              result={"effect1_dropShadow_3_1021"}
            ></feBlend>
            <feBlend
              mode={"normal"}
              in={"SourceGraphic"}
              in2={"effect1_dropShadow_3_1021"}
              result={"shape"}
            ></feBlend>
          </filter>
          <filter
            id={"filter1_f_3_1021"}
            x={"814"}
            y={"146"}
            width={"490"}
            height={"319"}
            filterUnits={"userSpaceOnUse"}
            colorInterpolationFilters={"sRGB"}
          >
            <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>
            <feBlend
              mode={"normal"}
              in={"SourceGraphic"}
              in2={"BackgroundImageFix"}
              result={"shape"}
            ></feBlend>
            <feGaussianBlur
              stdDeviation={"2"}
              result={"effect1_foregroundBlur_3_1021"}
            ></feGaussianBlur>
          </filter>
          <filter
            id={"filter2_f_3_1021"}
            x={"721"}
            y={"142"}
            width={"179.867"}
            height={"160.668"}
            filterUnits={"userSpaceOnUse"}
            colorInterpolationFilters={"sRGB"}
          >
            <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>
            <feBlend
              mode={"normal"}
              in={"SourceGraphic"}
              in2={"BackgroundImageFix"}
              result={"shape"}
            ></feBlend>
            <feGaussianBlur
              stdDeviation={"2"}
              result={"effect1_foregroundBlur_3_1021"}
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

MaskGroup.defaultProps = {};

interface MaskGroupProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
