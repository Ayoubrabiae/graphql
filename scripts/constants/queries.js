export const query = (id) => `
{
    user {
      id
      login
      auditRatio
      attrs
    }
  
  	level: transaction_aggregate(
        where:{
            type: { _eq: "level" }
            event : {object :{name:{_eq:"Module"}}}
        })
        {
          aggregate 
          {max 
            {amount}
          }
        }
  
  	skills: transaction(
      where: { type: { _like: "skill%" } }
      order_by: { amount: desc }
    ) {
      type
      amount
    }
  
    
    user {
      transactions(limit: 5, where: {type: {_eq: "xp"}, eventId: {_eq: ${id}}}, order_by: {createdAt: desc}) {
        object {
          name
        }
        amount
      }
    }

    xpPeerProjects: 
    user {
      transactions(limit: 5, where: {type: {_eq: "xp"}, eventId: {_eq: ${id}}, object: {type: {_eq: "project"}}}, order_by: {createdAt: desc}) {
        object {
          name
        }
        amount
      }
    }
}
`;

export const getModuleIdQuery = `
{
    user {
      events {
        event {
          object {
            type
          }
        }
        eventId
      }
    }
}
`;

// Basic info
// {
//     user {
//       id
//       login
//       email
//       attrs
//     }
// }

// Level
// {
// transaction_aggregate(
//     where:{
//         type: { _eq: "level" }
//         event : {object :{name:{_eq:"Module"}}}
//           }
//     {aggregate {max {amount}}}
// }

// Last 5 projects
// {
//     user {
//       transactions(limit: 5, where: {type: {_eq: "xp"}, eventId: {_eq: 41}}, order_by: {createdAt: desc}) {
//         object {
//           name
//         }
//         amount
//       }
//     }
// }

// Get Chohort id
// {
//     user {
//       events {
//         event {
//           object {
//             type
//           }
//         }
//         eventId
//       }
//     }
// }

// Get Skills
// skills: transaction(
//     where: { type: { _like: "skill%" } }
//     order_by: { amount: desc }
//   ) {
//     type
//     amount
//   }
