
const trafficHandler = require('./lib/traffic-handler');

module.exports = [
	{
		groups: ['direct'],
		match: '!traffic',
		handler: trafficHandler.getAllTrafic
	},
	{
		groups: ['direct'],
		match: /!traffic (.*)/i,
		handler: trafficHandler.filterTraffic
	}
];
