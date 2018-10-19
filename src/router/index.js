import Vue from 'vue';
import Router from 'vue-router';

// 各个模块分配
import dashBoard from './dashBoard';
import errPage from './errPage';

Vue.use(Router);

export const defaultSideBar = dashBoard;

export const routersMap = [
  dashBoard,
  errPage,
];

export default new Router({
  // mode: 'history',
  routes: routersMap,
});
