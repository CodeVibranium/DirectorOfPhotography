export const AnimatePage = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};
export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};
export const title = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      delay: 1,
    },
  },
};
export const tagLine = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 1,
      delay: 1,
    },
  },
};
export const contactBtn = {
  hidden: {
    opacity: 0,
    x: -80,
    // rotate: -360,
  },
  show: {
    opacity: 1,
    // rotate: 360,
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

export const waveAnime = {
  hidden: {
    // opacity: 0,
    // x: -100,
    pathLength: 0,
    pathOffset: 1,
  },
  show: {
    // opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    // x: 0,
    transition: {
      duration: 1,
      delay: 3,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

// export const slider = {
//   hidden: {
//     x: "-130%",
//     skew: "45deg",
//   },
//   show: {
//     x: "100%",
//     skew: "0deg",
//     transition: {
//       ease: "easeOut",
//       duration: 5,
//     },
//   },
// };
