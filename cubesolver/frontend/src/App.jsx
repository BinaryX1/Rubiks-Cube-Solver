import { useCallback, useMemo, useState } from 'react';
import {
  CHAR_TO_FACE_CLASS,
  FACES,
  cycleChar,
  parseInitialStickers,
  solveUrl,
  stickersToScramble,
} from './cubeLogic.js';
import './App.css';

export default function App() {
  const initial = useMemo(() => parseInitialStickers(), []);
  const [stickers, setStickers] = useState(() => [...initial]);
  const [solution, setSolution] = useState('Waiting…');
  const [loading, setLoading] = useState(false);

  const onStickerClick = useCallback((stringIndex) => {
    setStickers((prev) => {
      const next = [...prev];
      next[stringIndex] = cycleChar(next[stringIndex]);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setStickers([...initial]);
    setSolution('Waiting…');
  }, [initial]);
  
  const solve = useCallback(async () => {
    setLoading(true);
    setSolution('Processing…');
    const scramble = stickersToScramble(stickers);
    try {
      const res = await fetch(solveUrl(scramble));
      const text = await res.text();
      setSolution(text);
    } catch {
      setSolution('Server error');
    } finally {
      setLoading(false);
    }
  }, [stickers]);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Rubik's Cube Solver</h1>
      </header>

      <section className="panel instructions" aria-labelledby="instructions-heading">
        <h2 id="instructions-heading" className="panel-title">
          How to use
        </h2>
        <p>Thanks for using my Rubik's Cube Solver!</p>
        <p>
          For a physical cube, orient it so the <strong>white</strong> face is toward you as the
          front; other faces follow from that view.
        </p>
        <p>
          Tap stickers until the net matches your cube, then press Solve. A solve can take up to
          about 30 seconds.
        </p>
        <p className="instructions-moves">
          Moves are listed in order. Each letter is a clockwise quarter turn: F front, B back, R
          right, L left, U up, D down. Two identical moves in a row are a half turn; three equal a
          counter‑clockwise quarter turn (You can also just follow the exact moves listed in the solution).
        </p>
      </section>

      <section className="cube-section" aria-label="Cube net input">
        <div className="rubiks-board">
          {FACES.map((face) => (
            <div
              key={face.id}
              className="face-container"
              style={{ gridColumn: face.gridColumn, gridRow: face.gridRow }}
            >
              {face.stringIndices.map((stringIndex, i) => {
                const ch = stickers[stringIndex];
                const faceClass = CHAR_TO_FACE_CLASS[ch] ?? 'orange-face';
                return (
                  <button
                    key={`${face.id}-${i}`}
                    type="button"
                    className={`sticker ${faceClass}`}
                    aria-label={`${face.label} sticker ${i + 1}, color ${ch}`}
                    onClick={() => onStickerClick(stringIndex)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="actions panel" aria-label="Solve and reset">
        <div className="actions-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={solve}
            disabled={loading}
          >
            {loading ? (
              <span className="btn-loading">
                <span className="spinner" aria-hidden />
                Solving…
              </span>
            ) : (
              'Solve'
            )}
          </button>
          <button type="button" className="btn btn-ghost" onClick={reset} disabled={loading}>
            Reset
          </button>
        </div>
        <div className="solution-block">
          <span className="solution-label">Solution</span>
          <output className="solution-output">{solution}</output>
        </div>
      </section>
    </div>
  );
}
