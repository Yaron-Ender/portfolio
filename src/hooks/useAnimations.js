
export const useAnimations = () =>{
const ainmationFramesList0 = [
  { transform: "rotateX(100deg)", offset: 0.3 },
  { transform: "rotateX(-30deg)", offset: 0.6 },
  { transform: "rotateX(10deg)", offset: 0.9 },
  { transform: "rotateX(0)" },
];
const ainmationFramesList1 = [
  { transform: "translate3d(-1px,-70px,50px) rotateX(200deg)", offset: 0.3 },
  { transform: "translate3d(40px,-12px,-60px) rotateX(-40deg)", offset: 0.6 },
  { transform: "translate3d(0px,0px,0px) rotateX(30deg)", offset: 0.9 },
  { transform: "translate3d(0px,0px,0px) rotateX(0deg)" },
];
const ainmationFramesList2 = [
  {
    transform: " translate3d(-48px,-160px,120px) rotateX(250deg) scale(0.94)",
    offset: 0.3,
  },
  {
    transform: "translate3d(30px,-18px,-35px) rotateX(-60deg) scale(1)",
    offset: 0.6,
  },
  { transform: "translate3d(0px,-5px,0px) rotateX(40deg)", offset: 0.9 },
  { transform: "translate3d(0px,0px,0px) rotateX(0deg)" },
];
return { ainmationFramesList0, ainmationFramesList1, ainmationFramesList2 };

}
