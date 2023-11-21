# jatAPI.py

from flask import jsonify
from flask_api import FlaskAPI

def create_app():
    app = FlaskAPI(__name__)

    @app.route('/api/data', methods=['GET'])
    def get_data():
        data = {"key": "value"}  # Replace with your actual data
        return jsonify(data), 200

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)