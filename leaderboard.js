import React, { useState } from "react";
import "./leaderboard.css";
import Client from "clash-royale-api";

export default function Leaderboard() {
  async function banana() {
    const clashroyale = new Client("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZiYjU2YmMzLTczMDItNDE0NC1iYTllLTg4Y2QxM2E5OWNmNiIsImlhdCI6MTY1Nzk3OTQzOCwic3ViIjoiZGV2ZWxvcGVyLzhhNGY2YjFjLTY1ODUtZGE2NS1lMmEzLTVlZDdlZWM0MTY5OSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMTIuMjMzLjM0LjY3Il0sInR5cGUiOiJjbGllbnQifV19.5NuVUIpBRuBi9hOmU-XKNRQy237MboURk-CBjk8bNd6_ikNqpP0I8qpUiLe7LZlY6NBZWl9fS2M6dUwgD-u2dA");

    // Filtering by tag, it returns the specific clan data.
    const player = await clashroyale.player('#Y9JOULCU8')
    console.log(player.all);
  }

  return (
    <div className="wrapper">
      <div className="background">
        <p className="title">Top Players</p>
        <button onClick={() => banana()}>s</button>
        <ul className="list">
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
          <li>TEST</li>
        </ul>
      </div>
    </div>
  );
}
