export enum ApiRoutes {
  getUserById = '/api/user/byId',
  getLeaderboard = '/api/leaderboard/get',
  updateUserCount = '/api/update/count',
  submitSession = '/api/create/session',
}

export enum LeaderboardSelectBy {
  correctness = 'correctness',
  totalCount = 'totalCount',
  percentage = 'percentage',
}
