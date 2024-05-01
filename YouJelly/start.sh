# Start commands
# Open two terminal screens
# Launches API and React

osascript -e 'tell app "Terminal" 
    do script "cd '$(pwd)/API/' && dotnet watch --no-hot-reload"
    do script "cd '$(pwd)/client-app/' && npm start"
end tell'