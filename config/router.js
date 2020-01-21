'use strict'

const Router = require('koa-router');
const User = require('../app/controllers/userController');
const EntBaseInfo = require('../app/controllers/entBaseInfoController');
const BankBaseInfo = require('../app/controllers/bankBaseInfoController');
const EntFinance = require('../app/controllers/entFinanceController');
const EntOrder = require('../app/controllers/entOrderController');
const App = require('../app/controllers/app');

module.exports = function () {
    var router = new Router({
        prefix: '/api'
    });

    // user
    router.post('/u/signup', App.hasBody, User.signup);
    router.post('/u/update', App.hasBody, App.hasToken, User.update);
    router.post('/u/findByPhoneNumber', App.hasBody, User.selectUserByPhoneNumber);
    router.post('/u/adminLogin', App.hasBody, User.queryLogin);
  /**
   * @api {post} /api/u/login 登录
   * @apiDescription 登录
   * @apiName Login
   * @apiGroup User
   * @apiParam {string} username 用户名
   * @apiParam {string} password 登录密码
   * @apiParam {string} userType 用户类型（0系统用户，1单位用户，2机构用户）
   * @apiParamExample {json} Request-Example:
   *     {
   *       "username": "ent01",
   *       "password": "111111",
   *       "userType": "1"
   *     }
   * @apiSuccess {String} code 状态码（0正常，500异常）
   * @apiSuccessExample {json} Success-Response:
   *  {
   *      "code" : "0",
   *      "msg" : "登录成功"
   *  }
   * @apiSampleRequest /api/u/login
   * @apiVersion 1.0.0
   */
    router.post('/u/login', App.hasBody, User.limitTypeLogin);
    // entBaseInfo
    /**
     * @api {post} /api/ent/baseInfo 获取单位基本信息
     * @apiDescription 获取单位基本信息
     * @apiName getEntBaseInfo
     * @apiGroup Ent
     * @apiParam {string} userId 用户id
     * @apiParamExample {json} Request-Example:
     *     {
     *       "userId": "5e2671475e977188d5b27f80"
     *     }
     * @apiSuccess {String} code 状态码（0正常，500异常）
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "code" : "0",
     *      "msg" : "success"
     *  }
     * @apiSampleRequest /api/ent/baseInfo
     * @apiVersion 1.0.0
     */
    router.post('/ent/baseInfo', App.hasBody, EntBaseInfo.findByUserId);
    router.post('/ent/allBaseInfo', EntBaseInfo.findAll);
    // bankBaseInfo
    /**
     * @api {post} /api/bank/baseInfo 获取机构基本信息
     * @apiDescription 获取机构基本信息
     * @apiName getBankBaseInfo
     * @apiGroup Bank
     * @apiParam {string} userId 用户id
     * @apiParamExample {json} Request-Example:
     *     {
     *       "userId": "5e268a3c5e977188d5b28cf2"
     *     }
     * @apiSuccess {String} code 状态码（0正常，500异常）
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "code" : "0",
     *      "msg" : "success"
     *  }
     * @apiSampleRequest /api/bank/baseInfo
     * @apiVersion 1.0.0
     */
    router.post('/bank/baseInfo', App.hasBody, BankBaseInfo.findByUserId);
    router.post('/bank/allBaseInfo', BankBaseInfo.findAll);
    // EntFinance
    router.post('/ent/getFinance', App.hasBody, EntFinance.findByUserId);
    /**
     * @api {post} /api/ent/getNewFinance 获取最新融资方案
     * @apiDescription 获取最新融资方案
     * @apiName getNewFinance
     * @apiGroup Ent
     * @apiParam {string} userId 用户id
     * @apiParamExample {json} Request-Example:
     *     {
     *       "userId": "5e2671475e977188d5b27f80"
     *     }
     * @apiSuccess {String} code 状态码（0正常，500异常）
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "code" : "0",
     *      "msg" : "success"
     *  }
     * @apiSampleRequest /api/ent/getNewFinance
     * @apiVersion 1.0.0
     */
    router.post('/ent/getNewFinance', App.hasBody, EntFinance.getNewFinance);
    /**
     * @api {post} /api/ent/updateFinanceState 修改融资方案状态
     * @apiDescription 修改融资方案状态
     * @apiName updateFinanceState
     * @apiGroup Ent
     * @apiParam {string} financeId 融资方案id
     * @apiParam {string} state 状态（0：待授信，1：已授信待交易，2：撮合成功）
     * @apiParamExample {json} Request-Example:
     *     {
     *       "financeId": "5e269c94e2011b08d889d941"，
     *       "state": "1"
     *     }
     * @apiSuccess {String} code 状态码（0正常，500异常）
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "code" : "0",
     *      "msg" : "success"
     *  }
     * @apiSampleRequest /api/ent/updateFinanceState
     * @apiVersion 1.0.0
     */
    router.post('/ent/updateFinanceState', App.hasBody, EntFinance.updateState);
    /**
     * @api {post} /api/ent/createFinance 创建融资方案
     * @apiDescription 创建融资方案
     * @apiName createFinance
     * @apiGroup Ent
     * @apiParam {string} userId 用户id
     * @apiParam {string} projectName 项目名称
     * @apiParam {number} financeMoney 融资金额(单位 万元)
     * @apiParam {string} warrantType 担保方式
     * @apiParam {number} warrantRate 贷款利率(下限)
     * @apiParam {number} warrantRateMax 贷款利率(上限)
     * @apiParamExample {json} Request-Example:
     *     {
     *        "userId": "5e2671475e977188d5b27f80",
     *        "projectName": "流动资金贷款1",
     *        "financeMoney": 1000,
     *        "warrantType": "3",
     *        "warrantRate": 4.35,
     *        "warrantRateMax": 4.35,
     *        "remark": "补充流动资金、购买生产原料、增加研发投入。"
     *     }
     * @apiParam {string} remark 详情描述
     * @apiSuccess {String} code 状态码（0正常，500异常）
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "code" : "0",
     *      "msg" : "success"
     *  }
     * @apiSampleRequest /api/ent/createFinance
     * @apiVersion 1.0.0
     */
    router.post('/ent/createFinance', App.hasBody, EntFinance.createFinance);
    //EntOrder
  /**
   * @api {post} /api/ent/getOrder 获取融资订单
   * @apiDescription 获取融资订单
   * @apiName getOrder
   * @apiGroup Order
   * @apiParam {string} financeId 融资方案id
   * @apiParamExample {json} Request-Example:
   *     {
   *       "financeId": "5e269c94e2011b08d889d941"
   *     }
   * @apiSuccess {String} code 状态码（0正常，500异常）
   * @apiSuccessExample {json} Success-Response:
   *  {
   *      "code" : "0",
   *      "msg" : "success"
   *  }
   * @apiSampleRequest /api/ent/getOrder
   * @apiVersion 1.0.0
   */
    router.post('/ent/getOrder', App.hasBody, EntOrder.findByFinanceId);
    /**
     * @api {post} /api/ent/updateOrderState 修改融资订单状态
     * @apiDescription 修改融资订单状态
     * @apiName updateOrderState
     * @apiGroup Order
     * @apiParam {string} orderId 融资订单id
     * @apiParam {string} state 状态（0：待确认，1：撮合成功，2：流失订单）
     * @apiParamExample {json} Request-Example:
     *     {
     *       "orderId": "5e269c94e2011b08d889d941"，
     *       "state": "1"
     *     }
     * @apiSuccess {String} code 状态码（0正常，500异常）
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "code" : "0",
     *      "msg" : "success"
     *  }
     * @apiSampleRequest /api/ent/updateOrderState
     * @apiVersion 1.0.0
     */
    router.post('/ent/updateOrderState', App.hasBody, EntOrder.updateState);
    /**
     * @api {post} /api/ent/createOrder 创建融资订单
     * @apiDescription 创建融资订单
     * @apiName createOrder
     * @apiGroup Order
     * @apiParam {string} entId 单位用户id
     * @apiParam {string} bankId 机构用户id
     * @apiParam {string} financeId 融资方案id
     * @apiParam {string} lineOfCredit 授信额度
     * @apiParam {number} warrantRate 贷款利率
     * @apiParam {string} warrentRangeDate 贷款期限
     * @apiParam {number} backMoneyType 还款方式
     * @apiParam {number} creditValidity 授信有效期
     * @apiParamExample {json} Request-Example:
     *     {
     *        "entId": "5e2671475e977188d5b27f80",
     *        "bankId": "5e268a3c5e977188d5b28cf2",
     *        "financeId": "5e269c94e2011b08d889d941",
     *        "lineOfCredit": 900,
     *        "warrantRate": 5,
     *        "warrentRangeDate": "5",
     *        "backMoneyType": "9",
     *        "creditValidity": "2020-01-20 00:00:00",
     *     }
     * @apiParam {string} remark 详情描述
     * @apiSuccess {String} code 状态码（0正常，500异常）
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "code" : "0",
     *      "msg" : "success"
     *  }
     * @apiSampleRequest /api/ent/createOrder
     * @apiVersion 1.0.0
     */
    router.post('/ent/createOrder', App.hasBody, EntOrder.createOrder);
    // DB Interface test
    router.get('/test/user/users', User.users);
    router.post('/test/user/add', User.addUser);
    router.post('/test/user/delete', User.deleteUser);

    return router
}
