<template>
  <CRow _zx_="01368_">
    <CCol _zx_="01369_" col="12">
      <CCard _zx_="01370_">
        <CCardHeader _zx_="01371_">
          <strong _zx_="01372_">Brand Button</strong>
          <div _zx_="01373_" class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/button-components" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small _zx_="01374_" class="text-muted">docs</small>
              </a>
            </div>
        </CCardHeader>
        <CCardBody _zx_="01375_">
          <small _zx_="01376_">Usage </small>
          <code _zx_="01377_">{{ $options.usage }}</code>
          <hr _zx_="01378_"/>
          <h6 _zx_="01379_">
            Size Small
            <small _zx_="01380_">Add <code>size="sm"</code></small>
          </h6>
          <p _zx_="01381_">
            <template _zx_="01382_" v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                size="sm"
                :key="key"
                :color="brandName"
              >
                <CIcon _zx_="01383_" size="sm" :name="'cib-' + brandName"/>
                <span _zx_="01384_">{{brandName}}</span>
              </CButton>
            </template>
          </p>
          <h6 _zx_="01385_">Size Normal</h6>
          <p _zx_="01386_">
            <template _zx_="01387_" v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                :key="key"
                :color="brandName"
              >
                <CIcon _zx_="01388_" :name="'cib-' + brandName"/>
                <span _zx_="01389_">{{brandName}}</span>
              </CButton>
            </template>
          </p>
          <h6 _zx_="01390_">Size Large <small>Add <code>size="lg"</code></small></h6>
          <p _zx_="01391_">
            <template _zx_="01392_" v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                size="lg"
                :key="key"
                :color="brandName"
              >
                <CIcon _zx_="01393_" size="lg" :name="'cib-' + brandName"/>
                <span _zx_="01394_">{{brandName}}</span>
              </CButton>
            </template>
          </p>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol _zx_="01395_" col="12">
      <CCard _zx_="01396_">
        <CCardHeader _zx_="01397_">
          <strong _zx_="01398_">Brand Button </strong> <small>Icons only</small>
        </CCardHeader>
        <CCardBody _zx_="01399_">
          <small _zx_="01400_">Usage </small>
            <code _zx_="01401_">{{ $options.iconsOnlyUsage }}</code>
          <hr _zx_="01402_"/>
          <h6 _zx_="01403_">Size Small <small>Add <code>size="sm"</code></small></h6>
          <p _zx_="01404_">
            <template _zx_="01405_" v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                size="sm"
                :key="key"
                :color="brandName"
              >
                <CIcon _zx_="01406_" size="sm" :name="'cib-' + brandName"/>
              </CButton>
            </template>
          </p>
          <h6 _zx_="01407_">Size Normal</h6>
          <p _zx_="01408_">
            <template _zx_="01409_" v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                :key="key"
                :color="brandName"
              >
                <CIcon _zx_="01410_" :name="'cib-' + brandName"/>
              </CButton>
            </template>
          </p>
          <h6 _zx_="01411_">Size Large <small>Add <code>size="lg"</code></small></h6>
          <p _zx_="01412_">
            <template _zx_="01413_" v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                size="lg"
                :key="key"
                :color="brandName"
              >
                <CIcon _zx_="01414_" size="lg" :name="'cib-' + brandName"/>
              </CButton>
            </template>
          </p>
        </CCardBody>
      </CCard>
    </CCol>

    <CCol _zx_="01415_" col="12">
      <CCard _zx_="01416_">
        <CCardHeader _zx_="01417_">
          <strong _zx_="01418_">Brand Button </strong> <small>Text only</small>
        </CCardHeader>
        <CCardBody _zx_="01419_">
          <small _zx_="01420_">Usage </small> 
          <code _zx_="01421_">
            {{ $options.textOnlyUsage }}
          </code>
          <hr _zx_="01422_"/>
          <h6 _zx_="01423_">Size Small <small>Add <code>size="sm"</code></small></h6>
          <p _zx_="01424_">
            <template _zx_="01425_" v-for="(brandName, key) in $options.brands">
              <CButton
                size="sm"
                :key="key"
                :color="brandName"
              >
                <span _zx_="01426_">{{brandName}}</span>
              </CButton>
            </template>
          </p>
          <h6 _zx_="01427_">Size Normal</h6>
          <p _zx_="01428_">
            <template _zx_="01429_" v-for="(brandName, key) in $options.brands">
              <CButton
                :key="key"
                :color="brandName"
              >
                <span _zx_="01430_">{{brandName}}</span>
              </CButton>
            </template>
          </p>
          <h6 _zx_="01431_">Size Large <small>Add <code>size="lg"</code></small></h6>
          <p _zx_="01432_">
            <template _zx_="01433_" v-for="(brandName, key) in $options.brands">
              <CButton
                size="lg"
                :key="key"
                :color="brandName"
              >
                <span _zx_="01434_">{{brandName}}</span>
              </CButton>
            </template>
          </p>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow></template>

<script>
export default {
  name: 'BrandButtons',
  usage: '<CButton color="facebook"><span>Facebook</span></CButton>',
  iconsOnlyUsage: '<CButton color="facebook"><CIcon name="cib-facebook"/></CButton>',
  textOnlyUsage: '<CButton color="facebook"><CIcon name="cib-facebook"/></CButton>',
  brands: [
    'facebook',
    'twitter',
    'linkedin',
    'flickr',
    'tumblr',
    'xing',
    'github',
    'stack-overflow',
    'youtube',
    'dribbble',
    'instagram',
    'pinterest',
    'vk',
    'yahoo',
    'behance',
    'reddit',
    'vimeo'
  ]
  // labels: {
  //   facebook: 'Facebook',
  //   twitter: 'Twitter',
  //   linkedin: 'LinkedIn',
  //   flickr: 'Flickr',
  //   tumblr: 'Tumblr',
  //   xing: 'Xing',
  //   github: 'Github',
  //   'stack-overflow': 'StackOverflow',
  //   youtube: 'YouTube',
  //   dribbble: 'Dribbble',
  //   instagram: 'Instagram',
  //   pinterest: 'Pinterest',
  //   vk: 'VK',
  //   yahoo: 'Yahoo',
  //   behance: 'Behance',
  //   reddit: 'Reddit',
  //   vimeo: 'Vimeo'
  // }
}
</script>

<style scoped>
.btn {
  margin-bottom: 4px;
  margin-right: 6px;
}
</style>
