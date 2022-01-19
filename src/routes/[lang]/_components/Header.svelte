<script lang="ts">
  import { _, locale } from 'svelte-i18n'
  import { prefersReducedMotion } from '$lib/stores'
</script>

<header id="mainContent" class="position-relative">
  <div class="container text-white">
    <div class="row">
      <div class="col-sm-12">
        <div class="main-banner">
          <div class="d-sm-flex justify-content-between">
            <div data-aos={!$prefersReducedMotion && 'zoom-in-up'}>
              <div class="banner-title">
                <h1 class="font-weight-medium">{$_('homepage.title')}</h1>
              </div>
              <p class="mt-3">{$_('homepage.subtitle')}</p>
              <a
                href={`/${$locale}/criteria`}
                class="btn btn-outline-light mt-3"
                >{$_('homepage.goto_criteria')}</a
              >
            </div>
            <div class="mt-5 mt-lg-0">
              <img
                src="/assets/banner-illustration.png"
                alt=""
                class="img-fluid"
                data-aos={!$prefersReducedMotion && 'zoom-in-up'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<style lang="scss">
  header {
    background: url('/assets/banner.svg');
    background-repeat-y: no-repeat;
    background-position: 0 -50px;
    padding-top: 103px;
  }

  .main-banner {
    padding: 4.2rem 0 14rem 0;
  }

  @media (max-width: 767px) {
    header {
      padding-top: 0 !important;
    }
  }
</style>
