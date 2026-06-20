---
target: src/pages/Home.tsx
total_score: 21
p0_count: 0
p1_count: 1
timestamp: 2026-06-19T20-49-06Z
slug: src-pages-home-tsx
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Scrolling feedback is clear, though modal states (like ApiGuide) need to ensure clarity. |
| 2 | Match System / Real World | 4 | Copy is direct and aligns with the "hardcore focus" promise. |
| 3 | User Control and Freedom | 4 | Standard landing page scrolling, easy to exit modals. |
| 4 | Consistency and Standards | 3 | Glows and glass effects are consistent, but border styles vary slightly. |
| 5 | Error Prevention | n/a | Not heavily applicable to a read-only landing page. |
| 6 | Recognition Rather Than Recall | 4 | Feature icons (Target, Shield, Brain) clearly support the text. |
| 7 | Flexibility and Efficiency | n/a | Not highly applicable. |
| 8 | Aesthetic and Minimalist Design | 3 | Heavy use of glassmorphism and ambient blobs borders on cluttered. |
| 9 | Error Recovery | n/a | Not applicable. |
| 10 | Help and Documentation | n/a | Not applicable. |
| **Total** | | **21/32** | **Acceptable** (scaled from applicable) |

#### Anti-Patterns Verdict

**LLM assessment**: The UI definitely leans into the "vibecoded" aesthetic—specifically the 2023-era Web3/SaaS dark mode toolkit. You are using `glass-card` (blur + low opacity white) everywhere, `text-gradient` for emphasis, and alternating left/right zig-zag feature sections. While it looks modern, it is highly recognizable as a standard "AI dark mode" template. The "hardcore, unstoppable" brand personality from PRODUCT.md is slightly undercut by these generic tech-company choices.

**Deterministic scan**: The detector found 1 issue:
- **1 warning** for `bounce-easing` in `src/pages/Home.tsx` (line 129). Tailwind's default `animate-bounce` on the scroll chevron feels bouncy and playful, which directly contradicts the "Calm Intensity" and "Uncompromising Focus" principles.

#### Overall Impression
The landing page establishes a strong dark atmosphere with its giant typographic hero ("Stay focused with aurora."), but the execution relies too heavily on generic "vibecoded" CSS tricks (glassmorphism, gradients, bouncy arrows) rather than a confident, brutalist, or genuinely "hardcore" design system.

#### What's Working
- **The Hero Typography**: The massive `clamp(3.5rem...)` font scale for the hero headline creates an immediate, bold impact.
- **The Core Metaphor**: The "ambient blobs" and deep space background do effectively create a synthwave/terminal feel.

#### Priority Issues

1. **[P1] The Playful Scroll Chevron**
   - **Why it matters**: A bouncing chevron (`animate-bounce`) is playful and cartoonish. It completely breaks the "hardcore, intense" aesthetic of a focus app.
   - **Fix**: Remove the animation entirely, or replace it with a slow, exponential opacity fade (pulse) that feels like a breathing terminal cursor.
   - **Suggested command**: `$impeccable animate src/pages/Home.tsx`

2. **[P2] The Zig-Zag Feature Pattern**
   - **Why it matters**: Alternating left-aligned and right-aligned image/text blocks is the most overused SaaS landing page cliché. It feels templated, not designed.
   - **Fix**: Break the zig-zag. Stack the features into a cohesive asymmetric grid, or center-align them with massive iconography, or use a sticky-scroll layout.
   - **Suggested command**: `$impeccable layout src/pages/Home.tsx`

3. **[P2] Glassmorphism Overuse**
   - **Why it matters**: Relying on `.glass-card` (backdrop blur + white borders) for every container makes the UI feel like generic Dribbble "vibecode" rather than a sharp, purposeful tool.
   - **Fix**: Strip out the blurs. Use solid, deep, tonal backgrounds (like `#1A1525`) with your glowing shadow tokens to create real "Luminous Depth" instead of frosted glass.
   - **Suggested command**: `$impeccable bolder src/pages/Home.tsx`

#### Persona Red Flags

**Riley (Deliberate Stress Tester)**
- The giant animated typography in the hero (`words` flipping every 3 seconds) could be highly distracting for a user who came looking for an app specifically to *stop* distractions. Ensure `prefers-reduced-motion` completely pauses this loop.

**Jordan (First-Timer)**
- The layout relies entirely on scrolling to discover the value proposition. If the user doesn't understand what "Light up your mind" means instantly, they might bounce before seeing the "System Blocker" feature.

#### Minor Observations
- The `text-gradient` on "aurora." in the hero is fine, but solid `Focus Purple` (#8B5CF6) might look more confident and less trendy.

#### Questions to Consider
- If Aurora is a "merciless" focus app, what would the landing page look like if it were entirely brutalist and utilitarian, abandoning "pretty" glass effects altogether?
- Do you really need the scroll chevron, or is the layout naturally inviting enough to scroll?
