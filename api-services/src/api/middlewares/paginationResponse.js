/* eslint-disable radix */
module.exports = (req, res) => {
  const { limit, page } = req.query;
  const { rows: data, count: total } = req.pagination;

  return res.json({
    data,
    total: parseInt(total),
    limit: parseInt(limit),
    page: parseInt(page),
    pages: Math.ceil(total / limit),
  });
};
