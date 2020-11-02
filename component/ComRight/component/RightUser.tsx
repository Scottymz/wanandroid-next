import React, { useEffect } from 'react';
import { Card } from 'antd';
import { isNil } from 'lodash';
import classnames from 'classnames';
//
const RightSearch = ({ toProps }) => {
  const detail = (t) => {
    if (t.id === 0) {
      return <div> 1256 </div>;
    }
    if (t.id === 1) {
      return (
        <>
          <span className='coin-count'>{t.data.coinCount}</span>
          <span className='level'>lv{t.data.level}</span>
          <span className='rank'>排名{t.data.rank}</span>
        </>
      );
    }
    if (t.id === 2) {
      return <div> </div>;
    }
    if (t.id === 3) {
      return <div> </div>;
    }
    if (t.id === 4) {
      return <div> </div>;
    }
    return <div></div>;
  };

  return (
    <>
      <Card size='small' title='个人中心' className='mb20 card-p10 c-user'>
        {toProps.map((t) => (
          <div className='user-item' key={t.id}>
            <div className='label'>{t.label}</div>
            <div
              className={classnames(
                'value',
                { value0: t.id === 0 },
                { value1: t.id === 1 },
                { value2: t.id === 2 },
                { value3: t.id === 3 },
                { value4: t.id === 4 },
              )}>
              {isNil(t.data) ? <div className='text'>{t.value}</div> : <div>{detail(t)}</div>}
            </div>
          </div>
        ))}
      </Card>
    </>
  );
};
export default RightSearch;
