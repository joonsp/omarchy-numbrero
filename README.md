# Numbrero Bar Plugin (`io.github.joonsp.numbrero`)

![Numbrero](preview.png)

A lightweight Omarchy shell bar widget and quick-calc popup powered by the native [Numbrero](https://github.com/joonsp/numbrero) scratchpad calculator.

- **Left-click** the monochrome sombrero bar icon to open the quick calculator popup.
- **Type variables and expressions** (`apples = 3`, `oranges = 5`, `fruits = apples + oranges`, `20% off $150`, `5 km in mi`, `255 in hex`) and see evaluated results listed below.
- **Click any result** in the list to copy it to the clipboard.
- **Right-click** the bar icon (or click **Open App**) to launch the full multi-sheet Numbrero desktop window.

## Dependencies

- `numbrero` CLI/app binary on `PATH` (from <https://github.com/joonsp/numbrero>)
- `wl-copy` (`wl-clipboard`) for click-to-copy

No sudo or pkexec is required.

## Installation

```bash
omarchy plugin add https://github.com/joonsp/omarchy-numbrero.git --enable
```

## Removal

```bash
omarchy plugin disable io.github.joonsp.numbrero
omarchy plugin remove io.github.joonsp.numbrero
```

## License

[MIT License](LICENSE)
