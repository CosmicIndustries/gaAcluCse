import { readdirSync } from 'fs'
import { join }        from 'path'

export default function handler(req, res) {
  // read all files in /public
  const dir = join(process.cwd(), 'public')
  let files = []
  try {
    files = readdirSync(dir).filter(f => f !== '.DS_Store')
  } catch (e) {
    return res.status(500).send('Could not read directory')
  }

  // build a simple HTML
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Directory Listing</title>
    <style>
      body { font-family: sans-serif; padding: 1em; }
      ul { list-style: none; padding: 0; }
      li { margin: .5em 0; }
      a { color: #036; text-decoration: none; }
      a:hover { text-decoration: underline; }
    </style>
  </head>
  <body>
    <h1>Files in “${req.headers.host}${req.url}”</h1>
    <ul>`
  
  for (const f of files) {
    html += `\n    <li><a href="/${encodeURIComponent(f)}">${f}</a></li>`
  }
  
  html += `
    </ul>
  </body>
  </html>`

  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(html)
}
