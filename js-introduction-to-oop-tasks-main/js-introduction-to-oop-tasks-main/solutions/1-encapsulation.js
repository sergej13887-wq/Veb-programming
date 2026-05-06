export const getMutualFriends = (user1, user2) => {
  const friendsOfUser2 = user2.getFriends();
  const friendsOfUser2Ids = new Set(friendsOfUser2.map(friend => friend.id));
  
  return user1.getFriends().filter(friend => friendsOfUser2Ids.has(friend.id));
};

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});