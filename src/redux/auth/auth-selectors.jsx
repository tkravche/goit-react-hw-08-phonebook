const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;
const getUsermail = state => state.auth.user.email;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshingUser,
  getUsermail,
};
export default authSelectors;
