// Supports weights 400-900
import "@fontsource-variable/playfair-display";

import "./style.css";
import "./gsap";
import "./scrolltrigger";
import "./mediaScroll";
import "./modal"

const textContent = document.querySelector("#testContent");
const testName = document.querySelector("#testName");
const avtarAll = document.querySelectorAll(".tst-user");

const userName = [
  "Ravi Mehta, Angel Investor",
  "Ananya Sharma – Sustainability-Focused Investor",
  "Kunal Verma – Startup Portfolio Manager",
  "Shruti Patel – Fintech Consultant",
  "Aditya Rao – First-time Investor",
];

const monyList = [
  "Investing in EBG OCN was a strategic move. The blend of green mobility and financial returns is exactly what the modern investor looks for.",
  "EBG’s real-world impact is what drew me in. They’re creating change and generating returns.",
  "Clear roadmap and sectoral strength made this a no-brainer. OCNs are a smart model.",
  "Transparent platform, strong returns, and solid growth. EBG delivers.",
  "Great entry into sustainable investing. Simple, impactful, and professional.",
];

function changeContent(newContent, newName) {
    // Fade out
    textContent.style.opacity = '0';
    testName.style.opacity = '0';
    
    // Change content after fade out
    setTimeout(() => {
        textContent.innerHTML = newContent;
        testName.innerHTML = newName;
        
        // Fade back in
        textContent.style.opacity = '1';
        testName.style.opacity = '1';
    }, 250); // Half of the transition duration
}


avtarAll.forEach((ele, ind) => {
    console.log(ind);
    
  ele.addEventListener("mouseenter", () => {
    changeContent(`"${monyList[ind]}"`, userName[ind]);
  });
});
