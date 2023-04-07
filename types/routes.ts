export enum ApiRoutesUser {
  getUserById = '/api/user/get/byId',
  getUserByNickname = '/api/user/get/byNickname',
  getUsersLeaderboard = '/api/user/get/forLeaderboard',
  updateUserCount = '/api/user/update/updateCount',
  updateUserInfo = '/api/user/update/updateUserInfo',
}

export enum ApiRoutesSession {
  createSession = '/api/session/create',
}

export enum LeaderboardSelectBy {
  correctness = 'correctness',
  totalCount = 'totalCount',
  percentage = 'percentage',
}
