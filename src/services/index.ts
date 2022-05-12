import consoleLogger from './logger/console';
import elasticSearchLogger from './logger/elasticSearch';
import api from './api';
import config from '../config';

const services = {
	log: config.env === 'development' ? consoleLogger : elasticSearchLogger,
	api,
}

export default services;