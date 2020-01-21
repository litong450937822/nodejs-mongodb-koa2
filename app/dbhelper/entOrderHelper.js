'use strict';

let mongoose = require('mongoose');
let entOrder = mongoose.model('EntOrder');

exports.findByFinanceId = async (financeId) => {
    financeId = mongoose.Types.ObjectId(financeId);
    let query = entOrder.find({'financeId':financeId});
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

exports.createOrder = async (entOrder) => {
    entOrder = await entOrder.save();
    return entOrder;
};

exports.updateState = async (orderId,state) => {
    orderId = mongoose.Types.ObjectId(orderId);
    let query = entOrder.updateOne({'_id': orderId}, {'state': state});
    let result = 0;
    await query.exec(function (err, raw) {
        if (!err) {
            result = raw.n;
        }
    });
    return result;
};

exports.findAll = async () => {
    let query = entOrder.find({});
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
