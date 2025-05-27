@echo off
cd /d "%~dp0"
start http://localhost:8000
echo Quiz Zone is running at http://localhost:8000
echo Press Ctrl+C to stop the server
python -m http.server