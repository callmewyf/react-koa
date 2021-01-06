const user = require('./../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const getUserInfo = async (ctx, next) => {
  const id = ctx.request.params.id;
  const result = await user.getUserById(id);
  ctx.response.body = result;
}

const postUserAuth = async (ctx, next) => {
  const data = ctx.request.body;
  const userInfo = await user.getUserByName(data.name);

  if (userInfo) {
    if (!bcrypt.compareSync(data.password, userInfo.password)) {
      ctx.response.body = {
        success: false,
        info: '密码错误！'
      }
    } else {
      const userToken = {
        name: userInfo.name,
        id: userInfo.id
      };
      const secret = 'react-koa-demo';
      const token = jwt.sign(userToken, secret);
      ctx.response.body = {
        success: true,
        info: '登录成功！',
        token: token
      }
    }
  } else {
    ctx.response.body = {
      success: false,
      info: '用户不存在！'
    }
  }
}

module.exports = {
  getUserInfo,
  postUserAuth,
}