const progressProperties = [
  {
    id: "group-test",
    backgroundColor: "#FF9B9B",
    motivationalText: "You can do it!",
    motivationalTextHungarian: "Minden kezdet nehéz!",
  },
  {
    id: "react-assignment-1",
    backgroundColor: "#FFC97E",
    motivationalText: "Keep going!",
    motivationalTextHungarian: "Csak így tovább!",
  },
  {
    id: "react-assignment-2",
    backgroundColor: "#A0E7E5",
    motivationalText: "Almost there!",
    motivationalTextHungarian: "Majdnem kész vagy!",
  },
  {
    id: "end-term",
    backgroundColor: "#B5EAD7",
    motivationalText: "You are so close!",
    motivationalTextHungarian: "Már nagyon közel vagy!",
  },
  {
    id: "finish",
    backgroundColor: "#7BFF78",
    motivationalText: "You did it!",
    motivationalTextHungarian: "Tárgy teljesítve!",
  },
];

const milestones = document.querySelectorAll('section.milestone');
console.log(milestones);

// const onScroll = (event) => {
//   console.log("most");
//   // nav.classList.toggle("navbar-scrolled", window.scrollY > 200);
// };

// window.addEventListener("scroll", _.throttle(onScroll, 200));

// b. callback function megírása (mi történjen amikor egy adott elem a viewportunkba kerül?)
const onScrollAnimationObserve = (entries) => {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      console.log(entry);
      const property = progressProperties.find(prop => prop.id === entry.target.id);
      if (property) {
        // Háttérszín update
        entry.target.style.backgroundColor = property.backgroundColor;
        document.body.style.backgroundColor = property.backgroundColor;
        // Update header text
        document.getElementById('motivation').textContent = property.motivationalTextHungarian;
      }
    });
};

// a. IntersectionObserver példányosítása (Observer létrehozása)
const scrollAnimationObserver = new IntersectionObserver(
  _.throttle(onScrollAnimationObserve, 200),
  { threshold: 0.7 }
);

// c. Observer hozzárendelése egy vagy több elemhez, hogy figyelje
milestones.forEach((milestone) =>
  scrollAnimationObserver.observe(milestone)
);
