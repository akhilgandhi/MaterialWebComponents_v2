import { MDCDrawer } from "@material/drawer";
import { MDCTopAppBar } from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});
const selector = '.mdc-button, .mdc-list-item';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});