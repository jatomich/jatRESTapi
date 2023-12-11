from flask import jsonify, current_app as app, url_for
import pandas as pd

@app.route('/')
@app.route('/api')
def home():
    return jsonify({'message': {'first': 'Hello', 'second': 'World'}})


@app.route('/api/v1/movies')
def apeye():
    return jsonify({'movies': [{'title': 'The Shawshank Redemption', 'year': '1994', 'director': 'Frank Darabont'}]})


@app.route('/api/v1/netflix')
def netflix():
    df = pd.read_csv(url_for('static', filename='input/netflix_ss.csv'))
    return_data = {'data': [record for record in df.head().to_dict(orient='records')]}
    print(return_data)
    return jsonify(return_data)