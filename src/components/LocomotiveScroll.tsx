import { useEffect, useState } from "react";

export default function useLocoScroll(ref: React.RefObject<any>) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(
      window.matchMedia("only screen and (min-width: 1000px)").matches
    );
  }, [isMobile]);

  useEffect(() => {
    let scroll: any;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: ref.current,
        smooth: true,
        // multiplier: !isMobile ? 1.3 : 1,
        lerp: 0.07,
        scrollFromAnywhere: true,
        smartphone: { smooth: true, gestureDirection: "vertical" },
        tablet: { smooth: true, gestureDirection: "vertical", breakpoint: 10 },
      });
    });
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  });
}

// useEffect(() => {
//   (async () => {
//     const LocomotiveScroll = (await import("locomotive-scroll")).default;
//     var locomotive = new LocomotiveScroll({
//       el: scrollRef.current!,
//       smooth: true,
//       lerp: 0.05,
//       multiplier: 0.9,
//       scrollFromAnywhere: true,
//       smartphone: { smooth: true, gestureDirection: "vertical" },
//     });

//     return () => {
//       locomotive.destroy();
//     };
//   })();
// });
