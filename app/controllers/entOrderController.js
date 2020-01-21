'use strict'

let xss = require('xss')
let mongoose = require('mongoose');
let EntOrder = mongoose.model('EntOrder');

import entOrderHelper from '../dbhelper/entOrderHelper';

exports.findByFinanceId = async (ctx, next) => {
    let financeId = xss(ctx.request.body.financeId);
    if (financeId) {
        let entOrder = await entOrderHelper.findByFinanceId(financeId);

        ctx.body = {
            code: 0,
            msg: "success",
            entOrder
        };
    } else {
        ctx.body = {
            code: 500,
            msg: "error",
            error: "缺少关键参数"
        };
    }

    return next;
};

exports.updateState = async (ctx, next) => {
    let orderId = xss(ctx.request.body.orderId.trim());
    let state = xss(ctx.request.body.state.trim());

    if (orderId && state) {
        let result = await entOrderHelper.updateState(orderId, state);

        if (result !== 0) {
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
    } else {
        ctx.body = {
            code: 500,
            msg: "error",
            error: "缺少关键参数"
        };
    }

    return next;
};

exports.findAll = async (ctx, next) => {
    let entOrder = await entOrderHelper.findAll()

    ctx.body = {
        code: 0,
        msg: "success",
        entOrder
    };

    return next;
};

exports.createOrder = async (ctx, next) => {
    let entId = xss(ctx.request.body.entId.trim());
    entId = mongoose.Types.ObjectId(entId);
    let bankId = xss(ctx.request.body.bankId.trim());
    bankId = mongoose.Types.ObjectId(bankId);
    let financeId = xss(ctx.request.body.financeId.trim());
    financeId = mongoose.Types.ObjectId(financeId);
    let lineOfCredit = xss(ctx.request.body.lineOfCredit.trim());
    let warrantRate = xss(ctx.request.body.warrantRate.trim());
    let warrentRangeDate = xss(ctx.request.body.warrentRangeDate.trim());
    let backMoneyType = xss(ctx.request.body.backMoneyType.trim());
    let creditValidity = xss(ctx.request.body.creditValidity.trim());

    if (entId && bankId && financeId) {
        let entOrder = new EntOrder({
            entId: entId,
            bankId: bankId,
            financeId: financeId,
            lineOfCredit: lineOfCredit,
            warrantRate: warrantRate,
            warrentRangeDate: warrentRangeDate,
            backMoneyType: backMoneyType,
            creditValidity: creditValidity,
        });
        entOrder = await entOrderHelper.createOrder(entOrder);

        ctx.body = {
            code: 0,
            msg: "success",
            entOrder
        };
    } else {
        ctx.body = {
            code: 500,
            msg: "error",
            error: "缺少关键参数"
        };
    }
};
