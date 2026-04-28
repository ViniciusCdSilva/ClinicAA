import webview
import os

def start_app():
    # Caminho absoluto para o index.html do build React
    build_index = os.path.abspath(os.path.join(os.path.dirname(__file__), "../frontend/build/index.html"))

    if not os.path.exists(build_index):
        raise FileNotFoundError("⚠️ O build do React não foi encontrado. Rode 'npm run build' dentro de frontend/.")

    # Cria janela apontando para o arquivo local
    window = webview.create_window("ClinicAA", build_index, width=1200, height=800)
    webview.start()

if __name__ == "__main__":
    start_app()