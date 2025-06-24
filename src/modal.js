// document.addEventListener("DOMContentLoaded", function () {
const button = document.querySelectorAll(".bap");

const modal = /*html*/ `
  <div id="partnerModal" class="partner-modal fixed inset-0 bg-black/15 bg-opacity-40 flex justify-center items-center z-50">
    <section class="py-20 px-10 max-w-5xl mx-auto bg-white flex items-center rounded-2xl relative ">
    <a id="closePartnerModal" class="absolute top-4 right-3.5 closse-button w-inline-block cursor-pointer" onclick="document.getElementById('partnerModal')?.remove()">
        <svg class="cart-closer" width="16px" height="16px" viewBox="0 0 16 16">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill-rule="nonzero" fill="#333333">
              <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
            </g>
          </g>
        </svg>
      </a>
     <div class=" w-1/2 md:pr-28"> 
      <!-- Heading -->
      <h2 class="playfair text-2xl md:text-6xl font-semibold text-center md:text-left mb-6">LET'S GET IN TOUCH</h2>

      <!-- Subheading -->
      <p class="text-center md:text-left text-lg text-gray-600 mb-8 border-b pb-5">
        Ready to take your triathlon performance to the next level? Reach out today and let’s create a personalized training plan for you.
      </p>

      <!-- Contact Info -->
      <div class="text-center mb-8 ">
        <div class="text-lg flex items-center gap-2.5"><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5559 10.906L12.1009 11.359C12.1009 11.359 11.0179 12.435 8.06288 9.49699C5.10788 6.559 6.19088 5.48299 6.19088 5.48299L6.47688 5.19699C7.18388 4.49499 7.25088 3.36699 6.63388 2.54299L5.37388 0.859995C4.60988 -0.160005 3.13488 -0.295005 2.25988 0.574995L0.68988 2.13499C0.25688 2.56699 -0.0331206 3.12499 0.00187944 3.74499C0.0918794 5.33199 0.809879 8.745 4.81388 12.727C9.06088 16.949 13.0459 17.117 14.6749 16.965C15.1909 16.917 15.6389 16.655 15.9999 16.295L17.4199 14.883C18.3799 13.93 18.1099 12.295 16.8819 11.628L14.9719 10.589C14.1659 10.152 13.1859 10.28 12.5559 10.906Z" fill="black"/>
        </svg>
        <span class="font-semibold"> +91 9876543210</span></div>
        <div class="text-lg flex items-center gap-2.5"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z" fill="black"/>
        </svg>
        <span class="font-semibold"> info@ebggroup.in</span></div>
      </div>
      </div>

      <!-- Form -->
      <div class="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h3 class="text-2xl font-semibold text-center mb-6">LET'S GET IN TOUCH</h3>
        <form action="#" method="POST" class="space-y-4">
          <div>
            <input type="text" name="name" placeholder="Name" required
              class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300">
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" required
              class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300">
          </div>
          <div>
            <input type="tel" name="phone" placeholder="Phone No" required
              class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300">
          </div>
          <div class="text-center">
          <button
          class="bap inline-flex justify-between cursor-pointer items-center gap-2 px-1 py-1 pl-6 bg-gray-200 w-full text-black rounded-full text-lg font-medium hover:bg-gray-100 transition group ">
          Start Investing Now
          <span
            class="bg-black text-white rounded-full ml-2 p-0.5 h-12 w-12 flex justify-center items-center transition duration-300 ease-in-out group-hover:scale-118 group-hover:rotate-[41deg]">
            <svg width="14" height="14" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.982315 9.36657L10.1707 1.78645M10.1707 1.78645L9.56758 8.07463M10.1707 1.78645L3.88249 1.18336"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </button>
          </div>
        </form>
      </div>
    </section>
  </div>
`;

button.forEach((btn) => {
  btn.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", modal);
  });
});

async function submitForm(e) {
  e.pr;
  const response = await fetch("https://formsubmit.co/vishnuv@ocelots.in", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
  });
}
// });
