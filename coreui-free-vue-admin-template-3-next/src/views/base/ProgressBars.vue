<template>
  <div _zx_="00945_">
    <CCard _zx_="00946_">
      <CCardHeader _zx_="00947_">
        <CIcon _zx_="00948_" name="cil-justify-center"/>
        <strong _zx_="00949_"> Bootstrap Progress</strong>
        <div _zx_="00950_" class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/components/progress" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small _zx_="00951_" class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody _zx_="00952_">
        <CProgress _zx_="00953_" :value="counter" :max="max" show-percentage animated></CProgress>
        <CProgress _zx_="00954_" class="mt-1" :max="max" show-value>
          <CProgressBar _zx_="00955_" :value="counter*(6/10)" color="success"/>
          <CProgressBar _zx_="00956_" :value="counter*(2.5/10)" color="warning"/>
          <CProgressBar _zx_="00957_" :value="counter*(1.5/10)" color="danger"/>
        </CProgress>
        <CButton 
          @click="clicked"
          color="secondary"
          class="mt-4" 
        >
          Click me to animate progress bars
        </CButton>
      </CCardBody>
    </CCard>
    <CCard _zx_="00958_">
      <CCardHeader _zx_="00959_">
        <CIcon _zx_="00960_" name="cil-justify-center"/> <strong> Progress </strong><small>labels</small>
      </CCardHeader>
      <CCardBody _zx_="00961_">
        <h6 _zx_="00962_">No label</h6>
        <CProgress _zx_="00963_" :value="value" :max="max2" class="mb-3"/>
        <h6 _zx_="00964_">Value label</h6>
        <CProgress _zx_="00965_" :value="value" :max="max2" show-value class="mb-3"/>
        <h6 _zx_="00966_">Progress label</h6>
        <CProgress _zx_="00967_" :value="value" :max="max2" show-percentage class="mb-3"/>
        <h6 _zx_="00968_">Value label with precision</h6>
        <CProgress _zx_="00969_" :value="value" :max="max2" :precision="2" show-value class="mb-3"/>
        <h6 _zx_="00970_">Progress label with precision</h6>
        <CProgress _zx_="00971_" :value="value" :max="max2" :precision="2" show-percentage class="mb-3"/>
      </CCardBody>
    </CCard>
    <CCard _zx_="00972_">
      <CCardHeader _zx_="00973_">
        <CIcon _zx_="00974_" name="cil-justify-center"/>
        <strong _zx_="00975_"> Progress </strong>
        <small _zx_="00976_">width</small>
      </CCardHeader>
      <CCardBody _zx_="00977_">
        <h6 _zx_="00978_">Default width</h6>
        <CProgress _zx_="00979_" :value="value3" class="mb-3"/>
        <h6 _zx_="00980_">Custom widths</h6>
        <CProgress _zx_="00981_" :value="value3" class="w-75 mb-2"/>
        <CProgress _zx_="00982_" :value="value3" class="w-50 mb-2"/>
        <CProgress _zx_="00983_" :value="value3" class="w-25"/>
      </CCardBody>
    </CCard>
    <CCard _zx_="00984_">
      <CCardHeader _zx_="00985_">
        <CIcon _zx_="00986_" name="cil-justify-center"/>
        <strong _zx_="00987_"> Progress </strong>
        <small _zx_="00988_">height</small>
      </CCardHeader>
      <CCardBody _zx_="00989_">
        <h6 _zx_="00990_">Default height</h6>
        <CProgress _zx_="00991_" :value="value3" show-percentage class="mb-3"/>
        <h6 _zx_="00992_">Custom heights</h6>
        <CProgress _zx_="00993_" height="2rem" :value="value3" show-percentage class="mb-2"/>
        <CProgress _zx_="00994_" height="20px" :value="value3" show-percentage class="mb-2"/>
        <CProgress _zx_="00995_" height="2px" :value="value3"/>
      </CCardBody>
    </CCard>
    <CCard _zx_="00996_">
      <CCardHeader _zx_="00997_">
        <CIcon _zx_="00998_" name="cil-justify-center"/>
        <strong _zx_="00999_"> Progress </strong>
        <small _zx_="01000_">colors</small>
      </CCardHeader>
      <CCardBody _zx_="01001_">
        <div _zx_="01002_" :key="index" v-for="(bar, index) in bars" class="row mb-1">
          <div _zx_="01003_" class="col-sm-2">{{ bar.color }}:</div>
          <div _zx_="01004_" class="col-sm-10 pt-1">
            <CProgress
              :value="bar.value"
              :color="bar.color"
              :key="bar.color"
            />
          </div>
        </div>
      </CCardBody>
    </CCard>
    <CCard _zx_="01005_">
      <CCardHeader _zx_="01006_">
        <CIcon _zx_="01007_" name="cil-justify-center"/>
        <strong _zx_="01008_"> Progress </strong>
        <small _zx_="01009_">striped</small>
      </CCardHeader>
      <CCardBody _zx_="01010_">
        <CProgress
          :value="25"
          color="success"
          :striped="striped"
          class="mb-2"
        />
        <CProgress
          :value="50"
          color="info"
          :striped="striped"
          class="mb-2"
        />
        <CProgress
          :value="75"
          color="warning"
          :striped="striped"
          class="mb-2"
        />
        <CProgress
          :value="100"
          color="danger"
          :striped="striped"
          class="mb-2"
        />
        <CButton _zx_="01011_" color="secondary" @click="striped = !striped">
          {{ striped ? 'Remove' : 'Add'}} Striped
        </CButton>
      </CCardBody>
    </CCard>
    <CCard _zx_="01012_">
      <CCardHeader _zx_="01013_">
        <CIcon _zx_="01014_" name="cil-justify-center"/>
        <strong _zx_="01015_"> Progress </strong>
        <small _zx_="01016_">animated</small>
      </CCardHeader>
      <CCardBody _zx_="01017_">
        <CProgress
          :value="25"
          color="success"
          striped
          :animated="animate"
          class="mb-2"
        />
        <CProgress
          :value="50"
          color="info"
          striped
          :animated="animate"
          class="mb-2"
        />
        <CProgress
          :value="75"
          color="warning"
          striped
          :animated="animate"
          class="mb-2"
        />
        <CProgress
          :value="100"
          color="danger"
          :animated="animate"
          class="mb-3"
        />
        <CButton _zx_="01018_" color="secondary" @click="animate = !animate">
          {{ animate ? 'Stop' : 'Start'}} Animation
        </CButton>
      </CCardBody>
    </CCard>
    <CCard _zx_="01019_">
      <CCardHeader _zx_="01020_">
        <CIcon _zx_="01021_" name="cil-justify-center"/>
        <strong _zx_="01022_"> Progress </strong>
        <small _zx_="01023_">multiple bars</small>
      </CCardHeader>
      <CCardBody _zx_="01024_">
        <CProgress _zx_="01025_" :max="max3" class="mb-3">
          <CProgressBar _zx_="01026_" color="primary" :value="values[0]"/>
          <CProgressBar _zx_="01027_" color="success" :value="values[1]"/>
          <CProgressBar _zx_="01028_" color="info" :value="values[2]"/>
        </CProgress>
        <CProgress _zx_="01029_" show-percentage :max="max3" class="mb-3">
          <CProgressBar _zx_="01030_" color="primary" :value="values[0]"/>
          <CProgressBar _zx_="01031_" color="success" :value="values[1]"/>
          <CProgressBar _zx_="01032_" color="info" :value="values[2]"/>
        </CProgress>
        <CProgress _zx_="01033_" show-value striped :max="max3" class="mb-3">
          <CProgressBar _zx_="01034_" color="primary" :value="values[0]"/>
          <CProgressBar _zx_="01035_" color="success" :value="values[1]"/>
          <CProgressBar _zx_="01036_" color="info" :value="values[2]"/>
        </CProgress>
        <CProgress _zx_="01037_" :max="max3" class="mb-3">
          <CProgressBar _zx_="01038_" color="primary" :value="values[0]" show-percentage/>
          <CProgressBar _zx_="01039_" color="success" :value="values[1]" animated show-percentage/>
          <CProgressBar _zx_="01040_" color="info" :value="values[2]" striped show-percentage/>
        </CProgress>
      </CCardBody>
    </CCard>
  </div></template>

<script>
export default {
  name: 'ProgressBars',
  data () {
    return {
      counter: 73,
      max: 100,
      max2: 50,
      value: 33.333333333,
      value3: 75,
      bars: [
        {color: 'success', value: 75},
        {color: 'info', value: 75},
        {color: 'warning', value: 75},
        {color: 'danger', value: 75},
        {color: 'primary', value: 75},
        {color: 'secondary', value: 75},
        {color: 'dark', value: 75}
      ],
      timer: null,
      striped: true,
      animate: true,
      max3: 100,
      values: [ 15, 30, 20 ]
    }
  },
  methods: {
    clicked () {
      this.counter = Math.random() * this.max
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.bars.forEach(bar => {
        bar.value = 25 + (Math.random() * 75)
      })
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>
