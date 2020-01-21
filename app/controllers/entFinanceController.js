'use strict'

let xss = require('xss')
let mongoose = require('mongoose');
let EntFinance = mongoose.model('EntFinance');

import entFinanceHelper from '../dbhelper/entFinanceHelper';

exports.findByUserId = async (ctx, next) => {
    let userId = xss(ctx.request.body.userId.trim());
    let entFinance = await entFinanceHelper.findByUserId(userId);

    ctx.body = {
        code: 0,
        msg: "success",
        entFinance
    };

    return next;
};

exports.getNewFinance = async (ctx, next) => {
    let userId = xss(ctx.request.body.userId.trim());
    let entFinance = await entFinanceHelper.getNewFinance(userId);

    ctx.body = {
        code: 0,
        msg: "success",
        entFinance
    };

    return next;
};

exports.updateState = async (ctx, next) => {
    let financeId = xss(ctx.request.body.financeId.trim());
    let state = xss(ctx.request.body.state.trim());

    let result = await entFinanceHelper.updateState(financeId, state);

    if (result!== 0) {
        ctx.body = {
            code: 0,
            msg: "success",
            result
        };
    } else {
        ctx.body = {
            code: 500,
            msg: "error",
        };
    }
};

exports.findAll = async (ctx, next) => {
    let entFinance = await entFinanceHelper.findAll()

    ctx.body = {
        code: 0,
        msg: "success",
        entFinance
    };

    return next;
};

exports.createFinance = async (ctx, next) => {
    let userId = xss(ctx.request.body.userId.trim());
    userId = mongoose.Types.ObjectId(userId);
    let projectName = xss(ctx.request.body.projectName.trim());
    let financeMoney = xss(ctx.request.body.financeMoney.trim());
    let warrantType = xss(ctx.request.body.warrantType.trim());
    let warrantRate = xss(ctx.request.body.warrantRate.trim());
    let warrantRateMax = xss(ctx.request.body.warrantRateMax.trim());
    let remark = xss(ctx.request.body.remark.trim());

    let entFinance = new EntFinance({
        userId: userId,
        projectName: projectName,
        financeMoney: financeMoney,
        warrantType: warrantType,
        warrantRate: warrantRate,
        warrantRateMax: warrantRateMax,
        remark: remark
    })
    entFinance = await entFinanceHelper.createFinance(entFinance);

    ctx.body = {
        code: 0,
        msg: "success",
        entFinance
    };
};
