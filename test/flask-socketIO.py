from flask import Flask, render_template
from flask_socketio import SocketIO, send
import csv

app = Flask(__name__)
app.config['SECRET_KEY'] = "secret"
socketio = SocketIO(app, cors_allowed_origins = '*')

@app.route('/')
def main():
    return render_template('socketIO.html')

@socketio.on('message')
def handleMessage(msg):
    print('Message: ' + msg)
    socketio.send(msg, broadcast=True)
    
if __name__ == '__main__':
    socketio.run(app)

