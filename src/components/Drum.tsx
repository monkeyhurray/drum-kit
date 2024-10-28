'use client';
import React, { useState, useEffect, useRef } from 'react';

const Drum = () => {
  const keysRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLDivElement>(null);
  const [audioBoard, setAudioBoard] =
    useState<NodeListOf<HTMLAudioElement> | null>(null);
  const [keyBoards, setKeyBoards] =
    useState<NodeListOf<HTMLAudioElement> | null>(null);

  useEffect(() => {
    const audioElements = audioRef.current?.querySelectorAll(
      'audio'
    ) as NodeListOf<HTMLAudioElement>;
    const keyBoardElements = keysRef.current?.querySelectorAll(
      '.key'
    ) as NodeListOf<HTMLAudioElement>;
    if (audioRef.current) {
      setAudioBoard(audioElements);
    }

    if (keysRef.current) {
      setKeyBoards(keyBoardElements);
    }
  }, []);

  const playSound = (e: KeyboardEvent) => {
    return keyBoards?.forEach((item, i) => {
      if (item.dataset.key === e.keyCode.toString()) {
        if (audioBoard !== null) {
          const audio = audioBoard[i];

          audio.currentTime = 0;
          audio.play();
        }
      }
    });
  };

  window.addEventListener('keydown', playSound);
  return (
    <>
      <div ref={keysRef} className="keys">
        <div data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>

      <div ref={audioRef}>
        <audio data-key="65" src="/sounds/clap.wav"></audio>
        <audio data-key="83" src="/sounds/hihat.wav"></audio>
        <audio data-key="68" src="/sounds/kick.wav"></audio>
        <audio data-key="70" src="/sounds/openhat.wav"></audio>
        <audio data-key="71" src="/sounds/boom.wav"></audio>
        <audio data-key="72" src="/sounds/ride.wav"></audio>
        <audio data-key="74" src="/sounds/snare.wav"></audio>
        <audio data-key="75" src="/sounds/tom.wav"></audio>
        <audio data-key="76" src="/sounds/tink.wav"></audio>
      </div>
    </>
  );
};

export default Drum;
