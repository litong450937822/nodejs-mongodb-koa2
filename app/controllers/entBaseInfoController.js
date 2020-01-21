'use strict'

let xss = require('xss')
let mongoose = require('mongoose');

import entBaseInfoHelper from '../dbhelper/entBaseInfoHelper';

exports.findByUserId = async (ctx, next) => {
    let userId = xss(ctx.request.body.userId.trim());
    userId = mongoose.Types.ObjectId(userId);
    let entBaseInfo = await entBaseInfoHelper.findByUserId(userId)

    ctx.body = {
        code: 0,
        msg: "success",
        entBaseInfo
    };

    return next;
};

exports.findAll = async (ctx, next) => {
    let entBaseInfo = await entBaseInfoHelper.findAll()

    ctx.body = {
        code: 0,
        msg: "success",
        entBaseInfo
    };

    return next;
};
