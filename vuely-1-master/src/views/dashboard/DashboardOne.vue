<template>
  <div>
    <v-container fluid px-4 py-0>
      <div class="dash-title">
        <span>{{$lang.strings.overview}}</span>
        <v-tooltip v-model="overview" top>
          <a href="javascript:void(0);" slot="activator">
            <v-icon>ti-help-alt</v-icon>
          </a>
          <span>Dashboard Overview</span>
        </v-tooltip>
      </div>
      <!-- Dash Cards -->
      <v-layout row wrap border-rad-sm overflow-hidden>
        <v-flex xl3 lg3 md3 sm6 xs12 mb-1 no-gutter>
          <div class="dash-card">
            <div class="pa-3">
              <div class="layout justify-space-between mb-2">
                <div class="align-item-start">
                  <h3>$<countTo :startVal='0' :endVal='2156' :duration='5000'></countTo></h3>
                  <p class="ma-0 fs-14">Total Earnings</p>
                </div>
                <div class="align-item-end">
                  <h3 class="dash-icon"><i class="ti-stats-up"></i></h3>
                </div>
              </div>
              <line-chart-shadow
                :dataSet="totalEarnings"
                :lineTension="0.4"
                :dataLabels="labels"
                gradientColor1="#008FD6"
                gradientColor2="#01C8C2"
                :width="370"
                :height="100">
              </line-chart-shadow>
            </div>
          </div>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 mb-1 no-gutter>
          <div class="dash-card">
            <div class="pa-3">
              <div class="layout justify-space-between mb-2">
                <div class="align-item-start">
                  <h3>$<countTo :startVal='0' :endVal='3500' :duration='5000'></countTo></h3>
                  <p class="ma-0 fs-14">Online Revenue</p>
                </div>
                <div class="align-item-end">
                  <h3 class="dash-icon"><i class="ti-pulse"></i></h3>
                </div>
              </div>
              <line-chart-shadow
                :dataSet="onlineRevenue"
                :lineTension="0.4"
                :dataLabels="labels"
                gradientColor1="#993FA6"
                gradientColor2="#FD1568"
                :width="370"
                :height="100">
              </line-chart-shadow>
            </div>
          </div>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 mb-1 no-gutter>
          <div class="dash-card">
            <div class="pa-3">
              <div class="layout justify-space-between mb-2">
                <div class="align-item-start">
                  <h3>$<countTo :startVal='0' :endVal='1800' :duration='5000'></countTo></h3>
                  <p class="ma-0 fs-14">Offline Revenue</p>
                </div>
                <div class="align-item-end">
                  <h3 class="dash-icon"><i class="ti-pie-chart"></i></i></h3>
                </div>
              </div>
              <line-chart-shadow
                :dataSet="offlineRevenue"
                :lineTension="0.4"
                :dataLabels="labels"
                gradientColor1="#F56074"
                gradientColor2="#F38617"
                :width="370"
                :height="100">
              </line-chart-shadow>
            </div>
          </div>
        </v-flex>
        <v-flex xl3 lg3 md3 sm6 xs12 mb-1 no-gutter>
          <div class="dash-card border-0">
            <div class="pa-3">
              <div class="layout justify-space-between mb-2">
                <div class="align-item-start">
                  <h3>$<countTo :startVal='0' :endVal='100' :duration='5000'></countTo></h3>
                  <p class="ma-0 fs-14">Marketing Expenses</p>
                </div>
                <div class="align-item-end">
                  <h3 class="dash-icon"><i class="ti-announcement"></i></h3>
                </div>
              </div>
              <line-chart-shadow
                :dataSet="marketingExpenses"
                :lineTension="0.4"
                :dataLabels="labels"
                gradientColor1="#4731FA"
                gradientColor2="#985BAC"
                :width="370"
                :height="100">
              </line-chart-shadow>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-xl>
      <div class="dash-title">
        <span>{{$lang.strings.salesAndVisitStats}}</span>
        <v-tooltip v-model="salesAndStats" top>
          <a href="javascript:void(0);" slot="activator">
            <v-icon>ti-help-alt</v-icon>
          </a>
          <span>Sales & Visits Stats</span>
        </v-tooltip>
      </div>
      <v-layout row wrap>
        <v-flex xl8 lg8 md8 xs12 d-md-half-block b-50>
          <!-- Visit & Sales Statistics -->
          <div class="app-card mb-0">
            <div class="app-card-title">
              <h3>Visit & Sales Statistics</h3>
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
                <p class="mb-0"><span class="ladgend ladgend-success"></span> <span>Sales</span></p>
                <p class="mb-0"><span class="ladgend ladgend-warning"></span> <span>Visits</span></p>
              </div>
              <sales-analysis
                :width="370"
                :height="310">
              </sales-analysis>
            </div>
          </div>
        </v-flex>
        <v-flex xl4 lg4 md4 xs12 d-md-half-block b-50>
          <!-- Our Visitor -->
          <div class="app-card mb-0 m-height-lg">
            <div class="app-card-title">
              <h3>Our Visitors</h3>
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
            <div class="app-card-content pos-relative">
              <span class="chart-stat hidden-xs-only">75.3 %</span>
              <doughnut-chart :width="370" :height="270" class="chart-responsive"></doughnut-chart>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <div class="dash-title pt-3">
        <span>{{$lang.strings.orderAndProjectStats}}</span>
        <v-tooltip v-model="orderAndProjectStats" top>
          <a href="javascript:void(0);" slot="activator">
            <v-icon>ti-help-alt</v-icon>
          </a>
          <span>Order & Projects Stats</span>
        </v-tooltip>
      </div>
      <v-layout row wrap>
        <v-flex xl4 lg4 md4 xs12>
          <!-- bandwidth Usage -->
          <div class="gradient-primary app-card border-0">
            <v-card-text>
              <div class="layout justify-space-between pa-3 mb-2">
                <div class="align-item-start">
                  <h3 class="fw-bold">Bandwidth usage</h3>
                  <p class="fs-14 mb-0">March 2017</p>
                </div>
                <div class="align-item-end">
                  <h3 class="fw-bold">50 GB</h3>
                </div>
              </div>
              <line-chart-shadow
                :dataSet="bandwidthData"
                :lineTension="0.1"
                :dataLabels="labels"
                :width="370"
                :height="100"
                :enableGradient='bandwidthGradientColor'>
              </line-chart-shadow>
            </v-card-text>
          </div>
          <!-- Tottle Download -->
          <div class="gradient-warning mb-0 app-card border-0">
            <v-card-text>
              <div class="layout justify-space-between pa-3 mb-2">
                <div class="align-item-start">
                  <h3 class="fw-bold">Total Downloads</h3>
                  <p class="fs-14 mb-0">March 2017</p>
                </div>
                <div class="align-item-end">
                  <h3 class="fw-bold">3578</h3>
                </div>
              </div>
              <line-chart-shadow
                :dataSet="totalDownloads"
                :lineTension="0.3"
                :dataLabels="labels"
                :width="370"
                :height="100"
                :enableGradient='bandwidthGradientColor'>
              </line-chart-shadow>
            </v-card-text>
          </div>
        </v-flex>
        <v-flex xl8 lg8 md8 xs12>
          <!-- Shopping Cart -->
          <shopping-cart></shopping-cart>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6 xl6 d-md-full b-100>
          <!-- Product Sales -->
          <div class="app-card mb-0 m-height-md">
            <div class="app-card-title">
              <h3>Product Sales</h3>
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
            <div class="app-card-content overflow-hidden pt-0">
              <div class="ladgend-wrapper mb-3">
                <p class="mb-0"><span class="ladgend ladgend-success"></span> <span>iPhone 8</span></p>
                <p class="mb-0"><span class="ladgend ladgend-warning"></span> <span>Samsung X8</span></p>
              </div>
              <product-sales :width="400" :height="155"></product-sales>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 xl6 d-md-full b-100>
          <!-- Project Status -->
          <project-status></project-status>
        </v-flex>
      </v-layout>
      <div class="dash-title pt-3">
        <span>{{$lang.strings.fitnessStats}}</span>
        <v-tooltip v-model="fitnessStats" top>
          <a href="javascript:void(0);" slot="activator">
            <v-icon>ti-help-alt</v-icon>
          </a>
          <span>Fitness Stats</span>
        </v-tooltip>
      </div>
      <v-layout row wrap>
        <v-flex xl8 lg8 md8 sm12 xs12 b-100>
          <!-- Useful Widget -->
          <div class="dash-card-wrap overflow-hidden border-rad-sm mb-4">
            <div class="dash-card-light">
              <p>Average Steps</p>
              <h2 class="text-blue">3261</h2>
              <radial-progress-bar
                :diameter="135"
                :completed-steps="60"
                :total-steps="100"
                startColor="#5530DA"
                stopColor="#3163F3"
                :strokeWidth="6"
                innerStrokeColor="#EAEAEA"
                class="mx-auto my-4">
               <h2><i class="ti-arrow-up"></i></h2>
              </radial-progress-bar>
              <h2 class="text-blue">5000</h2>
              <p>Today's Step</p>
            </div>
            <div class="dash-card-light">
              <p>Today's Distance</p>
              <h2 class="text-warning">7.6 Km</h2>
              <radial-progress-bar
                :diameter="135"
                :completed-steps="40"
                :total-steps="100"
                startColor="#FD7266"
                stopColor="#FF9348"
                :strokeWidth="6"
                innerStrokeColor="#EAEAEA"
                class="mx-auto my-4">
               <h2><i class="ti-arrow-down"></i></h2>
              </radial-progress-bar>
              <h2 class="text-warning">10 Km</h2>
              <p>Today's Distance</p>
            </div>
            <div class="dash-card-light">
              <p>Calories</p>
              <h2 class="text-danger">350</h2>
              <radial-progress-bar
                :diameter="135"
                :completed-steps="90"
                :total-steps="100"
                startColor="#BA339F"
                stopColor="#F7076D"
                :strokeWidth="6"
                innerStrokeColor="#EAEAEA"
                class="mx-auto my-4">
                <h2><i class="ti-arrow-up"></i></h2>
              </radial-progress-bar>
              <h2 class="text-danger">550</h2>
              <p>Today's Goal</p>
            </div>
          </div>
          <!-- Support Tickets -->
          <div class="dash-title">
            <span>{{$lang.strings.supportAndUsefulWidgets}}</span>
            <v-tooltip v-model="supportAndWidgets" top>
              <a href="javascript:void(0);" slot="activator">
                <v-icon>ti-help-alt</v-icon>
              </a>
              <span>Support & Useful widgets</span>
            </v-tooltip>
          </div>
          <div class="app-card">
            <div class="app-card-title">
              <h3>Support Tickets</h3>
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
              <support-tickets></support-tickets>
            </div>
          </div>
          <v-layout row wrap>
            <v-flex xl6 lg6 md6 xs12>
              <!-- NewsLetter Campaign -->
              <div class="app-card mb-0">
                <div class="app-card-title">
                  <h3>Newsletter Campaign</h3>
                </div>
                <div class="app-card-content">
                  <news-letter-campaign :width="250" :height="250"></news-letter-campaign>
                </div>
              </div>
            </v-flex>
            <v-flex xl6 lg6 md6 xs12>
              <!-- Current Visitors -->
              <div class="app-card mb-0">
                <div class="app-card-title">
                  <h3>Current Visitors</h3>
                </div>
                <div class="app-card-content overflow-hidden">
                  <current-visitors></current-visitors>
                </div>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xl6 lg6 md6 sm6 xs12>
              <!-- Blog Card -->
              <div class="app-card">
                <div class="app-card-content">
                  <div class="blog-thumb mb-3">
                    <img class="img-responsive" src="/static/img/post-1.png" alt="blog image" width="100%" height="350">
                  </div>
                  <div class="blog-content mb-2">
                    <h4>Bridge Project</h4>
                    <span class="small">Last updated: Sunday 1:19 PM </span>
                  </div>
                  <div class="blog-client clearfix">
                    <ul class="list-inline">
                      <li>
                        <img src="/static/img/user-6.jpg" class="rounded-circle" alt="Blog Client Image" width="32" height="32" />
                      </li>
                      <li>
                        <img src="/static/img/user-7.jpg" class="rounded-circle" alt="Blog Client Image" width="32" height="32" />
                      </li>
                      <li>
                        <img src="/static/img/user-8.jpg" class="rounded-circle" alt="Blog Client Image" width="32" height="32" />
                      </li>
                      <li>
                        <img src="/static/img/user-9.jpg" class="rounded-circle" alt="Blog Client Image" width="32" height="32" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </v-flex>
            <v-flex xl6 lg6 md6 sm6 xs12>
              <!-- Blog Card -->
              <div class="app-card">
                <div class="app-card-content">
                  <div class="blog-thumb mb-3">
                    <img class="img-responsive" src="/static/img/post-2.png" alt="blog image" width="100%" height="350">
                  </div>
                  <div class="blog-content">
                    <h4>Where Can You Find Unique Myspace Layouts Nowadays</h4>
                    <span class="small">11 Nov 2017 , By: Admin , 5 Comments </span>
                  </div>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xl4 lg4 md4 sm12 xs12 b-100>
          <!-- Weekly Summery -->
          <div class="app-card mb-4">
            <div class="app-card-title">
              <h3>Weekly Summery</h3>
            </div>
            <div class="app-card-content">
              <weekly-summery :height="245"></weekly-summery>
            </div>
          </div>
          <!-- ToDo list -->
          <div class="app-card mb-4">
            <div class="app-card-title">
              <h3>List To-Do</h3>
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
              <to-do-list></to-do-list>
            </div>
          </div>
          <!-- Weather Widget -->
          <div class="mb-4">
              <weather></weather>
          </div>
          <!-- New Member Section -->
          <div class="app-card mb-4">
            <div class="app-card-title">
              <h3>New Members</h3>
            </div>
            <div class="app-card-content">
              <v-list>
                <v-list-tile>
                  <v-list-tile-avatar>
                    <img class="img-responsive" src="/static/img/user-6.jpg" alt="user-image"></img>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <span>Lizzie</span>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <div class="right">
                      <v-btn fab dark small class="btn-gradient-success mr-2">
                        <v-icon dark>ti-check</v-icon>
                      </v-btn>
                      <v-btn fab dark small class="btn-gradient-pink">
                        <v-icon dark>ti-close</v-icon>
                      </v-btn>
                    </div>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-list-tile-avatar>
                    <img class="img-responsive" src="/static/img/user-7.jpg" alt="user image"></img>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <span>Jenkins</span>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <div class="right">
                      <v-btn fab dark small class="btn-gradient-success mr-2">
                        <v-icon dark>ti-check</v-icon>
                      </v-btn>
                      <v-btn fab dark small class="btn-gradient-pink">
                        <v-icon dark>ti-close</v-icon>
                      </v-btn>
                    </div>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-list-tile-avatar>
                    <img class="img-responsive" src="/static/img/user-11.jpg" alt="user-image"></img>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <span>Katherine</span>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <div class="right">
                      <v-btn fab dark small class="btn-gradient-success mr-2">
                        <v-icon dark>ti-check</v-icon>
                      </v-btn>
                      <v-btn fab dark small class="btn-gradient-pink">
                        <v-icon dark>ti-close</v-icon>
                      </v-btn>
                    </div>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-list-tile-avatar>
                    <img class="img-responsive" src="/static/img/user-10.jpg" alt="user-image"></img>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <span>Marian</span>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <div class="right">
                      <v-btn fab dark small class="btn-gradient-success mr-2">
                        <v-icon dark>ti-check</v-icon>
                      </v-btn>
                      <v-btn fab dark small class="btn-gradient-pink">
                        <v-icon dark>ti-close</v-icon>
                      </v-btn>
                    </div>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </div>
          </div>
          <!-- Add New Blog -->
          <div class="app-card">
            <div class="app-card-title">
              <h3>Add New Blog</h3>
            </div>
            <div class="app-card-content">
              <v-form>
                <dropzone id="myVueDropzone" class="mb-2" :options="dropzoneOptions">
                  <input type="hidden" name="token" value="xxx">
                </dropzone>
                <v-text-field
                  name="subject"
                  label="Subject">
                </v-text-field>
                <v-text-field
                  name="content"
                  label="Content"
                  multi-line>
                </v-text-field>
                <v-btn class="btn-primary">Add</v-btn>
              </v-form>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
