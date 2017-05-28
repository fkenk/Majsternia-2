/**
 * Created by BusinessPC on 5/28/2017.
 */
import { Style } from 'radium'
import Normalize from './Normalize'
import _ from 'lodash'

class Reset extends Style {};

Reset.defaultProps = {
    rules: _.assign({}, Normalize, {
        body: {
            boxSizing: 'border-box'
        }
    })
};

export default Reset