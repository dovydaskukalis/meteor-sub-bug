import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Facts } from 'meteor/facts';

Facts.setUserIdFilter(function () { return true; });

export const Test = new Mongo.Collection('test');

Meteor.publish('usingOplog', function() {
  return Test.find({}, { limit: 1, sort: { createdAt: -1 }});
});

Meteor.publish('usingPolling', function() {
  return Test.find({}, { limit: 1 });
});
