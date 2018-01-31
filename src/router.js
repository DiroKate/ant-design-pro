import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import { getRouterData } from './common/router';
// import { getMyRouterData } from './common/myRoutes';

import Authorized from './utils/Authorized';
import styles from './index.less';

const { ConnectedRouter } = routerRedux;
const { AuthorizedRoute } = Authorized;
dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin} />;
});

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;
  const BasicLayout = routerData['/'].component;
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            path="/user"
            component={UserLayout}
          />
          <AuthorizedRoute
            path="/"
            render={props => <BasicLayout {...props} />}
            authority={['admin', 'user']}
            redirectPath="/user/login"
          />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
  // const myRouterData = getMyRouterData(app);
  // const MyLayout = myRouterData['/'].component;
  // return (
  //   <LocaleProvider locale={zhCN}>
  //     <Router history={history}>
  //       <Switch>
  //         <Route path="/user" render={props => <UserLayout {...props} />} />
  //         <Route path="/" render={props => <MyLayout {...props} />} />
  //       </Switch>
  //     </Router>
  //   </LocaleProvider>
  // );
}

export default RouterConfig;