import Dropzone from "vue2-dropzone";
import SalesAnalysis from "./dashboard-v1/SalesAnalysisChart";
import LineChartShadow from "./dashboard-v1/LineChartShadow";
import DoughnutChart from "./dashboard-v1/DoughnutChart";
import ShoppingCart from "./dashboard-v1/ShoppingCart";
import ProjectStatus from "./dashboard-v1/ProjectStatus";
import ProductSales from "./dashboard-v1/ProductSales";
import RadialProgressBar from "vue-radial-progress";
import WeeklySummery from "./dashboard-v1/WeeklySummery";
import SupportTickets from "./dashboard-v1/SupportTickets";
import ToDoList from "../../components/Widgets/ToDoList";
import Weather from "../../components/Widgets/Weather";
import NewsLetterCampaign from "./dashboard-v1/NewsLetterCampaign";
import CurrentVisitors from "./dashboard-v1/CurrentVisitors";
import countTo from "vue-count-to";

export default {
  components: {
    DoughnutChart,
    SalesAnalysis,
    LineChartShadow,
    ShoppingCart,
    ProductSales,
    RadialProgressBar,
    WeeklySummery,
    SupportTickets,
    ToDoList,
    Weather,
    CurrentVisitors,
    NewsLetterCampaign,
    ProjectStatus,
    Dropzone,
    countTo
  },
  data() {
    return {
      bandwidthGradientColor: false,
      overview: false,
      salesAndStats: false,
      orderAndProjectStats: false,
      fitnessStats: false,
      supportAndWidgets: false,
      labels: ["A", "B", "C", "D", "E", "F", "J", "K", "L", "M", "N", "P"],
      totalEarnings: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
      onlineRevenue: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
      offlineRevenue: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
      marketingExpenses: [30, 50, 25, 55, 10, 60, 30, 20, 40, 20, 70, 40],
      bandwidthData: [30, 50, 20, 80, 60, 70, 60, 150, 110, 130, 115, 180],
      totalDownloads: [10, 60, 40, 25, 60, 70, 60, 45, 25, 20, 25, 60],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  }
};
</script>
