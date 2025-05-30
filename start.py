#!/usr/bin/env python3
"""
Quiz Zone - Cross-platform startup script
Starts a local HTTP server and opens the application in the default browser
"""

import os
import sys
import time
import threading
import webbrowser
import platform
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

# Configuration
DEFAULT_PORT = 8000
DEFAULT_HOST = 'localhost'

class QuizZoneHTTPRequestHandler(SimpleHTTPRequestHandler):
    """Custom HTTP request handler with improved logging"""
    
    def log_message(self, format, *args):
        """Override to provide cleaner log messages"""
        print(f"[{time.strftime('%H:%M:%S')}] {format % args}")
    
    def end_headers(self):
        """Add security headers"""
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def find_available_port(start_port=DEFAULT_PORT, max_attempts=10):
    """Find an available port starting from the given port"""
    import socket
    
    for port in range(start_port, start_port + max_attempts):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind((DEFAULT_HOST, port))
                return port
        except OSError:
            continue
    
    return None

def open_browser(url, delay=2):
    """Open the URL in the default browser after a delay"""
    def _open():
        time.sleep(delay)
        try:
            webbrowser.open(url)
            print(f"✓ Opened {url} in your default browser")
        except Exception as e:
            print(f"⚠ Could not open browser automatically: {e}")
            print(f"  Please manually open: {url}")
    
    thread = threading.Thread(target=_open, daemon=True)
    thread.start()

def parse_arguments():
    """Simple argument parsing"""
    args = {
        'port': None,
        'host': DEFAULT_HOST,
        'no_browser': False,
        'help': False
    }
    
    i = 1
    while i < len(sys.argv):
        arg = sys.argv[i]
        
        if arg in ['-h', '--help']:
            args['help'] = True
        elif arg in ['-p', '--port']:
            if i + 1 < len(sys.argv):
                try:
                    args['port'] = int(sys.argv[i + 1])
                    i += 1
                except ValueError:
                    print(f"Error: Invalid port number '{sys.argv[i + 1]}'")
                    sys.exit(1)
            else:
                print("Error: --port requires a port number")
                sys.exit(1)
        elif arg == '--host':
            if i + 1 < len(sys.argv):
                args['host'] = sys.argv[i + 1]
                i += 1
            else:
                print("Error: --host requires a host address")
                sys.exit(1)
        elif arg == '--no-browser':
            args['no_browser'] = True
        else:
            print(f"Error: Unknown argument '{arg}'")
            print("Use --help for usage information")
            sys.exit(1)
        
        i += 1
    
    return args

def show_help():
    """Show usage information"""
    print("""
Quiz Zone Startup Script

Usage:
    python start.py [options]

Options:
    -p, --port PORT     Specify port number (default: 8000)
    --host HOST         Specify host address (default: localhost)
    --no-browser        Don't open browser automatically
    -h, --help          Show this help message

Examples:
    python start.py                    # Start on default port 8000
    python start.py -p 3000           # Start on port 3000
    python start.py --host 0.0.0.0    # Allow external connections
    python start.py --no-browser      # Start without opening browser
""")

def start_server(host=DEFAULT_HOST, port=None, open_browser_flag=True):
    """Start the HTTP server"""
    # Change to the script directory
    script_dir = Path(__file__).parent.absolute()
    os.chdir(script_dir)
    
    # Find available port
    if port is None:
        port = find_available_port()
        if port is None:
            print(f"❌ Could not find an available port starting from {DEFAULT_PORT}")
            sys.exit(1)
    
    # Create server
    try:
        server = HTTPServer((host, port), QuizZoneHTTPRequestHandler)
        url = f"http://{host}:{port}"
        
        print("🚀 Starting Quiz Zone Server...")
        print(f"📁 Serving files from: {script_dir}")
        print(f"🌐 Server running at: {url}")
        print(f"💻 Platform: {platform.system()} {platform.release()}")
        print("=" * 50)
        
        # Open browser automatically if requested
        if open_browser_flag:
            open_browser(url)
        
        print(f"✓ Quiz Zone is now running!")
        print(f"  Access your quiz at: {url}")
        print(f"  Press Ctrl+C to stop the server")
        print("=" * 50)
        
        # Start server
        server.serve_forever()
        
    except KeyboardInterrupt:
        print("\n🛑 Shutting down server...")
        server.shutdown()
        print("✓ Server stopped successfully")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {port} is already in use")
            print("   Try a different port or stop the existing server")
        else:
            print(f"❌ Server error: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        sys.exit(1)

def main():
    """Main function"""
    args = parse_arguments()
    
    if args['help']:
        show_help()
        return
    
    # Start the server
    start_server(
        host=args['host'], 
        port=args['port'], 
        open_browser_flag=not args['no_browser']
    )

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n👋 Goodbye!")
        sys.exit(0)
