export enum ApiRoutesUser {
  getUserById = '/api/user/get/byId',
  getUserByNickname = '/api/user/get/byNickname',
  getUsersLeaderboard = '/api/user/forLeaderboard',
  updateUserCount = '/api/user/update/updateCount',
  updateUserNickname = '/api/user/update/updateNickname',
}

export enum ApiRoutesSession {
  createSession = '/api/session/create',
}

export enum LeaderboardSelectBy {
  correctness = 'correctness',
  totalCount = 'totalCount',
  percentage = 'percentage',
}
