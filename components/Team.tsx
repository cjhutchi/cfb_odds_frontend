import { FC } from 'react';
import { Card } from 'antd';
import Image from 'next/image'

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
        <Image
          className="team-logo"
          src={require("/public/logos/" + name + ".svg")}
          width="50px"
          height="50px"
        />
      </Card>
    </>
  );
};

export default Team;