import { combineReducers } from 'redux';
import ui from './ui/reducer';
import articles from './articles/reducer';

export default combineReducers({
    ui,
    articles
})