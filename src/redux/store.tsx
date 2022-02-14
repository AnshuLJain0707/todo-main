import {createStore} from 'redux'
import {Reducer} from './Reducer'

export let store = createStore(Reducer)