import { client } from '../index';

export const REQUEST_MENU = 'REQUEST_MENU';
const requestMenu = () => ({
  type: REQUEST_MENU,
  menu: [],
});

export const RECIEVE_MENU = 'RECIEVE_MENU';
const recieveMenu = (menu) => ({
  type: RECIEVE_MENU,
  menu: menu,
});

export const fetchMenu = () => (dispatch) => {
  dispatch(requestMenu);

  return client
    .fetch('*[_type == "menu"][0]{menuList[]->{title, "slug": slug.current}}')
    .then((res) => dispatch(recieveMenu(res.menuList)));
};
