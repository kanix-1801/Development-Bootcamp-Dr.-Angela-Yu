function footer() {
  return (
    <>
      <div class="container my-5">
        <footer class="text-black text-bg-start bg-light">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">about company</h5>
              <p>
                Launched in 2022, Our technology platform connects customers,
                restaurant partners and delivery partners, serving their
                multiple needs. Customers use our platform to search and
                discover restaurants, order food delivery, book a table and make
                payments while dining-out at restaurants.
              </p>
              <p>
                we build products & solutions that redefine the food ordering &
                delivery space in India, every single day. <br /> The best part?
                <br />
                Every bit of your work at Ryōri will help us change the way
                India eats!
              </p>

              <div class="mt-4">
                {/* <!-- Facebook --> */}
                <a
                  type="button"
                  //   target="_blank"
                  href="https://www.facebook.com/profile.php?id=100081632507533"
                  class="btn btn-floating btn-hover btn-light btn-lg"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                {/* <!-- reddit --> */}
                <a
                  type="button"
                  //   target="_blank"
                  href="https://www.reddit.com/user/kanix-1801"
                  class="btn btn-floating btn-hover btn-light btn-lg"
                >
                  <i class="fab fa-reddit-alien"></i>
                </a>
                {/* <!-- Twitter --> */}
                <a
                  type="button"
                  //   target="_blank"
                  href="https://twitter.com/Kanishksingha17"
                  class="btn btn-floating btn-hover btn-light btn-lg"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                {/* <!-- Google + --> */}
                <a
                  type="button"
                  //   target="_blank"
                  href="https://myaccount.google.com/profile"
                  class="btn btn-floating btn-hover btn-light btn-lg wow bounceIn"
                  data-wow-delay="0.9s"
                >
                  <i class="fab fa-google-plus-g"></i>
                </a>
                {/* <!-- Linkedin --> */}
                <a
                  type="button"
                  //   target="_blank"
                  href="https://www.linkedin.com/in/kanishk-singhal-019142213"
                  class="btn btn-floating btn-hover btn-light btn-lg"
                  data-wow-delay="0.9s"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  id="formControlLg"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="formControlLg">
                  Search
                </label>
              </div>

              <ul class="fa-ul" style={{ marginLeft: '1.65em' }}>
                <li class="mb-3">
                  <span class="fa-li">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="ms-2">jaipur, 321401, india</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="ms-2">contact@example.com</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li">
                    <i class="fas fa-phone"></i>
                  </span>
                  <span class="ms-2">+91 9800000001</span>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">Opening hours</h5>

              <table class="table text-center text-black">
                <tbody class="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Copyright --> */}
          <div class="text-center p-3">
            © 2022 Copyright:
            <a class="text-black" id="copyright-hover" href="#Ryōri">
              Ryōri
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default footer
