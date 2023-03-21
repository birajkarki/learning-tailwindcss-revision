export default function Ellipse22(props: Ellipse22Props) {
  return (
    <div
      className={`h-1.5 absolute flex w-[35px] left-[409.5px] top-[1273.5px]`}
    >
      <svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio={"none"}
        viewBox={"0 0 35 6"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          d={
            "M 34.5 3 C 34.5 4.381 26.113 5.5 17 5.5 C 7.887 5.5 0.5 4.381 0.5 3 C 0.5 1.619 7.887 0.5 17 0.5 C 26.113 0.5 34.5 1.619 34.5 3 Z"
          }
          fill={"#D9D9D9"}
        ></path>
      </svg>
    </div>
  );
}

Ellipse22.defaultProps = {};

interface Ellipse22Props {}

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
