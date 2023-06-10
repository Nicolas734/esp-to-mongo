import requests
import json

URL_BASE = "https://esp-to-mongo.vercel.app/"

class TestApiCrudEstacao:

    def test_rota_default(self):
        response = requests.get(URL_BASE + "/")
        assert response.status_code == 200
    
    def test_excluir_todos_registros(self):
        response = requests.delete(URL_BASE + "/excluir-todos")
        assert response.status_code == 200

    def test_cadastro_medida(self):
        # JSON com as medida
        data = {
            "uid":"123456",
            "temp":100,
            "unx":"1686410557"
            }
        headers = {"Content-Type": "application/json"}

        # Post com os dados do JSON
        response = requests.post(URL_BASE + "/cadastrar", json.dumps(data), headers=headers)         
        
        # Verificação dos "Asserts"
        assert response.status_code == 200
        assert response.json()[0]["uid"] == "123456"
        assert response.json()[0]["temp"] == 100
        assert response.json()[0]["unx"] == "1686410557"

    def test_cadastro_multiplo(self):
        data = [
            {
            "uid":"123456",
            "temp":100,
            "unx":"1686410557"
            },
            {
            "uid":"123456",
            "temp":101,
            "unx":"1686410557"
            }
        ]
        headers = {"Content-Type": "application/json"}
        response = requests.post(URL_BASE + "/cadastrar-multiplos", json.dumps(data), headers=headers) 
        assert response.status_code == 200
        assert response.json()["ops"][0]["uid"] == "123456" 
        assert response.json()["ops"][0]["temp"] == 100
        assert response.json()["ops"][0]["unx"] == "1686410557"
        assert response.json()["ops"][1]["uid"] == "123456" 
        assert response.json()["ops"][1]["temp"] == 101
        assert response.json()["ops"][1]["unx"] == "1686410557"

    def test_buscar_todas_estacoes(self):
        response = requests.get(URL_BASE + "/buscar")
        assert response.status_code == 200

