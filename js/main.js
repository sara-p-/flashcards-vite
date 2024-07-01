import '/scss/style.scss'
const modules = import.meta.glob('../images/*.png')
import itemsSwitch from './modules/items-switch'
import themeSwitch from './modules/theme-switch'

itemsSwitch()
themeSwitch()
