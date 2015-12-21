from flask import Flask
from flask import render_template

import json
import datetime

app = Flask(__name__)
data = json.load(open('data.json'))


@app.route('/')
def home():
    return render_template('home.html', data=data)


@app.context_processor
def replace_new_line_with_break():
    def new_line_break(text):
        return text.replace('\n', '<br/>')
    return dict(new_line_break=new_line_break)


@app.context_processor
def current_date():
    # Generally speaking, out of laziness to update the year every year
    return dict(current_date=lambda: datetime.datetime.now())


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
