define({ "api": [
  {
    "type": "post",
    "url": "/api/bank/baseInfo",
    "title": "获取机构基本信息",
    "description": "<p>获取机构基本信息</p>",
    "name": "getBankBaseInfo",
    "group": "Bank",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": \"5e268a3c5e977188d5b28cf2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码（0正常，500异常）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/bank/baseInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "config/router.js",
    "groupTitle": "Bank"
  },
  {
    "type": "post",
    "url": "/api/ent/createFinance",
    "title": "创建融资方案",
    "description": "<p>创建融资方案</p>",
    "name": "createFinance",
    "group": "Ent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "projectName",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "financeMoney",
            "description": "<p>融资金额(单位 万元)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "warrantType",
            "description": "<p>担保方式</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "warrantRate",
            "description": "<p>贷款利率(下限)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "warrantRateMax",
            "description": "<p>贷款利率(上限)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>详情描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"userId\": \"5e2671475e977188d5b27f80\",\n   \"projectName\": \"流动资金贷款1\",\n   \"financeMoney\": 1000,\n   \"warrantType\": \"3\",\n   \"warrantRate\": 4.35,\n   \"warrantRateMax\": 4.35,\n   \"remark\": \"补充流动资金、购买生产原料、增加研发投入。\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码（0正常，500异常）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/ent/createFinance"
      }
    ],
    "version": "1.0.0",
    "filename": "config/router.js",
    "groupTitle": "Ent"
  },
  {
    "type": "post",
    "url": "/api/ent/baseInfo",
    "title": "获取单位基本信息",
    "description": "<p>获取单位基本信息</p>",
    "name": "getEntBaseInfo",
    "group": "Ent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": \"5e2671475e977188d5b27f80\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码（0正常，500异常）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/ent/baseInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "config/router.js",
    "groupTitle": "Ent"
  },
  {
    "type": "post",
    "url": "/api/ent/getNewFinance",
    "title": "获取最新融资方案",
    "description": "<p>获取最新融资方案</p>",
    "name": "getNewFinance",
    "group": "Ent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": \"5e2671475e977188d5b27f80\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码（0正常，500异常）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/ent/getNewFinance"
      }
    ],
    "version": "1.0.0",
    "filename": "config/router.js",
    "groupTitle": "Ent"
  },
  {
    "type": "post",
    "url": "/api/ent/updateFinanceState",
    "title": "修改融资方案状态",
    "description": "<p>修改融资方案状态</p>",
    "name": "updateFinanceState",
    "group": "Ent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "financeId",
            "description": "<p>融资方案id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>状态（0：待授信，1：已授信待交易，2：撮合成功）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"financeId\": \"5e269c94e2011b08d889d941\"，\n  \"state\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码（0正常，500异常）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/ent/updateFinanceState"
      }
    ],
    "version": "1.0.0",
    "filename": "config/router.js",
    "groupTitle": "Ent"
  },
  {
    "type": "post",
    "url": "/api/ent/createOrder",
    "title": "创建融资订单",
    "description": "<p>创建融资订单</p>",
    "name": "createOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "entId",
            "description": "<p>单位用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bankId",
            "description": "<p>机构用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "financeId",
            "description": "<p>融资方案id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lineOfCredit",
            "description": "<p>授信额度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "warrantRate",
            "description": "<p>贷款利率</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "warrentRangeDate",
            "description": "<p>贷款期限</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "backMoneyType",
            "description": "<p>还款方式</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "creditValidity",
            "description": "<p>授信有效期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>详情描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"entId\": \"5e2671475e977188d5b27f80\",\n   \"bankId\": \"5e268a3c5e977188d5b28cf2\",\n   \"financeId\": \"5e269c94e2011b08d889d941\",\n   \"lineOfCredit\": 900,\n   \"warrantRate\": 5,\n   \"warrentRangeDate\": \"5\",\n   \"backMoneyType\": \"9\",\n   \"creditValidity\": \"2020-01-20 00:00:00\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码（0正常，500异常）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/ent/createOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "config/router.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/ent/getOrder",
    "title": "获取融资订单",
    "description": "<p>获取融资订单</p>",
    "name": "getOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "financeId",
            "description": "<p>融资方案id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"financeId\": \"5e269c94e2011b08d889d941\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码（0正常，500异常）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/ent/getOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "config/router.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/ent/updateOrderState",
    "title": "修改融资订单状态",
    "description": "<p>修改融资订单状态</p>",
    "name": "updateOrderState",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderId",
            "description": "<p>融资订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>状态（0：待确认，1：撮合成功，2：流失订单）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"orderId\": \"5e269c94e2011b08d889d941\"，\n  \"state\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码（0正常，500异常）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/ent/updateOrderState"
      }
    ],
    "version": "1.0.0",
    "filename": "config/router.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/u/login",
    "title": "登录",
    "description": "<p>登录</p>",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userType",
            "description": "<p>用户类型（0系统用户，1单位用户，2机构用户）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"username\": \"ent01\",\n  \"password\": \"111111\",\n  \"userType\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码（0正常，500异常）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"登录成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/u/login"
      }
    ],
    "version": "1.0.0",
    "filename": "config/router.js",
    "groupTitle": "User"
  }
] });
