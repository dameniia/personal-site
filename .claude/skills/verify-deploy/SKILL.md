---
name: verify-deploy
description: Use after merging/pushing to main, or when a Hostinger deploy was green but the live site looks unchanged or wrong. Checks the run log, the FTP folder, the CDN cache and the live pages.
---

# Verify a Hostinger deploy (adameniia.com)

A green GitHub run does NOT mean the site changed. Check in this order:

1. **Run log** — `gh run view <id> --log | grep -E "Server Files|Local Files|first publish|Upload:|Error:"`
   - `Server Files: 0` / "first publish" when it isn't the first = wrong folder (FTP home is not the web root; `server-dir` must be `/domains/adameniia.com/public_html/`).
   - `ECONNRESET (data socket)` = transient, `gh run rerun <id>`.
   - `530 Login incorrect` = bad `FTP_USERNAME`/`FTP_PASSWORD`. `ENOTFOUND` = bad `FTP_SERVER` (bare IP, no `ftp://`).
2. **Secrets** — `cd /Users/andreidameniia/Developer/personal-site && gh secret list` (check timestamps; `gh` acts on the current repo).
3. **Live content, cache-busted** — `curl -s "https://adameniia.com/?x=$RANDOM" | grep -oE "/assets/index-[A-Za-z0-9_-]+\.js"` and compare with `ls dist/assets` after `pnpm build`.
4. **CDN** — `curl -sI https://adameniia.com/ | grep -iE "cache|age|x-hcdn"`. If the plain URL differs from the `?x=` one, the CDN is stale: purge in hPanel (Websites → Performance → Cache Manager).
5. **Redirects/routes** — `curl -sI https://adameniia.com/noplan` → 301 to https://no-plan.app/; `/`, `/gallery`, `/patch-notes` → 200.

If folders must be inspected, use a throwaway branch with a read-only workflow running `curl --list-only ftp://…` against the FTP root, then delete the branch.
