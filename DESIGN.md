# Design Brief

## Direction
Harvest — grounded agricultural productivity interface with earthy forest tones and strategic green growth accents.

## Tone
Earthy, grounded, professional with warmth. Trustworthy clarity without clinical coldness. Editorial authority paired with accessible warmth.

## Differentiation
Economics calculator is primary—not hidden in modals. Crop recommendation cards embed profit/cost visualizations. Analysis history timeline shows farmer's decision patterns over time.

## Color Palette

| Token      | OKLCH            | Role                               |
| ---------- | ---------------- | ---------------------------------- |
| background | 0.13 0.02 155    | Deep forest foundation              |
| foreground | 0.92 0.01 150    | Off-white text for contrast         |
| card       | 0.17 0.022 155   | Elevated card surfaces              |
| primary    | 0.62 0.21 155    | Vibrant agricultural green          |
| accent     | 0.68 0.15 85     | Warm amber for economics/profit     |
| muted      | 0.21 0.025 155   | Subtle secondary surfaces           |

## Typography
- Display: Lora — editorial authority for form labels and section headings
- Body: Satoshi — warm, readable body text and UI labels
- Scale: hero text `text-4xl md:text-5xl font-display font-bold tracking-tight`, h2 `text-2xl font-display font-semibold`, labels `text-sm font-semibold tracking-widest uppercase`

## Elevation & Depth
Subtle layering via card backgrounds and soft shadows. No glows or neon effects. Shadows (`shadow-subtle` for cards, `shadow-elevated` for modals) create depth without drama.

## Structural Zones

| Zone    | Background              | Border         | Notes                                      |
| ------- | ----------------------- | -------------- | ------------------------------------------ |
| Header  | card background, 2px border-b | border-primary | Consistent navigation and branding         |
| Form    | card background, shadow-subtle | border        | Multi-step input form for crop conditions  |
| Results | alternating card/muted  | subtle borders | Ranked crops, economics details, timeline  |
| Sidebar | sidebar background      | border-sidebar | Analysis history, quick navigation         |

## Spacing & Rhythm
Spacious layout with 4rem gaps between sections. Content groups use 1rem internal spacing. Micro-spacing (0.5rem) within form inputs. Comfortable breathing room for farmer-focused productivity.

## Component Patterns
- Buttons: primary green `bg-primary text-primary-foreground rounded-sm`, secondary with border, amber accent for profit actions
- Cards: `bg-card` with `shadow-subtle`, border-top primary accent stripe
- Badges: soil types `bg-muted text-muted-foreground`, crops `bg-primary text-primary-foreground`, profit tiers `bg-accent text-accent-foreground`

## Motion
- Entrance: form fields slide-in via `transition-smooth`, 0.3s staggered
- Hover: subtle scale (1.02) on cards, opacity shift on buttons
- Decorative: none—functionality over decoration

## Constraints
- No gradients, no glows, no bouncy animations
- High contrast required for form inputs (farmers need clarity in sunlight)
- Card shadows stay soft; never cartoon-like
- Typography hierarchy via size/weight, not color alone

## Signature Detail
Economics calculator panel integrated into crop detail card (not modal)—displays cost, yield, and profit visually. Warm amber accent stripe on profit-positive scenarios.
