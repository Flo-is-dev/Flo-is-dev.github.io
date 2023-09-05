const headLine = new SplitType("h1");
const myText2 = new SplitType("p", { charClass: "char2" });
const myText3 = new SplitType("h2", { charClass: "char3" });
var tl = gsap.timeline({ defaults: { ease: "Expo.easeInOut" } });

tl.from(".char", {
  y: -100,
  stagger: 0.05,
  delay: 1,
})
  .from(
    ".char2",
    {
      y: -100,
      stagger: 0.05,
      delay: 0.6,
    },
    "-=1.2"
  )
  .from(
    ".char3",
    {
      y: -100,
      stagger: 0.05,
      delay: 2.5,
    },
    "-=1.2"
  );
