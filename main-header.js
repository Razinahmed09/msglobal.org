class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <!-- Header START -->
    <div class="">
      <!-- Top header -->
      <div
        class="alert fade show bg-primary border-0 rounded-0 text-center overflow-hidden z-index-9 py-2 m-0 d-none d-lg-block"
        role="alert">
        <div class="container d-flex justify-content-between px-2 px-xl-4">
          <!-- Contact info -->
          <ul class="list-inline d-flex flex-wrap gap-3 text-white mb-0">
            <li class="list-inline-item small fw-light">
              <i class="bi bi-headset me-2"></i>Call us:
              <a href="tel:(021) 34182005" class="link-white">(021) 34182005 </a>
            </li>
            <li class="list-inline-item small fw-light">
              <i class="bi bi-envelope me-2"></i>Email:
              <a href="mailto:mailto:info@msglobalinc.net" class="link-white"
                >info@msglobalinc.org</a>
            </li>
          </ul>

          <!-- Social links -->
          <ul class="list-inline mb-0">
            <li class="list-inline-item small text-white">Follow us on:</li>
            <li class="list-inline-item">
              <a href="#" class="link-white"><i class="bi bi-facebook"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="link-white"><i class="bi bi-instagram"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="link-white"><i class="bi bi-twitter-x"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="link-white"><i class="bi bi-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Header START -->
      <header class="header-sticky bg-transparent">
        <!-- Logo Nav START -->
        <nav class="navbar navbar-expand-xl">
          <div class="container">
            <!-- Logo START -->
            <a class="navbar-brand me-0" href="index.html">
              <img
                class="light-mode-item navbar-brand-item"
                src="assets/images/MSglobal-images/logo.png"
                alt="logo"
              />
              <img
                class="dark-mode-item navbar-brand-item"
                src="assets/images/MSglobal-images/logo.png"
                alt="logo"
              />
            </a>
            <!-- Logo END -->

            <!-- Main navbar START -->
            <div class="navbar-collapse collapse" id="navbarCollapse">
              <ul class="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
                <!-- Nav item -->
                <li class="nav-item dropdown">
                    <a class="nav-link" href="index.html">Home</a>

                  <!-- <div class="dropdown-menu dropdown-menu-size-lg overflow-hidden p-0">
							<div class="row px-3 py-4">
								
								<div class="col-sm-6">
									<ul class="list-unstyled">
										<li> <a class="dropdown-item" href="index.html">Classic Default</a> </li>
										<li> <a class="dropdown-item active" href="index-software-company.html">Software Company</a> </li>
										<li> <a class="dropdown-item" href="index-finance-consulting.html">Finance Consulting</a> </li>
										<li> <a class="dropdown-item" href="index-ai-agency.html">AI Agency</a> </li>
										<li> <a class="dropdown-item" href="index-product-landing.html">Product Landing</a> </li>
									</ul>
								</div>

								
								<div class="col-sm-6">
									<ul class="list-unstyled">
										<li> <a class="dropdown-item" href="index-saas.html">SaaS</a> </li>
										<li> <a class="dropdown-item" href="index-ai-chatbot.html">SaaS AI Chatbot</a> </li>
										<li> <a class="dropdown-item" href="index-application-showcase.html">Application Showcase</a> </li>
										<li> <a class="dropdown-item" href="index-personal-portfolio.html">Personal Portfolio</a> </li>
										<li> <a class="dropdown-item" href="index-blog.html">Blog home</a> </li>
									</ul>
								</div>
							</div>

							
							 <div class="h-200px position-relative" style="background:url(assets/images/elements/nav-cta.jpg) no-repeat; background-size:cover; background-position:center;">
								
								 <div class="bg-overlay bg-dark bg-opacity-10"></div>
							 </div>
						</div> -->
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about-v1.html">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="portfolio-grid.html">Portfolio</a>
                </li>

                <!-- Nav item -->
                <li class="nav-item dropdown">
                  <!-- <a class="nav-link " href="portfolio-grid.html" data-bs-toggle="dropdown" data-bs-auto-close="outside"
									aria-haspopup="true" aria-expanded="false">Portfolio</a> -->
                  <!-- <a class="nav-link " href="portfolio-grid.html">Portfolio</a> -->
                  <!-- <ul class="dropdown-menu">
							
							<li class="dropdown dropend">
								<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">About</a>
								<ul class="dropdown-menu" data-bs-popper="none">
									<li> <a class="dropdown-item" href="#">About v.1</a> </li>
									<li> <a class="dropdown-item" href="about-v2.html">About v.2</a> </li>
									<li> <a class="dropdown-item" href="services-grid.html">Services Grid</a></li>
									<li> <a class="dropdown-item" href="services-list.html">Services List</a></li>
									<li> <a class="dropdown-item" href="#">Service Single</a></li>
									<li> <a class="dropdown-item" href="team.html">Team</a></li>
									<li> <a class="dropdown-item" href="#">Career <span class="badge text-bg-success ms-2">2 Job</span></a></li>
									<li> <a class="dropdown-item" href="career-single.html">Career Single</a></li>
								</ul>
							</li>

							<li> <a class="dropdown-item" href="contact-us-v1.html">Contact Us v1</a> </li>
							<li> <a class="dropdown-item" href="#">Contact Us v2</a> </li>
							<li> <a class="dropdown-item" href="#">Pricing v1</a> </li>
							<li> <a class="dropdown-item" href="pricing-v2.html">Pricing v2</a> </li>

							
							<li class="dropdown dropend">
								<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Saas pages</a>
								<ul class="dropdown-menu" data-bs-popper="none">
									<li> <a class="dropdown-item" href="feature-single.html">Feature Single</a> </li>
									<li> <a class="dropdown-item" href="integrations.html">Integrations</a> </li>
									<li> <a class="dropdown-item" href="integration-single.html">Integrations Single</a> </li>
								</ul>
							</li>

							
							<li class="dropdown dropend">
								<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Portfolio</a>
								<ul class="dropdown-menu" data-bs-popper="none">
									<li> <a class="dropdown-item" href="#">Portfolio Grid</a> </li>
									<li> <a class="dropdown-item" href="portfolio-list.html">Portfolio List</a> </li>
									<li> <a class="dropdown-item" href="portfolio-modern.html">Portfolio Modern</a> </li>
									<li> <a class="dropdown-item" href="#">Portfolio case study v1</a> </li>
									<li> <a class="dropdown-item" href="#">Portfolio case study v2</a> </li>
								</ul>
							</li>

							<li class="dropdown dropend">
								<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Blog</a>
								<ul class="dropdown-menu" data-bs-popper="none">
									<li> <a class="dropdown-item" href="blog-minimal.html">Blog Minimal</a> </li>
									<li> <a class="dropdown-item" href="blog-single.html">Blog Single</a> </li>
								</ul>
							</li>

							<li> <a class="dropdown-item" href="error-404.html">Error 404</a> </li>
							<li> <a class="dropdown-item" href="coming-soon.html">Coming soon</a> </li>

							
							<li class="dropdown dropend">
								<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Authentication</a>
								<ul class="dropdown-menu" data-bs-popper="none">
									<li> <a class="dropdown-item" href="sign-in.html">Sign in</a> </li>
									<li> <a class="dropdown-item" href="sign-up.html">Sign up</a> </li>
									<li> <a class="dropdown-item" href="forgot-password.html">Forgot Password</a> </li>
								</ul>
							</li>
						</ul> -->
                </li>

                <!-- Nav item -->
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-auto-close="outside"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Services</a
                  >
                  <div
                    class="dropdown-menu dropdown-menu-center p-xl-3"
                  >
                    <div class="">
                      <div class="">
                        <div
                          class="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3"
                        >
                          <a
                            class="icon-link icon-link-hover text-primary-hover stretched-link"
                            href="/web-development.html"
                            target="_blank"
                            ><i class="bi bi-chevron-right"></i>Web Development
                          </a>
                        </div>
                        <div
                          class="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3"
                        >
                          <a
                            class="icon-link icon-link-hover text-primary-hover stretched-link"
                            href="/mobile-app-development.html"
                            target="_blank"
                            ><i class="bi bi-chevron-right"></i>Android & IOS Development
                          </a>
                        </div>
                      </div>

                      <!-- <div class="col">
									<div class="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
										<div class="d-flex">
											
											<div class="icon-md bg-pink bg-opacity-15 text-pink rounded flex-shrink-0"><i class="bi bi-stickies fs-6"></i></div>
											
											<div class="mx-3">
												<p class="stretched-link heading-color fw-bold mb-0">Snippets</p>
												<p class="mb-0 text-body small">Development guides for building projects with Folio</p>
											</div>
										</div>
										
										<a class="icon-link icon-link-hover text-primary-hover stretched-link" href="#" target="_blank"><i class="bi bi-chevron-right"></i> </a>
									</div>
								</div>

								
								<div class="col">
									<div class="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
										<div class="d-flex">
											
											<div class="icon-md bg-success bg-opacity-15 text-success rounded flex-shrink-0"><i class="bi bi-bullseye fs-6"></i></div>
											
											<div class="mx-3">
												<p class="stretched-link heading-color fw-bold mb-0">Changelog</p>
												<p class="mb-0 text-body small">Recent feature release and announcement.</p>
											</div>
										</div>
										
										<a class="icon-link icon-link-hover text-primary-hover stretched-link" href="#" target="_blank"><i class="bi bi-chevron-right"></i> </a>
									</div>
								</div>

								
								<div class="col">
									<div class="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
										<div class="d-flex">
											
											<div class="icon-md bg-warning bg-opacity-15 text-warning rounded flex-shrink-0"><i class="bi bi-mask fs-6"></i></div>
										
											<div class="mx-3">
												<p class="stretched-link heading-color fw-bold mb-0">Playwright tips</p>
												<p class="mb-0 text-body small">Tips and In-depth guide for headless browser automation</p>
											</div>
										</div>
										
										<a class="icon-link icon-link-hover text-primary-hover stretched-link" href="#" target="_blank"><i class="bi bi-chevron-right"></i> </a>
									</div>
								</div>

								<div class="col">
									<div class="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
										<div class="d-flex">
										
											<div class="icon-md bg-info bg-opacity-15 text-info rounded flex-shrink-0"><i class="bi bi-grid-fill fs-6"></i></div>
											
											<div class="mx-3">
												<p class="stretched-link heading-color fw-bold mb-0">Integrations</p>
												<p class="mb-0 text-body small">Taking advantage of integrations with other services.</p>
											</div>
										</div>
										
										<a class="icon-link icon-link-hover text-primary-hover stretched-link" href="integrations.html" target="_blank"><i class="bi bi-chevron-right"></i> </a>
									</div>
								</div>

								
								<div class="col">
									<div class="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
										<div class="d-flex">
											
											<div class="icon-md bg-purple bg-opacity-15 text-purple rounded flex-shrink-0"><i class="bi bi-chat-dots fs-6"></i></div>
										
											<div class="mx-3">
												<p class="stretched-link heading-color fw-bold mb-0">Supports</p>
												<p class="mb-0 text-body small">Need help? Our customers support is there to help you.</p>
											</div>
										</div>
										
										<a class="icon-link icon-link-hover text-primary-hover stretched-link" href="#" target="_blank"><i class="bi bi-chevron-right"></i> </a>
									</div>
								</div> -->
                    </div>
                  </div>
                </li>

                <!-- Nav item -->
                <li class="nav-item">
                  <a class="nav-link" href="career.html">Careers</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact-us-v1.html">Contact us</a>
                </li>
              </ul>
            </div>
            <!-- Main navbar END -->

            <!-- Buttons -->
            <ul class="nav align-items-center dropdown-hover ms-sm-2">
              <!-- Dark mode option START -->
              <li class="nav-item dropdown dropdown-animation">
                <button
                  class="btn btn-link mb-0 px-2 lh-1"
                  id="bd-theme"
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-display="static">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    class="bi bi-circle-half theme-icon-active fill-mode fa-fw"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                    />
                    <use href="#"></use>
                  </svg>
                </button>

                <ul
                  class="dropdown-menu min-w-auto dropdown-menu-end"
                  aria-labelledby="bd-theme"
                >
                  <li class="mb-1">
                    <button
                      type="button"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-theme-value="light"
                    >
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-brightness-high-fill fa-fw mode-switch me-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                        />
                        <use href="#"></use></svg>Light
                    </button>
                  </li>
                  <li class="mb-1">
                    <button
                      type="button"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-theme-value="dark"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-moon-stars-fill fa-fw mode-switch me-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                        />
                        <path
                          d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                        />
                        <use href="#"></use></svg>Dark
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="dropdown-item d-flex align-items-center active"
                      data-bs-theme-value="auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-circle-half fa-fw mode-switch me-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                        />
                        <use href="#"></use></svg>Auto
                    </button>
                  </li>
                </ul>
              </li>
              <!-- Dark mode option END -->

              <!-- Schedule button -->
              <!-- <li class="nav-item ms-2 d-none d-sm-block">
						<a href="#" class="btn btn-sm btn-dark mb-0" data-bs-toggle="offcanvas" data-bs-target="#scheduleCall" aria-controls="scheduleCall"><i class="bi bi-calendar-week me-2"></i>Schedule a call</a>
					</li> -->

              <!-- Responsive navbar toggler -->
              <li class="nav-item">
                <button
                  class="navbar-toggler ms-sm-3 p-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-animation">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <!-- Logo Nav END -->
      </header>
      <!-- Header END -->
    </div>
    <!-- Header END -->
    `;

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

customElements.define("main-header", Header);
