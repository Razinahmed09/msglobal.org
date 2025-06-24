class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-dark position-relative pt-6 pt-lg-8" data-bs-theme="dark">
      <!-- Shape decoration -->
      <!-- <div class="position-absolute top-0 end-0 mt-n9 z-index-9 d-none d-lg-block">
		<img src="assets/images/elements/grad-shape/06.png" class="robot " alt="Shape">
	</div> -->

      <div class="container position-relative">
        <!-- Link widgets -->
        <div class="row g-4">
          <!-- Widget item -->
          <div class="col-md-6 col-xl-4">
            <!-- logo -->
            <a href="index.html">
              <img
                class="footer-logo"
                src="assets/images/MSglobal-images/MS LOGO-02.png"
                alt="logo"
              />
            </a>
            <p class="my-3 my-xl-4">
             At MS Global Inc, passion drives performance. Since 2007, we've built a strong reputation for delivering world-class IT services, custom application development, and digital marketing solutions tailored to each client’s vision.
            </p>
          </div>

          <div class="col-xl-7 ms-auto">
            <div class="row g-4">
              <!-- Widget item -->
              <div class="col-6 col-md-4">
                <h6 class="mb-3 mb-xl-4">Company</h6>
                <!-- Links -->
                <ul class="nav flex-column gap-1">
                  <li class="nav-item">
                    <a class="nav-link pt-0" href="about-v1.html">About us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"
                      >Career
                      <span class="badge bg-primary ms-2">2 jobs</span></a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Career detail</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Become a partner</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                  </li>
                </ul>
              </div>

              <!-- Widget item -->
              <div class="col-6 col-md-4">
                <h6 class="mb-3 mb-xl-4">Resources</h6>
                <!-- Links -->
                <ul class="nav flex-column gap-1">
                  <li class="nav-item">
                    <a class="nav-link pt-0" href="#">Case studies</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"
                      >Pricing <span class="badge bg-success ms-2">New</span></a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Blogs</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Blog detail</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"
                      >Success stories<i
                        class="bi bi-box-arrow-up-right small ms-2"
                      ></i
                    ></a>
                  </li>
                </ul>
              </div>

              

                <!-- Social buttons -->
                 <div class="col-6 col-md-4">
                <span class="heading-color fw-semibold">Follow on:</span>
                <ul class="list-inline align-items-center mb-0 mt-3">
                  <li class="list-inline-item">
                    <a class="btn btn-xs btn-icon bg-facebook" href="#"
                      ><i class="bi bi-facebook lh-base"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn btn-xs btn-icon bg-instagram" href="#"
                      ><i class="bi bi-instagram lh-base"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn btn-xs btn-icon bg-twitter-x" href="#"
                      ><i class="bi bi-twitter-x lh-base"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn btn-xs btn-icon bg-linkedin" href="#"
                      ><i class="bi bi-linkedin lh-base"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>

        <!-- Divider -->
        <hr class="mt-xl-5 mb-0 opacity-1" />

        <!-- Bottom footer -->
        <div
          class="container d-md-flex justify-content-between align-items-center text-center text-lg-start py-4"
        >
          <!-- copyright text -->

          <div class="text-body small mb-3 mb-md-0">
            © 2025 All Rights Reserved. Designed & Developed by
            <a
              href="https://thevisionbrands.com/"
              target="_blank"
              class="text-body text-primary-hover hover-underline-animation"
              >The Vision Brands</a
            >.
          </div>

          <!-- Policy link -->
          <ul class="nav d-flex justify-content-center gap-1 mb-0">
            <li class="nav-item">
              <a class="nav-link small py-0" href="#">Privacy policy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link small py-0 pe-0" href="#"
                >Terms &amp; conditions</a
              >
            </li>
          </ul>
        </div>
      </div>
    </footer>
    `;

    // 🔥 Highlight the active nav link
    const currentPage = window.location.pathname.split("/").pop();
    const links = this.querySelectorAll(".nav-link");

    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (
        href === currentPage ||
        (href === "index.html" && currentPage === "")
      ) {
        link.classList.add("active");
      }
    });
  }
}

customElements.define("main-footer", Footer);
