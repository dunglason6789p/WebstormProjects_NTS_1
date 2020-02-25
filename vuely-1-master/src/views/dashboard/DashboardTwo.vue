<template>
  <div>
    <v-container fluid grid-list-xl py-0>
      <div class="dash-title">
        <span>Overview</span>
        <v-tooltip v-model="overview" top>
          <a href="javascript:void(0);" slot="activator">
            <v-icon>ti-help-alt</v-icon>
          </a>
          <span>Overview</span>
        </v-tooltip>
      </div>
      <v-layout row wrap>
        <v-flex xl3 lg3 md3 sm6 xs12 py-0 mb-2>
          <div class="gradient-primary mb-0 border-0 app-card">
            <v-card-text>
              <div class="layout justify-space-between pa-3">
                <div class="align-item-start">
                    <h3>$<countTo :startVal='0' :endVal='2156' :duration='5000'></countTo></h3>
                  <p class="ma-0 fs-14">Total Earnings</p>
                </div>
                <div class="align-item-end">
                  <h3 class="dash-icon"><i class="ti-stats-up"></i></h3>
                </div>
              </div>
            </v-card-text>
            <line-chart :dataSet="totalEarnings" :lineTension="0.4" :dataLabels="labels" :enableGradient='gradientColor' :width="370" :height="100" class="px-3">
            </line-chart>
          </div>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 py-0 mb-2>
          <div class="gradient-success mb-0 border-0 app-card">
            <v-card-text>
              <div class="layout justify-space-between pa-3">
                <div class="align-item-start">
                    <h3>$<countTo :startVal='0' :endVal='3500' :duration='5000'></countTo></h3>
                  <p class="ma-0 fs-14">Online Revenue</p>
                </div>
                <div class="align-item-end">
                  <h3 class="dash-icon"><i class="ti-pulse"></i></h3>
                </div>
              </div>
            </v-card-text>
            <line-chart :dataSet="onlineRevenue" :lineTension="0.4" :dataLabels="labels" :enableGradient='gradientColor' :width="370" :height="100" class="px-3">
            </line-chart>
          </div>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 py-0 mb-2>
          <div class="gradient-pink mb-0 border-0 app-card">
            <v-card-text>
              <div class="layout justify-space-between pa-3">
                <div class="align-item-start">
                  <h3>$<countTo :startVal='0' :endVal='1800' :duration='5000'></countTo></h3>
                  <p class="ma-0 fs-14">Offline Revenue</p>
                </div>
                <div class="align-item-end">
                  <h3 class="dash-icon"><i class="ti-pie-chart"></i></h3>
                </div>
              </div>
            </v-card-text>
            <line-chart :dataSet="offlineRevenue" :lineTension="0.4" :dataLabels="labels" :enableGradient='gradientColor' :width="370" :height="100" class="px-3">
            </line-chart>
          </div>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 py-0 mb-2>
          <div class="gradient-warning mb-0 border-0 app-card">
            <v-card-text>
              <div class="layout justify-space-between pa-3">
                <div class="align-item-start">
                  <h3>$<countTo :startVal='0' :endVal='100' :duration='5000'></countTo></h3>
                  <p class="ma-0 fs-14">Marketing Expenses</p>
                </div>
                <div class="align-item-end">
                  <h3 class="dash-icon"><i class="ti-announcement"></i></h3>
                </div>
              </div>
            </v-card-text>
            <line-chart :dataSet="marketingExpenses" :lineTension="0.4" :dataLabels="labels" :enableGradient='gradientColor' :width="370" :height="100" class="px-3">
            </line-chart>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xl12 lg12 md12 xs12>
          <div class="app-card mb-0">
              <div class="app-card-title">
                <h3>Total Earning</h3>
                <div class="app-contextual-link">
                  <v-menu origin="center center" transition="scale-transition" bottom>
                    <v-btn icon slot="activator">
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                    <v-list>
                      <v-list-tile @click="">
                        <v-icon class="mr-1">settings</v-icon>
                        <v-list-tile-title>Settings</v-list-tile-title>
                      </v-list-tile>
                      <v-list-tile @click="">
                        <v-icon class="mr-1">more</v-icon>
                        <v-list-tile-title>View More</v-list-tile-title>
                      </v-list-tile>
                      <v-list-tile @click="">
                        <v-icon class="mr-1">notifications_off</v-icon>
                        <v-list-tile-title>Disable notifications</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </div>
              </div>
              <div class="app-card-content pt-0">
                <div class="ladgend-wrapper mb-3">
                  <p class="mb-0"><span class="ladgend ladgend-success"></span> <span>Open Rate</span></p>
                  <p class="mb-0"><span class="ladgend ladgend-pink"></span> <span>Recurring Payments</span></p>
                </div>
                <total-earnings :width="300" :height="350"></total-earnings>
              </div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="pa-3">
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2">
          <v-layout row wrap border-blue>
            <v-flex xs5>
              <div class="d-flex">
                <span class="small">New Clients</span>
              </div>
              <h3>9,123</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="newClients" :lineTension="0.4" :dataLabels="labels" gradientColor1="#2E68F5" gradientColor2="#0CD7C5" :width="100" :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2">
          <v-layout row wrap border-purple>
            <v-flex xs5>
              <div class="d-flex">
                <span class="small">Recurring Clients</span>
              </div>
              <h3>8,596</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="newClients" :lineTension="0.4" :dataLabels="labels" gradientColor1="#594DE2" gradientColor2="#594DE2" :width="100" :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2">
          <v-layout row wrap border-pink>
            <v-flex xs5>
              <div class="d-flex">
                <span class="small">Bounce Rate</span>
              </div>
              <h3>5,798</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="newClients" :lineTension="0.4" :dataLabels="labels" gradientColor1="#C852AA" gradientColor2="#D4298D" :width="100" :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 class="mb-2">
          <v-layout row wrap border-warning>
            <v-flex xs5>
              <div class="d-flex">
                <span class="small">Page Views</span>
              </div>
              <h3>2,123</h3>
            </v-flex>
            <v-flex xs7>
              <line-chart :dataSet="newClients" :lineTension="0.4" :dataLabels="labels" gradientColor1="#FD726B" gradientColor2="#FD8D54" :width="100" :height="70">
              </line-chart>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <div class="dash-title">
        <span>Useful Widgets</span>
        <v-tooltip v-model="usefulStats" top>
          <a href="javascript:void(0);" slot="activator">
            <v-icon>ti-help-alt</v-icon>
          </a>
          <span>Useful Widgets</span>
        </v-tooltip>
      </div>
      <v-layout row wrap>
        <v-flex xl6 lg6 md6 xs12 d-xs-full b-100>
          <div class="app-card mb-0 m-height-xl">
              <div class="app-card-title">
                <h3>Sales</h3>
                <div class="app-contextual-link">
                  <v-menu origin="center center" transition="scale-transition" bottom>
                    <v-btn icon slot="activator">
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                    <v-list>
                      <v-list-tile @click="">
                        <v-icon class="mr-1">settings</v-icon>
                        <v-list-tile-title>Settings</v-list-tile-title>
                      </v-list-tile>
                      <v-list-tile @click="">
                        <v-icon class="mr-1">more</v-icon>
                        <v-list-tile-title>View More</v-list-tile-title>
                      </v-list-tile>
                      <v-list-tile @click="">
                        <v-icon class="mr-1">notifications_off</v-icon>
                        <v-list-tile-title>Disable notifications</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </div>
              </div>
              <div class="app-card-content">
                <v-layout row wrap class="cart-wrap mb-2">
                  <v-flex hidden-xs-only md4>
                    <h2 class="mb-0"><i class="ti-shopping-cart text-blue mr-1"></i>2382</h2>
                    <p class="mb-0 px-4">Sales</p>
                  </v-flex>
                  <v-flex hidden-xs-only md4>
                    <h2 class="mb-0"><i class="ti-shopping-cart text-success mr-1"></i>53,255</h2>
                    <p class="mb-0 px-4">Views</p>
                  </v-flex>
                  <v-flex hidden-xs-only md4>
                    <h2 class="mb-0"><i class="ti-shopping-cart text-pink mr-1"></i>$1,25,000</h2>
                    <p class="mb-0 px-4">Earned</p>
                  </v-flex>
                </v-layout>
                <sales :width="250" :height="95"></sales>
              </div>
          </div>
        </v-flex>
        <v-flex xl6 lg6 md6 xs12 d-xs-full b-100>
          <div class="app-card mb-0">
            <div class="app-card-title">
              <h3>Invoices</h3>
              <div class="app-contextual-link">
                <v-menu origin="center center" transition="scale-transition" bottom>
                  <v-btn icon slot="activator">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">settings</v-icon>
                      <v-list-tile-title>Settings</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">more</v-icon>
                      <v-list-tile-title>View More</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">notifications_off</v-icon>
                      <v-list-tile-title>Disable notifications</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <div class="app-card-content">
              <div class="table-responsive">
                <v-data-table
                    :items="invoice"
                    hide-actions
                    hide-headers>
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.id }}</td>
                    <td class="fw-bold text-blue"><a href="javascript:;">{{ props.item.name }}</a></td>
                    <td>{{ props.item.customerName }}</td>
                    <td><span class="label" :class="props.item.labelClasses">{{ props.item.status }}</span></td>
                    <td>{{ props.item.amount }}</td>
                  </template>
                </v-data-table>
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <div class="dash-title pt-3">
        <span>Useful Widgets</span>
        <v-tooltip v-model="usefulWidgets" top>
          <a href="javascript:void(0);" slot="activator">
            <v-icon>ti-help-alt</v-icon>
          </a>
          <span>Useful Widgets</span>
        </v-tooltip>
      </div>
      <v-layout row wrap>
        <v-flex xl4 lg4 md4 xs12>
          <div class="gradient-primary mb-0 app-card">
            <v-card-title>
              <h3>Referrals</h3>
            </v-card-title>
            <v-card-text>
              <ul class="list-unstyled card-list">
                <li>
                  <p><span class="fw-bold">23488</span>&nbsp; Visits from Facebook</p>
                  <v-progress-linear value="20" height="5" color="white"></v-progress-linear>
                </li>
                <li>
                  <p><span class="fw-bold">23488</span>&nbsp; Visits from Twitter</p>
                  <v-progress-linear value="90" height="5" color="white"></v-progress-linear>
                </li>
                <li>
                  <p><span class="fw-bold">23488</span>&nbsp; Visits from Search</p>
                  <v-progress-linear value="30" height="5" color="white"></v-progress-linear>
                </li>
                <li>
                  <p><span class="fw-bold">23488</span>&nbsp; Direct visits</p>
                  <v-progress-linear value="75" height="5" color="white"></v-progress-linear>
                </li>
                <li>
                  <p><span class="fw-bold">23488</span>&nbsp; Visits from Facebook</p>
                  <v-progress-linear value="50" height="5" color="white"></v-progress-linear>
                </li>
              </ul>
            </v-card-text>
          </div>
        </v-flex>
        <v-flex xl4 lg4 md4 xs12>
          <div class="app-card mb-0 server-load">
            <div class="app-card-title">
              <h3>Server load</h3>
              <div class="app-contextual-link">
                <v-menu origin="center center" transition="scale-transition" bottom>
                  <v-btn icon slot="activator">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">settings</v-icon>
                      <v-list-tile-title>Settings</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">more</v-icon>
                      <v-list-tile-title>View More</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">notifications_off</v-icon>
                      <v-list-tile-title>Disable notifications</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <div class="app-card-content">
              <v-layout row wrap class="px-4 mb-3 hidden-sm-and-down">
                <v-flex xs12 md6 lg6 xl6 no-gutter>
                  <span>Space</span>
                  <h3 class="text-blue">98GB / 124GB</h3>
                </v-flex>
                <v-flex xs12 md6 lg6 xl6 no-gutter>
                  <span>Bandwidth</span>
                  <h3 class="text-blue">512MB / 1024MB</h3>
                </v-flex>
              </v-layout>
              <server-load :width="275" :height="275"></server-load>
            </div>
          </div>
        </v-flex>
        <v-flex xl4 lg4 md4 xs12>
          <div class="app-card mb-0">
            <div class="app-card-title">
              <h3>Recent Sale</h3>
              <div class="app-contextual-link">
                <v-menu origin="center center" transition="scale-transition" bottom>
                  <v-btn icon slot="activator">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">settings</v-icon>
                      <v-list-tile-title>Settings</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">more</v-icon>
                      <v-list-tile-title>View More</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">notifications_off</v-icon>
                      <v-list-tile-title>Disable notifications</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <div class="app-card-content">
              <v-list class="card-list">
                <v-list-tile>
                  <img height="50" width="50" src="/static/img/icon1.png" class="mr-3"></img>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>
                      <h5 class="fw-bold text-gray">Event Promo</h5>
                      <span class="mr-2"><i class="ti-download mr-1"></i> 225 Sale</span>
                      <span class="mr-2"><i class="ti-eye mr-1"></i> 280 Views</span>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <h5 class="mb-0 fw-bold">$ 59</h5>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile>
                  <img height="50" width="50" src="/static/img/icon2.png" class="mr-3"></img>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>
                      <h5 class="fw-bold text-gray">Toon City</h5>
                      <span class="mr-2"><i class="ti-download mr-1"></i> 225 Sale</span>
                      <span class="mr-2"><i class="ti-eye mr-1"></i> 280 Views</span>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <h5 class="mb-0 fw-bold">$ 59</h5>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile>
                  <img height="50" width="50" src="/static/img/icon3.png" class="mr-3"></img>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>
                      <h5 class="fw-bold text-gray">Chankya</h5>
                      <span class="mr-2"><i class="ti-download mr-1"></i> 225 Sale</span>
                      <span class="mr-2"><i class="ti-eye mr-1"></i> 280 Views</span>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <h5 class="mb-0 fw-bold">$ 59</h5>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile>
                  <img height="50" width="50" src="/static/img/icon4.png" class="mr-3"></img>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>
                      <h5 class="fw-bold text-gray">Gene</h5>
                      <span class="mr-2"><i class="ti-download mr-1"></i> 225 Sale</span>
                      <span class="mr-2"><i class="ti-eye mr-1"></i> 280 Views</span>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <h5 class="mb-0 fw-bold">$ 59</h5>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile>
                  <img height="50" width="50" src="/static/img/icon5.png" class="mr-3"></img>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>
                      <h5 class="fw-bold text-gray">Beast</h5>
                      <span class="mr-2"><i class="ti-download mr-1"></i> 225 Sale</span>
                      <span class="mr-2"><i class="ti-eye mr-1"></i> 280 Views</span>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <h5 class="mb-0 fw-bold">$ 59</h5>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xl5 lg5 md5 xs12>
          <div class="app-card mb-0">
            <div class="app-card-title">
              <h3>Support Request</h3>
              <div class="app-contextual-link">
                <v-menu origin="center center" transition="scale-transition" bottom>
                  <v-btn icon slot="activator">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">settings</v-icon>
                      <v-list-tile-title>Settings</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">more</v-icon>
                      <v-list-tile-title>View More</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">notifications_off</v-icon>
                      <v-list-tile-title>Disable notifications</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <div class="app-card-content">
              <support-request></support-request>
            </div>
          </div>
        </v-flex>
        <v-flex xl7 lg7 md7 xs12>
          <div class="app-card mb-0">
            <div class="app-card-title">
              <h3>Products Sale</h3>
              <div class="app-contextual-link">
                <v-menu origin="center center" transition="scale-transition" bottom>
                  <v-btn icon slot="activator">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">settings</v-icon>
                      <v-list-tile-title>Settings</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">more</v-icon>
                      <v-list-tile-title>View More</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-icon class="mr-1">notifications_off</v-icon>
                      <v-list-tile-title>Disable notifications</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <div class="app-card-content">
              <products-sale :width="250" :height="400"></products-sale>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TotalEarnings from "./dashboard-v2/TotalEarnings";
