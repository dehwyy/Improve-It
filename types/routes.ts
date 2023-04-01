export enum ApiRoutes {
  getUserById = '/api/user/byId',
  getUserByNickname = '/api/user/byNickname',
  getLeaderboard = '/api/leaderboard/get',
  updateUserCount = '/api/update/count',
  updateUserNickname = '/api/update/nickname',
  submitSession = '/api/create/session',
}

export enum LeaderboardSelectBy {
  correctness = 'correctness',
  totalCount = 'totalCount',
  percentage = 'percentage',
}
