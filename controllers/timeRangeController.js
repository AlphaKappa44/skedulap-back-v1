const TimeRange = require("../models/timeRangeModel");

const sequelize = require("../utils/database");

const timeRangeController = {
    getTimeRanges: async (req, res) => {
      console.log("timeRangeController.getTimeRanges!");
      try {
        const time_range = await TimeRange.findAll();
        res.json(time_range);
        console.log("Time ranges were found in database!");
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: `Server "timeRangeController.getTimeRanges" error, please contact an administrator`,
        });
      }
    },
    getOneTimeRange: async (req, res) => {
        console.log("timeRangeController.getOneTimeRange!");
        try {
          const time_range = await TimeRange.findOne({ where: { id: req.params.id } });
          if (time_range === null) {
            console.log('Time range not found!');
          } else {
            console.log("Time range was found in database!");
            console.log(time_range instanceof TimeRange); // true
            console.log(time_range.dataValues); // 'My time range data'
          }
          res.json(time_range);
          
        } catch (error) {
          console.error(error.message);
          res.status(500).json({
            error: `Server "timeRangeController.getOneTimeRange" error, please contact an administrator`,
          });
        }
      },
};

module.exports = timeRangeController;