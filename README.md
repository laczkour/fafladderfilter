## Forged Alliance Forever Ladder filtering tool

## Step 0.
  Download the project<br>
  Install NodeJS<br>
  Install NPM<br>
  run 'npm install' in the project directory

## Step 1. 
  Open in your browser the following address and copy it's content to raw.json :<br> https://papi.faforever.com/leaderboards/1v1?page[size]=5000&page[number]=1&filter[is_active]=true

## Step 2. 
  node filter_by_playedgames.js

## Step 3.
  node filter_by_recentlyplayed.js<br>
  This step will get each players ladder history one-by-one, and filter out who have not played recently
## Step 4. 
  node modify_filtered_final.js<br>
  This step will create the filtered final.csv which was used to create the FAF Ladder spreadsheet<br>
  https://docs.google.com/spreadsheets/d/12vWYMn3aZc89gwM--jMX_MfneUg3ueRRLYBTRrYTA3U/edit?usp=sharing
