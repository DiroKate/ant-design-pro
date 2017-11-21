import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

const getCustomRoutes = app => [
  {
    name: 'CreateActivity',
    exact: true,
    path: '/activities/create',
    component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
  },
  {
    name: 'ActivityDetails',
    exact: true,
    path: '/activities/:id',
    component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
  },
];

export default {
  getCustomRoutes,
};