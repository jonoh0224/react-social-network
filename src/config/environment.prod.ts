import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyD_1akBBfaPugy3s0lNUn8TFuimp6JCaxk',
    authDomain: 'test-jonoh.firebaseapp.com',
    databaseURL: 'https://test-jonoh-default-rtdb.firebaseio.com',
    projectId: 'test-jonoh',
    storageBucket: 'test-jonoh.appspot.com',
    messagingSenderId: '134292564984',
    appId: '1:134292564984:web:13a30321f20a149222040d',
    measurementId: 'G-P18BC3VZZ3'
  },
  settings: {
    enabledOAuthLogin: true,
    enabledOffline: true,
    appName: 'Green',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
