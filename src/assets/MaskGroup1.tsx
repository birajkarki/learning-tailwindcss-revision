export default function MaskGroup1(props: MaskGroup1Props) {
  return (
    <div className={`absolute w-[1272px] h-[477px] left-[100px] top-[1477px]`}>
      <svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio={"none"}
        viewBox={"0 0 1272 477"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <g filter={"url(#filter0_d_3_1147)"}>
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
          id={"mask0_3_1147"}
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
        <g mask={"url(#mask0_3_1147)"}>
          <g filter={"url(#filter1_f_3_1147)"}>
            <path
              d={
                "M 298.32 406.903 C 382.751 259.626 300.161 208.412 259.487 165.248 C 244.233 149.058 236.337 129.655 232.43 111.723 C 227.32 88.308 228.783 63.969 235.758 41.057 C 280.611 -106.334 82.538 -169.312 42.914 -124.279 L-209.854 429.757 C-12.074 684.865 213.874 554.169 298.32 406.903 Z"
              }
              fill={"#EBF3FE"}
            ></path>
          </g>
          <g filter={"url(#filter2_f_3_1147)"}>
            <path
              d={
                "M 482.011 22.447 C 535.925 -97.661 432.918 -183.365 337.136 -148.558 C 204.645 -100.42 369.55 272.991 482.011 22.447 Z"
              }
              fill={"#EBF3FE"}
            ></path>
          </g>
        </g>
        <defs>
          <filter
            id={"filter0_d_3_1147"}
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
              result={"effect1_dropShadow_3_1147"}
            ></feBlend>
            <feBlend
              mode={"normal"}
              in={"SourceGraphic"}
              in2={"effect1_dropShadow_3_1147"}
              result={"shape"}
            ></feBlend>
          </filter>
          <filter
            id={"filter1_f_3_1147"}
            x={"-213.854"}
            y={"-142.582"}
            width={"552.773"}
            height={"721.011"}
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
              result={"effect1_foregroundBlur_3_1147"}
            ></feGaussianBlur>
          </filter>
          <filter
            id={"filter2_f_3_1147"}
            x={"283.948"}
            y={"-160.38"}
            width={"216.925"}
            height={"272.584"}
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
              result={"effect1_foregroundBlur_3_1147"}
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

MaskGroup1.defaultProps = {};

interface MaskGroup1Props {}

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
