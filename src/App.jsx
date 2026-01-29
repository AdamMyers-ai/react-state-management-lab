import { memo, useState } from "react";
import "./App.css";
import SurvivorImg from "./assets/portraits/Survivor.png";
import ScavengerImg from "./assets/portraits/Scavenger.png";
import ShadowImg from "./assets/portraits/Shadow.png";
import TrackerImg from "./assets/portraits/Tracker.png";
import SharpshooterImg from "./assets/portraits/Sharpshooter.png";
import BrawlerImg from "./assets/portraits/Brawler.png";
import EngineerImg from "./assets/portraits/Engineer.png";
import InfiltratorImg from "./assets/portraits/Infiltrator.png";
import LeaderImg from "./assets/portraits/Leader.png";
import MedicImg from "./assets/portraits/Medic.png";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: SurvivorImg,
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: ScavengerImg,
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: ShadowImg,
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: TrackerImg,
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: SharpshooterImg,
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: MedicImg,
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: EngineerImg,
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: BrawlerImg,
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: InfiltratorImg,
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: LeaderImg,
    },
  ]);

  const totalStrength = team.reduce((sum, member) => {
    return sum + member.strength;
  }, 0);

  const totalAgility = team.reduce((sum, member) => {
    return sum + member.agility;
  }, 0);

  function handleAddFighter(fighter) {
    // check affordability
    if (money < fighter.price) {
      console.log("Not enough money");
      return;
    }

    setTeam([...team, fighter]);

    setZombieFighters(zombieFighters.filter((f) => f.id !== fighter.id));

    setMoney(money - fighter.price);
  }

  function handleRemoveFighter(fighter) {
    setTeam(team.filter((t) => t.id !== fighter.id));

    setZombieFighters([...zombieFighters, fighter]);

    setMoney(money + fighter.price);
  }

  return (
    <>
      <div>
        <h1>Zombie Fighters</h1>

        <h2>Money: {money}</h2>

        <h2>Your Team</h2>

        <h3>Total Team Strength: {totalStrength}</h3>

        <h3>Total Team Agility: {totalAgility}</h3>

        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul>
            {team.map((member) => (
              <li key={member.id}>
                <img src={member.img} alt={member.name} />
                <h2>{member.name}</h2>
                <p>Price: {member.price}</p>
                <p>Strength: {member.strength}</p>
                <p>Agility: {member.agility}</p>
                <button onClick={() => handleRemoveFighter(member)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <ul>
          {zombieFighters.map((fighter) => (
            <li key={fighter.id}>
              <img src={fighter.img} alt={fighter.name} />
              <h2>{fighter.name}</h2>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
