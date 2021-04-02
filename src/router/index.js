import Vue from 'vue'
import VueRouter from 'vue-router'
import CitySearch from '@/views/CitySearch'
import CurrentWeather from '@/views/CurrentWeather'
import Forecast from '@/views/Forecast'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'CitySearch',
    component: CitySearch
  },
  {
    path: '/:cityId/current',
    name: 'CurrentWeather',
    component: CurrentWeather
  },
  {
    path: '/:cityId/forecast',
    name: 'Forecast',
    component: Forecast
  }
]

const router = new VueRouter({
  routes
})

export default router
