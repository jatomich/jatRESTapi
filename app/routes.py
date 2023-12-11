from flask import jsonify, current_app as app, url_for
import json
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
    df = df.dropna().sort_values(by=['type', 'title']).reset_index(drop=False).copy()
    return_data = {'data': [record for record in df.to_dict(orient='records')]}
    print(return_data)
    return jsonify(return_data)


@app.route('/api/v1/netflix/<int:index>', methods=['GET'])
def netflix_item(index):
    df = pd.read_csv(url_for('static', filename='input/netflix_ss.csv'))
    item = df.iloc[index].to_dict()
    return jsonify(item)