export default function Ellipse19(props: Ellipse19Props) {
  return (
    <div
      className={`opacity-10 absolute w-[84px] left-[4.27%] right-[2.4%] top-[4.27%] bottom-[2.4%]`}
    >
      <svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio={"none"}
        viewBox={"0 0 84 84"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          opacity={"0.1"}
          d={
            "M 83.157 42 C 83.157 64.73 64.73 83.157 42 83.157 C 19.27 83.157 0.843 64.73 0.843 42 C 0.843 19.27 19.27 0.843 42 0.843 C 64.73 0.843 83.157 19.27 83.157 42 Z"
          }
          fill={"url(#paint0_linear_3_418)"}
        ></path>
        <defs>
          <linearGradient
            id={"paint0_linear_3_418"}
            x1={"42"}
            y1={"0.84343"}
            x2={"42"}
            y2={"83.1566"}
            gradientUnits={"userSpaceOnUse"}
          >
            <stop offset={"0.193292"} stopColor={"#FF5050"}></stop>
            <stop
              offset={"0.776594"}
              stopColor={"#ECECEC"}
              stopOpacity={"0"}
            ></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

Ellipse19.defaultProps = {};

interface Ellipse19Props {}

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
