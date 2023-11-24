from flask import jsonify, current_app as app

@app.route('/')
@app.route('/index')
def index():
    return jsonify({'message': {'first': 'Hello', 'second': 'World'}})


@app.route('/api/v1/movies')
def apeye():
    return jsonify({'message': {'title': 'The Shawshank Redemption', 'year': '1994', 'director': 'Frank Darabont'}})