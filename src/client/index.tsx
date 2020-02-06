import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const fetchtest = async (): Promise<{ api: string }> => {
  const res = await fetch('/api/');
  const json = await res.json();
  return json;
};

const Index: React.FC = () => {
  const [obj, setObj] = useState({ api: 'start' });
  useEffect(() => {
    fetchtest().then(ret => {
      setObj(ret);
    });
  }, []);

  return (
    <div>
      <div>Hello React2!</div>
      <div>{obj.api}</div>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