import LineChart from "./dashboard-v2/LineChart";
import ServerLoad from "./dashboard-v2/ServerLoad";
import ProductsSale from "./dashboard-v2/ProductsSale";
import Sales from "./dashboard-v2/Sales";
import SupportRequest from "./dashboard-v2/SupportRequest";
import countTo from "vue-count-to";

export default {
  components: {
    ServerLoad,
    TotalEarnings,
    LineChart,
    ProductsSale,
    Sales,
    SupportRequest,
    countTo
  },
  data() {
    return {
      overview: false,
      usefulStats: false,
      usefulWidgets: false,
      gradientColor: false,
      labels: ["A", "B", "C", "D", "E", "F", "J", "K", "L", "M", "N", "P"],
      totalEarnings: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
      onlineRevenue: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
      offlineRevenue: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
      marketingExpenses: [30, 50, 25, 55, 10, 60, 30, 20, 40, 20, 70, 40],
      bandwidthData: [30, 50, 20, 80, 60, 70, 60, 150, 110, 130, 115, 180, 190],
      totalDownloads: [10, 60, 40, 25, 60, 70, 60, 45, 25, 20, 25, 60, 65],
      newClients: [30, 20, 14, 22, 20, 15, 10, 30, 22, 20, 40, 42],
      valueDeterminate: 5,
      invoice: [
        {
          id: "00140",
          name: "Design Works",
          customerName: "Russell Henderson",
          status: "Pending",
          labelClasses: "label-primary",
          amount: "$2,580"
        },
        {
          id: "00140",
          name: "Development",
          customerName: "Russell Henderson",
          status: "Generated",
          labelClasses: "label-success",
          amount: "$2,580"
        },
        {
          id: "00140",
          name: "Testing Works",
          customerName: "Russell Henderson",
          status: "Pending",
          labelClasses: "label-primary",
          amount: "$2,580"
        },
        {
          id: "00140",
          name: "Analysis Project",
          customerName: "Russell Henderson",
          status: "Due Soon",
          labelClasses: "label-warning",
          amount: "$2,580"
        },
        {
          id: "00140",
          name: "Management Project",
          customerName: "Russell Henderson",
          status: "Due Soon",
          labelClasses: "label-warning",
          amount: "$2,580"
        },
        {
          id: "00140",
          name: "Design Works",
          customerName: "Russell Henderson",
          status: "Generated",
          labelClasses: "label-success",
          amount: "$2,580"
        },
        {
          id: "00140",
          name: "Resources",
          customerName: "Russell Henderson",
          status: "Due Soon",
          labelClasses: "label-warning",
          amount: "$2,580"
        }
      ]
    };
  }
};
</script>
