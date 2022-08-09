import { FC } from 'react';
import { Card } from 'antd';

interface TeamProps {
  name: string;
  points: string;
}

function Title(name, points) {
  if(points < 0){
    return <span style={{fontWeight: 'bold'}}>{name + " (" + points + ")"}</span>;
  } else {
    return name
  }
}

const Team: FC<TeamProps> = ({ name, points }) => {
  return (
    <>
      <Card
        title={Title(name, points)}
        size="small"
      >
        <img
          className="team-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
        />
      </Card>
    </>
  );
};

export default Team;