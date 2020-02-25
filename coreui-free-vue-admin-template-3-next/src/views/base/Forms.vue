<template>
  <div _zx_="00249_">
    <CRow _zx_="00250_">
      <CCol _zx_="00251_" sm="6">
        <CCard _zx_="00252_">
          <CCardHeader _zx_="00253_">
            <strong _zx_="00254_">Credit Card </strong> <small>Form</small>
            <div _zx_="00255_" class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/form-components" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small _zx_="00256_" class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody _zx_="00257_">
            <CRow _zx_="00258_">
              <CCol _zx_="00259_" sm="12">
                <CInput
                  label="Name"
                  placeholder="Enter your name"
                />
              </CCol>
            </CRow>
            <CRow _zx_="00260_">
              <CCol _zx_="00261_" sm="12">
                <CInput
                  label="Credit Card Number"
                  placeholder="0000 0000 0000 0000"
                />
              </CCol>
            </CRow>
            <CRow _zx_="00262_">
              <CCol _zx_="00263_" sm="4">
                <CSelect
                  label="Month"
                  :options="[1,2,3,4,5,6,7,8,9,10,11,12]"
                />
              </CCol>
              <CCol _zx_="00264_" sm="4">
                <CSelect
                  label="Year"
                  :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"
                />
              </CCol>
              <CCol _zx_="00265_" sm="4">
                <CInput
                  label="CVV/CVC"
                  placeholder="123"
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00266_" sm="6">
        <CCard _zx_="00267_">
          <CCardHeader _zx_="00268_">
            <strong _zx_="00269_">Company </strong><small>Form</small>
          </CCardHeader>
          <CCardBody _zx_="00270_">
            <CInput
              label="Company"
              placeholder="Enter your company name"
            />
            <CInput
              label="VAT"
              placeholder="PL1234567890"
            />
            <CInput
              label="Street"
              placeholder="Enter street name"
            />
            <CRow _zx_="00271_">
              <CCol _zx_="00272_" sm="8">
                <CInput
                  label="City"
                  placeholder="Enter your city"
                />
              </CCol>
              <CCol _zx_="00273_" sm="4">
                <CInput
                  label="Postal code"
                  placeholder="Postal code"
                />
              </CCol>
            </CRow>
            <CInput
              label="Country"
              placeholder="Country name"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00274_">
      <CCol _zx_="00275_" md="6">
        <CCard _zx_="00276_">
          <CCardHeader _zx_="00277_">
            <strong _zx_="00278_">Basic Form</strong> Elements
          </CCardHeader>
          <CCardBody _zx_="00279_">
            <CForm _zx_="00280_">
              <CInput
                description="Let us know your full name."
                label="Enter your name"
                horizontal
                autocomplete="name"
              />
              <CInput
                label="Static"
                value="Username"
                horizontal
                plaintext
              />
              <CInput
                label="Text input"
                description="This is a help text"
                placeholder="Text"
                horizontal
              />
              <CInput
                label="Date"
                type="date"
                horizontal
              />
              <CInput
                label="Email input"
                description="Please enter your email"
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
              />
              <CInput
                label="Password Input"
                description="Please enter a complex password"
                placeholder="Enter your password"
                type="password"
                horizontal
                autocomplete="current-password"
              />
              <CInput
                label="Disabled Input"
                placeholder="Disabled"
                horizontal
                disabled
              />
              <CTextarea
                label="Textarea"
                placeholder="Content..."
                horizontal
                rows="9"
              />
              <CSelect
                label="Select"
                horizontal
                :options="options"
                placeholder="Please select"
              />
              <CSelect
                label="Large select"
                size="lg"
                horizontal
                :value.sync="selectedOption"
                :options="selectOptions"
                placeholder="Please select"
              />
              <CSelect
                label="Small select"
                size="sm"
                horizontal
                :options="options"
                placeholder="Please select"
              />
              <CSelect
                label="Select"
                horizontal
                :options="options"
                placeholder="Please select"
                disabled
              />
              <template _zx_="00281_" v-for="(name, key) in checkboxNames">
                <div _zx_="00282_" class="form-group form-row" :key="name">
                  <CCol _zx_="00283_" tag="label" sm="3" class="col-form-label">
                    {{name}}
                  </CCol>
                  <CCol _zx_="00284_" sm="9" :class="key % 2 === 1 ? 'form-inline' : ''">
                    <CInputCheckbox
                      v-for="(option, optionIndex) in options"
                      :key="key + option"
                      :label="option"
                      :value="option"
                      :custom="key > 1"
                      :name="`Option 1${key}`"
                      :checked="optionIndex === key"
                      :inline="key % 2 === 1"
                    />
                  </CCol>
                </div>
              </template>
              <template _zx_="00285_" v-for="(name, key) in radioNames">
                <div _zx_="00286_" class="form-row form-group" :key="name">
                  <CCol _zx_="00287_" sm="3">
                    {{name}}
                  </CCol>
                  <CCol _zx_="00288_" sm="9" :class="key % 2 === 1 ? 'form-inline' : ''">
                    <CInputRadio
                      v-for="(option, optionIndex) in options"
                      :key="key + option"
                      :label="option"
                      type="radio"
                      :value="option"
                      :custom="key > 1"
                      :name="`Option 1${key}`"
                      :checked="optionIndex === key"
                      :inline="key % 2 === 1"
                    />
                  </CCol>
                </div>
              </template>
              <CInputFile
                label="File input"
                horizontal
              />
              <CInputFile
                label="Multiple file input"
                horizontal
                multiple
              />
              <CInputFile
                label="File custom input"
                horizontal
                custom
              />
              <CInputFile
                label="Multiple file custom input"
                horizontal
                multiple
                custom
              />
            </CForm>
          </CCardBody>
          <CCardFooter _zx_="00289_">
            <CButton _zx_="00290_" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton _zx_="00291_" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard _zx_="00292_">
          <CCardHeader _zx_="00293_">
            <strong _zx_="00294_">Inline</strong> Form
          </CCardHeader>

          <CCardBody _zx_="00295_">
            <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->
            <CForm _zx_="00296_" inline>
              <CInput
                class="mr-2"
                placeholder="Jane Doe"
              >
                <template _zx_="00297_" #label>
                  <small _zx_="00298_">Name:&nbsp;</small>
                </template>
              </CInput>
              <CInput
                placeholder="jane.doe@example.com"
                autocomplete="email"
              >
                <template _zx_="00299_" #label>
                  <small _zx_="00300_">Email:&nbsp;</small>
                </template>
              </CInput>
            </CForm>
          </CCardBody>
          <CCardFooter _zx_="00301_">
            <CButton _zx_="00302_" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton _zx_="00303_" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol _zx_="00304_" md="6">
        <CCard _zx_="00305_">
          <CCardHeader _zx_="00306_">
            <strong _zx_="00307_">Horizontal</strong> Form
          </CCardHeader>
          <CCardBody _zx_="00308_">
            <CForm _zx_="00309_">
              <CInput
                type="email"
                description="Please enter your email."
                autocomplete="email"
                label="Email"
                horizontal
                placeholder="Enter Email..."
              />
              <CInput
                type="password"
                description="Please enter your password."
                autocomplete="current-password"
                label="Password"
                horizontal
                placeholder="Enter Password..."
              />
            </CForm>
          </CCardBody>
          <CCardFooter _zx_="00310_">
            <CButton _zx_="00311_" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton _zx_="00312_" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard _zx_="00313_">
          <CCardHeader _zx_="00314_">
            <strong _zx_="00315_">Normal</strong> Form
          </CCardHeader>
          <CForm _zx_="00316_" novalidate>
            <CCardBody _zx_="00317_">
              <CInput
                type="email"
                description="Please enter your email."
                autocomplete="email"
                label="Email"
                placeholder="Enter Email..."
                required
                was-validated
              />
              <CInput
                type="password"
                description="Please enter your password."
                autocomplete="current-password"
                label="Password"
                placeholder="Enter Password..."
                required
                was-validated
              />
            </CCardBody>
            <CCardFooter _zx_="00318_">
              <CButton _zx_="00319_" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
              <CButton _zx_="00320_" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
            </CCardFooter>
          </CForm>
        </CCard>
        <CCard _zx_="00321_">
          <CCardHeader _zx_="00322_">
            Input <strong _zx_="00323_">Grid</strong>
          </CCardHeader>
          <CCardBody _zx_="00324_">
            <CRow _zx_="00325_" class="form-group">
              <CCol _zx_="00326_" sm="3">
                <CInput _zx_="00327_" class="mb-0" placeholder=".col-sm-3"/>
              </CCol>
            </CRow>
            <CRow _zx_="00328_" class="form-group">
              <CCol _zx_="00329_" sm="4">
                <CInput _zx_="00330_" class="mb-0" placeholder=".col-sm-4"/>
              </CCol>
            </CRow>
            <CRow _zx_="00331_" class="form-group">
              <CCol _zx_="00332_" sm="5">
                <CInput _zx_="00333_" class="mb-0" placeholder=".col-sm-5"/>
              </CCol>
            </CRow>
            <CRow _zx_="00334_" class="form-group">
              <CCol _zx_="00335_" sm="6">
                <CInput _zx_="00336_" class="mb-0" placeholder=".col-sm-6"/>
              </CCol>
            </CRow>
            <CRow _zx_="00337_" class="form-group">
              <CCol _zx_="00338_" sm="7">
                <CInput _zx_="00339_" class="mb-0" placeholder=".col-sm-7"/>
              </CCol>
            </CRow>
            <CRow _zx_="00340_" class="form-group">
              <CCol _zx_="00341_" sm="8">
                <CInput _zx_="00342_" class="mb-0" placeholder=".col-sm-8"/>
              </CCol>
            </CRow>
            <CRow _zx_="00343_" class="form-group">
              <CCol _zx_="00344_" sm="9">
                <CInput _zx_="00345_" class="mb-0" placeholder=".col-sm-9"/>
              </CCol>
            </CRow>
            <CRow _zx_="00346_" class="form-group">
              <CCol _zx_="00347_" sm="10">
                <CInput _zx_="00348_" class="mb-0" placeholder=".col-sm-10"/>
              </CCol>
            </CRow>
            <CRow _zx_="00349_" class="form-group">
              <CCol _zx_="00350_" sm="11">
                <CInput _zx_="00351_" class="mb-0" placeholder=".col-sm-11"/>
              </CCol>
            </CRow>
            <CRow _zx_="00352_" class="form-group">
              <CCol _zx_="00353_" sm="12">
                <CInput _zx_="00354_" class="mb-0" placeholder=".col-sm-12"/>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter _zx_="00355_">
            <CButton _zx_="00356_" type="submit" size="sm" color="primary"><CIcon name="cil-user"/> Login</CButton>
            <CButton _zx_="00357_" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard _zx_="00358_">
          <CCardHeader _zx_="00359_">
            Input <strong _zx_="00360_">Sizes</strong>
          </CCardHeader>
          <CCardBody _zx_="00361_">
            <CInput
              label="Small input"
              size="sm"
              horizontal
              placeholder="size='sm'"
            />
            <CInput
              label="Default input"
              horizontal
              placeholder="normal"
            />
            <CInput
              label="Large input"
              size="lg"
              horizontal
              placeholder="size='lg'"
            />
          </CCardBody>
          <CCardFooter _zx_="00362_">
            <CButton _zx_="00363_" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton _zx_="00364_" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00365_">

      <CCol _zx_="00366_" sm="12" md="6">
        <CCard _zx_="00367_">
          <CCardHeader _zx_="00368_">
            <strong _zx_="00369_">Basic Validation</strong> Form
          </CCardHeader>
          <CCardBody _zx_="00370_">
            <CForm _zx_="00371_" validated novalidate>
              <CInput
                label="Input is valid"
                valid-feedback="Input is not required."
              />
              <CInput
                label="Input is invalid"
                required
                valid-feedback="Thank you :)"
                invalid-feedback="Please provide a required input."
              />
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00372_" sm="12" md="6">
        <CCard _zx_="00373_">
          <CCardHeader _zx_="00374_">
            <strong _zx_="00375_">Custom Validation</strong> Form
          </CCardHeader>
          <CCardBody _zx_="00376_">
            <CForm _zx_="00377_">
              <CInput
                label="Input is valid"
                valid-feedback="Input is valid."
                invalid-feedback="Please provide at least 4 characters."
                value="Valid value"
                :is-valid="validator"
              />
              <CInput
                label="Input is invalid"
                valid-feedback="Thank you :)"
                invalid-feedback="Please provide at least 4 characters."
                :is-valid="validator"
              />
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00378_">
      <CCol _zx_="00379_" sm="4">
        <CCard _zx_="00380_">
          <CCardHeader _zx_="00381_">
            <strong _zx_="00382_">Icon/Text</strong> Groups
          </CCardHeader>
          <CCardBody _zx_="00383_">
            <CInput _zx_="00384_" placeholder="Username">
              <template _zx_="00385_" #prepend-content><CIcon name="cil-user"/></template>
            </CInput>
            <CInput
              type="email"
              placeholder="Email"
              autocomplete="email"
            >
              <template _zx_="00386_" #append-content><CIcon name="cil-envelope-open"/></template>
            </CInput>
            <CInput
              placeholder="ex. $1.000.000"
              append=".00"
            >
              <template _zx_="00387_" #prepend-content><CIcon name="cil-euro"/></template>
            </CInput>
          </CCardBody>
          <CCardFooter _zx_="00388_">
            <CButton _zx_="00389_" type="submit" size="sm" color="success"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton _zx_="00390_" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol _zx_="00391_" sm="4">
        <CCard _zx_="00392_">
          <CCardHeader _zx_="00393_">
            <strong _zx_="00394_">Buttons</strong> Groups
          </CCardHeader>
          <CCardBody _zx_="00395_">
            <CInput _zx_="00396_" placeholder="Username">
              <template _zx_="00397_" #prepend>
                <CButton _zx_="00398_" color="primary">
                  <CIcon _zx_="00399_" name="cil-magnifying-glass"/> Search
                </CButton>
              </template>
            </CInput>
            <CInput
              type="email"
              placeholder="Email"
              autocomplete="email"
            >
              <template _zx_="00400_" #append>
                <CButton _zx_="00401_" type="submit" color="primary">Submit</CButton>
              </template>
            </CInput>
            <CInput
              type="email"
              placeholder="Email"
              autocomplete="email"
            >
              <template _zx_="00402_" #prepend>
                <CButton _zx_="00403_" color="primary"><CIcon name="cib-facebook" height="14"/></CButton>
              </template>
              <template _zx_="00404_" #append>
                <CButton _zx_="00405_" color="primary"><CIcon name="cib-twitter" height="14"/></CButton>
              </template>
            </CInput>
          </CCardBody>
          <CCardFooter _zx_="00406_">
            <CButton _zx_="00407_" type="submit" size="sm" color="success"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton _zx_="00408_" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol _zx_="00409_" sm="4">
        <CCard _zx_="00410_">
          <CCardHeader _zx_="00411_">
            <strong _zx_="00412_">Dropdowns</strong> Groups
          </CCardHeader>
          <CCardBody _zx_="00413_">
            <CInput _zx_="00414_" placeholder="Username">
              <template _zx_="00415_" #prepend>
                <CDropdown
                  togglerText="Action"
                  color="primary"
                >
                  <CDropdownItem _zx_="00416_">Action</CDropdownItem>
                  <CDropdownItem _zx_="00417_">Another action</CDropdownItem>
                  <CDropdownItem _zx_="00418_">Something else here...</CDropdownItem>
                  <CDropdownItem _zx_="00419_" disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>
            </CInput>
            <CInput
              type="email"
              placeholder="Email"
              autocomplete="email"
            >
              <template _zx_="00420_" #append>
                <CDropdown
                  togglerText="Action"
                  color="primary"
                  right
                >
                  <CDropdownItem _zx_="00421_">Action</CDropdownItem>
                  <CDropdownItem _zx_="00422_">Another action</CDropdownItem>
                  <CDropdownItem _zx_="00423_">Something else here...</CDropdownItem>
                  <CDropdownItem _zx_="00424_" disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>
            </CInput>
            <CInput _zx_="00425_" placeholder="...">

              <template _zx_="00426_" #prepend>
                <CDropdown
                  togglerText="Split"
                  color="primary"
                  split
                >
                  <CDropdownItem _zx_="00427_" href="#">Action</CDropdownItem>
                  <CDropdownItem _zx_="00428_" href="#">Another action</CDropdownItem>
                  <CDropdownItem _zx_="00429_" href="#">Something else here...</CDropdownItem>
                  <CDropdownItem _zx_="00430_" disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>

              <template _zx_="00431_" #append>
                <CDropdown
                  togglerText="Action"
                  color="primary"
                  right
                >
                  <CDropdownItem _zx_="00432_">Action</CDropdownItem>
                  <CDropdownItem _zx_="00433_">Another action</CDropdownItem>
                  <CDropdownItem _zx_="00434_">Something else here...</CDropdownItem>
                  <CDropdownItem _zx_="00435_" disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>

            </CInput>
          </CCardBody>
          <CCardFooter _zx_="00436_">
            <CButton _zx_="00437_" type="submit" size="sm" color="success"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton _zx_="00438_" type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00439_">
      <CCol _zx_="00440_" md="6">
        <CCard _zx_="00441_">
          <CCardHeader _zx_="00442_">
            Use the grid for big devices! <small _zx_="00443_"><code>.col-lg-*</code> <code>.col-md-*</code> <code>.col-sm-*</code></small>
          </CCardHeader>
          <CCardBody _zx_="00444_">
            <CRow
              class="form-group"
              v-for="(number, key) in [4,5,6,7,8]"
              :key="key"
            >
              <CCol _zx_="00445_" :col="12 - number">
                <CInput _zx_="00446_" class="mb-0" :placeholder="`.col-md-${12 - number}`"/>
              </CCol>
              <CCol _zx_="00447_" :col="number">
                <CInput _zx_="00448_" class="mb-0" :placeholder="`.col-md-${number}`"/>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter _zx_="00449_">
            <CButton _zx_="00450_" size="sm" color="primary">Action</CButton>
            <CButton _zx_="00451_" size="sm" color="danger">Action</CButton>
            <CButton _zx_="00452_" size="sm" color="warning">Action</CButton>
            <CButton _zx_="00453_" size="sm" color="info">Action</CButton>
            <CButton _zx_="00454_" size="sm" color="success">Action</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol _zx_="00455_" md="6">
        <CCard _zx_="00456_">
          <CCardHeader _zx_="00457_">
            Input Grid for small devices! <small _zx_="00458_"> <code>.col-*</code></small>
          </CCardHeader>
          <CCardBody _zx_="00459_">
            <CRow
              class="form-group"
              v-for="(number, key) in [4,5,6,7,8]"
              :key="key"
            >
              <CCol _zx_="00460_" :col="number">
                <CInput _zx_="00461_" class="mb-0" :placeholder="`.col-${number}`"/>
              </CCol>
              <CCol _zx_="00462_" :col="12 - number">
                <CInput _zx_="00463_" class="mb-0" :placeholder="`.col-${12 - number}`"/>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter _zx_="00464_">
            <CButton _zx_="00465_" size="sm" color="primary">Action</CButton>
            <CButton _zx_="00466_" size="sm" color="danger">Action</CButton>
            <CButton _zx_="00467_" size="sm" color="warning">Action</CButton>
            <CButton _zx_="00468_" size="sm" color="info">Action</CButton>
            <CButton _zx_="00469_" size="sm" color="success">Action</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00470_">
      <CCol _zx_="00471_" sm="4">
        <CCard _zx_="00472_">
          <CCardHeader _zx_="00473_">
            Example Form
          </CCardHeader>
          <CCardBody _zx_="00474_">
            <CForm _zx_="00475_">
              <CInput _zx_="00476_" prepend="Username">
                <template _zx_="00477_" #append-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                type="email"
                autocomplete="email"
                prepend="Email"
              >
                <template _zx_="00478_" #append-content><CIcon name="cil-envelope-closed"/></template>
              </CInput>
              <CInput
                type="password"
                autocomplete="current-password"
                prepend="Password"
              >
                <template _zx_="00479_" #append-content><CIcon name="cil-shield-alt"/></template>
              </CInput>
              <div _zx_="00480_" class="form-group form-actions">
                <CButton _zx_="00481_" type="submit" size="sm" color="primary">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00482_" sm="4">
        <CCard _zx_="00483_">
          <CCardHeader _zx_="00484_">
            Example Form
          </CCardHeader>
          <CCardBody _zx_="00485_">
            <CForm _zx_="00486_">
              <CInput _zx_="00487_" placeholder="Username">
                <template _zx_="00488_" #append-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Email"
                type="email"
                autocomplete="email"
              >
                <template _zx_="00489_" #append-content><CIcon name="cil-envelope-closed"/></template>
              </CInput>
              <CInput
                placeholder="Password"
                type="password"
                autocomplete="current-password"
              >
                <template _zx_="00490_" #append-content><CIcon name="cil-shield-alt"/></template>
              </CInput>
              <div _zx_="00491_" class="form-group form-actions">
                <CButton _zx_="00492_" type="submit" class="btn btn-sm btn-secondary">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol _zx_="00493_" sm="4">
        <CCard _zx_="00494_">
          <CCardHeader _zx_="00495_">
            Example Form
          </CCardHeader>
          <CCardBody _zx_="00496_">
            <CForm _zx_="00497_">
              <CInput _zx_="00498_" placeholder="Username">
                <template _zx_="00499_" #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Email"
                type="email"
                autocomplete="email"
              >
                <template _zx_="00500_" #prepend-content><CIcon name="cil-envelope-closed"/></template>
              </CInput>
              <CInput
                placeholder="Password"
                type="password"
                autocomplete="current-password"
              >
                <template _zx_="00501_" #prepend-content><CIcon name="cil-shield-alt"/></template>
              </CInput>
              <div _zx_="00502_" class="form-group form-actions">
                <CButton _zx_="00503_" type="submit" size="sm" color="success">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow _zx_="00504_">
      <CCol _zx_="00505_" lg="12">
        <transition _zx_="00506_" name="fade">
          <CCard _zx_="00507_" v-if="show">
            <CCardHeader _zx_="00508_">
              <CIcon _zx_="00509_" name="cil-pencil"/> Form Elements
              <div _zx_="00510_" class="card-header-actions">
                <CLink _zx_="00511_" href="#" class="card-header-action btn-setting">
                  <CIcon _zx_="00512_" name="cil-settings"/>
                </CLink>
                <CLink
                  class="card-header-action btn-minimize"
                  @click="formCollapsed=!formCollapsed"
                >
                  <CIcon _zx_="00513_" :name="`cil-chevron-${formCollapsed ? 'bottom' : 'top'}`"/>
                </CLink>
                <CLink _zx_="00514_" href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <CIcon _zx_="00515_" name="cil-x-circle"/>
                </CLink>
              </div>
            </CCardHeader>
            <CCollapse _zx_="00516_" :show="formCollapsed">
              <CCardBody _zx_="00517_">
                <CInput
                  label="Prepended text"
                  description="Here's some help text"
                  type="email"
                  autocomplete="email"
                  prepend="@"
                />
                <CInput
                  label="Appended text"
                  append=".00"
                  description="Here's some help text"
                />
                <CInput
                  label="Appended and prepended text"
                  append=".00"
                  description="Here's some help text"
                  prepend="$"
                />
                <CInput
                  label="Append with button"
                  description="Here's some help text"
                >
                  <template _zx_="00518_" #append>
                    <CButton _zx_="00519_" color="primary">Go!</CButton>
                  </template>
                </CInput>
                <CInput _zx_="00520_" label="Two-buttons append">
                  <template _zx_="00521_" #append>
                    <CButton _zx_="00522_" color="primary">Search</CButton>
                    <CButton _zx_="00523_" color="danger">Options</CButton>
                  </template>
                </CInput>
                <div _zx_="00524_" class="form-actions">
                  <CButton _zx_="00525_" type="submit" color="primary">Save changes</CButton>
                  <CButton _zx_="00526_" color="secondary">Cancel</CButton>
                </div>
              </CCardBody>
            </CCollapse>
          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div></template>

<script>
export default {
  name: 'Forms',
  data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: [
        'Option 1', 'Option 2', 'Option 3',
        { 
          value: ['some value', 'another value'], 
          label: 'Selected option'
        }
      ],
      selectedOption: ['some value', 'another value'],

      formCollapsed: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes',
                      'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios',
                    'Radios - custom', 'Inline Radios - custom']
    }
  },
  methods: {
    validator (val) {
      return val ? val.length >= 4 : false
    }
  }
}
</script>
