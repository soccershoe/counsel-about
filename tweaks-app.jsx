// tweaks-app.jsx — mounts the Tweaks panel and drives Docket's CSS variables.
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": ["#c8a96e", "#9c7c3f"],
  "display": "Spectral"
}/*EDITMODE-END*/;

const DISPLAY_STACKS = {
  "Spectral": "\"Spectral\",Georgia,serif",
  "Newsreader": "\"Newsreader\",Georgia,serif",
  "Libre Caslon": "\"Libre Caslon Text\",Georgia,serif"
};

function DocketTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", t.theme);
    const pair = Array.isArray(t.accent) ? t.accent : [t.accent, t.accent];
    // dark-tuned swatches read as the stored value; on light backgrounds use a deeper shade.
    const LIGHT_FOR = {
      "#c8a96e": ["#8b6914", "#7a5d12"],
      "#8fb0d9": ["#3f6699", "#33567f"],
      "#9bb98f": ["#4f7344", "#42603a"],
      "#d39a82": ["#a85a3c", "#8f4a30"],
      "#b3a6dd": ["#6a58a8", "#574593"]
    };
    const [gold, deep] = t.theme === "light" ? (LIGHT_FOR[pair[0]] || pair) : pair;
    root.style.setProperty("--gold", gold);
    root.style.setProperty("--gold-deep", deep);
    root.style.setProperty("--display", DISPLAY_STACKS[t.display] || DISPLAY_STACKS.Newsreader);
  }, [t.theme, t.accent, t.display]);

  return (
    <TweaksPanel>
      <TweakSection label="Theme" />
      <TweakRadio
        label="Mode"
        value={t.theme}
        options={["dark", "light"]}
        onChange={(v) => setTweak("theme", v)}
      />
      <TweakColor
        label="Accent"
        value={t.accent}
        options={[
          ["#c8a96e", "#9c7c3f"],
          ["#8fb0d9", "#5f86b5"],
          ["#9bb98f", "#6f9162"],
          ["#d39a82", "#b06f54"],
          ["#b3a6dd", "#8576b8"]
        ]}
        onChange={(v) => setTweak("accent", v)}
      />
      <TweakSection label="Typography" />
      <TweakSelect
        label="Headline font"
        value={t.display}
        options={["Spectral", "Newsreader", "Libre Caslon"]}
        onChange={(v) => setTweak("display", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<DocketTweaks />);
