# wc-domclob57 — root-me ch57 DOM Clobbering exfil stage

The renderer srcdoc CSP is `default-src 'self' 'unsafe-inline'`: the clobbered `<script src>` must be same-origin.
The challenge exposes `GET /callback/<anything>` which echoes the path (text/plain) -> the JS rides in the URL path
and is served same-origin. Final payload embeds the whole exfil snippet as the callback path.
