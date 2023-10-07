import { useEffect } from "react";

export default function useLocoScroll(ref: React.RefObject<any>) {
  useEffect(() => {
    let scroll: any;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: ref.current,
        smooth: true,
        lerp: 0.07,
        scrollFromAnywhere: true,
        smartphone: { smooth: true, gestureDirection: "vertical" },
        tablet: { smooth: true, gestureDirection: "vertical",breakpoint:10 },
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
