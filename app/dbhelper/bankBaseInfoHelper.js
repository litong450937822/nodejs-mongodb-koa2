'use strict';

let mongoose = require('mongoose');
let BankBaseInfo = mongoose.model('BankBaseInfo');

exports.findByUserId = async (userId) => {
    let query = BankBaseInfo.find({'userId':userId});
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
    let query = BankBaseInfo.find({});
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
