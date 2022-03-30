const User = require('./userModel');
const Town = require('./townModel');
const Permanence = require('./permanenceModel');
const Structure = require('./structureModel');
const Time_range = require('./timeRangeModel');



Structure.hasMany(Permanence, {
    foreignKey: 'structure_id',
    as: 'permanences'
});

Permanence.belongsTo(Structure, {
    foreignKey: 'structure_id',
    as: 'structure'
});

Time_range.hasMany(Permanence, {
    foreignKey: 'time_range_id',
    as: 'permanences'
});

Permanence.belongsTo(Time_range, {
    foreignKey: 'time_range_id',
    as: 'time_range'
});