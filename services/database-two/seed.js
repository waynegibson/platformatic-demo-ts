'use strict'

const exampleData = [
   {
    firstname: 'Janet',
    lastname: 'Melson'
  },
  {
    firstname: 'Sally',
    lastname: 'Turner'
  },
  {
    firstname: 'Jack',
    lastname: 'Johnston'
  }
]

module.exports = async function ({ entities }) {
  for (const member of exampleData) {
    const newMember = await entities.member.save({ input: member })

    console.log('Created member:', newMember)
  }
}
