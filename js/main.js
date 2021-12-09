Splitting();

const gnbList = $("#gnb .list > li");
const header = $("#header");
gnbList.on("mouseenter", function () {
  header.addClass("open");
});

gnbList.on("mouseleave", function () {
  header.removeClass("open");
});

$("#main").fullpage({});

gsap.from("#happen .char", {
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power3",
  stagger: 0.05,
});
gsap.from("#business .char", {
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power3",
  stagger: 0.05,
});
