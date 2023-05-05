from app import app
from flask import render_template

# This is for rendering the home page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/enterprise')
def enterprise():
    return render_template('enterprise.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/workspaces')
def workspaces():
    return render_template('workspaces.html')