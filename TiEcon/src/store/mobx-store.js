/**
 * @description : Global store management (MOBX)
 */

import {observable} from 'mobx';


class Store {
  /**
   * @author Chahat Chugh
   */

    @observable GridViewItems = [
      {
        key: 'SCHEDULE',
        pic : require('../assets/images/2x-15.png'),
        path: 'schedule',
        pic1 : require('../assets/images/3x-43.png'),
        
      },
      {
        key: 'CONNECT', 
        pic : require('../assets/images/UI_Elements-43.png'),
        path: 'schedule_agenda',
        pic1 : require('../assets/images/3x-43.png'),
      },
      {
        key: 'SPEAKER',
        pic : require('../assets/images/UI_960-42.png'),
        path: 'webview',
        pic1 : require('../assets/images/3x-43.png'),
      },
      {
        key: 'SPONSERS/EXHIBITORS', 
        pic : require('../assets/images/2x-16.png'),
        path: 'Sponsors',
        pic1 : require('../assets/images/3x-43.png'),
      },
      {
        key: 'BUZZ', 
        pic : require('../assets/images/UI_Elements-45.png'),
        path: 'webview' ,
        pic1 : require('../assets/images/3x-43.png'),
      },
      {
        key: 'INFORMATION', 
        pic : require('../assets/images/info-3.png'),
        path: 'Information',
        pic1 : require('../assets/images/3x-43.png'),
      }
    ]

    @observable  switchValue=false

    /**
     * @author Ritika Garg
     */

    //  flag to change data on click
    @observable toShowDateView= true

    // Initial data of schedule
    @observable dataSchedule= [{
      name: 'Registration opens',
      time: '07:00 AM-12:30 PM',
      venue: ''
    },
    {
      name: 'Opening Remarks',
      time: '10:30 AM-11:00 AM',
      venue: 'Hall A3'
    },
    {
      name: 'Opening Keynote',
      time: '11:30 AM-12:00 AM',
      venue: 'Hall A2'
    },
    {
      name: 'Keynote',
      time: '1:30 AM-2:00 AM',
      venue: ''
    },
    {
      name: 'Registration opens',
      time: '07:00 AM-12:30 PM',
      venue: ''
    },
    {
      name: 'Opening Remarks',
      time: '10:30 AM-11:00 AM',
      venue: 'Hall A3'
    },
    {
      name: 'Opening Keynote',
      time: '11:30 AM-12:00 AM',
      venue: 'Hall A2'
    },
    {
      name: 'Keynote',
      time: '1:30 AM-2:00 AM',
      venue: 'Hall A1'
    }
    ]

    // data to show on events click
    @observable eventsData= [{
      name: 'No events scheduled.',
      time: '',
      venue: ''
    }]
}

export default new Store() ;