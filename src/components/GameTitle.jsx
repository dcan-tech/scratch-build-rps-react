import React from 'react';
import './GameTitle.css';

export default function GameTitle({ text = "Rochambeau" }) {
    return (
        <h1 className="game-title">{text}</h1>
    );
}