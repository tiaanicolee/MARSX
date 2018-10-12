import React from 'react';
import Details from '../../components/Details';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest-localstorage-mock');

//Mock the axios calls to return dummy data
jest.mock('axios', () => {
    return {
      get: (url) => {
          switch (url) {
            case "https://sesardev.geosamples.org/samples/user_code/usercode":
                return Promise.resolve({
                    data: {
                        igsn_list: ["igsn"]
                    }
                });
            case "https://sesardev.geosamples.org/webservices/display.php?igsn=igsn":
                return Promise.resolve({
                    data: {
                        sample: {
                            name: "",
                            latitude: "",
                            longitude: "",
                            elevation: ""
                        }
                    }
                });
            default:
                return Promise.reject(new Error("error"));
          }
      }
    }
});

configure({ adapter: new Adapter() });

describe('<Details />', () => {
    let wrapper;
    let instance;

    beforeEach(() => {
        localStorage.setItem('usercode', 'usercode')
        wrapper = shallow(<Details />);
        instance = wrapper.instance();
    });

    it('should render Details', () => {
        localStorage.setItem('usercode', 'usercode')
        wrapper = shallow(<Details />);
        instance = wrapper.instance();
        expect(wrapper).toBeTruthy();
    });

    it('should reject the axios call', () => {
        localStorage.setItem('usercode', null)
        wrapper = shallow(<Details />);
        instance = wrapper.instance();
        expect(wrapper).toBeTruthy();
    });
});