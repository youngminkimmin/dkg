Splitting();

const gnbList = $("#gnb .list > li");
const header = $("#header");
gnbList.on("mouseenter", function () {
  header.addClass("open");
});

gnbList.on("mouseleave", function () {
  header.removeClass("open");
});

const happenTL = gsap.timeline(); //애니메이션 시작시간을 정할수 있음
happenTL
  .from("#happen .titleBox h2 .char", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3",
    stagger: 0.05,
  })
  .from(
    "#happen .titleBox p .char",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3",
      stagger: 0.05,
    },
    "-=2"
  )
  .from(CSSRulePlugin.getRule("#happen .titleBox strong:after"), {
    cssRule: { scale: 0 },
    duration: 0.5,
  });

const businessTL = gsap.timeline(); //애니메이션 시작시간을 정할수 있음
businessTL.pause();
businessTL
  .from("#business .titleBox h2 .char", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3",
    stagger: 0.05,
  })
  .from(
    "#business .titleBox p .char",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3",
      stagger: 0.05,
    },
    "-=2"
  )
  .from(
    "#business .listBox li",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3",
      stagger: 0.05,
    },
    "-=1"
  )
  .from(CSSRulePlugin.getRule("#business .titleBox strong:after"), {
    cssRule: { scale: 0 },
    duration: 0.5,
  });

const portfolioTL = gsap.timeline(); //애니메이션 시작시간을 정할수 있음
portfolioTL.pause();
portfolioTL
  .from("#portfolio .titleBox h2 .char", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3",
    stagger: 0.05,
  })
  .from(
    "#portfolio .titleBox p .char",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3",
      stagger: 0.05,
    },
    "-=2"
  )
  .from(
    "#portfolio .listBox",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3",
    },
    "-=1"
  )
  .from(CSSRulePlugin.getRule("#portfolio .titleBox strong:after"), {
    cssRule: { scale: 0 },
    duration: 0.5,
  });

const communityTL = gsap.timeline(); //애니메이션 시작시간을 정할수 있음
communityTL.pause();
communityTL
  .from("#community .titleBox h2 .char", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3",
    stagger: 0.05,
  })
  .from(
    "#community .titleBox p .char",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3",
      stagger: 0.05,
    },
    "-=2"
  )
  .from(
    "#community .listBox li",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3",
      stagger: 0.05,
    },
    "-=1"
  )
  .from(CSSRulePlugin.getRule("#community .titleBox strong:after"), {
    cssRule: { scale: 0 },
    duration: 0.5,
  });

$("#main").fullpage({
  navigation: true,
  navigationTooltips: ["Intorduce", "Business", "Portfolio", "Community"],
  showActiveTooltip: true,

  onLeave: function (origin, destination, direction) {
    const leavingSection = this;
    switch (destination.index) {
      case 0:
        happenTL.restart();
        break;
      case 1:
        businessTL.restart();
        break;
      case 2:
        portfolioTL.restart();
        break;
      case 3:
        if (direction === "down") {
          communityTL.restart();
        } else {
          $("#fp-nav").removeClass("last");
        }
        break;
      case 4:
        $("#fp-nav").addClass("last");
        break;
      default:
        console.log("이제없음");
    }
    // console.log("leavingSection===", leavingSection);
    // console.log("origin===", origin);
    // console.log("destination===", destination);
    // console.log("direction===", direction);
    //console.log(destination.index);
    // if (destination.index === 0) {
    //   //gsap.from("#happen .char", { opacity: 0,  x: 100,duration: 1,  ease: "power3",stagger: 0.05, });
    //   happenTL.restart();
    // } else if (destination.index === 1) {
    //   //gsap.from("#business .char", { opacity: 0,  x: 100, duration: 1,  ease: "power3", stagger: 0.05, });
    //   businessTL.restart();
    // } else if (destination.index === 2) {
    // } portfolioTL.restart();
  },
  afterRender: function () {
    $.fn.fullpage.moveTo(2);
  },
});

const portfolioSlider = new Swiper("#portfolio .mask", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#portfolio .next",
    prevEl: "#portfolio .prev",
  },
  pagination: {
    el: "#portfolio .pagination",
    clickable: true,
  },
});

$("#fp-nav li:last-child").remove();
