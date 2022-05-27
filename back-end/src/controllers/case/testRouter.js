const testRoute = (_req, res) => {
  try {
    return res.json({ message: "Backend Challenge 2021 🏅 - Covid Daily Cases" });
  } catch (error) {
    next(error);
  }
};

module.exports = testRoute;