import _ from 'lodash';
import React from 'react';
//import { Sparklines, SparklinesLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/ data.length);
}

export default (props) => {
    return (
        <div>
             {/* <Sparklines height={120} width={180} data={temps}>
                <SparklinesLine color="red" />
            </Sparklines> */}
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}
