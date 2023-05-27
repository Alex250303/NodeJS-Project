const { User } = require('../../models/user');

const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;
  res.json({
    email,
    subscription,
  });
};

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true },
  );
  res.json({
    email: updatedUser.email,
    subscription: updatedUser.subscription,
  });
};

const deleteUser = async (req, res) => {
  const { _id } = req.user;
  console.log(_id);
  await User.findByIdAndDelete(_id);
  res.json({ message: 'User successfully deleted' });
};

module.exports = {
  getCurrent,
  updateSubscription,
  deleteUser,
};
