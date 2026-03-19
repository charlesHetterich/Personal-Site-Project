#!/bin/bash
# Fetches GitHub stats and writes to src/apps/personal-site/public/github-stats.json
# Requires: gh CLI authenticated, jq
set -euo pipefail

USER="charlesHetterich"
OUT="$(dirname "$0")/../src/apps/personal-site/public/github-stats.json"

gh api graphql -f query='{
  user(login: "'$USER'") {
    contributionsCollection {
      totalCommitContributions
      restrictedContributionsCount
      totalPullRequestContributions
      totalIssueContributions
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            weekday
          }
        }
      }
    }
    repositories(first: 1, ownerAffiliations: OWNER) { totalCount }
    followers { totalCount }
  }
}' | jq '{
  totalCommits: (.data.user.contributionsCollection.totalCommitContributions + .data.user.contributionsCollection.restrictedContributionsCount),
  totalContributions: .data.user.contributionsCollection.contributionCalendar.totalContributions,
  totalPRs: .data.user.contributionsCollection.totalPullRequestContributions,
  totalIssues: .data.user.contributionsCollection.totalIssueContributions,
  totalRepos: .data.user.repositories.totalCount,
  followers: .data.user.followers.totalCount,
  calendar: [.data.user.contributionsCollection.contributionCalendar.weeks[].contributionDays[]],
  updatedAt: (now | strftime("%Y-%m-%dT%H:%M:%SZ"))
}' > "$OUT"

echo "Wrote stats to $OUT"
