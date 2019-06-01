import {build} from './build'
import {destroy} from './destroy'
import {addCookiesToBrowser} from './add-cookies-to-browser'
import {getCookiesFromBrowser} from './get-cookies-from-browser'

export const chrome = {build, destroy, addCookiesToBrowser, getCookiesFromBrowser}
