# Counsel — Principles

*These principles define what Counsel is for, who it serves, and what it will never do. They are not marketing language. They are constraints that govern every design decision.*

---

## 1. Your Counsel Works for You

Inner Counsel serves one master: the person it's installed for.

Not their manager. Not their employer. Not their department. Not the team that built Counsel.

Every Counselor, every briefing, every deliberation output exists to help one person see their work more clearly, perform better, and understand their own value more completely. When that principle is in tension with any other goal, the person wins.

---

## 2. The Employee Already Has the Intelligence

The surveillance model of workplace AI treats employees as resources to be measured and optimized from above. Counsel rejects that premise entirely.

Knowledge workers accumulate enormous intelligence through years of work — domain expertise, pattern recognition, institutional memory, hard-won judgment. Most of it is invisible, even to themselves, because there is no system that helps them see it.

Inner Counsel surfaces that intelligence. It does not extract value upward. It reflects value back to the person who created it.

The employee is not made more valuable by being monitored. They are made more valuable by understanding themselves better, having their contributions articulated clearly, and navigating their environment with more clarity than anyone else in the room.

---

## 3. Data Belongs to the Session, Not the Surveillance System

Inner Counsel captures work context — window titles, note activity, patterns over time — for one purpose: to help the user think more clearly about their own work.

That data is never used to measure, rank, compare, or report on the employee to anyone else.

**On personal installs:** The user owns their data completely. They can export it, delete it, and manage it entirely on their own terms.

**On managed corporate devices:** Inner Counsel may be subject to the data governance policies of the organization that controls the device. In those environments, Inner Counsel does not change what it does — it still works only for the user — but users should understand that device-level data may be subject to IT policies outside Inner Counsel's control. Inner Counsel will not build features that make that surveillance easier.

This is not a legal disclaimer. It is an honest acknowledgment that a tool on a managed endpoint operates within an organizational context. Inner Counsel's job is still to serve the person, within whatever environment they're in.

---

## 4. The Publish Boundary Is Sacred

When team features are enabled, Inner Counsel can publish sanitized summaries to a shared team silo. This is opt-in, always explicit, and always controlled by the individual.

**What can be published:** The orchestrator's synthesized briefing and selected Counselor outputs — only what the user explicitly chooses.

**What is never published:** Raw notes. Personal context. Window titles. File paths. Capture data. Anything not on the explicit publish list.

**The rule:** Data flows up only. The team tier sees aggregate patterns. It never looks down into individual raw data. The team does not report on its members — it synthesizes what its members have chosen to share.

Per-Counselor publish toggles exist so the user can share their strategic thinking without sharing their wellness signals, or share their wins without sharing their troubleshooting notes. Granularity is not a feature — it is a right.

---

## 5. Counsel Never Compares Employees to Each Other

The team tier surfaces collective blind spots, shared momentum, and team-level risks. It does not rank individuals. It does not show who publishes more. It does not surface whose Brag Documenter entries are longer or whose Counselors flagged more risks.

The moment Counsel becomes a leaderboard, the principle is broken.

Team Counselors — Team Strategist, Team Risk Analyst, Team Velocity Tracker — answer team-level questions: *Where are we stuck? What are we collectively not seeing? What momentum exists that we're not leveraging?* They do not answer questions about individuals.

This is also a system integrity requirement: if users fear their data will be used for comparative evaluation, they will sanitize their inputs. Sanitized inputs produce degraded deliberation. The no-comparison rule protects the quality of the system itself.

---

## 6. Opt-In Is the Only Mode

Every feature that increases what Counsel observes or shares requires explicit user action.

- Tier 1 capture (notes + window titles) is the default. Tier 2 (meeting capture) requires opt-in.
- Publishing is off by default. Enabling it requires explicit configuration.
- The Wellness Counselor is disabled by default. The user opts in when ready.
- Each Counselor's publish toggle defaults to off.

No feature silently begins observing more. No update changes a sharing setting. The user is never surprised by what Counsel knows or shares.

---

## 7. Inferences Are Labeled Honestly

Counsel draws inferences from context: stress signals from work patterns, career trajectory from task types, team dynamics from communication patterns. These inferences are useful. They are also uncertain.

Every inference is labeled as what it is — a pattern observed from limited data, not a diagnosis or a fact. The Wellness Counselor does not tell the user they are burned out. It says: "The pattern of your recent work suggests increasing load without corresponding recovery. You may want to pay attention to this."

Counsel never claims to know more than it does.

---

## 8. The Architecture Enforces the Principles

These principles are not policy statements to be followed by good intentions. They are enforced by the architecture:

- Data sovereignty is enforced by local-first storage (SQLite, local files).
- The publish boundary is enforced by `silos.py` sanitization — raw data cannot leak because the code strips it.
- Per-Counselor publish toggles are enforced by config, not by UI convention.
- The no-comparison rule will be enforced by Outer Counsel's data model — individual-level queries are structurally impossible, not just prohibited.
- Opt-in defaults are enforced by config defaults in `config.json`.

If a principle can be violated by changing a setting, it is not yet enforced. The goal is to make violations architecturally impossible, not merely discouraged.
