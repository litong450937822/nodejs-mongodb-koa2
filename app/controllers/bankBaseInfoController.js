'use strict'

let xss = require('xss')
let mongoose = require('mongoose');

import bankBaseInfoHelper from '../dbhelper/bankBaseInfoHelper';

exports.findByUserId = async (ctx, next) => {
    let userId = xss(ctx.request.body.userId.trim());
    userId = mongoose.Types.ObjectId(userId);
    let bankBaseInfo = await bankBaseInfoHelper.findByUserId(userId)

    ctx.body = {
        code: 0,
        msg: "success",
        bankBaseInfo
    };

    return next;
};

exports.findAll = async (ctx, next) => {
    let bankBaseInfo = await bankBaseInfoHelper.findAll()

    ctx.body = {
        code: 0,
        msg: "success",
        bankBaseInfo
    };

    return next;
};
