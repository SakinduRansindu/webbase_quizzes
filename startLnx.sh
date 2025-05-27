echo "Starting Quiz Zone server..."
python3 -m http.server 8080 &
echo "Quiz Zone is running at https://8080-$WEB_HOST"
echo "Press Ctrl+C to stop the server"