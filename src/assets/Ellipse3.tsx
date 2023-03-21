export default function Ellipse3(props: Ellipse3Props) {
  return (
    <div
      className={`w-12 h-12 absolute left-[840px] top-[2302px] drop-shadow-lg`}
    >
      <svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio={"none"}
        viewBox={"0 0 48 48"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <g filter={"url(#filter0_d_3_1374)"}>
          <path
            d={
              "M 44 20 C 44 31.046 35.046 40 24 40 C 12.954 40 4 31.046 4 20 C 4 8.954 12.954 0 24 0 C 35.046 0 44 8.954 44 20 Z"
            }
            fill={"url(#paint0_linear_3_1374)"}
            shapeRendering={"crispEdges"}
          ></path>
        </g>
        <defs>
          <filter
            id={"filter0_d_3_1374"}
            x={"0"}
            y={"0"}
            width={"48"}
            height={"48"}
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
            <feOffset dy={"4"}></feOffset>
            <feGaussianBlur stdDeviation={"2"}></feGaussianBlur>
            <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>
            <feColorMatrix
              type={"matrix"}
              values={"0 0 0 0 1 0 0 0 0 0.876036 0 0 0 0 0.785 0 0 0 1 0"}
            ></feColorMatrix>
            <feBlend
              mode={"normal"}
              in2={"BackgroundImageFix"}
              result={"effect1_dropShadow_3_1374"}
            ></feBlend>
            <feBlend
              mode={"normal"}
              in={"SourceGraphic"}
              in2={"effect1_dropShadow_3_1374"}
              result={"shape"}
            ></feBlend>
          </filter>
          <linearGradient
            id={"paint0_linear_3_1374"}
            x1={"24"}
            y1={"0"}
            x2={"24"}
            y2={"40"}
            gradientUnits={"userSpaceOnUse"}
          >
            <stop stopColor={"#FF5050"}></stop>
            <stop offset={"1"} stopColor={"white"} stopOpacity={"0"}></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

Ellipse3.defaultProps = {};

interface Ellipse3Props {}

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
