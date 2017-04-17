'use strict';
import { Layout } from './layout';
///<reference path="../typings/index.d.ts"/>
///<reference path="../src/subtract.ts"/>

describe('Layout', () => {
  // beforeEach(module('chartingWizardApp.version'));
  //
  // describe('interpolate filter', function() {
  //     beforeEach(module(function($provide) {
  //         $provide.value('version', 'TEST_VER');
  //     }));
  //
  //     it('should replace VERSION', inject(function(interpolateFilter) {
  //       expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
  //     }));
  // });
  it('fails', () => {
    expect('ABCFD').toBe('ABCDE');
  });

  it('creates the class from json', () => {
    let layout = Layout.fromJson({id: 20});
    expect(layout.id).toEqual(20);

  });

});
