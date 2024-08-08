//@author :TerryXU
const register_Model = require('../models/register_Model');


const register_controllers = {
  register: async (req, res) => {
    try {
      const memberData = req.body;
      console.log('memberData:', memberData);
      console.log(memberData);
      const checkMember = await register_Model.read(memberData.account);
      if (checkMember) {
        console.log('帳號已存在,是否要登入?');
        return res.status(409).json({
          error: '帳號已存在,是否要登入?'
        });;
      }
      const createMember = await register_Model.create(memberData);
      if (createMember) {
        res.status(201).json({ message: '' });
        console.log('Member created');
      } else {
        res.status(400).json({error: '帳號註冊失敗，請洽系統管理員'});
      }
    } catch (error) {
      console.log(error);
      res.status(500).send('Server error');
    }
  },
};

module.exports = register_controllers;