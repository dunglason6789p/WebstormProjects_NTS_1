import Vue from 'vue'
import Router from 'vue-router'

// layout components
import Full from '@/container/Full'

// dashboard components
import DashboardOne from '@/views/dashboard/DashboardOne'
import DashboardTwo from '@/views/dashboard/DashboardTwo'

// Inbox component
import Inbox from '@/views/inbox/Inbox'

// calendar components
import Calendar from '@/views/calendar/Calendar'

// ui components
import Buttons from '@/views/ui-elements/Buttons'
import Cards from '@/views/ui-elements/Cards'
import Grid from '@/views/ui-elements/Grid'
import List from '@/views/ui-elements/List'
import Menu from '@/views/ui-elements/Menu'
import Slider from '@/views/ui-elements/Slider'
import Snackbar from '@/views/ui-elements/Snackbar'
import Tooltip from '@/views/ui-elements/Tooltip'
import Dialog from '@/views/ui-elements/Dialog'
import Select from '@/views/ui-elements/Select'
import Input from '@/views/ui-elements/Input'
import Checkbox from '@/views/ui-elements/Checkbox'
import Radio from '@/views/ui-elements/Radio'
import Toolbar from '@/views/ui-elements/Toolbar'
import Progress from '@/views/ui-elements/Progress'
import Tabs from '@/views/ui-elements/Tabs'
import Carousel from '@/views/ui-elements/Carousel'
import Chips from '@/views/ui-elements/Chips'
import Datepicker from '@/views/ui-elements/Datepicker'
import Timepicker from '@/views/ui-elements/Timepicker'

// chart components
import VueChartjs from '@/views/charts/VueChartjs'
import VueEcharts from '@/views/charts/VueEcharts'

// maps views
import GoogleMaps from '@/views/maps/GoogleMaps'
import LeafletMaps from '@/views/maps/LeafletMaps'
import JvectorMap from '@/views/maps/JvectorMap'

// Pages views
import Blank from '@/views/pages/Blank'
import Gallery from '@/views/pages/Gallery'
import Pricing from '@/views/pages/Pricing'

// users views
import UserProfile from '@/views/users/UserProfile'
import UsersList from '@/views/users/UsersList'

// drag-drop components
import Vue2Dragula from '@/views/drag-drop/Vue2Dragula'
import VueDraggable from '@/views/drag-drop/Vuedraggable'
import VueDraggableResizeable from '@/views/drag-drop/VueDraggableResizable'

// icons components
import Themify from '@/views/icons/Themify'
import Material from '@/views/icons/Material'

// editor components
import QuillEditor from '@/views/editor/QuillEditor'
import WYSIWYG from '@/views/editor/WYSIWYG'

// form componenets
import FormValidation from '@/views/forms/FormValidation'
import Stepper from '@/views/forms/Stepper'

// session components
import SignUp from '@/views/session/SignUp'
import Login from '@/views/session/Login'
import LockScreen from '@/views/session/LockScreen'

