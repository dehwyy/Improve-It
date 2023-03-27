// import prisma from '@/prisma/client'
// import { useEquationSettingsStore, useEquationStore } from '@/app/utils/store/equationStore'
// import { useGameParticipantsStore, useGameTypeStore } from '@/app/utils/store/gameTypeStore'
//
//
// export const submitSession = async () => {
//   const { participants: players } = useGameParticipantsStore.getState()
//   const answers = useEquationStore.getState().answers
//   const playerMode = useGameTypeStore.getState().gameType
//   const { mode, difficulty, count } = useEquationSettingsStore.getState()
//
//   if (!mode || !difficulty || !count || !answers?.length || !playerMode || !players?.length) return {}
//   const a = await prisma.playSession.create({
//     data: {
//       difficulty,
//       mode: getPrismaModeByEnum(mode),
//       count,
//       playerMode: getPrismaGameTypeByEnum(playerMode),
//       sessionWinner: {
//         connect: {
//           id: getWinnerFromSession(answers),
//         },
//       },
//       players: {
//         createMany: {
//           data: players.map(p => ({ playerId: p.id })),
//         },
//       },
//       correctAnswers: {
//         createMany: {
//           data: answers.map(a => ({ correctAnsweredUserId: a.userId || 'bot', time: a.timeMs })),
//         },
//       },
//     },
//   })
// }

export {}
