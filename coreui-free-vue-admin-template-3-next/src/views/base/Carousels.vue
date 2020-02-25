<template>
  <CRow _zx_="00225_">
    <CCol _zx_="00226_" md="12" lg="7">
      <CCard _zx_="00227_">
        <CCardHeader _zx_="00228_">
          <CIcon _zx_="00229_" name="cil-justify-center"/>
          <strong _zx_="00230_"> Bootstrap Carousel</strong>
          <div _zx_="00231_" class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/carousel" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small _zx_="00232_" class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody _zx_="00233_">
          <CCarousel
            arrows
            indicators
            animate
            height="400px"
          >
            <CCarouselItem
              captionHeader="First Slide"
              image="https://picsum.photos/1024/480/?image=52"
              captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
              captionHeader="Blank page"
              :image="{ placeholderColor: 'grey' }"
              captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
            image="https://picsum.photos/1024/480/?image=54"
            />
          </CCarousel>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow></template>

<script>
export default {
  name: 'Carousels'
}
</script>
