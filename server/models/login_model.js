//@author : 許哲誠
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const login_model = {
  read: async (account) => {
    try {
      const member = await prisma.member.findUnique({
        where: {
          account: account,
        },
      })
      return member
    } catch (error) {
      console.log(error)
    }
  },
}
module.exports = login_model
