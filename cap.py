import win32com.client

def capture_video():
    graph_builder = win32com.client.Dispatch("DirectShow.FilterGraph")
    graph_builder.LoadFile("caminho_para_o_arquivo.grf")

    # Obtenha o filtro de captura de vídeo
    video_capture_filter = graph_builder.FindFilterByName("Video Capture Source")

    # Inicie a captura de vídeo
    control = graph_builder.QueryInterface(win32com.client.CLSID_VideoControl)
    control.Run()

    # Espere por algum tempo (você pode querer substituir isso por um loop ou outra lógica de captura)
    input("Pressione Enter para parar a captura de vídeo")

    # Pare a captura de vídeo
    control.Stop()

if __name__ == "__main__":
    capture_video()
