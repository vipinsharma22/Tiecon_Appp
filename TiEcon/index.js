/**
 * @author: Chahat chugh
 * @description : Store is provided
 * @Flow : Linting error check DONE
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'mobx-react';
import React from 'react';
import MyApp from './App';
import Store from './src/store/mobx-store';

const AppContainer=()=>{  
  return (
    <Provider store={Store}>
      <MyApp/>
    </Provider>
  );
}


AppRegistry.registerComponent(appName, () => AppContainer);