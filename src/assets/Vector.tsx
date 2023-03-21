export default function Vector(props: VectorProps) {
  return (
    <div
      className={`opacity-20 left-0 absolute w-[1440px] h-[640px] top-[94px]`}
    >
      <svg
        width={"100%"}
        height={"100%"}
        preserveAspectRatio={"none"}
        viewBox={"0 0 1440 640"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          opacity={"0.2"}
          d={
            "M 1440 347.487 L 1117.37 216.205 L 1440 85.104 V 58.535 L 1084.78 202.946 L 856.382 110.162 L 1127.29 3.96e-06 H 1062.12 L 823.773 96.903 L 585.453 0.082 H 520.281 L 791.187 110.162 L 574.908 198.105 L 87.701 3.96e-06 H 31.959 C 29.36 -0.001 26.771 0.219 24.248 0.656 L 803.311 317.506 L 616.576 393.436 L 0 141.899 V 168.484 L 584.013 406.679 L 16.607 637.407 C 21.321 639.115 26.544 640.004 31.843 640 H 75.437 L 326.044 538.076 L 495.592 607.475 L 785.915 489.009 L 1155.99 639.984 H 1221.03 L 1035.22 564.217 L 1222.63 488.008 L 1439.98 576.377 V 549.891 L 1255.24 474.765 L 1439.98 399.639 L 1440 347.487 Z M 607.494 211.282 L 823.773 123.34 L 1052.2 216.205 L 835.897 304.164 L 607.494 211.282 Z M 495.36 580.513 L 358.606 524.718 L 616.552 419.84 L 753.283 475.635 L 495.36 580.513 Z M 1002.7 550.958 L 649.115 406.712 L 835.897 330.749 L 1190.07 474.765 L 1002.7 550.958 Z M 1222.65 461.506 L 868.506 317.506 L 1084.78 229.547 L 1438.95 373.612 L 1222.65 461.506 Z"
          }
          fill={"url(#paint0_radial_3_378)"}
        ></path>
        <defs>
          <radialGradient
            id={"paint0_radial_3_378"}
            cx={"0"}
            cy={"0"}
            r={"1"}
            gradientUnits={"userSpaceOnUse"}
            gradientTransform={
              "translate(871.734 474.256) scale(601.455 424.96)"
            }
          >
            <stop offset={"0.02"} stopColor={"#A56EF4"}></stop>
            <stop offset={"0.58"} stopColor={"#573096"}></stop>
            <stop offset={"1"} stopColor={"#200554"}></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

Vector.defaultProps = {};

interface VectorProps {}

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
