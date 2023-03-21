export default function Vector169(props: Vector169Props) {
  return (
    <div
      className={`absolute w-[19px] left-[3.32%] right-[1.68%] top-[8.34%] bottom-[6.66%] drop-shadow-lg`}
    >
      <svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio={"none"}
        viewBox={"0 0 19 17"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <g filter={"url(#filter0_d_3_1162)"}>
          <path d={"M 5 9.5 L 7.769 12 L 14 5"} stroke={"white"}></path>
        </g>
        <defs>
          <filter
            id={"filter0_d_3_1162"}
            x={"0.664948"}
            y={"0.667603"}
            width={"17.7085"}
            height={"16.0409"}
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
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation={"2"}></feGaussianBlur>
            <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>
            <feColorMatrix
              type={"matrix"}
              values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
            ></feColorMatrix>
            <feBlend
              mode={"normal"}
              in2={"BackgroundImageFix"}
              result={"effect1_dropShadow_3_1162"}
            ></feBlend>
            <feBlend
              mode={"normal"}
              in={"SourceGraphic"}
              in2={"effect1_dropShadow_3_1162"}
              result={"shape"}
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

Vector169.defaultProps = {};

interface Vector169Props {}

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
