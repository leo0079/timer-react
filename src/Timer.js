// Timer.js

import React, { useEffect } from "react";
import { useState } from "react";


const Timer = () => {
    const [dias, setDias] = useState(0);
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    
    const finalizar = "October, 30, 2022";

    const getTempo = () => {
        const tempo = Date.parse(finalizar) - Date.now();

        setDias(Math.floor(tempo / (1000 * 60 * 60 * 24)));
        setHoras(Math.floor((tempo / (100 * 60 * 60)) % 24));
        setMinutos(Math.floor((tempo / 1000 / 60) % 60));
        setSegundos(Math.floor((tempo / 1000) % 60));
    };

    useEffect(() => {
        const intervalo = setInterval(() => getTempo(finalizar), 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="timer" role="timer">
          <div className="col-4">
            <div className="box">
              <p id="day">{dias < 10 ? "0" + dias : dias}</p>
              <span className="text">Dias</span>
            </div>
          </div>
          <div className="col-4">
            <div className="box">
              <p id="hour">{horas < 10 ? "0" + horas : horas}</p>
              <span className="text">Horas</span>
            </div>
          </div>
          <div className="col-4">
            <div className="box">
              <p id="minute">{minutos < 10 ? "0" + minutos : minutos}</p>
              <span className="text">Minutos</span>
            </div>
          </div>
          <div className="col-4">
            <div className="box">
              <p id="second">{segundos < 10 ? "0" + segundos : segundos}</p>
              <span className="text">Segundos</span>
            </div>
          </div>
        </div>
      );
    };

export default Timer;