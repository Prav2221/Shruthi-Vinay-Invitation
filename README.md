# Shruthi & Vinay — Wedding Invitation

A responsive React + Vite wedding invitation website.

## Run locally
1. Install Node.js 18 or newer.
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL shown by Vite.

## Music
Add a royalty-free or personally owned celebrative Indian instrumental MP3 named
`wedding-music.mp3` inside the `public/` folder. Guests can tap **Play Music**;
mobile browsers require this tap before audio can start.

## Venue directions
The Get Directions button opens Google Maps with the Chandrodaya Convention Center
destination pin at Dairy Circle, Bannerghatta Road, Bengaluru 560029. Please test
the pin once before sharing the invitation publicly.

## Deploy on Vercel
1. Create a GitHub repository and upload the project files (not the ZIP itself).
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
5. Click **Deploy**. Vercel will provide a public URL.

The included `vercel.json` supports SPA routing.
