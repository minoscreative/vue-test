import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBDxTYAZUFCZAl-9TC2C3Sj88NIRh313x4',
        libraries: 'places'
    }
})