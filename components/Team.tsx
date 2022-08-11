import { FC } from 'react';
import { Card } from 'antd';
import Image from 'next/image'

interface TeamProps {
  name: string;
  points: string;
  rank: number;
}

function Title(name, points, rank) {
  var title = name

  if (points < 0){
    title = title + " (" + points + ")";
  }

  if (rank != null) {
    title = rank + " " + title;
  }

  return title;
}

const Team: FC<TeamProps> = ({ name, points, rank }) => {
  return (
    <>
      <Card
        title={Title(name, points, rank)}
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