// Data table componenets
import Standard from '@/views/tables/Standard'
import Slots from '@/views/tables/Slots'
import SelectableRows from '@/views/tables/SelectableRows'
import SearchWithText from '@/views/tables/SearchWithText'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Full,
      redirect: '/dashboard/dashboard-v1',
      children: [
        {
          path: '/dashboard/dashboard-v1',
          component: DashboardOne,
          meta: {
            title: 'Dashboard V1',
            breadcrumb: 'Dashboard / Dashboard V1'
          }
        },
        {
          path: '/dashboard/dashboard-v2',
          component: DashboardTwo,
          meta: {
            title: 'Dashboard V2',
            breadcrumb: 'Dashboard / Dashboard V2'
          }
        },
        {
          path: '/inbox',
          component: Inbox,
          meta: {
            title: 'Inbox',
            breadcrumb: 'Inbox'
          }
        },
        {
          path: '/calendar',
          component: Calendar,
          meta: {
            title: 'Calendar',
            breadcrumb: 'Calendar'
          }
        },
        {
          path: '/ui-elements/buttons',
          component: Buttons,
          meta: {
            title: 'Buttons',
            breadcrumb: 'UI Elements / Buttons'
          }
        },
        {
          path: '/ui-elements/cards',
          component: Cards,
          meta: {
            title: 'Cards',
            breadcrumb: 'UI Elements / Cards'
          }
        },
        {
          path: '/ui-elements/grid',
          component: Grid,
          meta: {
            title: 'Grid',
            breadcrumb: 'UI Elements / Grid'
          }
        },
        {
          path: '/ui-elements/list',
          component: List,
          meta: {
            title: 'List',
            breadcrumb: 'UI Elements / List'
          }
        },
        {
          path: '/ui-elements/menu',
          component: Menu,
          meta: {
            title: 'Menu',
            breadcrumb: 'UI Elements / Menu'
          }
        },
        {
          path: '/ui-elements/slider',
          component: Slider,
          meta: {
            title: 'Slider',
            breadcrumb: 'UI Elements / Slider'
          }
        },
        {
          path: '/ui-elements/snackbar',
          component: Snackbar,
          meta: {
            title: 'Snackbar',
            breadcrumb: 'UI Elements / Snackbar'
          }
        },
        {
          path: '/ui-elements/tooltip',
          component: Tooltip,
          meta: {
            title: 'Tooltip',
            breadcrumb: 'UI Elements / Tooltip'
          }
        },
        {
          path: '/ui-elements/dialog',
          component: Dialog,
          meta: {
            title: 'Dialog',
            breadcrumb: 'UI Elements / Dialog'
          }
        },
        {
          path: '/ui-elements/select',
          component: Select,
          meta: {
            title: 'Select',
            breadcrumb: 'UI Elements / Select'
          }
        },
        {
          path: '/ui-elements/input',
          component: Input,
          meta: {
            title: 'Input',
            breadcrumb: 'UI Elements / Input'
          }
        },
        {
          path: '/ui-elements/checkbox',
          component: Checkbox,
          meta: {
            title: 'Checkbox',
            breadcrumb: 'UI Elements / Checkbox'
          }
        },
        {
          path: '/ui-elements/radio',
          component: Radio,
          meta: {
            title: 'Radio',
            breadcrumb: 'UI Elements / Radio'
          }
        },
        {
          path: '/ui-elements/toolbar',
          component: Toolbar,
          meta: {
            title: 'Toolbar',
            breadcrumb: 'UI Elements / Toolbar'
          }
        },
        {
          path: '/ui-elements/progress',
          component: Progress,
          meta: {
            title: 'Progress',
            breadcrumb: 'UI Elements / Progress'
          }
        },
        {
          path: '/ui-elements/tabs',
          component: Tabs,
          meta: {
            title: 'Tabs',
            breadcrumb: 'UI Elements / Tabs'
          }
        },
        {
          path: '/ui-elements/carousel',
          component: Carousel,
          meta: {
            title: 'Carousel',
            breadcrumb: 'UI Elements / Carousel'
          }
        },
        {
          path: '/ui-elements/chips',
          component: Chips,
          meta: {
            title: 'Chips',
            breadcrumb: 'UI Elements / Chips'
          }
        },
        {
          path: '/ui-elements/datepicker',
          component: Datepicker,
          meta: {
            title: 'Datepicker',
            breadcrumb: 'UI Elements / Datepicker'
          }
        },
        {
          path: '/ui-elements/timepicker',
          component: Timepicker,
          meta: {
            title: 'Timepicker',
            breadcrumb: 'UI-Elements / Timepicker'
          }
        },
        // chart views
        {
          path: '/charts/vue-chartjs',
          component: VueChartjs,
          meta: {
            title: 'Vue Chartjs',
            breadcrumb: 'Charts / Vue Chartjs'
          }
        },
        {
          path: '/charts/vue-echarts',
          component: VueEcharts,
          meta: {
            title: 'Vue Echarts',
            breadcrumb: 'Charts / Vue Echarts'
          }
        },
        // google maps
        {
          path: '/maps/google-maps',
          component: GoogleMaps,
          meta: {
            title: 'Google Maps',
            breadcrumb: 'Maps / Google Maps'
          }
        },
        {
          path: '/maps/leaflet-maps',
          component: LeafletMaps,
          meta: {
            title: 'Leaflet Maps',
            breadcrumb: 'Maps / Leaflet Maps'
          }
        },
        {
          path: '/maps/jvector-map',
          component: JvectorMap,
          meta: {
            title: 'Jvector Map',
            breadcrumb: 'Maps / Jvector Map'
          }
        },
        // pages
        {
          path: '/pages/gallery',
          component: Gallery,
          meta: {
            title: 'Gallery',
            breadcrumb: 'Pages / Gallery'
          }
        },
        {
          path: '/pages/pricing',
          component: Pricing,
          meta: {
            title: 'Pricing',
            breadcrumb: 'Pages / Pricing'
          }
        },
        {
          path: '/pages/blank',
          component: Blank,
          meta: {
            title: 'Blank',
            breadcrumb: 'Pages / Blank'
          }
        },
        // users
        {
          path: '/users/user-profile',
          component: UserProfile,
          meta: {
            title: 'User Profile',
            breadcrumb: 'Users / User Profile'
          }
        },
        {
          path: '/users/users-list',
          component: UsersList,
          meta: {
            title: 'Users List',
            breadcrumb: 'Users / Users List'
          }
        },
        // drag and drop
        {
          path: '/drag-drop/vue2dragula',
          component: Vue2Dragula,
          meta: {
            title: 'Vue2 Dragula',
            breadcrumb: 'Drag And Drop / Vue2 Dragula'
          }
        },
        {
          path: '/drag-drop/vuedraggable',
          component: VueDraggable,
          meta: {
            title: 'Vue Draggable',
            breadcrumb: 'Drag And Drop / Vue Draggable'
          }
        },
        {
          path: '/drag-drop/vuedraggableresizeable',
          component: VueDraggableResizeable,
          meta: {
            title: 'Draggable Resizeable',
            breadcrumb: 'Drag And Drop / Draggable Resizeable'
          }
        },
        // icons
        {
          path: '/icons/themify',
          component: Themify,
          meta: {
            title: 'Themify',
            breadcrumb: 'Icons / Themify'
          }
        },
        {
          path: '/icons/material',
          component: Material,
          meta: {
            title: 'Material',
            breadcrumb: 'Icons / Material'
          }
        },
        // editor components
        {
          path: '/editor/quilleditor',
          component: QuillEditor,
          meta: {
            title: 'Quill Editor',
            breadcrumb: 'Editor / Quill Editor'
          }
        },
        {
          path: '/editor/wysiwyg',
          component: WYSIWYG,
          meta: {
            title: 'WYSIWYG',
            breadcrumb: 'Editor / WYSIWYG'
          }
        },
        // forms components
        {
          path: '/forms/form-validation',
          component: FormValidation,
          meta: {
            title: 'FormValidation',
            breadcrumb: 'Forms / FormValidation'
          }
        },
        // forms components
        {
          path: '/forms/stepper',
          component: Stepper,
          meta: {
            title: 'Stepper',
            breadcrumb: 'Forms / Stepper'
          }
        },
        // Data tables component
        {
          path: '/tables/standard',
          component: Standard,
          meta: {
            title: 'Standard',
            breadcrumb: 'Tables / Standard'
          }
        },
        {
          path: '/tables/slots',
          component: Slots,
          meta: {
            title: 'Slots',
            breadcrumb: 'Tables / Slots'
          }
        },
        {
          path: '/tables/selectablerows',
          component: SelectableRows,
          meta: {
            title: 'Selectable Rows',
            breadcrumb: 'Tables / Selectable Rows'
          }
        },
        {
          path: '/tables/searchwithtext',
          component: SearchWithText,
          meta: {
            title: 'Search Row',
            breadcrumb: 'Tables / Search Row'
          }
        }
      ]
    },
    {
      path: '/session/sign-up',
      component: SignUp,
      meta: {
        title: 'Sign Up',
        breadcrumb: 'Session / Sign Up'
      }
    },
    {
      path: '/session/login',
      component: Login,
      meta: {
        title: 'Login',
        breadcrumb: 'Session / Login'
      }
    },
    {
      path: '/session/lock-screen',
      component: LockScreen,
      meta: {
        title: 'Lock Screen',
        breadcrumb: 'Session / Lock Screen'
      }
    }
  ]
})
