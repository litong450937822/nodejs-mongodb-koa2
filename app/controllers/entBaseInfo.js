'use strict'

let xss = require('xss')
let mongoose = require('mongoose');
let EntBaseInfo = mongoose.model('EntBaseInfo');

import entBaseInfoHelper from '../dbhelper/entBaseInfoHelper';

exports.findByUserId = async (ctx, next) => {
    let userId = xss(ctx.request.body.userId.trim());
    let entBaseInfo = await entBaseInfoHelper.findByUserId({userId})

    ctx.body = {
        code: 0,
        msg: "success",
        entBaseInfo
    };

    return next;
};
