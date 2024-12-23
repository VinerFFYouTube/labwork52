import React from "react";

interface CardProps {
    rank: string;
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';
}

const cardSuit = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
}

const Card: React.FC<CardProps> = ({ rank, suit }) => {
    return (
        <>
            <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
                <span className="rank">{rank.toUpperCase()}</span>
                <span className="suit">{cardSuit[suit]}</span>
            </span>
        </>
    )
}

export default Card;