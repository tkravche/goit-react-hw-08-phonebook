const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshingUser,
};
export default authSelectors;
