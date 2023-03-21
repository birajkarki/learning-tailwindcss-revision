export default function Materials_light(props: Materials_lightProps) {
  return (
    <div
      className={`absolute w-[33px] left-[19.23%] right-[17.31%] top-[17.31%] bottom-[19.23%]`}
    >
      <svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio={"none"}
        viewBox={"0 0 33 33"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          d={
            "M 4.125 9.625 L 13.75 4.125 L 28.875 9.625 M 4.125 9.625 V 16.5 L 19.25 22 L 28.875 16.5 V 9.625 M 4.125 9.625 L 19.25 15.125 L 28.875 9.625"
          }
          stroke={"#22408B"}
          strokeLinejoin={"round"}
        ></path>
        <path
          d={"M 4.125 16.5 V 23.375 L 19.25 28.875 L 28.875 23.375 V 16.5"}
          stroke={"#22408B"}
          strokeLinejoin={"round"}
        ></path>
      </svg>
    </div>
  );
}

Materials_light.defaultProps = {};

interface Materials_lightProps {}

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
