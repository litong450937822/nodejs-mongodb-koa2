'use strict';

let mongoose = require('mongoose');
let entBaseInfo = mongoose.model('EntBaseInfo');

exports.findByUserId = async (userId) => {
    let query = entBaseInfo.find({'userId':userId});
    let res = null;
    await query.exec(function (err, bean) {
        if (err) {
            res = {};
        } else {
            res = bean[0];
        }
    });

    return res;
};

exports.findAll = async () => {
    let query = entBaseInfo.find({});
    let res = null;
    await query.exec(function (err, bean) {
        if (err) {
            res = {};
        } else {
            res = bean;
        }
    });

    return res;
};
