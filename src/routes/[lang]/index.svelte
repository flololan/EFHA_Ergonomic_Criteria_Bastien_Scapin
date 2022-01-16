<script lang="ts">
  import { _ } from 'svelte-i18n'

  import { TITLE } from '$lib/const'
  import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
  <title>{TITLE}</title>
</svelte:head>

<header id="mainContent" class="position-relative">
  <div class="container text-white">
    <div class="row">
      <div class="col-sm-12">
        <div class="main-banner">
          <div class="d-sm-flex justify-content-between">
            <div data-aos="zoom-in-up" class="aos-init aos-animate">
              <div class="banner-title">
                  <h3 class="font-weight-medium">We Help Power
                  Millions Of Businesses 
                  in 100+ Countries
                </h3>
              </div>
              <p class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                <br>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <a href="#" class="btn btn-outline-light mt-3">Learn more</a>
            </div>
            <div class="mt-5 mt-lg-0">
              <img src="/assets/banner-illustration.png" alt="marsmello" class="img-fluid aos-init aos-animate" data-aos="zoom-in-up">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<Footer />

<style lang="scss">
  header {
    background: url("/assets/banner.svg");
    background-repeat-y: no-repeat;
    background-position: 0 -50px;
    padding-top: 103px;
  }

  .main-banner {
    padding: 4.2rem 0 14rem 0;
  }
</style>
