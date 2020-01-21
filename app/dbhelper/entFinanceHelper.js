'use strict';

let mongoose = require('mongoose');
let entFinance = mongoose.model('EntFinance');

exports.findByUserId = async (userId) => {
    userId = mongoose.Types.ObjectId(userId);
    let query = entFinance.find({'userId':userId});
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

exports.getNewFinance = async (userId) => {
    userId = mongoose.Types.ObjectId(userId);
    let query = entFinance.find({'userId':userId});
    let res = null;
    await query.sort({'meta.createTime':-1}).limit(1).exec(function (err, bean) {
        if (err) {
            res = {};
        } else {
            res = bean[0];
        }
    });

    return res;
};

exports.createFinance = async (entFinance) => {
    entFinance = await entFinance.save();
    return entFinance;
};

exports.updateState = async (financeId,state) => {
    financeId = mongoose.Types.ObjectId(financeId);
    let query = entFinance.updateOne({'_id': financeId}, {'state': state});
    let result = 0;
    await query.exec(function (err, raw) {
        if (!err) {
            result = raw.n;
        }
    });
    return result;
};

exports.findAll = async () => {
    let query = entFinance.find({});
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
