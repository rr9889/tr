from flask import Flask, jsonify, send_from_directory
import os

app = Flask(__name__)

# Route to list HTML files
@app.route('/api/files', methods=['GET'])
def list_files():
    directory = 'pages'
    files = [f for f in os.listdir(directory) if f.endswith('.html')]
    return jsonify(files)

# Route to serve HTML files
@app.route('/')
def serve_html():
    return send_from_directory('pages', 'lit.html')

# Route to serve HTML files from subdirectory
@app.route('/pages/<path:filename>')
def serve_file(filename):
    return send_from_directory('pages', filename)

# Route to serve CSS files
@app.route('/css/<path:filename>')
def serve_css(filename):
    return send_from_directory('css', filename)

# Route to serve files from pages/litshit directory
@app.route('/pages/litshit/<path:filename>')
def serve_litshit_file(filename):
    return send_from_directory('pages/litshit', filename)

if __name__ == '__main__':
    app.run(debug=True)
