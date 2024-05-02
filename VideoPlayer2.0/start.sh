# Start commands
# Open two terminal screens
# Launches API and React

osascript -e 'tell app "Terminal" 
    do script "cd /Users/svp/Documents/Projects/CS460/dotnet_react/VideoPlayer2.0/API && dotnet watch --no-hot-reload"
    do script "cd /Users/svp/Documents/Projects/CS460/dotnet_react/VideoPlayer2.0/client-app && npm start"
end tell'