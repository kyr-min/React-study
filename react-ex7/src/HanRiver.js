import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHanRiver } from './action';

import './style.css'

const HanRiver = () => {
    let riverInfo = useSelector(state => state.data);
    let requestStatus = useSelector(state => state.status);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHanRiver());
    }, [dispatch]);

    if(requestStatus === 'PENDING'){
        return (
            <h1>
                로딩중....
            </h1>
        )
    }

    return (
        <div className = "hanriver">
            <div className="hanriver-info">
                <div style = {{fontSize: 45}}>현재 한강 온도</div><br/>
                <div style = {{fontSize: 40}}>{riverInfo.temp}</div><br/>
                <div style = {{fontSize: 20}}>{riverInfo.time}</div><br/>
            </div>
        </div>
    )

};

export default HanRiver;