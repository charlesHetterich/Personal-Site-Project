import { useEffect, useState } from "react";
import { Title, Body, Image, MainLinkSection, MediaLinks } from "@chetterich/ui";
import myPhoto from "../assets/me.jpeg";
import ocaiMedia from "../assets/multi_person.gif";
import somaMedia from "../assets/soma2.gif";
import pencilMedia from "../assets/pencil1.gif";
import pcnMedia from "../assets/pcn_figure.png";
import resumePdf from "../assets/charles_resume_1_25.pdf";

interface CalendarDay {
  date: string;
  contributionCount: number;
  weekday: number;
}

interface GitHubStats {
  totalCommits: number;
  totalContributions: number;
  totalPRs: number;
  totalIssues: number;
  totalRepos: number;
  followers: number;
  calendar: CalendarDay[];
}

function getColor(count: number, max: number): string {
  if (count === 0) return "#ebedf0";
  const ratio = count / max;
  if (ratio <= 0.25) return "#c4b5fd";
  if (ratio <= 0.5) return "#a78bfa";
  if (ratio <= 0.75) return "#8b5cf6";
  return "#7c3aed";
}

function ContributionGraph({ calendar }: { calendar: CalendarDay[] }) {
  const [tooltip, setTooltip] = useState<{ day: CalendarDay; x: number; y: number } | null>(null);

  const max = Math.max(...calendar.map((d) => d.contributionCount), 1);

  // Group into weeks (7 days each)
  const weeks: CalendarDay[][] = [];
  for (let i = 0; i < calendar.length; i += 7) {
    weeks.push(calendar.slice(i, i + 7));
  }

  const cellSize = 11;
  const cellGap = 2;
  const step = cellSize + cellGap;
  const labelWidth = 28;
  const width = labelWidth + weeks.length * step;
  const height = 7 * step;
  const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  // Month labels
  const months: { label: string; x: number }[] = [];
  let lastMonth = "";
  for (let wi = 0; wi < weeks.length; wi++) {
    const day = weeks[wi][0];
    if (!day) continue;
    const m = new Date(day.date + "T00:00:00").toLocaleString("en", { month: "short" });
    if (m !== lastMonth) {
      months.push({ label: m, x: labelWidth + wi * step });
      lastMonth = m;
    }
  }

  return (
    <div className="gh-graph-wrapper">
      <svg
        viewBox={`0 -16 ${width} ${height + 16}`}
        className="gh-graph-svg"
        onMouseLeave={() => setTooltip(null)}
      >
        {months.map((m) => (
          <text key={m.x} x={m.x} y={-4} className="gh-graph-label">
            {m.label}
          </text>
        ))}
        {dayLabels.map((label, i) => (
          <text key={i} x={0} y={i * step + cellSize - 1} className="gh-graph-label">
            {label}
          </text>
        ))}
        {weeks.map((week, wi) =>
          week.map((day, di) => (
            <g
              key={day.date}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const parent = e.currentTarget.closest(".gh-graph-wrapper")!.getBoundingClientRect();
                setTooltip({
                  day,
                  x: rect.left - parent.left + rect.width / 2,
                  y: rect.top - parent.top - 8,
                });
              }}
              onMouseLeave={() => setTooltip(null)}
            >
              {/* Invisible hit area covering full cell + gap */}
              <rect
                x={labelWidth + wi * step}
                y={di * step}
                width={step}
                height={step}
                fill="transparent"
              />
              {/* Visible cell with padding inset */}
              <rect
                x={labelWidth + wi * step + 1}
                y={di * step + 1}
                width={cellSize}
                height={cellSize}
                rx={2}
                fill={getColor(day.contributionCount, max)}
                style={{ pointerEvents: "none" }}
              />
            </g>
          )),
        )}
      </svg>
      {tooltip && (
        <div className="gh-graph-tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
          <strong>{tooltip.day.contributionCount} contributions</strong>
          <span>
            {new Date(tooltip.day.date + "T00:00:00").toLocaleDateString("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      )}
    </div>
  );
}


export function Home() {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    fetch("./github-stats.json")
      .then((r) => (r.ok ? r.json() : null))
      .then(setStats)
      .catch(() => {});
  }, []);

  return (
    <div>
      <div className="home-profile">
        <Image
          src={myPhoto}
          displayType="regular"
          outerStyle={{ alignItems: "normal" }}
          innerStyle={{
            width: 200,
            borderRadius: 2,
            borderTopRightRadius: 30,
            overflow: "hidden",
          }}
        />
        <div className="home-text-content">
          <Title className="home-title">Charles Hetterich</Title>
          <Body>
            Hi! I'm Charles. I received my Bachelors in Computer Science from the University at
            Buffalo, and my Masters in Data Science from UT Austin. I enjoy entrepreneurship and
            designing novel solutions to problems I am passionate about.
          </Body>
          <Body>
            Recently I have been most interested in artificial intelligence, as well as
            decentralized computing/governance platforms.
          </Body>
        </div>
      </div>
      {stats && (
        <a href="https://github.com/charlesHetterich" className="gh-section-link">
          <span className="gh-contribution-summary">
            {stats.totalContributions.toLocaleString()} contributions this year
          </span>
          <ContributionGraph calendar={stats.calendar} />
        </a>
      )}
      <MediaLinks
        content={[
          { src: ocaiMedia, link: "/ocai-ltd" },
          { src: pcnMedia, link: "https://arxiv.org/abs/2309.12996", scale: 0.8 },
          { src: somaMedia, link: "/soma", scale: 1.5 },
          { src: pencilMedia, link: "/pencil-the-game" },
        ]}
      />
      <MainLinkSection
        title="Previous Work"
        color="#f58b45"
        content={[
          { text: "CDM", link: "/cdm" },
          { text: "OCAI LTD", link: "/ocai-ltd" },
          { text: "E Source", link: "/esource" },
          { text: "Table", link: "/table" },
          { text: "Dell Medical", link: "/dell-medical" },
          { text: "PA Joe", link: "/pa-joe" },
          { text: "Diver Now", link: "/diver-now" },
          { text: "MBMS", link: "/mbms" },
        ]}
      />
      <MainLinkSection
        title="Older Things"
        color="#8763ff"
        content={[
          { text: "SOMA", link: "/soma" },
          { text: "Pencil The Game", link: "/pencil-the-game" },
          { text: "Game Changer", link: "/game-changer" },
          { text: "Backyard Blitz", link: "/backyard-blitz" },
        ]}
      />
      <MainLinkSection
        title=". . ."
        color="#00d688"
        content={[
          { text: "Contact", link: "/contact" },
          {
            text: "Github",
            link: "https://github.com/charlesHetterich",
            linkType: "external",
          },
          { text: "Gitlab", link: "https://gitlab.com/cHetterich", linkType: "external" },
          {
            text: "Resume",
            link: resumePdf,
            linkType: "external",
          },
        ]}
      />
    </div>
  );
}
