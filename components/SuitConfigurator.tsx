"use client";

import { useState } from "react";

const colors = [
  { name: "Taupe Brown", value: "#8A735D", light: "#A48C73", dark: "#5F4D3E" },
  { name: "Light Grey", value: "#B9B9B5", light: "#D7D7D2", dark: "#858682" },
  { name: "Charcoal", value: "#4A4C4F", light: "#676A6E", dark: "#292B2E" },
  { name: "Navy", value: "#252D40", light: "#38445F", dark: "#141A28" },
  { name: "Black", value: "#171717", light: "#323232", dark: "#050505" },
];

export function SuitConfigurator() {
  const [selected, setSelected] = useState(colors[3]);

  return (
    <div className="suitConfigurator">
      <div className="configHeader">
        <div>
          <p className="eyebrow">SUIT CONFIGURATOR</p>
          <h2>Choose your tailoring color.</h2>
        </div>
        <div className="selectedColor"><span style={{ background: selected.value }} />{selected.name}</div>
      </div>

      <div className="configStage" style={{ ["--suit" as string]: selected.value, ["--suitLight" as string]: selected.light, ["--suitDark" as string]: selected.dark }}>
        <svg className="suitModel" viewBox="0 0 640 860" role="img" aria-label={`${selected.name} Jentlemens Athletic Fit suit preview`}>
          <defs>
            <linearGradient id="jacketShade" x1="0" x2="1"><stop offset="0" stopColor="var(--suitDark)"/><stop offset=".48" stopColor="var(--suitLight)"/><stop offset="1" stopColor="var(--suitDark)"/></linearGradient>
            <linearGradient id="trouserShade" x1="0" x2="1"><stop offset="0" stopColor="var(--suitDark)"/><stop offset=".5" stopColor="var(--suit)"/><stop offset="1" stopColor="var(--suitDark)"/></linearGradient>
            <radialGradient id="skin" cx="50%" cy="35%"><stop offset="0" stopColor="#d7a77e"/><stop offset="1" stopColor="#9b6548"/></radialGradient>
            <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="16" floodOpacity=".28"/></filter>
          </defs>

          <ellipse cx="320" cy="812" rx="145" ry="24" fill="rgba(0,0,0,.22)"/>
          <g filter="url(#shadow)">
            <ellipse cx="320" cy="92" rx="58" ry="70" fill="url(#skin)"/>
            <path d="M268 85q52 30 104 0v-28q-52-35-104 0z" fill="#2d241e"/>
            <path d="M286 150h68l30 47-64 94-64-94z" fill="#fbfaf6"/>
            <path d="M320 171l18 32-18 102-18-102z" fill="#5a1c22"/>

            <path d="M205 188q42-43 92-47l23 128-24 267H175q-8-178 30-348z" fill="url(#jacketShade)"/>
            <path d="M435 188q-42-43-92-47l-23 128 24 267h121q8-178-30-348z" fill="url(#jacketShade)"/>
            <path d="M297 141l23 128-66-82 32-30z" fill="var(--suitLight)" stroke="rgba(0,0,0,.18)"/>
            <path d="M343 141l-23 128 66-82-32-30z" fill="var(--suitLight)" stroke="rgba(0,0,0,.18)"/>
            <path d="M320 269v267" stroke="rgba(0,0,0,.3)" strokeWidth="2"/>
            <circle cx="320" cy="349" r="6" fill="#181818"/><circle cx="320" cy="392" r="6" fill="#181818"/>
            <path d="M205 188l-67 300 50 16 87-272z" fill="url(#jacketShade)"/>
            <path d="M435 188l67 300-50 16-87-272z" fill="url(#jacketShade)"/>
            <path d="M138 488q23 0 50 16l-8 31q-25 12-52-4z" fill="url(#skin)"/>
            <path d="M502 488q-23 0-50 16l8 31q25 12 52-4z" fill="url(#skin)"/>
            <path d="M215 442h58" stroke="rgba(0,0,0,.35)" strokeWidth="3"/>
            <path d="M367 442h58" stroke="rgba(0,0,0,.35)" strokeWidth="3"/>

            <path d="M235 523h82l-18 270h-92z" fill="url(#trouserShade)"/>
            <path d="M323 523h82l28 270h-92z" fill="url(#trouserShade)"/>
            <path d="M208 793h93l-5 31h-110q2-21 22-31z" fill="#191919"/>
            <path d="M340 793h93q20 10 22 31h-110z" fill="#191919"/>
          </g>

          <g className="measureOverlay" aria-hidden="true">
            <line x1="208" y1="190" x2="432" y2="190"/><text x="442" y="195">Shoulder</text>
            <line x1="192" y1="280" x2="448" y2="280"/><text x="458" y="285">Chest</text>
            <line x1="214" y1="410" x2="426" y2="410"/><text x="436" y="415">Waist</text>
            <line x1="324" y1="548" x2="324" y2="792"/><text x="336" y="680">Inseam</text>
            <line x1="454" y1="210" x2="507" y2="484"/><text x="512" y="350">Sleeve</text>
          </g>
        </svg>
      </div>

      <div className="colorChoices" role="group" aria-label="Suit color">
        {colors.map((color) => (
          <button
            type="button"
            key={color.name}
            className={selected.name === color.name ? "activeColor" : ""}
            onClick={() => setSelected(color)}
            aria-pressed={selected.name === color.name}
          >
            <span className="colorSwatch" style={{ background: color.value }} />
            <span>{color.name}</span>
          </button>
        ))}
      </div>

      <input type="hidden" name="Suit color" value={selected.name} form="measurement-profile" />
      <p className="configNote">Preview colors are representative on-screen approximations. Final fabric tone can vary with material, lighting, and display calibration.</p>
    </div>
  );
}
