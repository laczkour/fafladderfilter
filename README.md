## Forged Alliance Forever Ladder filtering tool

## Step 0.
  Download the project
  Install NodeJS
  Install NPM
  run 'npm install' in the project directory

## Step 1. 
  Open in your browser the following address and copy it's content to raw.json : https://papi.faforever.com/leaderboards/1v1?page[size]=5000&page[number]=1&filter[is_active]=true

## Step 2. 
  node filter_by_playedgames.js

## Step 3.
  node filter_by_recentlyplayed.js
  This step will get each players ladder history one-by-one, and filter out who have not played recently
## Step 4. 
  node modify_filtered_final.js
  This step will create the filtered final.csv which was used to create the FAF Ladder spreadsheet
