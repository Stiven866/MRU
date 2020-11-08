import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function ChartLine(props) {
  const [vel, setVel] = useState(0);
  const [time, setTime] = useState(0);

  const name = props.name;
  const yinit = name === "Distancia" ? 0 : name === "Velocidad" ? vel : null;
  const yfin =
    name === "Distancia" ? vel * time : name === "Velocidad" ? vel : null;
  const data = {
    labels: [0, time],
    datasets: [
      {
        label: name,
        backgroundColor: "rgba(255,99,60,0.2)",
        borderColor: "rgba(255,99,50,1)",
        borderWidth: 5,
        hoverBackgroundColor: "rgba(255,99,60,0.4)",
        hoverBorderColor: "rgba(255,99,50,1)",
        pointRadius: 0,
        animationDuration: 5000,
        data: [
          { x: 0, y: yinit },
          { x: time, y: yfin },
        ],
      },
    ],
  };

  useEffect(() => {
    setTime(props.time);
    setVel(props.velocidad);
  }, [props]);

  return (
    <Line
      data={data}
      width={500}
      height={300}
      options={{
        maintainAspectRatio: false,
      }}
    />
  );
}
