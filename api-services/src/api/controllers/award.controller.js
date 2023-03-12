/* eslint-disable radix */
const httpStatus = require('http-status');
const { Op } = require('sequelize');
const { awards, types } = require('../models');
const paginate = require('../middlewares/paginationResponse');

exports.getAwardTypes = async (req, res, next) => {
  try {
    const result = await types.findAll({
      attributes: ['id', 'code', 'name'],
      where: {
        status: 1,
      },
    });

    res.status(httpStatus.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

exports.getAwards = [
  async (req, res, next) => {
    try {
      const { page, limit, typeId, minPoint, maxPoint } = req.query;
      const offset = limit * (page - 1);

      const query = {
        status: 1,
      };

      if (typeId) {
        const typeFilter = typeId.map(v => parseInt(v));
        Object.assign(query, {
          typeId: {
            [Op.in]: typeFilter,
          },
        });
      }

      if (parseInt(minPoint) && parseInt(maxPoint)) {
        Object.assign(query, {
          point: {
            [Op.between]: [parseInt(minPoint), parseInt(maxPoint)],
          },
        });
      }

      const result = await awards.findAndCountAll({
        where: query,
        limit,
        offset,
        include: [
          {
            model: types,
            as: 'type',
          },
        ],
      });

      req.pagination = {
        rows: transformResult(result.rows),
        count: result.count,
      };
      next();
    } catch (error) {
      next(error);
    }
  },
  paginate,
];

const transformResult = rawData => {
  return rawData.map(v => {
    return {
      id: v.id,
      title: v.name,
      point: parseInt(v.point).toLocaleString('id-ID'),
      imageUrl: v.imageUrl,
      awardType: v.type.name,
    };
  });
};
